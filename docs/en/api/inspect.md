## Type Checking Tool for inspect

## List of Functions

### isNumber(text) => boolean

Determine if the value is of a numeric type, supporting numeric strings.

**Parameters**

| Parameter Name | Type   | Required | Default Value | Description        |
| -------------- | ------ | -------- | ------------ | ------------------ |
| text           | unknown | Yes      | -            | The value to check |

**Return Value**

| Type   | Description     |
| ------ | ---------------- |
| boolean | Is it numeric? |

**Example**

```typescript
import { isNumber } from '@hy-app/ui';

console.log(isNumber(123)); // true
console.log(isNumber('123')); // true
console.log(isNumber('admin')); // false
```

---

### isNumericString(text) => boolean

Determine if the value is a numeric string, strictly typed as string.

**Parameters**

| Parameter Name | Type             | Required | Default Value | Description        |
| -------------- | ---------------- | -------- | ------------ | ------------------ |
| text           | string \| number | Yes      | -            | The value to check |

**Return Value**

| Type             | Description      |
| ---------------- | ---------------- |
| boolean          | Is it numeric string? |

**Example**

```typescript
import { isNumericString } from '@hy-app/ui';

console.log(isNumericString(123)); // false
console.log(isNumericString('123')); // true
```

---

### isString(text) => boolean

Determine if the value is of a string type.

**Parameters**

| Parameter Name | Type   | Required | Default Value | Description        |
| -------------- | ------ | -------- | ------------ | ------------------ |
| text           | unknown | Yes      | -            | The value to check |

**Return Value**

| Type   | Description     |
| ------ | ---------------- |
| boolean | Is it a string? |

**Example**

```typescript
import { isString } from '@hy-app/ui';

console.log(isString(123)); // false
console.log(isString(true)); // false
console.log(isString({ name: 111 })); // false
console.log(isString('kiss')); // true
```

---

### isBoolean(text) => boolean

Determine if the value is of a boolean type.

**Parameters**

| Parameter Name | Type   | Required | Default Value | Description        |
| -------------- | ------ | -------- | ------------ | ------------------ |
| text           | unknown | Yes      | -            | The value to check |

**Return Value**

| Type   | Description     |
| ------ | ---------------- |
| boolean | Is it a boolean? |

**Example**

```typescript
import { isBoolean } from '@hy-app/ui';

console.log(isBoolean(123)); // false
console.log(isBoolean('123')); // false
console.log(isBoolean('true')); // false
console.log(isBoolean(false)); // true
```

---

### isArray(arr) => boolean

Determine if the value is of an array type.

**Parameters**

| Parameter Name | Type   | Required | Default Value | Description        |
| -------------- | ------ | -------- | ------------ | ------------------ |
| arr            | unknown | Yes      | -            | The value to check |

**Return Value**

| Type   | Description     |
| ------ | ---------------- |
| boolean | Is it an array? |

**Example**

```typescript
import { isArray } from '@hy-app/ui';

console.log(isArray([1, 2, 3])); // true
console.log(isArray({})); // false
```

---

### isObject(obj) => boolean

Determine if the value is of an object type (excluding arrays).

**Parameters**

| Parameter Name | Type   | Required | Default Value | Description        |
| -------------- | ------ | -------- | ------------ | ------------------ |
| obj            | unknown | Yes      | -            | The value to check |

**Return Value**

| Type   | Description     |
| ------ | ---------------- |
| boolean | Is it an object? |

**Example**

```typescript
import { isObject } from '@hy-app/ui';

console.log(isObject([])); // false
console.log(isObject({ name: '乌沙奇' })); // true
```

---

### isImage(text) => boolean

Determine if the string is an image URL.

**Parameters**

| Parameter Name | Type   | Required | Default Value | Description        |
| -------------- | ------ | -------- | ------------ | ------------------ |
| text           | string | Yes      | -            | The value to check |

**Return Value**

| Type   | Description             |
| ------ | ------------------------ |
| boolean | Is it an image URL?     |

**Example**

```typescript
import { isImage } from '@hy-app/ui';

console.log(isImage('https://example.com/image.png')); // true
```

---

### isBase64Image(text) => boolean

Determine if the string is a base64 encoded image.

**Parameters**

| Parameter Name | Type   | Required | Default Value | Description        |
| -------------- | ------ | -------- | ------------ | ------------------ |
| text           | string | Yes      | -            | The value to check |

**Return Value**

| Type               | Description              |
| ------------------ | ------------------------ |
| boolean            | Is it a base64 image?   |

**Example**

```typescript
import { isBase64Image } from '@hy-app/ui';

console.log(isBase64Image('data:image...')); // true
```

---

### isVideo(text) => boolean

Determine if the string is a video URL.

**Parameters**

| Parameter Name | Type   | Required | Default Value | Description        |
| -------------- | ------ | -------- | ------------ | ------------------ |
| text           | string | Yes      | -            | The value to check |

**Return Value**

| Type               | Description              |
| ------------------ | ------------------------ |
| boolean            | Is it a video format?   |

**Example**

```typescript
import { isVideo } from '@hy-app/ui';

console.log(isVideo('http://example.com/video.mp4')); // true
```

---

### isDate(text) => boolean

Determine if the value is in date format (supports strings and timestamps).

**Parameters**

| Parameter Name | Type             | Required | Default Value | Description        |
| -------------- | ---------------- | -------- | ------------ | ------------------ |
| text           | string \| number | Yes      | -            | The value to check |

**Return Value**

| Type               | Description              |
| ------------------ | ------------------------ |
| boolean            | Is it a date format?    |

**Example**

```typescript
import { isDate } from '@hy-app/ui';

console.log(isDate('2024-10-10')); // true
console.log(isDate(1754032899)); // true
```

---

### isPhone(text) => boolean

Determine if the value is in phone number format.

**Parameters**

| Parameter Name | Type   | Required | Default Value | Description        |
| -------------- | ------ | -------- | ------------ | ------------------ |
| text           | unknown | Yes      | -            | The value to check |

**Return Value**

| Type               | Description              |
| ------------------ | ------------------------ |
| boolean            | Is it a phone number format? |

**Example**

```typescript
import { isPhone } from '@hy-app/ui';

console.log(isPhone(19701012929)); // true
```

---

### isIdCard(text) => boolean

Determine if the value is in ID card number format.

**Parameters**

| Parameter Name | Type   | Required | Default Value | Description        |
| -------------- | ------ | -------- | ------------ | ------------------ |
| text           | unknown | Yes      | -            | The value to check |

**Return Value**

| Type               | Description              |
| ------------------ | ------------------------ |
| boolean            | Is it an ID card number? |

**Example**

```typescript
import { isIdCard } from '@hy-app/ui';

console.log(isIdCard('360322201207022918')); // true
```

---

### isChinese(text) => boolean

Determine if the string is composed entirely of Chinese characters.

**Parameters**

| Parameter Name | Type   | Required | Default Value | Description        |
| -------------- | ------ | -------- | ------------ | ------------------ |
| text           | string | Yes      | -            | The value to check |

**Return Value**

| Type   | Description     |
| ------ | ---------------- |
| boolean | Is it all Chinese? |

**Example**

```typescript
import { isChinese } from '@hy-app/ui';

console.log(isChinese('皇帝')); // true
console.log(isChinese('3ed皇帝')); // false
```

---

### isH5() => boolean

Determine if the current runtime environment is H5.

**Parameters**

None

**Return Value**

| Type              | Description              |
| ----------------- | ------------------------ |
| boolean           | Is the current environment H5? |

**Example**

```typescript
import { isH5 } from '@hy-app/ui';

console.log(isH5()); // true
```