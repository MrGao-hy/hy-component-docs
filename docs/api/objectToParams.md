# 地址栏参数字符串和对象互转

## 对象转换地址栏参数
### objectToUrlParams(params)
- `params` \<Object\> 需要通过地址传的对象参数
```ts
import { objectToUrlParams } from "hy-app";

const params = objectToUrlParams({name: "加密对象", age: 10});
console.log(params); // 打印出：name=加密对象&age=10
```

## 地址栏参数转换对象 
urlParamsToObject(paramStr);
- paramStr \<String\> 地址栏参数字符串
```ts
import { urlParamsToObject } from "hy-app";

const paramStr = `?name=hyy&age=18`
const params = urlParamsToObject(paramStr);
console.log(params); // 打印出：{name: "hyy", age: 18}

// 兼容复杂情况
const paramStr2 = `?code=sign=123&type=key`
const params2 = urlParamsToObject(paramStr);
console.log(params2); // 打印出：{code: "sign=123", type: "key"}
```