# AWS Cloudwatch Alarms

`aws-cw-alarms` is a contstruct used to quickly and easily implement a number of security best practices within your AWS account. Specifically, the construct will do the following:
1) Setup an AWS cloudtrail to log AWS API calls
2) Setup a cloudwatch group and an S3 bucket as destinations for the logs
3) Configure 14 cloudwatch alarms on the logs and create an alert if any of the alarms are triggered

The construct can be used to fulfill the following requirements within the CIS AWS Foundations Benchmark v1.2.0:
* [2.2 – Ensure CloudTrail log file validation is enabled](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html#securityhub-cis-controls-2.2)
* [2.3 – Ensure the S3 bucket used to store CloudTrail logs is not publicly accessible](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html#securityhub-cis-controls-2.3)
* [2.4 – Ensure CloudTrail trails are integrated with Amazon CloudWatch Logs](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html#securityhub-cis-controls-2.4)
* [2.7 – Ensure CloudTrail logs are encrypted at rest using AWS KMS keys](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html#securityhub-cis-controls-2.7)
* [3.1 – Ensure a log metric filter and alarm exist for unauthorized API calls](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html#securityhub-cis-controls-3.1)
* [3.2 – Ensure a log metric filter and alarm exist for AWS Management Console sign-in without MFA](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html#securityhub-cis-controls-3.2)
* [3.3 – Ensure a log metric filter and alarm exist for usage of 'root' account](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html#securityhub-cis-controls-3.3)
* [3.4 – Ensure a log metric filter and alarm exist for IAM policy changes](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html#securityhub-cis-controls-3.4)
* [3.5 – Ensure a log metric filter and alarm exist for CloudTrail configuration changes](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html#securityhub-cis-controls-3.5)
* [3.6 – Ensure a log metric filter and alarm exist for AWS Management Console authentication failures](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html#securityhub-cis-controls-3.6)
* [3.7 – Ensure a log metric filter and alarm exist for disabling or scheduled deletion of customer managed keys](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html#securityhub-cis-controls-3.7)
* [3.8 – Ensure a log metric filter and alarm exist for S3 bucket policy changes](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html#securityhub-cis-controls-3.8)
* [3.9 – Ensure a log metric filter and alarm exist for AWS Config configuration changes](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html#securityhub-cis-controls-3.9)
* [3.10 – Ensure a log metric filter and alarm exist for security group changes](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html#securityhub-cis-controls-3.10)
* [3.11 – Ensure a log metric filter and alarm exist for changes to Network Access Control Lists (NACL)](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html#securityhub-cis-controls-3.11)
* [3.12 – Ensure a log metric filter and alarm exist for changes to network gateways](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html#securityhub-cis-controls-3.12)
* [3.13 – Ensure a log metric filter and alarm exist for route table changes](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html#securityhub-cis-controls-3.13)
* [3.14 – Ensure a log metric filter and alarm exist for VPC changes](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html#securityhub-cis-controls-3.14)

## Usage

After installing the `aws-cw-alarms` package it can be used as follows:

```typescript
import { AccountLogs } from '@cysense/aws-cw-alarms'

new AccountLogs(scope: Stack, id: string, props?: AccountLogsProps)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cysense/aws-cw-alarms.AccountLogsProps.property.alarmbucketName">alarmbucketName</a></code> | <code>string</code> | An SNS topic to send alerts to when an alarm is triggered. |
| <code><a href="#@cysense/aws-cw-alarms.AccountLogsProps.property.alarms">alarms</a></code> | <code><a href="#@cysense/aws-cw-alarms.IAlarms">IAlarms</a></code> | A JSON Object of the filters for the events that you want to alert on. |
| <code><a href="#@cysense/aws-cw-alarms.AccountLogsProps.property.customEncryptionKey">customEncryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | The KMS key used to encrypt the cloudtrail logs. |
| <code><a href="#@cysense/aws-cw-alarms.AccountLogsProps.property.destinationTopic">destinationTopic</a></code> | <code>aws-cdk-lib.aws_sns.Topic</code> | An SNS topic to send alerts to when an alarm is triggered. |
| <code><a href="#@cysense/aws-cw-alarms.AccountLogsProps.property.enableLambdaDataLogs">enableLambdaDataLogs</a></code> | <code>boolean</code> | Whether lambda Data logs should be captured in the cloudtrail. |
| <code><a href="#@cysense/aws-cw-alarms.AccountLogsProps.property.enableS3DataLogs">enableS3DataLogs</a></code> | <code>boolean</code> | Whether S3 Data logs should be captured in the cloudtrail. |
| <code><a href="#@cysense/aws-cw-alarms.AccountLogsProps.property.logGroupName">logGroupName</a></code> | <code>string</code> | The name for the cloudtrail log group. |
| <code><a href="#@cysense/aws-cw-alarms.AccountLogsProps.property.retention">retention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The retention period for logs. |

## Adding additional alarms

Additional alarms can be added by creating a custom `Alarms` object and passing the object to the construct.