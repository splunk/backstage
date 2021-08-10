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
import { ConfigReader, JsonObject } from '@backstage/config';
import { getVoidLogger } from '../logging';
import { DefaultReadTreeResponseFactory } from './tree';
import { AwsS3UrlReader } from './AwsS3UrlReader';
import {
  AwsS3Integration,
  readAwsS3IntegrationConfig,
} from '@backstage/integration';
import { UrlReaderPredicateTuple } from './types';
import AWSMock from 'aws-sdk-mock';
import aws from 'aws-sdk';
import path from 'path';

describe('AwsS3UrlReader', () => {
  const createReader = (config: JsonObject): UrlReaderPredicateTuple[] => {
    return AwsS3UrlReader.factory({
      config: new ConfigReader(config),
      logger: getVoidLogger(),
      treeResponseFactory: DefaultReadTreeResponseFactory.create({
        config: new ConfigReader({}),
      }),
    });
  };

  afterEach(() => {
    AWSMock.restore();
  });

  it('creates a dummy reader without the awsS3 field', () => {
    const entries = createReader({
      integrations: {},
    });

    expect(entries).toHaveLength(1);
  });

  it('creates a reader with credentials correctly configured', () => {
    const awsS3Integrations = [];
    awsS3Integrations.push({
      host: 'amazonaws.com',
      accessKeyId: 'fakekey',
      secretAccessKey: 'fakekey',
    });

    const entries = createReader({
      integrations: {
        awsS3: awsS3Integrations,
      },
    });

    expect(entries).toHaveLength(2);
  });

  it('creates a reader with default credentials provider', () => {
    const awsS3Integrations = [];
    awsS3Integrations.push({
      host: 'amazonaws.com',
    });

    const entries = createReader({
      integrations: {
        awsS3: awsS3Integrations,
      },
    });

    expect(entries).toHaveLength(2);
  });

  describe('predicates', () => {
    const readers = createReader({
      integrations: {
        awsS3: [{}],
      },
    });
    const predicate = readers[0].predicate;

    it('returns true for the correct aws s3 storage host', () => {
      expect(
        predicate(new URL('https://test-bucket.s3.us-east-2.amazonaws.com')),
      ).toBe(true);
    });

    it('returns true for a url with the full path and the correct host', () => {
      expect(
        predicate(
          new URL(
            'https://test-bucket.s3.us-east-2.amazonaws.com/team/service/catalog-info.yaml',
          ),
        ),
      ).toBe(true);
    });

    it('returns false for an incorrect host', () => {
      expect(predicate(new URL('https://amazon.com'))).toBe(false);
    });

    it('returns false for a completely different host', () => {
      expect(predicate(new URL('https://storage.cloud.google.com'))).toBe(
        false,
      );
    });

    it("returns true for a url with a bucket with '.'", () => {
      expect(
        predicate(
          new URL(
            'https://test.bucket.s3.us-east-2.amazonaws.com/team/service/catalog-info.yaml',
          ),
        ),
      ).toBe(true);
    });
  });

  describe('read', () => {
    AWSMock.setSDKInstance(aws);
    AWSMock.mock(
      'S3',
      'getObject',
      Buffer.from(
        require('fs').readFileSync(
          path.resolve(
            'src',
            'reading',
            '__fixtures__',
            'awsS3-mock-object.yaml',
          ),
        ),
      ),
    );
    const s3 = new aws.S3();
    const awsS3UrlReader = new AwsS3UrlReader(
      new AwsS3Integration(
        readAwsS3IntegrationConfig(
          new ConfigReader({
            host: 'amazonaws.com',
            accessKeyId: 'fake-access-key',
            secretAccessKey: 'fake-secret-key',
          }),
        ),
      ),
      s3,
    );

    it('returns contents of an object in a bucket', async () => {
      const response = await awsS3UrlReader.read(
        'https://test-bucket.s3.us-east-2.amazonaws.com/awsS3-mock-object.yaml',
      );
      expect(response.toString()).toBe('site_name: Test\n');
    });

    it('rejects unknown targets', async () => {
      await expect(
        awsS3UrlReader.read(
          'https://test-bucket.s3.us-east-2.NOTamazonaws.com/file.yaml',
        ),
      ).rejects.toThrow(
        Error(
          `Could not retrieve file from S3: not a valid AWS S3 URL: https://test-bucket.s3.us-east-2.NOTamazonaws.com/file.yaml`,
        ),
      );
    });
  });

  describe('readUrl', () => {
    AWSMock.setSDKInstance(aws);

    AWSMock.mock(
      'S3',
      'getObject',
      Buffer.from(
        require('fs').readFileSync(
          path.resolve(
            'src',
            'reading',
            '__fixtures__',
            'awsS3-mock-object.yaml',
          ),
        ),
      ),
    );

    const s3 = new aws.S3();

    const awsS3UrlReader = new AwsS3UrlReader(
      new AwsS3Integration(
        readAwsS3IntegrationConfig(
          new ConfigReader({
            host: 'amazonaws.com',
            accessKeyId: 'fake-access-key',
            secretAccessKey: 'fake-secret-key',
          }),
        ),
      ),
      s3,
    );

    it('returns contents of an object in a bucket', async () => {
      const response = await awsS3UrlReader.readUrl(
        'https://test-bucket.s3.us-east-2.amazonaws.com/awsS3-mock-object.yaml',
      );
      const buffer = await response.buffer();
      expect(buffer.toString()).toBe('site_name: Test\n');
    });

    it('rejects unknown targets', async () => {
      await expect(
        awsS3UrlReader.readUrl(
          'https://test-bucket.s3.us-east-2.NOTamazonaws.com/file.yaml',
        ),
      ).rejects.toThrow(
        Error(
          `Could not retrieve file from S3: not a valid AWS S3 URL: https://test-bucket.s3.us-east-2.NOTamazonaws.com/file.yaml`,
        ),
      );
    });
  });
});
