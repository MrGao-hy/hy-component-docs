## deepClone Deep Clone Tool

## Function List

### deepClone(source) => any

Deeply recursively clones an object or an array; modifications to the cloned object will not affect the original object.

**Parameters**

| Parameter Name | Type          | Required | Default | Description                   |
| -------------- | -------------- | -------- | ------ | ---------------------- |
| source         | object \| any[] | Yes     | -      | The object or array to be deeply cloned |

**Return Value**

| Type | Description                   |
| ---- | ---------------------- |
| any  | The new object or array after deep cloning |

**Example**

```typescript
import { deepClone } from '@hy-app/ui';

const oldObj = {
    name: 'Old Data',
};

const newObj = deepClone(oldObj);
newObj.name = 'New Data';

console.log(oldObj); // { name: "Old Data" }
console.log(newObj); // { name: "New Data" }
```
