## random Random Number Generator Tool

## Function List

### random(min, max) => number

Generates a random integer within a specified range.

**Parameters**

| Parameter Name | Type            | Required | Default Value | Description |
| -------------- | ---------------- | -------- | ------------- | ----------- |
| min            | string \| number | Yes      | -             | Minimum value |
| max            | string \| number | Yes      | -             | Maximum value |

**Return Value**

| Type | Description |
| ---- | ------------ |
| number | A random number between min and max |

**Example**

```typescript
import { random } from '@hy-app/ui';

const val = random(1, 10);
console.log(val); // Random number
```