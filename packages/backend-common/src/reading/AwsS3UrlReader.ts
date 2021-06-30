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

export class AwsS3UrlReader implements UrlReader {
  static factory: ReaderFactory = ({ config, logger }) => {
    if (!config.has('integrations.awsS3')) {
      return [];
    }
    return [];
    // const awsS3Config =
  };

  async read(url: string): Promise<Buffer> {
    const test = new Buffer('hi');
    return test;
  }
  async readTree(): Promise<ReadTreeResponse> {
    throw new Error('GcsUrlReader does not implement readTree');
  }

  async search(): Promise<SearchResponse> {
    throw new Error('GcsUrlReader does not implement search');
  }
}
