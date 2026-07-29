# colorGradient 颜色渐变工具

## 函数列表

### colorGradient(startColor?, endColor?, step?) => string[]

计算两个颜色之间的等分渐变色，返回颜色数组。

**参数**

| 参数名     | 类型   | 必填 | 默认值 | 说明                      |
| ---------- | ------ | ---- | ------ | ------------------------- |
| startColor | string | 否   | -      | 起始颜色，HEX 或 RGB 格式 |
| endColor   | string | 否   | -      | 结束颜色，HEX 或 RGB 格式 |
| step       | number | 否   | -      | 渐变步数                  |

**返回值**

| 类型     | 说明         |
| -------- | ------------ |
| string[] | 渐变颜色数组 |

**示例**

```typescript
import { colorGradient } from "@hy-app/ui";

const colors = colorGradient("#000000", "#ffffff", 10);
console.log(colors);
// ['#000000', '#1c1c1c', '#383838', ..., '#ffffff']
```

---

### hexToRgb(sColor, str?) => string | number[]

将 HEX 颜色值转换为 RGB 格式，可选择返回字符串或数组。

**参数**

| 参数名    | 类型      | 必填 | 默认值  | 说明      |
|--------|---------|----|------|---------|
| sColor | string  | 是  | -    | HEX 颜色值 |
| str    | boolean | 否  | true | 是否返回字符串 |

**返回值**

| 类型                 | 说明            |
|--------------------|---------------|
| string \| number[] | RGB 颜色值字符串或数组 |

**示例**

```typescript
import { hexToRgb } from "@hy-app/ui";

const rgb = hexToRgb("#2979ff");
console.log(rgb); // 'rgb(41, 121, 255)'

const rgbArray = hexToRgb("#2979ff", false);
console.log(rgbArray); // [41, 121, 255]
```

---

### rgbToHex(rgb) => string

将 RGB 颜色值转换为 HEX 十六进制颜色值。

**参数**

| 参数名 | 类型   | 必填 | 默认值 | 说明       |
| ------ | ------ | ---- | ------ | ---------- |
| rgb    | string | 是   | -      | RGB 颜色值 |

**返回值**

| 类型   | 说明       |
| ------ | ---------- |
| string | HEX 颜色值 |

**示例**

```typescript
import { rgbToHex } from "@hy-app/ui";

const hex = rgbToHex("rgb(41, 121, 255)");
console.log(hex); // '#2979ff'
```
