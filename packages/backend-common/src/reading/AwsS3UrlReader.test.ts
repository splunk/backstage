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
import { UrlReaderPredicateTuple } from './types';

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

  it('does not create a reader without the awsS3 field', () => {
    const entries = createReader({
      integrations: {},
    });
    expect(entries).toHaveLength(0);
  });

  it('creates a reader with credentials correctly configured', () => {
    const entries = createReader({
      integrations: {
        awsS3: {
          accessKeyId: 'fakekey',
          secretAccessKey: 'fakekey',
        },
      },
    });
    expect(entries).toHaveLength(1);
  });

  it('creates a reader with default credentials provider', () => {
    const entries = createReader({
      integrations: {
        awsS3: {},
      },
    });
    expect(entries).toHaveLength(1);
  });

  describe('predicates', () => {
    const readers = createReader({
      integrations: {
        awsS3: {},
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
});
