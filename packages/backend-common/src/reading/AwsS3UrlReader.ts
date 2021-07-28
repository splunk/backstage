/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import aws, { Credentials, S3 } from 'aws-sdk';
import {
  ReaderFactory,
  ReadTreeResponse,
  ReadTreeResponseFactory,
  ReadUrlOptions,
  ReadUrlResponse,
  SearchResponse,
  UrlReader,
} from './types';
import getRawBody from 'raw-body';
import { AwsS3Integration, ScmIntegrations } from '@backstage/integration';
import { Readable } from 'stream';

const parseURL = (
  url: string,
): { path: string; bucket: string; region: string } => {
  let { host, pathname } = new URL(url);

  /**
   * Removes the trailing '/' from the pathname to be processed
   * as a parameter by AWS S3 SDK getObject method.
   */
  pathname = pathname.substr(1);

  /**
   * Checks that the given URL is a valid S3 object url.
   * Format of a Valid S3 URL: https://bucket-name.s3.Region.amazonaws.com/keyname
   */
  const validHost = new RegExp(
    /^[a-z\d][a-z\d\.-]{1,61}[a-z\d]\.s3\.[a-z\d-]+\.amazonaws.com$/,
  );
  if (!validHost.test(host)) {
    throw new Error(`not a valid AWS S3 URL: ${url}`);
  }

  const [bucket] = host.split(/\.s3\.[a-z\d-]+\.amazonaws.com/);
  host = host.substring(bucket.length);
  const [, , region, ,] = host.split('.');

  return {
    path: pathname,
    bucket: bucket,
    region: region,
  };
};

export class AwsS3UrlReader implements UrlReader {
  static factory: ReaderFactory = ({ config, logger, treeResponseFactory }) => {
    const integrations = ScmIntegrations.fromConfig(config);

    return integrations.awsS3.list().map(integration => {
      let s3: S3;
      if (
        !integration.config.accessKeyId ||
        !integration.config.secretAccessKey
      ) {
        logger.debug(
          'integrations.awsS3 not found in app config. AWS S3 integration will use default AWS credentials if set in environment.',
        );
        s3 = new S3({});
      } else {
        const creds = new Credentials({
          accessKeyId: integration.config.accessKeyId,
          secretAccessKey: integration.config.secretAccessKey,
        });
        s3 = new S3({
          apiVersion: '2006-03-01',
          credentials: creds,
        });
      }
      const reader = new AwsS3UrlReader(integration, {
        treeResponseFactory,
        s3,
      });
      const predicate = (url: URL) =>
        url.host.endsWith(integration.config.host);
      return { reader, predicate };
    });
  };

  constructor(
    private readonly integration: AwsS3Integration,
    private readonly deps: {
      treeResponseFactory: ReadTreeResponseFactory;
      s3: S3;
    },
  ) {}

  async read(url: string): Promise<Buffer> {
    const response = await this.readUrl(url);
    return response.buffer();
  }

  async readUrl(
    url: string,
    options?: ReadUrlOptions,
  ): Promise<ReadUrlResponse> {
    try {
      const { path, bucket, region } = parseURL(url);
      aws.config.update({ region: region });

      let params;
      if (options?.etag) {
        params = {
          Bucket: bucket,
          Key: path,
          IfNoneMatch: options.etag,
        };
      } else {
        params = {
          Bucket: bucket,
          Key: path,
        };
      }

      const response = this.deps.s3.getObject(params);
      const buffer = await getRawBody(response.createReadStream());
      const etag = (await response.promise()).ETag;

      return {
        buffer: async () => buffer,
        etag: etag,
      };
    } catch (e) {
      throw new Error(`Could not retrieve file from S3: ${e.message}`);
    }
  }

  async readTree(url: string): Promise<ReadTreeResponse> {
    try {
      const { path, bucket, region } = parseURL(url);
      aws.config.update({ region: region });

      let moreKeys = true;
      let awsS3Readables: Readable[] = [];
      let continuationToken = '';

      while (moreKeys) {
        let params;
        if (continuationToken === '') {
          params = {
            Bucket: bucket,
            Prefix: path,
          };
        } else {
          params = {
            Bucket: bucket,
            Prefix: path,
            ContinuationToken: continuationToken,
          };
        }
        const {
          Contents,
          IsTruncated,
          NextContinuationToken,
        } = await this.deps.s3.listObjectsV2(params).promise();

        const responses = await Promise.all(
          (Contents || []).map(({ Key }) => {
            const s3Response = this.deps.s3
              .getObject({ Bucket: bucket, Key: String(Key) })
              .createReadStream();
            Object.defineProperty(s3Response, 'path', {
              value: String(Key),
              writable: false,
            });
            return s3Response;
          }),
        );

        if (IsTruncated) {
          continuationToken = String(NextContinuationToken);
        } else {
          continuationToken = '';
          moreKeys = false;
        }
        awsS3Readables = awsS3Readables.concat(responses);
      }

      return await this.deps.treeResponseFactory.fromReadableArray({
        stream: awsS3Readables,
        etag: '',
      });
    } catch (e) {
      throw new Error(`Could not retrieve file tree from S3: ${e.message}`);
    }
  }

  async search(): Promise<SearchResponse> {
    throw new Error('AwsS3Reader does not implement search');
  }

  toString() {
    const secretAccessKey = this.integration.config.secretAccessKey;
    return `awsS3{host=${this.integration.config.host},authed=${Boolean(
      secretAccessKey,
    )}}`;
  }
}
