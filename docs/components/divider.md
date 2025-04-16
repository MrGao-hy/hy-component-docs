# Divider 分割线组件
> 区隔内容的分割线，一般用于页面底部"没有更多"的提示

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [divider组件](https://uiadmin.net/uview-plus/components/divider.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|-----|----|-------|
| ✔   | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-divider text="月落"></hy-divider>
<!-- 单个组件引入 -->
<HyDivider text="月落"></HyDivider>
```
```ts
import { HyDivider } from "hy-app"
```

## 设置虚线
- 可以通过`dashed`指定虚线
```html
<template>
    <hy-divider text="月落" dashed></hy-divider>
</template>
```

## 设置细线
- 可以通过`hairline`指定细线
```html
<template>
    <!--细线-->
    <hy-divider text="月落" hairline></hy-divider>
    <!--粗线-->
    <hy-divider text="月落" :hairline="false"></hy-divider>
</template>
```

## 设置以点代替文字
- 可以通过`dot`指定以点代替文字
```html
<template>
    <hy-divider dot></hy-divider>
</template>
```

## 设置文本靠左靠右
- 可以通过`textPosition`指定文字靠左靠右
```html
<template>
    <hy-divider text="月落" textPosition="left"></hy-divider>
    <hy-divider text="月落" textPosition="right"></hy-divider>
</template>
```

## 设置文本颜色和线条颜色
- 可以通过`textColor`和`lineColor`指定文字刚线条颜色
```html
<template>
    <hy-divider text="月落" textColor="#2979ff" lineColor="#ff0000"></hy-divider>
</template>
```

## API

| 参数           | 说明                    | 类型                                         | 默认值                |
|--------------|-----------------------|--------------------------------------------|--------------------|
| text         | 文本内容                  | `string`\|`loadMore`\| `loading`\|`noMore` | -                  |
| dashed       | 是否虚线                  | `boolean`                                  | false              |
| hairline     | 是否细线                  | `boolean`                                  | true               |
| dot          | 是否以点替代文字，优先于text字段起作用 | `boolean`                                  | false              |
| textPosition | 内容文本的位置               | `center`\|`left`\|`right`                  | center             |
| textSize     | 文本大小                  | `string` \| `number`                       | 14                 |
| textColor    | 文本颜色                  | `string`                                   | #909399            |
| lineColor    | 线条颜色                  | `string`                                   | #dcdfe6            |
| loadingIcon  | 加载中状态的图标              | `string`                                   | IconConfig.LOADING |
| loadMoreText | 加载前的提示语               | `string`                                   | 加载更多               |
| loadingText  | 加载中提示语                | `string`                                   | 正在加载...            |
| noMoreText   | 没有更多的提示语              | `string`                                   | 没有更多了              |
| marginTop    | 与前一个元素的距离，单位px        | `string` \| `number`                       | 0                  |
| marginBottom | 与后一个元素的距离，单位px        | `string` \| `number`                       | 0                  |

## Events

| 事件名   | 说明   | 回调参数 |
|-------|------|------|
| click | 点击事件 | -    |
