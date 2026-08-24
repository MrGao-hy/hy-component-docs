# imageToBase64 Image to Base64 Tool

Compatibility with APP, H5, and Mini Programs.

## Function List

### imageToBase64(path) => Promise<string>

Converts a local image to Base64 format, compatible with APP, H5, and Mini Programs.

**Parameters**

| Parameter Name | Type    | Required | Default Value | Description             |
| -------------- | ------- | -------- | ------------- | ----------------------- |
| path           | string  | Yes      | -             | Path to the locally uploaded image |

**Return Value**

| Type               | Description              |
| ------------------ | ------------------------ |
| Promise<string>    | Base64 format image string |

**Example**

```typescript
import { imageToBase64 } from '@hy-app/ui';

const base64 = await imageToBase64('/path/to/image.png');
console.log(base64);
```