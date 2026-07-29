# 便捷工具

此封装方法挂载在全局上，通过全局注入可以开箱即用。

## 全局注入

```typescript
import { globalRegister } from "@hy-app/ui";
import { createSSRApp } from "vue";

export function createApp() {
  const app = createSSRApp(App);
  app.use(globalRegister);
  return { app };
}
```

## 函数列表

### $hy.addUnit(value, unit?) => string

为数值添加单位，全局便捷调用。

**参数**

| 参数名 | 类型             | 必填 | 默认值 | 说明             |
| ------ | ---------------- | ---- | ------ | ---------------- |
| value  | string \| number | 是   | -      | 需要添加单位的值 |
| unit   | string           | 否   | px     | 添加的单位名     |

**返回值**

| 类型   | 说明               |
| ------ | ------------------ |
| string | 添加单位后的字符串 |

**示例**

```html
<template>
  <view :style="{ height: $hy.addUnit(10) }"></view>
</template>
```

---

### $hy.random(min, max) => number

生成指定范围内的随机整数，全局便捷调用。

**参数**

| 参数名 | 类型             | 必填 | 默认值 | 说明   |
| ------ | ---------------- | ---- | ------ | ------ |
| min    | string \| number | 是   | -      | 最小值 |
| max    | string \| number | 是   | -      | 最大值 |

**返回值**

| 类型   | 说明   |
| ------ | ------ |
| number | 随机数 |

**示例**

```html
<template>
  <view>{{$hy.random(1, 10)}}</view>
</template>
```

---

### $hy.formatTime(timestamp, fmt?) => string

格式化时间戳为指定格式，全局便捷调用。

**参数**

| 参数名    | 类型             | 必填 | 默认值     | 说明     |
| --------- | ---------------- | ---- | ---------- | -------- |
| timestamp | string \| number | 是   | -          | 时间戳   |
| fmt       | string           | 否   | yyyy-MM-dd | 时间格式 |

**返回值**

| 类型   | 说明                 |
| ------ | -------------------- |
| string | 格式化后的时间字符串 |

**示例**

```html
<template>
  <view>{{$hy.formatTime(1702051200000)}}</view>
</template>
```

---

### $hy.bytesToSize(bytes) => string

将字节数转换为可读单位，全局便捷调用。

**参数**

| 参数名 | 类型   | 必填 | 默认值 | 说明     |
| ------ | ------ | ---- | ------ | -------- |
| bytes  | number | 是   | -      | 字节大小 |

**返回值**

| 类型   | 说明                   |
| ------ | ---------------------- |
| string | 转换后的可读单位字符串 |

**示例**

```html
<template>
  <view>{{$hy.bytesToSize(10000)}}</view>
</template>
```
