## bytesToSize Byte-to-Size Conversion Tool

## List of Functions

### bytesToSize(bytes) => string

Converts a byte size to a readable unit string, automatically selecting the appropriate unit (b/KB/MB/GB).

**Parameters**

| Parameter Name | Type   | Required | Default Value | Description     |
| -------------- | ------ | -------- | ------------ | ---------------- |
| bytes          | number | Yes      | -             | Byte size        |

**Return Value**

| Type   | Description                                 |
| ------ | ------------------------------------ |
| string | The converted readable unit string (b/KB/MB/GB) |

**Example**

```typescript
import { bytesToSize } from '@hy-app/ui';

const num = bytesToSize(1024);
console.log(num); // 1KB
```