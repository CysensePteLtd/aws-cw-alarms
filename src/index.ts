import { aws_cloudtrail, aws_cloudwatch, aws_cloudwatch_actions, aws_iam, aws_kms, aws_logs, aws_s3, aws_sns, RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Alarms } from './alarms';


export interface IAlarms {
  [key: string]: {
    name: string;
    filter: aws_logs.JsonPattern;
  };
}
export interface AccountLogsProps {

  /**
   * The KMS key used to encrypt the cloudtrail logs.
   * @default - an encryption key will automatically be created
   */
  readonly customEncryptionKey?: aws_kms.Key;

  /**
 * The name for the cloudtrail log group.
 * @default CloudTrail/logs
 */
  readonly logGroupName?: string;

  /**
   * Whether S3 Data logs should be captured in the cloudtrail.
   * @default true
   */
  readonly enableS3DataLogs?: boolean;

  /**
 * Whether lambda Data logs should be captured in the cloudtrail.
 * @default true
 */
  readonly enableLambdaDataLogs?: boolean;

  /**
  * The retention period for logs.
  * @default 10 years
  */
  readonly retention?: aws_logs.RetentionDays;

  /**
  * A JSON Object of the filters for the events that you want to alert on.
  * @default Alarms
  */
  readonly alarms?: IAlarms;

  /**
  * An SNS topic to send alerts to when an alarm is triggered.
  */
  readonly destinationTopic?: aws_sns.Topic;
}
export class AccountLogs extends Construct {

  /**
   * Defines an account logs resource. The account logs resource setups cloudtrail, forwards logs to S3 and cloudwatch and creates alerts all aligned with best practices.
   */
  constructor(scope: Construct, id: string, props: AccountLogsProps = {}) {
    super(scope, id);

    const retention = props.retention ?? aws_logs.RetentionDays.TEN_YEARS;
    const s3Datalogs = props.enableS3DataLogs ?? true;
    const lamndaDatalogs = props.enableLambdaDataLogs ?? true;
    const alarms = props.alarms ?? Alarms;

    const encryptionKey = props.customEncryptionKey ?? new aws_kms.Key(this, 'Key', {
      enableKeyRotation: true,
      enabled: true,
    });

    const bucket = new aws_s3.Bucket(this, 'Bucket', {
      encryption: aws_s3.BucketEncryption.KMS,
      blockPublicAccess: aws_s3.BlockPublicAccess.BLOCK_ALL,
      encryptionKey: encryptionKey,
      enforceSSL: true,
    });

    const logGroup = new aws_logs.LogGroup(this, 'LogGroup', {
      logGroupName: 'CloudTrail/logs',
      removalPolicy: RemovalPolicy.RETAIN,
      retention: retention,
    });

    Object.entries(alarms).forEach(([alarmId, alarm]) => {
      const metricFilter = new aws_logs.MetricFilter(this, `${alarmId}-MetricFilter`, {
        logGroup,
        metricNamespace: 'AccountMetrics',
        metricName: alarm.name,
        filterPattern: alarm.filter,
      });

      const cwAlarm = new aws_cloudwatch.Alarm(this, `${alarmId}-Alarm`, {
        metric: metricFilter.metric(),
        alarmName: alarm.name,
        threshold: 0,
        evaluationPeriods: 1,
        treatMissingData: aws_cloudwatch.TreatMissingData.NOT_BREACHING,
        comparisonOperator: aws_cloudwatch.ComparisonOperator.GREATER_THAN_THRESHOLD,
      });

      props.destinationTopic && cwAlarm.addAlarmAction(new aws_cloudwatch_actions.SnsAction(props.destinationTopic));
    });

    const trail = new aws_cloudtrail.Trail(this, 'CloudTrail', {
      sendToCloudWatchLogs: true,
      enableFileValidation: true,
      encryptionKey: encryptionKey,
      cloudWatchLogGroup: logGroup,
      isMultiRegionTrail: true,
      bucket: bucket,
      includeGlobalServiceEvents: true,
    });

    encryptionKey.grantEncrypt(new aws_iam.ServicePrincipal('cloudtrail.amazonaws.com'));

    s3Datalogs && trail.logAllS3DataEvents();
    lamndaDatalogs && trail.logAllLambdaDataEvents();
  }

}