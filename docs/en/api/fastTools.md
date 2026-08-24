# Convenient Tools

This encapsulation method is mounted globally, making it ready to use out of the box through global injection.

## Global Injection

```typescript
import { globalRegister } from '@hy-app/ui';
import { createSSRApp } from 'vue';

export function createApp() {
    const app = createSSRApp(App);
    app.use(globalRegister);
    return { app };
}
```

## Function List

### $hy.addUnit(value, unit?) => string

Add a unit to a number, globally accessible for convenient use.

**Parameters**

| Parameter Name | Type             | Required | Default | Description             |
| -------------- | ---------------- | -------- | ------ | ---------------------- |
| value          | string \| number | Yes      | -      | The value to add the unit to |
| unit           | string           | No       | px     | The unit name to add     |

**Return Value**

| Type   | Description               |
| ------ | ------------------------ |
| string | The string with the added unit |

**Example**

```html
<template>
    <view :style="{ height: $hy.addUnit(10) }"></view>
</template>
```

---

### $hy.random(min, max) => number

Generate a random integer within a specified range, globally accessible for convenient use.

**Parameters**

| Parameter Name | Type             | Required | Default | Description   |
| -------------- | ---------------- | -------- | ------ | ------------ |
| min            | string \| number | Yes      | -      | Minimum value |
| max            | string \| number | Yes      | -      | Maximum value |

**Return Value**

| Type   | Description   |
| ------ | ------------ |
| number | Random number |

**Example**

```html
<template>
    <view>{{$hy.random(1, 10)}}</view>
</template>
```

---

### $hy.formatTime(timestamp, fmt?) => string

Format a timestamp into a specified format, globally accessible for convenient use.

**Parameters**

| Parameter Name | Type             | Required | Default | Description     |
| -------------- | ---------------- | -------- | -------- | -------------- |
| timestamp      | string \| number | Yes      | -       | Timestamp       |
| fmt            | string           | No       | yyyy-MM-dd | Time format |

**Return Value**

| Type   | Description                 |
| ------ | --------------------------- |
| string | The formatted time string |

**Example**

```html
<template>
    <view>{{$hy.formatTime(1702051200000)}}</view>
</template>
```

---

### $hy.bytesToSize(bytes) => string

Convert byte size to a readable unit, globally accessible for convenient use.

**Parameters**

| Parameter Name | Type   | Required | Default | Description     |
| -------------- | ------ | -------- | ------ | -------------- |
| bytes          | number | Yes      | -      | Byte size      |

**Return Value**

| Type   | Description                   |
| ------ | ----------------------------- |
| string | The converted readable unit string |

**Example**

```html
<template>
    <view>{{$hy.bytesToSize(10000)}}</view>
</template>
```