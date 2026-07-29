# bytesToSize 字节单位转换工具

## 函数列表

### bytesToSize(bytes) => string

将字节数转换为可读的单位字符串，自动选择合适的单位（b/KB/MB/GB）。

**参数**

| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| bytes | number | 是 | - | 字节大小 |

**返回值**

| 类型 | 说明 |
|------|------|
| string | 转换后的可读单位字符串（b/KB/MB/GB） |

**示例**

```typescript
import { bytesToSize } from "@hy-app/ui";

const num = bytesToSize(1024);
console.log(num); // 1KB
```