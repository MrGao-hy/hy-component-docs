## colorSwitch Color Conversion Tool

## Function List

### rgbToHex(rgb) => string

Convert RGB color values to HEX hexadecimal color values.

**Parameters**

| Parameter Name | Type   | Required | Default | Description                   |
| -------------- | ------ | -------- | ------- | ---------------------------- |
| rgb            | string | Yes      | -       | RGB color value, e.g., `rgb(230, 231, 233)` |

**Return Value**

| Type   | Description               |
| ------ | ------------------ |
| string | HEX hexadecimal color value |

**Example**

```typescript
import { rgbToHex } from '@hy-app/ui';

const rgb = 'rgb(13, 145, 20)';
console.log(rgbToHex(rgb)); // #0D9114
```

---

### hexToRgb(hex) => string

Convert HEX hexadecimal color values to RGB color values.

**Parameters**

| Parameter Name | Type   | Required | Default | Description                   |
| -------------- | ------ | -------- | ------- | ------------------------ |
| hex            | string | Yes      | -       | HEX color value, e.g., `#0afdce` |

**Return Value**

| Type   | Description       |
| ------ | ------------------ |
| string | RGB color value |

**Example**

```typescript
import { hexToRgb } from '@hy-app/ui';

const hex = '#0afdce';
console.log(hexToRgb(hex)); // rgb(10, 253, 206)
```

---

### colorGradient(startColor, endColor, step) => string[]

Calculate equally spaced gradient colors between two colors and return a color array.

**Parameters**

| Parameter Name     | Type   | Required | Default | Description                        |
| ---------- | ------ | -------- | ------- | --------------------------- |
| startColor | string | Yes      | -       | Starting color value, in HEX or RGB format |
| endColor   | string | Yes      | -       | Ending color value, in HEX or RGB format |
| step       | number | Yes      | -       | Equal division value               |

**Return Value**

| Type     | Description       |
| -------- | ------------------ |
| string[] | Gradient color array |

**Example**

```typescript
import { colorGradient } from '@hy-app/ui';

console.log(colorGradient('rgb(250,250,250)', 'rgb(252,252,252)', 3));
// ["#fafafa", "#fafafa", "#fbfbfb"]
```

---

### colorToRgba(color, opacity?) => string

Convert color values to RGBA format, supporting the setting of opacity.

**Parameters**

| Parameter Name  | Type   | Required | Default | Description                    |
| ------- | ------ | -------- | ------- | ----------------------- |
| color   | string | Yes      | -       | Color value, in HEX or RGB format |
| opacity | number | No       | 0.3    | Opacity value (0-1)       |

**Return Value**

| Type   | Description        |
| ------ | ------------------ |
| string | RGBA color value |

**Example**

```typescript
import { colorToRgba } from '@hy-app/ui';

colorToRgba('#000000', 0.35); // rgba(0, 0, 0, 0.35)
colorToRgba('rgb(255, 180, 0)', 0.4); // rgba(255, 180, 0, 0.4)
```