# FloatButton 悬浮按钮组件
> 该组件内部实现以uni-app的基础button组件为基础，进行二次封装

::: tip 温馨提示
组件是华悦作者独自开发
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-float-buttton></hy-float-buttton>
<!-- 单个组件引入 -->
<HyFloatButton></HyFloatButton>
```
```ts
import { HyFloatButton } from "hy-app"
```

## 悬浮按钮默认按钮
```html
<template>
    <hy-float-buttton
        text="客服"
        :icon="IconConfig.CUSTOMER_SERVICE"
        iconSize="25"
    ></hy-float-buttton>
</template>
```

## 悬浮按钮显示菜单栏
```html
<template>
    <hy-float-buttton :menus="menus_1"></hy-float-buttton>
    <hy-float-buttton :menus="menus_2"></hy-float-buttton>
</template>

<script setup>
  const menus_1 = ["菜单1", "菜单2", "菜单3"];
  const menus_2 = [
    {label: "菜单1", url: "/pages/keFu/index"},
    {label: "菜单2"},
    {label: "菜单3"}
  ];
</script>
```

## 悬浮按钮大小
- 通过设置`size`实现悬浮按钮大小
  - `small`小按钮
  - `medium`中按钮
  - `large`大按钮
  - 输入数字或数字单位自定义按钮大小
```html
<template>
    <hy-float-buttton size="small"></hy-float-buttton>
    <hy-float-buttton size="medium"></hy-float-buttton>
    <hy-float-buttton size="large"></hy-float-buttton>
    <hy-float-buttton :size="20"></hy-float-buttton>
    <hy-float-buttton size="50rpx"></hy-float-buttton>
</template>
```


## 悬浮按钮形状
- 通过设置`shape`设置悬浮按钮不同形状
  - `circle`圆形
  - `square`方形
```html
<template>
    <hy-float-buttton shape="circle"></hy-float-buttton>
    <hy-float-buttton shape="square"></hy-float-buttton>
</template>
```

## 悬浮按钮打开方向
- 通过设置`direction`设置悬浮按钮打开展示不同方向
  - `column`向上展示
  - `row`横向展示
::: tips 注意
横向展示默认向右展开
如果left值大于一半屏幕，横向展示会向左展开
:::
```html
<template>
    <hy-float-buttton :menus="menus" direction="column"></hy-float-buttton>
    <hy-float-buttton :menus="menus" direction="row"></hy-float-buttton>
    <hy-float-buttton :menus="menus" left="80vw" direction="row"></hy-float-buttton>
</template>

<script setup>
  const menus = ["菜单1", "菜单2", "菜单3"];
</script>
```

## 是否浮动
- 通过设置`float`设置悬浮按钮是否浮动
```html
<template>
    <hy-float-buttton :float="true"></hy-float-buttton>
</template>
```

## 显示阴影
- 通过设置`shadow`设置悬浮按钮是否显示阴影
```html
<template>
    <hy-float-buttton :shadow="true"></hy-float-buttton>
</template>
```

## 设置透明度
- 通过设置`opacity`设置悬浮按钮是否浮动
```html
<template>
    <hy-float-buttton :opacity="0.1"></hy-float-buttton>
</template>
```

## API

| 参数          | 说明          | 类型                                              | 默认值     |
|-------------|-------------|-------------------------------------------------|---------|
| menus       | 菜单栏集合       | `(string\|AnyObject)[]`                         | -       |
| direction   | 打开方向[^1]    | `row`\|`column`                                 | column  |
| icon        | 按钮显示的图标     | `string`                                        | PLUS    |
| iconSize    | 按钮图标大小      | `number`\|`string`                              | -       |
| iconColor   | 按钮图标颜色      | `string`                                        | #FFFFFF |
| bottom      | 按钮距离底部的距离   | `number`\|`string`                              | 80      |
| left        | 按钮距离左边的距离   | `number`\|`string`                              | 20      |
| zIndex      | 层级          | `number`                                        | 10086   |
| bgColor     | 按钮背景颜色      | `string`                                        | -       |
| text        | 按钮文字        | `string`                                        | -       |
| fontSize    | 按钮文字大小      | `number`\|`string`                              | 12px    |
| textColor   | 按钮文字的颜色     | `string`                                        | -       |
| size        | 按钮的尺寸[^2]   | `small`\|`medium`\|`large` \|`number`\|`string` | medium  |
| shape       | 按钮的形状[^3]   | `circle`\|`square`                              | circle  |
| opacity     | 按钮的透明度      | `number`                                        | 1       |
| shadow      | 是否显示阴影      | `boolean`                                       | true    |
| float       | 是否显示漂浮的动画   | `boolean`                                       | true    |
| fixed       | 是否固定位置      | `boolean`                                       | true    |
| customStyle | 定义需要用到的外部样式 | `CSSProperties`                                 | -       |

## Events

| 事件名       | 说明    | 回调参数                 |
|-----------|-------|----------------------|
| click     | 点击按钮  | -                    |
| clickItem | 点击菜单栏 | temp：菜单栏数据，index: 索引 |

## Slots

| 插槽名     | 说明   | 接收值 |
|---------|------|-----|
| default | 按钮内容 | -   |


[^1]: `row`：横向；`column`：纵向
[^2]: `circle`：两边为半圆；`square`：方形带圆角
[^3]: `normal`：默认尺寸；`large`：大尺寸； `small`：小尺寸, `number`：任意大小;

<demo-model url="pages/components/floatButton/floatButton"></demo-model>