// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(registration) {
  // [START domains_v1beta1_generated_Domains_RetrieveAuthorizationCode_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the `Registration` whose authorization code is being retrieved,
   *  in the format `projects/* /locations/* /registrations/*`.
   */
  // const registration = 'abc123'

  // Imports the Domains library
  const {DomainsClient} = require('@google-cloud/domains').v1beta1;

  // Instantiates a client
  const domainsClient = new DomainsClient();

  async function retrieveAuthorizationCode() {
    // Construct request
    const request = {
      registration,
    };

    // Run request
    const response = await domainsClient.retrieveAuthorizationCode(request);
    console.log(response);
  }

  retrieveAuthorizationCode();
  // [END domains_v1beta1_generated_Domains_RetrieveAuthorizationCode_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
