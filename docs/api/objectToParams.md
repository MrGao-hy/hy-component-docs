# objectToUrlParams 将对象转换为 URL 查询参数字符串

## base64加密
### objectToUrlParams(params)
- `params` \<Object> 需要通过地址传的对象参数
```javascript
import { objectToUrlParams } from "hy-app";

const params = objectToUrlParams({name: "加密对象", age: 10});
console.log(params); // 打印出：name=加密对象&age=10
```