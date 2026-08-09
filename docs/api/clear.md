# clearVal 清空对象值

## 函数列表

### clearVal(obj) => any

递归清空对象中基本类型的值，包括字符串、数字、布尔值等。

**参数**

| 参数名 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| obj | object \| string \| number \| undefined \| boolean | 是 | - | 需要清空的数值或对象 |

**返回值**

| 类型 | 说明             |
| ---- | ---------------- |
| any  | 清空后的对象或值 |

**示例**

```typescript
import { clearVal } from '@hy-app/ui';

const obj = {
    name: '我有值',
    is: true,
    num: 100,
};
const newVal = clearVal(obj);
console.log(newVal);
```
