# random 随机数生成工具

## 函数列表

### random(min, max) => number

生成指定范围内的随机整数。

**参数**

| 参数名 | 类型             | 必填 | 默认值 | 说明   |
| ------ | ---------------- | ---- | ------ | ------ |
| min    | string \| number | 是   | -      | 最小值 |
| max    | string \| number | 是   | -      | 最大值 |

**返回值**

| 类型   | 说明                    |
| ------ | ----------------------- |
| number | min 和 max 之间的随机数 |

**示例**

```typescript
import { random } from '@hy-app/ui';

const val = random(1, 10);
console.log(val); // 随机数
```
