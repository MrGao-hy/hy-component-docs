# formatTime Time Formatting Utility

## Function List

### formatTime(timestamp, fmt?) => string

Formats a timestamp or date object into a specified time string.

**Parameters**

| Parameter Name | Type             | Required | Default Value | Description             |
| -------------- | ---------------- | -------- | ------------ | ---------------------- |
| timestamp     | string \| number | Yes      | -            | Timestamp or date object |
| fmt           | string           | No       | yyyy-MM-dd   | Time format             |

**Return Value**

| Type   | Description                 |
| ------ | --------------------------- |
| string | Formatted time string      |

**Example**

```typescript
import { formatTime } from '@hy-app/ui';

const day = formatTime(new Date());
const yearMonth = formatTime(1702051200000, 'yyyy-MM-dd');
const time = formatTime(1702051200000, 'HH:mm:ss');
```

---

### formatTimeToString(timestamp, format?) => string

Converts a timestamp or time format string to a formatted time or "time ago" relative time description.

**Parameters**

| Parameter Name | Type             | Required | Default Value | Description                                |
| -------------- | ---------------- | -------- | ------------ | ------------------------------------------- |
| timestamp     | string \| number | Yes      | -            | Timestamp or time format string              |
| format        | string           | No       | yyyy-MM-dd   | Time format, pass false to show "time ago" |

**Return Value**

| Type   | Description                                 |
| ------ | ------------------------------------------- |
| string | Formatted time string or "time ago" description |

**Example**

```typescript
import { formatTimeToString } from '@hy-app/ui';

const day = formatTimeToString('2020-10-10 09:00:00');
const yearMonth = formatTimeToString(1702051200000, 'yyyy-MM-dd');
const relativeTime = formatTimeToString(1702051200000, false);
```

---

### padZero(value) => string

Pads a number with zeros, adding a zero to the front of numbers less than 10.

**Parameters**

| Parameter Name | Type             | Required | Default Value | Description           |
| -------------- | ---------------- | -------- | ------------ | --------------------- |
| value         | string \| number | Yes      | -            | Number to pad zeros to |

**Return Value**

| Type   | Description           |
| ------ | --------------------- |
| string | Padded zero string   |

**Example**

```typescript
import { padZero } from '@hy-app/ui';

const num = padZero(2);
console.log(num); // 02
```