# inspect 类型检查工具

## 函数列表

### isNumber(text) => boolean

判断值是否为数字类型，支持数字字符串。

**参数**

| 参数名 | 类型    | 必填 | 默认值 | 说明         |
| ------ | ------- | ---- | ------ | ------------ |
| text   | unknown | 是   | -      | 需要判断的值 |

**返回值**

| 类型    | 说明       |
| ------- | ---------- |
| boolean | 是否为数字 |

**示例**

```typescript
import { isNumber } from "@hy-app/ui";

console.log(isNumber(123)); // true
console.log(isNumber("123")); // true
console.log(isNumber("admin")); // false
```

---

### isNumericString(text) => boolean

判断值是否为数字字符串，严格要求类型为 string。

**参数**

| 参数名 | 类型             | 必填 | 默认值 | 说明         |
| ------ | ---------------- | ---- | ------ | ------------ |
| text   | string \| number | 是   | -      | 需要判断的值 |

**返回值**

| 类型    | 说明             |
| ------- | ---------------- |
| boolean | 是否为数字字符串 |

**示例**

```typescript
import { isNumericString } from "@hy-app/ui";

console.log(isNumericString(123)); // false
console.log(isNumericString("123")); // true
```

---

### isString(text) => boolean

判断值是否为字符串类型。

**参数**

| 参数名 | 类型    | 必填 | 默认值 | 说明         |
| ------ | ------- | ---- | ------ | ------------ |
| text   | unknown | 是   | -      | 需要判断的值 |

**返回值**

| 类型    | 说明         |
| ------- | ------------ |
| boolean | 是否为字符串 |

**示例**

```typescript
import { isString } from "@hy-app/ui";

console.log(isString(123)); // false
console.log(isString(true)); // false
console.log(isString({ name: 111 })); // false
console.log(isString("kiss")); // true
```

---

### isBoolean(text) => boolean

判断值是否为布尔类型。

**参数**

| 参数名 | 类型    | 必填 | 默认值 | 说明         |
| ------ | ------- | ---- | ------ | ------------ |
| text   | unknown | 是   | -      | 需要判断的值 |

**返回值**

| 类型    | 说明         |
| ------- | ------------ |
| boolean | 是否为布尔值 |

**示例**

```typescript
import { isBoolean } from "@hy-app/ui";

console.log(isBoolean(123)); // false
console.log(isBoolean("123")); // false
console.log(isBoolean("true")); // false
console.log(isBoolean(false)); // true
```

---

### isArray(arr) => boolean

判断值是否为数组类型。

**参数**

| 参数名 | 类型    | 必填 | 默认值 | 说明         |
| ------ | ------- | ---- | ------ | ------------ |
| arr    | unknown | 是   | -      | 需要判断的值 |

**返回值**

| 类型    | 说明       |
| ------- | ---------- |
| boolean | 是否为数组 |

**示例**

```typescript
import { isArray } from "@hy-app/ui";

console.log(isArray([1, 2, 3])); // true
console.log(isArray({})); // false
```

---

### isObject(obj) => boolean

判断值是否为对象类型（排除数组）。

**参数**

| 参数名 | 类型    | 必填 | 默认值 | 说明         |
| ------ | ------- | ---- | ------ | ------------ |
| obj    | unknown | 是   | -      | 需要判断的值 |

**返回值**

| 类型    | 说明       |
| ------- | ---------- |
| boolean | 是否为对象 |

**示例**

```typescript
import { isObject } from "@hy-app/ui";

console.log(isObject([])); // false
console.log(isObject({ name: "乌沙奇" })); // true
```

---

### isImage(text) => boolean

判断字符串是否为图片地址。

**参数**

| 参数名 | 类型   | 必填 | 默认值 | 说明         |
| ------ | ------ | ---- | ------ | ------------ |
| text   | string | 是   | -      | 需要判断的值 |

**返回值**

| 类型    | 说明           |
| ------- | -------------- |
| boolean | 是否为图片地址 |

**示例**

```typescript
import { isImage } from "@hy-app/ui";

console.log(isImage("https://example.com/image.png")); // true
```

---

### isBase64Image(text) => boolean

判断字符串是否为 base64 编码的图片。

**参数**

| 参数名 | 类型   | 必填 | 默认值 | 说明         |
| ------ | ------ | ---- | ------ | ------------ |
| text   | string | 是   | -      | 需要判断的值 |

**返回值**

| 类型    | 说明               |
| ------- | ------------------ |
| boolean | 是否为 base64 图片 |

**示例**

```typescript
import { isBase64Image } from "@hy-app/ui";

console.log(isBase64Image("data:image...")); // true
```

---

### isVideo(text) => boolean

判断字符串是否为视频地址。

**参数**

| 参数名 | 类型   | 必填 | 默认值 | 说明         |
| ------ | ------ | ---- | ------ | ------------ |
| text   | string | 是   | -      | 需要判断的值 |

**返回值**

| 类型    | 说明           |
| ------- | -------------- |
| boolean | 是否为视频格式 |

**示例**

```typescript
import { isVideo } from "@hy-app/ui";

console.log(isVideo("http://example.com/video.mp4")); // true
```

---

### isDate(text) => boolean

判断值是否为日期格式（支持字符串和时间戳）。

**参数**

| 参数名 | 类型             | 必填 | 默认值 | 说明         |
| ------ | ---------------- | ---- | ------ | ------------ |
| text   | string \| number | 是   | -      | 需要判断的值 |

**返回值**

| 类型    | 说明           |
| ------- | -------------- |
| boolean | 是否为日期格式 |

**示例**

```typescript
import { isDate } from "@hy-app/ui";

console.log(isDate("2024-10-10")); // true
console.log(isDate(1754032899)); // true
```

---

### isPhone(text) => boolean

判断值是否为手机号格式。

**参数**

| 参数名 | 类型    | 必填 | 默认值 | 说明         |
| ------ | ------- | ---- | ------ | ------------ |
| text   | unknown | 是   | -      | 需要判断的值 |

**返回值**

| 类型    | 说明             |
| ------- | ---------------- |
| boolean | 是否为手机号格式 |

**示例**

```typescript
import { isPhone } from "@hy-app/ui";

console.log(isPhone(19701012929)); // true
```

---

### isIdCard(text) => boolean

判断值是否为身份证号码格式。

**参数**

| 参数名 | 类型    | 必填 | 默认值 | 说明         |
| ------ | ------- | ---- | ------ | ------------ |
| text   | unknown | 是   | -      | 需要判断的值 |

**返回值**

| 类型    | 说明             |
| ------- | ---------------- |
| boolean | 是否为身份证号码 |

**示例**

```typescript
import { isIdCard } from "@hy-app/ui";

console.log(isIdCard("360322201207022918")); // true
```

---

### isChinese(text) => boolean

判断字符串是否全为中文。

**参数**

| 参数名 | 类型   | 必填 | 默认值 | 说明         |
| ------ | ------ | ---- | ------ | ------------ |
| text   | string | 是   | -      | 需要判断的值 |

**返回值**

| 类型    | 说明       |
| ------- | ---------- |
| boolean | 是否为中文 |

**示例**

```typescript
import { isChinese } from "@hy-app/ui";

console.log(isChinese("皇帝")); // true
console.log(isChinese("3ed皇帝")); // false
```

---

### isH5() => boolean

判断当前运行环境是否为 H5。

**参数**

无参数

**返回值**

| 类型    | 说明              |
| ------- | ----------------- |
| boolean | 当前环境是否为 H5 |

**示例**

```typescript
import { isH5 } from "@hy-app/ui";

console.log(isH5()); // true
```
