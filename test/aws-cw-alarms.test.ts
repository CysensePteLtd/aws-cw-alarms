import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AccountLogs } from '../src';

describe('AccountLogs', () => {
  it('creates the account logs', () => {
    const stack = new Stack();
    new AccountLogs(stack, 'Account');

    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 14);
  });
},

);