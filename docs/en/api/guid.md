## Guid Global Unique Identifier Generator

## Function List

### guid(length?, firstU?, radix?) => string

Generates a global unique identifier that can be used for scenarios where a unique string is needed, such as element ids or class names.

**Parameters**

| Parameter Name | Type | Required | Default | Description |
| -------------- | -------------- | ---- | ------ | ------------------------------------------ |
| length         | number \| null | No   | 32     | The length of the guid. Pass null to generate according to the rfc4122 standard |
| firstU         | boolean        | No   | true   | Whether the first character is "u", to ensure it can be used as an id or class |
| radix          | number         | No   | 62     | The base to generate, determining the range of available characters |

**Return Value**

| Type   | Description                 |
| ------ | --------------------------- |
| string | A globally unique random string |

**Examples**

```typescript
import { guid } from '@hy-app/ui';

const elId = guid(20);
const elClass = guid();

console.log(elId); // 20-digit random string
console.log(elClass); // 32-digit random string
```
