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
  SearchResponse,
  UrlReader,
  ReadTreeResponseFactory,
} from './types';
import getRawBody from 'raw-body';
import {
  AwsS3IntegrationConfig,
  readAwsS3IntegrationConfig,
} from '@backstage/integration';
import { Readable } from 'stream';

const AMAZON_AWS_HOST = '.amazonaws.com';

const parseURL = (
  url: string,
): { path: string; bucket: string; region: string } => {
  let { host, pathname } = new URL(url);

  pathname = pathname.substr(1);

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
    if (!config.has('integrations.awsS3')) {
      return [];
    }
    const awsS3Config = readAwsS3IntegrationConfig(
      config.getConfig('integrations.awsS3'),
    );
    let s3: S3;
    if (!awsS3Config.accessKeyId || !awsS3Config.secretAccessKey) {
      logger.info(
        'awsS3 credentials not found in config. Using default credentials provider.',
      );
      s3 = new S3({});
    } else {
      const creds = new Credentials({
        accessKeyId: awsS3Config.accessKeyId,
        secretAccessKey: awsS3Config.secretAccessKey,
      });
      s3 = new S3({
        apiVersion: '2006-03-01',
        credentials: creds,
      });
    }
    const reader = new AwsS3UrlReader(awsS3Config, {
      treeResponseFactory,
      s3,
    });
    const predicate = (url: URL) => url.host.endsWith(AMAZON_AWS_HOST);
    return [{ reader, predicate }];
  };

  constructor(
    private readonly integration: AwsS3IntegrationConfig,
    private readonly deps: {
      treeResponseFactory: ReadTreeResponseFactory;
      s3: S3;
    },
  ) {}

  async read(url: string): Promise<Buffer> {
    try {
      const { path, bucket, region } = parseURL(url);
      aws.config.update({ region: region });

      const params = {
        Bucket: bucket,
        Key: path,
      };
      return await getRawBody(
        this.deps.s3.getObject(params).createReadStream(),
      );
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
    const secretAccessKey = this.integration.secretAccessKey;
    return `awsS3{host=${AMAZON_AWS_HOST},authed=${Boolean(secretAccessKey)}}`;
  }
}
