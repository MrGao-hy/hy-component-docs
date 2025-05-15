# 便捷工具
::: tip 温馨提示
此封装方法挂载在全局上，通过全局注入可以开箱即用，方便用户快速使用。
:::

### 全局注入
```javascript
// main.ts全局注入方法
import { globalRegister } from "hy-app";
import { createSSRApp } from "vue";
export function createApp () {
    const app = createSSRApp(App);
    app.use(globalRegister);
    return {
        app,
    };
}
```

## 添加单位
```html
<template>
    <view :style="{ height: $hy.addUnit(10) }"></view>
</template>
```

## 获取随机数
```html
<template>
    <view>{{$hy.random(1, 10)}}</view>
</template>
```

## 时间戳格式化
```html
<template>
    <view>{{$hy.formatTime(1702051200000)}}</view>
</template>
```

## 字节转化单位
```html
<template>
    <view>{{$hy.bytesToSize(10000)}}</view>
</template>
```