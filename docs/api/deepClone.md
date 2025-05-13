# deepClone 递归拷贝复杂类型数据

::: tip 提示
当我们将一个对象(变量A)赋值给另一个变量(变量B)时，修改变量B，因为对象引用的特性，导致A也同时被修改，所以有时候我们需要将A克隆给B，这样修改B的时候，就不会 导致A也被修改。
:::


## 深度递归
###### deepClone(source)

- `source` \<Object> 对象或数组

```javascript
import { deepClone } from "hy-app";

const oldObj = {
    name: "旧数据"
}

// 浅拷贝
newObj.name = "新数据";
console.log(oldObj); // 打印出name是“新数据”
console.log(newObj); // 打印出name是“新数据”

// 深拷贝
const newObj = deepClone(oldObj);
newObj.name = "新数据";

console.log(oldObj); // 打印出name是“旧数据”
console.log(newObj); // 打印出name是“新数据”
```