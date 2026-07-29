# imageToBase64 图片转 Base64 工具

兼容 APP、H5、小程序。

## 函数列表

### imageToBase64(path) => Promise&lt;string&gt;

将本地图片转换为 Base64 格式，兼容 APP、H5、小程序。

**参数**

| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| path | string | 是 | - | 本地上传图片路径 |

**返回值**

| 类型 | 说明 |
|------|------|
| Promise\<string\> | Base64 格式图片字符串 |

**示例**

```typescript
import { imageToBase64 } from "@hy-app/ui";

const base64 = await imageToBase64('/path/to/image.png');
console.log(base64);
```