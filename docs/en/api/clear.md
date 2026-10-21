# clearVal Clear Object Values

## Function List

### clearVal(obj) => any

Recursively clears primitive type values in an object, including strings, numbers, booleans, etc.

**Parameters**

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| obj | object \| string \| number \| undefined \| boolean | Yes | - | The value or object to be cleared |

**Return Value**

| Type | Description      |
| ---- | ---------------- |
| any  | The cleared object or value |

**Example**

```typescript
import { clearVal } from '@hy-app/ui';

const obj = {
    name: '我有值',
    is: true,
    num: 100,
};
const newVal = clearVal(obj);
console.log(newVal);
```