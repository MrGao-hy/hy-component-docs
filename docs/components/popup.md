# Popup 弹出层组件
> 弹出层容器，用于展示弹窗、信息提示等内容，支持上、下、左、右和中部弹出。组件只提供容器，内部内容由用户自定义。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [popup组件](https://uiadmin.net/uview-plus/components/popup.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|-----|----|-------|
| ✔   | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-popup :show="true"></hy-popup>
<!-- 单个组件引入 -->
<HyPopup :show="true"></HyPopup>
```
```ts
import { HyPopup } from "hy-app"
```

## 设置弹出层的方向
- 可以通过`mode`参数设置，可以设置为`left`、`top`、`right`、`bottom`、`center`
```html
<template>
    <!--上-->
    <hy-popup :show="true" mode="top"></hy-popup>
    <!--下-->
    <hy-popup :show="true" mode="bottom"></hy-popup>
    <!--中-->
    <hy-popup :show="true" mode="center"></hy-popup>
    <!--左-->
    <hy-popup :show="true" mode="left"></hy-popup>
    <!--右-->
    <hy-popup :show="true" mode="right"></hy-popup>
</template>
```

## 设置弹出层的圆角
::: tip 温馨提示
需要将`round`设置为圆角值(仅对mode = top | bottom | center有效)。
:::

## 自定义插槽

```html
<template>
    <hy-popup :show="true" :round="10">
        <view class="main">你好呀，我的宝</view>
    </hy-popup>
</template>
```

## API

| 参数                  | 说明                                                                    | 类型                                         | 默认值       |
|---------------------|-----------------------------------------------------------------------|--------------------------------------------|-----------|
| show                | 是否展示弹窗                                                                | `boolean`                                  | false     |
| overlay             | 是否显示遮罩                                                                | `boolean`                                  | true      |
| mode                | 弹出方向                                                                  | `bottom`\|`center`\|`left`\|`right`\|`top` | bottom    |
| duration            | 遮罩打开或收起的动画过渡时间，单位ms                                                   | `number`                                   | 300       |
| closeable           | 是否显示关闭图标                                                              | `boolean`                                  | false     |
| overlayStyle        | 遮罩自定义样式，一般用于修改遮罩颜色                                                    | `CSSProperties`                            | -         |
| overlayOpacity      | 遮罩透明度，0-1之间，勿与overlayStyle共用                                          | `string` \| `number`                       | 0.5       |
| closeOnClickOverlay | 点击遮罩是否关闭弹窗（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）     | `boolean`                                  | true      |
| zIndex              | 弹出层的z-index值                                                          | `number`                                   | 10075     |
| safeAreaInsetBottom | 是否为留出底部安全距离                                                           | `boolean`                                  | true      |
| safeAreaInsetTop    | 是否留出顶部安全距离（状态栏高度）                                                     | `boolean`                                  | false     |
| closeIconPos        | 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角 | `top-left`\|`bottom-left`\|`bottom-right`  | top-right |
| round               | 设置圆角值，仅对mode = top                                                    | bottom                                     | cener有效   | `string`                                   | 0         |
| zoom                | 当mode=center时 是否开启缩放                                                  | `boolean`                                  | true      |
| bgColor             | 背景色，一般用于特殊弹窗内容场景，设置为transparent可去除默认的白色背景                             | `string`                                   | -         |
| customStyle         | 用户自定义样式	                                                              | `CSSProperties`                            | -         |

## Events

| 事件名   | 说明    | 回调参数 |
|-------|-------|------|
| open  | 弹出层打开 | -    |
| close | 弹出层收起 | -    |

## Slots

| 插槽名     | 说明 | 接收值 |
|---------|----|-----|
| default | -  | -   |

<demo-model url="pages/components/popup/popup"></demo-model>