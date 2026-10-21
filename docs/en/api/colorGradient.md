# colorGradient Color Gradient Utility

## Function List

### colorGradient(startColor?, endColor?, step?) => string[]

Calculates evenly divided gradient colors between two colors and returns an array of colors.

**Parameters**

| Parameter  | Type   | Required | Default | Description                        |
| ---------- | ------ | -------- | ------- | ---------------------------------- |
| startColor | string | No       | -       | Start color, in HEX or RGB format  |
| endColor   | string | No       | -       | End color, in HEX or RGB format    |
| step       | number | No       | -       | Number of gradient steps           |

**Return Value**

| Type     | Description              |
| -------- | ------------------------ |
| string[] | Array of gradient colors |

**Example**

```typescript
import { colorGradient } from '@hy-app/ui';

const colors = colorGradient('#000000', '#ffffff', 10);
console.log(colors);
// ['#000000', '#1c1c1c', '#383838', ..., '#ffffff']
```

---

### hexToRgb(sColor, str?) => string | number[]

Converts a HEX color value to RGB format, with an option to return a string or an array.

**Parameters**

| Parameter | Type    | Required | Default | Description                 |
| --------- | ------- | -------- | ------- | --------------------------- |
| sColor    | string  | Yes      | -       | HEX color value             |
| str       | boolean | No       | true    | Whether to return a string  |

**Return Value**

| Type               | Description                          |
| ------------------ | ------------------------------------ |
| string \| number[] | RGB color value string or array      |

**Example**

```typescript
import { hexToRgb } from '@hy-app/ui';

const rgb = hexToRgb('#2979ff');
console.log(rgb); // 'rgb(41, 121, 255)'

const rgbArray = hexToRgb('#2979ff', false);
console.log(rgbArray); // [41, 121, 255]
```

---

### rgbToHex(rgb) => string

Converts an RGB color value to a HEX hexadecimal color value.

**Parameters**

| Parameter | Type   | Required | Default | Description     |
| --------- | ------ | -------- | ------- | --------------- |
| rgb       | string | Yes      | -       | RGB color value |

**Return Value**

| Type   | Description     |
| ------ | --------------- |
| string | HEX color value |

**Example**

```typescript
import { rgbToHex } from '@hy-app/ui';

const hex = rgbToHex('rgb(41, 121, 255)');
console.log(hex); // '#2979ff'
```