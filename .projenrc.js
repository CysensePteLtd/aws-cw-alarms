const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'cysense',
  authorAddress: 'https://www.cysense.io',
  authorOrganization: true,
  cdkVersion: '2.25.0',
  defaultReleaseBranch: 'main',
  name: 'cysense/aws-cw-alarms',
  description: 'AWS CDK Construct to setup cloud watch alarms within your account using cloudtrail with the recommended best practices.',
  packageName: '@cysense/aws-cw-alarms',
  repositoryUrl: 'https://github.com/CysensePteLtd/aws-cw-alarms.git',
  stability: 'experimental',

  deps: ['aws-cdk-lib'], /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: ['aws-cdk'], /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  peerDeps: ['aws-cdk-lib'],
});
project.synth();