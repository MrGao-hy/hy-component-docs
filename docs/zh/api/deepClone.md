# deepClone 深拷贝工具

## 函数列表

### deepClone(source) => any

深度递归拷贝对象或数组，修改拷贝后的对象不会影响原对象。

**参数**

| 参数名 | 类型            | 必填 | 默认值 | 说明                   |
| ------ | --------------- | ---- | ------ | ---------------------- |
| source | object \| any[] | 是   | -      | 需要深拷贝的对象或数组 |

**返回值**

| 类型 | 说明                   |
| ---- | ---------------------- |
| any  | 深拷贝后的新对象或数组 |

**示例**

```typescript
import { deepClone } from '@hy-app/ui';

const oldObj = {
    name: '旧数据',
};

const newObj = deepClone(oldObj);
newObj.name = '新数据';

console.log(oldObj); // { name: "旧数据" }
console.log(newObj); // { name: "新数据" }
```
