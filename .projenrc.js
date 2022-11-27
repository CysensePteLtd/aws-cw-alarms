const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'cysense',
  authorAddress: 'chad@cysense.io',
  authorOrganization: true,
  cdkVersion: '2.50.0',
  defaultReleaseBranch: 'main',
  majorVersion: 1,
  npmDistTag: 'latest',
  release: true,
  releaseToNpm: true,
  name: 'cysense/aws-cw-alarms',
  description: 'AWS CDK Construct to setup cloud watch alarms within your account using cloudtrail with the recommended best practices.',
  packageName: '@cysense/aws-cw-alarms',
  repositoryUrl: 'https://github.com/CysensePteLtd/aws-cw-alarms.git',
  stability: 'experimental',

  // deps: [], /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [], /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */

});
project.synth();