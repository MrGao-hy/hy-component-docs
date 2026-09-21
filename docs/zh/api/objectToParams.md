# objectToUrlParams & urlParamsToObject URL参数转换工具

## 函数列表

### objectToUrlParams(params) => string

将对象转换为 URL 参数字符串。

**参数**

| 参数名 | 类型   | 必填 | 默认值 | 说明               |
| ------ | ------ | ---- | ------ | ------------------ |
| params | object | 是   | -      | 需要转换的对象参数 |

**返回值**

| 类型   | 说明           |
| ------ | -------------- |
| string | URL 参数字符串 |

**示例**

```typescript
import { objectToUrlParams } from '@hy-app/ui';

const params = objectToUrlParams({ name: '加密对象', age: 10 });
console.log(params); // name=加密对象&age=10
```

---

### urlParamsToObject(paramStr) => object

将 URL 参数字符串解析为对象。

**参数**

| 参数名   | 类型   | 必填 | 默认值 | 说明           |
| -------- | ------ | ---- | ------ | -------------- |
| paramStr | string | 是   | -      | URL 参数字符串 |

**返回值**

| 类型   | 说明         |
| ------ | ------------ |
| object | 解析后的对象 |

**示例**

```typescript
import { urlParamsToObject } from '@hy-app/ui';

const paramStr = `?name=hyy&age=18`;
const params = urlParamsToObject(paramStr);
console.log(params); // {name: "hyy", age: 18}
```
