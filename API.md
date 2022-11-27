# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountLogs <a name="AccountLogs" id="@cysense/aws-cw-alarms.AccountLogs"></a>

#### Initializers <a name="Initializers" id="@cysense/aws-cw-alarms.AccountLogs.Initializer"></a>

```typescript
import { AccountLogs } from '@cysense/aws-cw-alarms'

new AccountLogs(scope: Stack, id: string, props?: AccountLogsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cysense/aws-cw-alarms.AccountLogs.Initializer.parameter.scope">scope</a></code> | <code>aws-cdk-lib.Stack</code> | *No description.* |
| <code><a href="#@cysense/aws-cw-alarms.AccountLogs.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cysense/aws-cw-alarms.AccountLogs.Initializer.parameter.props">props</a></code> | <code><a href="#@cysense/aws-cw-alarms.AccountLogsProps">AccountLogsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cysense/aws-cw-alarms.AccountLogs.Initializer.parameter.scope"></a>

- *Type:* aws-cdk-lib.Stack

---

##### `id`<sup>Required</sup> <a name="id" id="@cysense/aws-cw-alarms.AccountLogs.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@cysense/aws-cw-alarms.AccountLogs.Initializer.parameter.props"></a>

- *Type:* <a href="#@cysense/aws-cw-alarms.AccountLogsProps">AccountLogsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cysense/aws-cw-alarms.AccountLogs.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@cysense/aws-cw-alarms.AccountLogs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cysense/aws-cw-alarms.AccountLogs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cysense/aws-cw-alarms.AccountLogs.isConstruct"></a>

```typescript
import { AccountLogs } from '@cysense/aws-cw-alarms'

AccountLogs.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cysense/aws-cw-alarms.AccountLogs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cysense/aws-cw-alarms.AccountLogs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cysense/aws-cw-alarms.AccountLogs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### AccountLogsProps <a name="AccountLogsProps" id="@cysense/aws-cw-alarms.AccountLogsProps"></a>

#### Initializer <a name="Initializer" id="@cysense/aws-cw-alarms.AccountLogsProps.Initializer"></a>

```typescript
import { AccountLogsProps } from '@cysense/aws-cw-alarms'

const accountLogsProps: AccountLogsProps = { ... }
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

---

##### `alarmbucketName`<sup>Optional</sup> <a name="alarmbucketName" id="@cysense/aws-cw-alarms.AccountLogsProps.property.alarmbucketName"></a>

```typescript
public readonly alarmbucketName: string;
```

- *Type:* string

An SNS topic to send alerts to when an alarm is triggered.

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cysense/aws-cw-alarms.AccountLogsProps.property.alarms"></a>

```typescript
public readonly alarms: IAlarms;
```

- *Type:* <a href="#@cysense/aws-cw-alarms.IAlarms">IAlarms</a>
- *Default:* Alarms

A JSON Object of the filters for the events that you want to alert on.

---

##### `customEncryptionKey`<sup>Optional</sup> <a name="customEncryptionKey" id="@cysense/aws-cw-alarms.AccountLogsProps.property.customEncryptionKey"></a>

```typescript
public readonly customEncryptionKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key
- *Default:* an encryption key will automatically be created

The KMS key used to encrypt the cloudtrail logs.

---

##### `destinationTopic`<sup>Optional</sup> <a name="destinationTopic" id="@cysense/aws-cw-alarms.AccountLogsProps.property.destinationTopic"></a>

```typescript
public readonly destinationTopic: Topic;
```

- *Type:* aws-cdk-lib.aws_sns.Topic

An SNS topic to send alerts to when an alarm is triggered.

---

##### `enableLambdaDataLogs`<sup>Optional</sup> <a name="enableLambdaDataLogs" id="@cysense/aws-cw-alarms.AccountLogsProps.property.enableLambdaDataLogs"></a>

```typescript
public readonly enableLambdaDataLogs: boolean;
```

- *Type:* boolean
- *Default:* true

Whether lambda Data logs should be captured in the cloudtrail.

---

##### `enableS3DataLogs`<sup>Optional</sup> <a name="enableS3DataLogs" id="@cysense/aws-cw-alarms.AccountLogsProps.property.enableS3DataLogs"></a>

```typescript
public readonly enableS3DataLogs: boolean;
```

- *Type:* boolean
- *Default:* true

Whether S3 Data logs should be captured in the cloudtrail.

---

##### `logGroupName`<sup>Optional</sup> <a name="logGroupName" id="@cysense/aws-cw-alarms.AccountLogsProps.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string
- *Default:* CloudTrail/logs

The name for the cloudtrail log group.

---

##### `retention`<sup>Optional</sup> <a name="retention" id="@cysense/aws-cw-alarms.AccountLogsProps.property.retention"></a>

```typescript
public readonly retention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* 10 years

The retention period for logs.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IAlarms <a name="IAlarms" id="@cysense/aws-cw-alarms.IAlarms"></a>

- *Implemented By:* <a href="#@cysense/aws-cw-alarms.IAlarms">IAlarms</a>



