# colorSwitch 颜色转换工具

## 函数列表

### rgbToHex(rgb) => string

将 RGB 颜色值转换为 HEX 十六进制颜色值。

**参数**

| 参数名 | 类型   | 必填 | 默认值 | 说明                                |
| ------ | ------ | ---- | ------ | ----------------------------------- |
| rgb    | string | 是   | -      | RGB 颜色值，如 `rgb(230, 231, 233)` |

**返回值**

| 类型   | 说明               |
| ------ | ------------------ |
| string | HEX 十六进制颜色值 |

**示例**

```typescript
import { rgbToHex } from "@hy-app/ui";

const rgb = "rgb(13, 145, 20)";
console.log(rgbToHex(rgb)); // #0D9114
```

---

### hexToRgb(hex) => string

将 HEX 十六进制颜色值转换为 RGB 颜色值。

**参数**

| 参数名 | 类型   | 必填 | 默认值 | 说明                     |
| ------ | ------ | ---- | ------ | ------------------------ |
| hex    | string | 是   | -      | HEX 颜色值，如 `#0afdce` |

**返回值**

| 类型   | 说明       |
| ------ | ---------- |
| string | RGB 颜色值 |

**示例**

```typescript
import { hexToRgb } from "@hy-app/ui";

const hex = "#0afdce";
console.log(hexToRgb(hex)); // rgb(10, 253, 206)
```

---

### colorGradient(startColor, endColor, step) => string[]

计算两个颜色之间的等分渐变色，返回颜色数组。

**参数**

| 参数名     | 类型   | 必填 | 默认值 | 说明                        |
| ---------- | ------ | ---- | ------ | --------------------------- |
| startColor | string | 是   | -      | 开始颜色值，HEX 或 RGB 格式 |
| endColor   | string | 是   | -      | 结束颜色值，HEX 或 RGB 格式 |
| step       | number | 是   | -      | 均分值                      |

**返回值**

| 类型     | 说明       |
| -------- | ---------- |
| string[] | 渐变色数组 |

**示例**

```typescript
import { colorGradient } from "@hy-app/ui";

console.log(colorGradient("rgb(250,250,250)", "rgb(252,252,252)", 3));
// ["#fafafa", "#fafafa", "#fbfbfb"]
```

---

### colorToRgba(color, opacity?) => string

将颜色值转换为 RGBA 格式，支持设置透明度。

**参数**

| 参数名  | 类型   | 必填 | 默认值 | 说明                    |
| ------- | ------ | ---- | ------ | ----------------------- |
| color   | string | 是   | -      | 颜色值，HEX 或 RGB 格式 |
| opacity | number | 否   | 0.3    | 不透明度值（0-1）       |

**返回值**

| 类型   | 说明        |
| ------ | ----------- |
| string | RGBA 颜色值 |

**示例**

```typescript
import { colorToRgba } from "@hy-app/ui";

colorToRgba("#000000", 0.35); // rgba(0, 0, 0, 0.35)
colorToRgba("rgb(255, 180, 0)", 0.4); // rgba(255, 180, 0, 0.4)
```
