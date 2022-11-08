import { aws_logs } from 'aws-cdk-lib';


export interface IAlarms {
  [key: string]: {
    name: string;
    filter: aws_logs.JsonPattern;
  };
}

export const Alarms: IAlarms = {
  cis3_3: {
    name: 'Root Account Used',
    filter: aws_logs.FilterPattern.all(
      aws_logs.FilterPattern.stringValue('$.userIdentity.type', '=', 'Root'),
      aws_logs.FilterPattern.notExists('$.userIdentity.invokedBy'),
      aws_logs.FilterPattern.stringValue('$.eventType', '!=', 'AwsServiceEvent'),
    ),
  },
  cis3_10: {
    name: 'Security Group Changed',
    filter: aws_logs.FilterPattern.any(
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'AuthorizeSecurityGroupIngress'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'AuthorizeSecurityGroupEgress'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'RevokeSecurityGroupIngress'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'RevokeSecurityGroupEgress'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'CreateSecurityGroup'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DeleteSecurityGroup'),
    ),
  },
  cis3_11: {
    name: 'NACL Changed',
    filter: aws_logs.FilterPattern.any(
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'CreateNetworkAcl'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'CreateNetworkAclEntry'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DeleteNetworkAcl'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DeleteNetworkAclEntry'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'ReplaceNetworkAclEntry'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'ReplaceNetworkAclAssociation'),
    ),
  },
  cis3_12: {
    name: 'Network Gateway Changed',
    filter: aws_logs.FilterPattern.any(
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'CreateCustomerGateway'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DeleteCustomerGateway'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'AttachInternetGateway'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'CreateInternetGateway'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DeleteInternetGateway'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DetachInternetGateway'),
    ),
  },
  cis3_13: {
    name: 'Route Table Changed',
    filter: aws_logs.FilterPattern.any(
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'CreateRoute'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'CreateRouteTable'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'ReplaceRoute'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'ReplaceRouteTableAssociation'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DeleteRouteTable'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DeleteRoute'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DisassociateRouteTable'),
    ),
  },
  cis3_14: {
    name: 'VPC Changed',
    filter: aws_logs.FilterPattern.any(
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'CreateVpc'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DeleteVpc'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'ModifyVpcAttribute'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'AcceptVpcPeeringConnection'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'CreateVpcPeeringConnection'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'RejectVpcPeeringConnection'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'AttachClassicLinkVpc'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DetachClassicLinkVpc'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DisableVpcClassicLink'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'EnableVpcClassicLink'),
    ),
  },
  cis3_1: {
    name: 'Unathorized API Calls',
    filter: aws_logs.FilterPattern.any(
      aws_logs.FilterPattern.stringValue('$.eventName', '=', '*UnauthorizedOperation'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'AccessDenied'),
    ),
  },
  cis3_2: {
    name: 'Management Console Sign-in without MFA',
    filter: aws_logs.FilterPattern.all(
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'ConsoleLogin'),
      aws_logs.FilterPattern.stringValue('$.additionalEventData.MFAUsed', '!=', 'Yes'),
      aws_logs.FilterPattern.stringValue('$.userIdentity.type', '=', 'IAMUser'),
      aws_logs.FilterPattern.stringValue('$.responseElements.ConsoleLogin', '=', 'Success'),
    ),
  },
  cis3_4: {
    name: 'IAM Policy Changed',
    filter: aws_logs.FilterPattern.any(
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DeleteGroupPolicy'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DeleteRolePolicy'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DeleteUserPolicy'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'PutGroupPolicy'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'PutRolePolicy'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'PutUserPolicy'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'CreatePolicy'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DeletePolicy'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'CreatePolicyVersion'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DeletePolicyVersion'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'AttachRolePolicy'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DetachRolePolicy'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'AttachUserPolicy'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DetachUserPolicy'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'AttachGroupPolicy'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DetachGroupPolicy'),
    ),
  },
  cis3_5: {
    name: 'CloudTail Config Changed',
    filter: aws_logs.FilterPattern.any(
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'CreateTrail'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'UpdateTrail'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DeleteTrail'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'StartLogging'),
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'StopLogging'),
    ),
  },
  cis3_6: {
    name: 'Console Authentication Failures',
    filter: aws_logs.FilterPattern.all(
      aws_logs.FilterPattern.stringValue('$.eventName', '=', 'ConsoleLogin'),
      aws_logs.FilterPattern.stringValue('$.errorMessage', '=', 'Failed authentication'),
    ),
  },
  cis3_7: {
    name: 'CMK Deleted',
    filter: aws_logs.FilterPattern.all(
      aws_logs.FilterPattern.stringValue('$.eventSource', '=', 'kms.amazonaws.com'),
      aws_logs.FilterPattern.any(
        aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DisableKey'),
        aws_logs.FilterPattern.stringValue('$.eventName', '=', 'ScheduleKeyDeletion'),
      ),
    ),
  },
  cis3_8: {
    name: 'S3 Bucket Policy Changed',
    filter: aws_logs.FilterPattern.all(
      aws_logs.FilterPattern.stringValue('$.eventSource', '=', 's3.amazonaws.com'),
      aws_logs.FilterPattern.any(
        aws_logs.FilterPattern.stringValue('$.eventName', '=', 'PutBucketAcl'),
        aws_logs.FilterPattern.stringValue('$.eventName', '=', 'PutBucketPolicy'),
        aws_logs.FilterPattern.stringValue('$.eventName', '=', 'PutBucketCors'),
        aws_logs.FilterPattern.stringValue('$.eventName', '=', 'PutBucketLifecycle'),
        aws_logs.FilterPattern.stringValue('$.eventName', '=', 'PutBucketReplication'),
        aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DeleteBucketPolicy'),
        aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DeleteBucketCors'),
        aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DeleteBucketLifecycle'),
        aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DeleteBucketReplication'),
      ),
    ),
  },
  cis3_9: {
    name: 'Config Changed',
    filter: aws_logs.FilterPattern.all(
      aws_logs.FilterPattern.stringValue('$.eventSource', '=', 'config.amazonaws.com'),
      aws_logs.FilterPattern.any(
        aws_logs.FilterPattern.stringValue('$.eventName', '=', 'StopConfigurationRecorder'),
        aws_logs.FilterPattern.stringValue('$.eventName', '=', 'DeleteDeliveryChannel'),
        aws_logs.FilterPattern.stringValue('$.eventName', '=', 'PutDeliveryChannel'),
        aws_logs.FilterPattern.stringValue('$.eventName', '=', 'PutConfigurationRecorder'),
      ),
    ),
  },
};