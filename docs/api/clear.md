# clearVal 清空对象值

## 递归清空对象里面基本类型的值
### clearVal(obj)
- `obj` \<Object | String | Number | Undefined| Boolean> 需要清空数值
```javascript
import { clearVal } from "hy-app";
const obj = {
    name: "我有值",
    is: true,
    num: 100
}
const newVal = clearVal(obj);
console.log(newVal)
```