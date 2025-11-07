## 判断是否是数字
> 校验是否是数字，返回true或者false。

**isNumber()**
- `text` \<String> | \<Number> 需要判断的值
```ts
import { isNumber } from "hy-app";
console.log(isNumber(123)) // true;
console.log(isNumber("123")) // true;
console.log(isNumber("admin")) // false;
```

## 判断字符串是否是数字
> 校验是否是数字，返回true或者false。

**isNumericString()**
- `text` \<String> | \<Number> 需要判断的值
```ts
import { isNumericString } from "hy-app";
console.log(isArray(123)) // false;
console.log(isArray("123")) // true;
console.log(isArray("kiss")) // false;
```

## 判断是否数组
> 校验是否数组，返回true或者false。

**isArray()**
- `arr` \<Any> 需要判断的值 
```ts
import { isArray } from "hy-app";
console.log(isArray([1, 2, 3])) // true;
console.log(isArray({})) // false;
```

## 判断是否是对象
> 校验是否对象，返回true或者false。
 
**isObject()**
- `obj` \<Any> 需要判断的值
```ts
import { isObject } from "hy-app";
console.log(isObject([])) // false;
console.log(isObject({name: '乌沙奇'})) // true;
```

## 判断是否是图片地址
> 校验是否图片地址，返回true或者false。

**isImage()**
- `text` \<String> 需要判断的值
```ts
import { isImage } from "hy-app";
console.log(isImage("https://pic1.imgdb.cn/item/67f8dc6288c538a9b5cadf4e.png")) // true;
```

## 判断是否是base64图片
> 校验是否base64图片，返回true或者false。

**isBase64Image()**
- `text` \<String> 需要判断的值
```ts
import { isBase64Image } from "hy-app";
console.log(isBase64Image("data:image...")) // true;
```

## 判断是否视频格式
> 校验是否视频格式，返回true或者false。

**isVideo()**
- `text` \<String> 需要判断的值
```ts
import { isVideo } from "hy-app";
console.log(isVideo('http://91/2025-10-10.mp4')) // true;
```

## 验证是否日期格式
> 校验是否日期格式，返回true或者false。

**isDate()**
- `text` \<String | Number> 需要判断的值
```ts
import { isDate } from "hy-app";
console.log(isDate('2024-10-10')) // true;
console.log(isDate(1754032899)) // true;
```

## 验证是否是手机号格式
> 校验是否手机号格式，返回true或者false。

**isPhone()**
- `text` \<unknown> 需要判断的值
```ts
import { isPhone } from "hy-app";
console.log(isPhone(19701012929)) // true;
```

## 验证是否是身份证号码
> 校验是否身份证号，返回true或者false。

**isIdCard()**
- `text` \<unknown> 需要判断的值
```ts
import { isIdCard } from "hy-app";
console.log(isIdCard('360322201207022918')) // true;
```

## 验证是否是中文
> 校验是否中文格式，返回true或者false。

**isChinese()**
- `text` \<String> 需要判断的值
```ts
import { isChinese } from "hy-app";
console.log(isChinese('皇帝')) // true;
console.log(isChinese('3ed皇帝')) // false;
```

## 判断环境是否是H5
> 判断当前环境是否是H5，返回true或者false。

**isH5()**
```ts
import { isH5 } from "hy-app";
console.log(isH5()) // true;
```