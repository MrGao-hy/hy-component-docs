# NoticeBar 滚动通知组件
> 该组件用于滚动通告场景，有多种模式可供选择

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [noticeBar组件](https://uiadmin.net/uview-plus/components/noticeBar.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-notice-bar text="欢迎使用华悦组件库"></hy-notice-bar>
<!-- 单个组件引入 -->
<HyNoticeBar text="欢迎使用华悦组件库"></HyNoticeBar>
```
```ts
import { HyNoticeBar } from "hy-app"
```

## 可关闭
```html
<template>
    <hy-notice-bar text="欢迎使用华悦组件库"></hy-notice-bar>
</template>
```

## 滚动速度
- `speed`可配置横向滚动速度
```html
<template>
    <hy-notice-bar text="欢迎使用华悦组件库" speed="250"></hy-notice-bar>
</template>
```

## 跳转页面
- 通过配置`url`跳转到指定页面
- 通过配置`mode`为`line`右边出现向右箭头
:::tips 注意
必须`url`和`mode`都设置了才能跳转
:::
```html
<template>
    <hy-notice-bar text="欢迎使用华悦组件库" url="/pages/components/tag/tag" mode="line"></hy-notice-bar>
</template>
```

## 滚动方式
```html
<template>
    <!--横向-->
    <hy-notice-bar text="欢迎使用华悦组件库" direction="row"></hy-notice-bar>
    <!--横向轮播模式-->
    <hy-notice-bar text="欢迎使用华悦组件库" direction="row" step></hy-notice-bar>
    <!--纵向-->
    <hy-notice-bar text="欢迎使用华悦组件库" direction="columns"></hy-notice-bar>
</template>
```

## API

| 参数             | 说明                                                 | 类型                                 | 默认值                          |
|----------------|----------------------------------------------------|------------------------------------|------------------------------|
| text           | 显示的内容，direction为column时要求为数组                       | `array` \| `string`                | -                            |
| direction      | 通告滚动模式，row-横向滚动，column-竖向滚动                        | `row` \| `column`                  | row                          |
| step           | direction = row时，是否使用步进形式滚动                        | `boolean`                          | false                        |
| icon           | 是否显示左侧的音量图标                                        | `string`                           | IconConfig.NOTIFICATION_FILL |
| mode           | 通告模式，link-显示右箭头，closable-显示右侧关闭图标                  | `link` \| `closable`               | -                            |
| color          | 文字颜色                                               | `string`                           | #f9ae3d                      |
| bgColor        | 背景颜色                                               | `string`                           | #fdf6ec                      |
| speed          | 水平滚动时的滚动速度，即每秒滚动多少px(rpx)，这有利于控制文字无论多少时，都能有一个恒定的速度 | `string` \| `number`               | 80                           |
| fontSize       | 字体大小                                               | `string` \| `number`               | 14                           |
| duration       | 滚动一个周期的时间长，单位ms                                    | `number`                           | 2000                         |
| disableTouch   | 是否禁止用手滑动切换                                         | `boolean`                          | true                         |
| url            | 跳转的页面路径                                            | `string`                           | -                            |
| linkType       | 页面跳转的类型                                            | `string`                           | navigateTo                   |
| justifyContent | 文字水平布局类型                                           | `flex-start`\|`center`\|`flex-end` | flex-start                   |

## Events

| 事件名   | 说明         | 回调参数              |
|-------|------------|-------------------|
| click | 点击通告文字触发   | index: 点击的text的索引 |
| close | 点击右侧关闭图标触发 | -                 |