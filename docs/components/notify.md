# Notify 消息提示组件
> 该组件一般用于页面顶部向下滑出一个提示，尔后自动收起的场景。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [notify组件](https://uiadmin.net/uview-plus/components/notify.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-notify message="我是消息提示" :show="show"></hy-notify>
<!-- 单个组件引入 -->
<HyNotify message="我是消息提示" :show="show">按钮</HyNotify>
```
```ts
import { HyNotify } from "hy-app";
import { ref } from 'vue';

// 创建响应式数据  
const show = ref(true);  
```

## 基本使用示例
- 通过设置``啊啊啊
```html
<template>
    <hy-button text="月落"></hy-button>
</template>
```

## API（show事件的参数）

| 参数               | 说明                | 类型                                                | 默认值     |
|------------------|-------------------|---------------------------------------------------|---------|
| top              | 到顶部的距离            | `string`\|`number`                                | 0       |
| type             | 主题类型              | `error`\|`warning`\|`success` \|`primary`\|`info` | primary |
| color            | 字体颜色              | `string`                                          | #ffffff |
| bgColor          | 背景颜色              | `string`                                          | -       |
| message          | 展示的文字内容           | `string`                                          | -       |
| duration         | 展示时长，为0时不消失，单位ms  | `number`                                          | 3000    |
| fontSize         | 字体大小，单位rpx        | `string`\|`number`                                | 15      |
| safeAreaInsetTop | 是否留出顶部安全距离（状态栏高度） | `boolean`                                         | false   |
| customStyle      | 自定义需要用到的外部样式      | `CSSProperties`                                   | -       |
| customClass      | 自定义外部类名           | `string`                                          | -       |


## Methods

| 事件名                                | 说明         | 参数            |
|------------------------------------|------------|---------------|
| show                               | 显示并加载配置    | NotifyOptions |
| primary / success / warning /error | 显示当前主题消息提示 | -             |
| close                              | 关闭消息提示     | -             |

## Slots

| 插槽名  | 说明     | 接收值 |
|------|--------|-----|
| icon | 通知内容图标 | -   |

<demo-model url="pages/components/notify/notify"></demo-model>