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

import {
  ReaderFactory,
  ReadTreeResponse,
  SearchResponse,
  UrlReader,
} from './types';

import {
  // AwsS3IntegrationConfig,
  readAwsS3IntegrationConfig,
} from '@backstage/integration';

export class AwsS3UrlReader implements UrlReader {
  static factory: ReaderFactory = ({ config, logger }) => {
    if (!config.has('integrations.awsS3')) {
      return [];
    }
    const awsS3Config = readAwsS3IntegrationConfig(
      config.getConfig('integrations.awsS3'),
    );
    // this is where gcsUrlReader declares storage: Storage
    if (!awsS3Config.accessKeyId || !awsS3Config.secretAccessKey) {
      logger.info(
        'awsS3 credentials not found in config. Using default credentials provider.',
      );
    }
    return [];
  };

  async read(): Promise<Buffer> {
    throw new Error('GcsUrlReader does not implement readTree');
  }
  async readTree(): Promise<ReadTreeResponse> {
    throw new Error('GcsUrlReader does not implement readTree');
  }

  async search(): Promise<SearchResponse> {
    throw new Error('GcsUrlReader does not implement search');
  }
}
