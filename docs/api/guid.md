# guid 全局唯一标识符生成工具

## 函数列表

### guid(length?, firstU?, radix?) => string

生成全局唯一标识符，可用于元素的 id 或 class 名等需要唯一字符串的场景。

**参数**

| 参数名 | 类型           | 必填 | 默认值 | 说明                                       |
| ------ | -------------- | ---- | ------ | ------------------------------------------ |
| length | number \| null | 否   | 32     | guid 的长度，传 null 则按 rfc4122 标准生成 |
| firstU | boolean        | 否   | true   | 首字母是否为"u"，确保可用作 id 或 class    |
| radix  | number         | 否   | 62     | 生成的基数，决定可用字符范围               |

**返回值**

| 类型   | 说明                 |
| ------ | -------------------- |
| string | 全局唯一的随机字符串 |

**示例**

```typescript
import { guid } from "@hy-app/ui";

const elId = guid(20);
const elClass = guid();

console.log(elId); // 20位随机字符串
console.log(elClass); // 32位随机字符串
```
