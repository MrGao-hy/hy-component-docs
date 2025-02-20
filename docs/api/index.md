# 便捷工具
::: tip
此专题内容为一些方便用户快速，便捷使用的小工具，可能是uview-plus的一些方法的简易版，或者对uni的一些方法进行二次封装，方便用户 快速使用。
:::

### 全局注入
```javascript
// main.ts全局注入方法
import { globalRegister } from "hfyk-app";
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
    <div :style="{ height: $gxh.addUnit(10) }"></div>
</template>
```

## 获取随机数
```html
<template>
    <div>{{$gxh.random(1, 10)}}</div>
</template>
```

## 时间戳格式化
```html
<template>
    <div>{{$gxh.formatTime(1702051200000)}}</div>
</template>
```

## 字节转化单位
```html
<template>
    <div>{{$gxh.bytesToSize(10000)}}</div>
</template>
```