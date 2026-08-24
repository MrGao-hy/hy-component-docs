# clearVal Clear Object Values

## Function List

### clearVal(obj) => any

Recursively clears the values of basic data types in an object, including strings, numbers, boolean values, etc.

**Parameters**

| Parameter Name | Type        | Required | Default Value | Description |
| --- | ----------- | --- | -------- | ------------ |
| obj | object \| string \| number \| undefined \| boolean | Yes | - | The value or object to be cleared |

**Return Value**

| Type | Description |
| ---- | ----------- |
| any  | The object or value after clearing |

**Example**

```typescript
import { clearVal } from '@hy-app/ui';

const obj = {
    name: 'I have a value',
    is: true,
    num: 100,
};
const newVal = clearVal(obj);
console.log(newVal);
```