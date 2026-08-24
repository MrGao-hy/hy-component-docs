## objectToUrlParams & urlParamsToObject URL Parameter Conversion Tool

## Function List

### objectToUrlParams(params) => string

Convert an object to a URL parameter string.

**Parameters**

| Parameter Name | Type | Required | Default | Description |
| -------------- | ------ | ---- | ------ | -------------- |
| params | object | Yes | - | The object parameters to be converted |

**Return Value**

| Type | Description |
| ------ | ------------ |
| string | URL parameter string |

**Example**

```typescript
import { objectToUrlParams } from '@hy-app/ui';

const params = objectToUrlParams({ name: 'Encrypted Object', age: 10 });
console.log(params); // name=Encrypted%20Object&age=10
```

---

### urlParamsToObject(paramStr) => object

Parse a URL parameter string into an object.

**Parameters**

| Parameter Name | Type | Required | Default | Description |
| -------- | ------ | ---- | ------ | -------------- |
| paramStr | string | Yes | - | The URL parameter string |

**Return Value**

| Type | Description |
| ------ | ------------ |
| object | The parsed object |

**Example**

```typescript
import { urlParamsToObject } from '@hy-app/ui';

const paramStr = `?name=hyy&age=18`;
const params = urlParamsToObject(paramStr);
console.log(params); // {name: "hyy", age: 18}
```