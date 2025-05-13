# 判断

## 判断字符串是否是数字
### isNumericString(text)
校验字符串是否数字，返回true或者false。
- `text` \<string\> | \<number\> 需要判断的值
```ts
import { isNumericString } from "hy-app";

console.log(isNumericString("1202")); // true
console.log(isNumericString(NAN)); // false
```

## 判断是否是数字
### isNumber(text)
校验是否数字，返回true或者false。
- `text` \<string\> | \<number\> 需要判断的值
```ts
import { isNumber } from "hy-app";

console.log(isNumber(123));
```

## 判断是否数组
### isArray(arr)
校验是否数组，返回true或者false。
- `arr` \<Array\> 数组
```vue
import { isArray } from "hy-app";
console.log(isArray([1, 2, 3]));
```

## 判断是否对象
### isObject(obj)
校验是否对象，返回true或者false。
- `obj` \<Object\> 数组
```vue
import { isObject } from "hy-app";

console.log(isObject({name: "韩梅梅"}));
```

## 是否手机号
### isPhone(phone)
校验是否手机号，返回true或者false。
- `phone` \<String\> 手机号
```ts
import { isPhone } from "hy-app";
console.log(isPhone('13845678900'));
```

## 是否身份证号
### isIdCard(idCard)
身份证号，包括尾数为"X"的类型，可以校验通过，结果返回true或者false。
- `idCard` \<String\> 身份证号
```ts
import { isIdCard } from "hy-app";
console.log(isIdCard('110101199003070134'));
```

## 是否汉字
### isChinese(zh)
可以为单个汉字，或者汉字组成的字符串，结果返回true或者false。
- `zh` \<String\> 中文字符串
```ts
import { isChinese } from "hy-app";
console.log(isChinese('更上一层楼'));
```