# formatTime 时间处理工具

## 函数列表

### formatTime(timestamp, fmt?) => string

将时间戳或日期对象格式化为指定的时间字符串。

**参数**

| 参数名    | 类型             | 必填 | 默认值     | 说明             |
| --------- | ---------------- | ---- | ---------- | ---------------- |
| timestamp | string \| number | 是   | -          | 时间戳或日期对象 |
| fmt       | string           | 否   | yyyy-MM-dd | 时间格式         |

**返回值**

| 类型   | 说明                 |
| ------ | -------------------- |
| string | 格式化后的时间字符串 |

**示例**

```typescript
import { formatTime } from '@hy-app/ui';

const day = formatTime(new Date());
const yearMonth = formatTime(1702051200000, 'yyyy-MM-dd');
const time = formatTime(1702051200000, 'HH:mm:ss');
```

---

### formatTimeToString(timestamp, format?) => string

将时间戳或时间格式字符串转换为格式化时间或"多久之前"的相对时间描述。

**参数**

| 参数名    | 类型             | 必填 | 默认值     | 说明                                |
| --------- | ---------------- | ---- | ---------- | ----------------------------------- |
| timestamp | string \| number | 是   | -          | 时间戳或时间格式字符串              |
| format    | string           | 否   | yyyy-MM-dd | 时间格式，传 false 时显示"多久之前" |

**返回值**

| 类型   | 说明                                 |
| ------ | ------------------------------------ |
| string | 格式化后的时间字符串或"多久之前"描述 |

**示例**

```typescript
import { formatTimeToString } from '@hy-app/ui';

const day = formatTimeToString('2020-10-10 09:00:00');
const yearMonth = formatTimeToString(1702051200000, 'yyyy-MM-dd');
const relativeTime = formatTimeToString(1702051200000, false);
```

---

### padZero(value) => string

对数值进行补零操作，小于10的数字前面补0。

**参数**

| 参数名 | 类型             | 必填 | 默认值 | 说明           |
| ------ | ---------------- | ---- | ------ | -------------- |
| value  | string \| number | 是   | -      | 需要补零的数值 |

**返回值**

| 类型   | 说明           |
| ------ | -------------- |
| string | 补零后的字符串 |

**示例**

```typescript
import { padZero } from '@hy-app/ui';

const num = padZero(2);
console.log(num); // 02
```
