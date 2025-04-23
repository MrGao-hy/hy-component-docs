# formatTime 时间戳转换时间格式

## 时间戳格式
###### formatTime(timestamp, fmt)

- `timestamp` \<String | Number> 时间戳
- `fmt` \<String> 时间格式，默认值：yyyy-MM-dd

```javascript
import { formatTime } from "hy-app";

// 时间格式转换
const day = formatTime(new Date())
// 时间戳转换
const yearMonth = formatTime(1702051200000, "yyyy-MM-dd")
const time = formatTime(1702051200000, "HH:mm:ss")
```

## 时间戳或年月日格式转为多久之前，或者年月日，当前显示月日
###### formatTimeToString(timestamp, format)

- `timestamp` \<string | number> 时间戳/时间格式
- `format` \<String> 时间格式，默认值：yyyy-MM-dd

```javascript
import { formatTimeToString } from "hy-app";

// 时间格式转换
const day = formatTimeToString("2020-10-10 09:00:00")
// 时间戳转换
const yearMonth = formatTimeToString(1702051200000, "yyyy-MM-dd")
const time = formatTimeToString(1702051200000, false)
```

## 日期的月或日补零操作
###### padZero(value)

- `value` \<String | Number> 数值

```javascript
import { padZero } from "hy-app";

// 时间格式转换
const num = padZero(2)
console.log(num) // 打印出：02
```