# FoldingPanel 折叠面板组件
> 通过折叠面板收纳内容区域。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [collapse组件](https://uiadmin.net/uview-plus/components/collapse.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|-----|----|-------|
| ✔   | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-folding-panel :list="columns" title="你好" :border="false">
    <template #default="{ record }">
        <view style="padding: 20px">
            {{ record }}
        </view>
    </template>
</hy-folding-panel>
<!-- 单个组件引入 -->
<HyFoldingPanel type="primary"></HyFoldingPanel>
```
```ts
import { HyFoldingPanel } from "hfyk-app";

const columns = [
    {
        title: "苹果",
        desc: "apply",
        content: "我是内容"
    },
    {
        title: "香蕉",
        desc: "banana"
    },
    {
        title: "橙汁",
        desc: "org",
        error: true
    }
];
```

## 基本使用示例

```html
<template>
    <hy-button text="月落"></hy-button>
</template>
```

## API

| 参数        | 说明           | 类型             | 默认值 |
| ----------- | -------------- | ---------------- |-----|
| show        | 是否显示空状态 | `boolean`          | -   |

## Events

| 事件名   | 说明 | 回调参数 |
|-------|----|------|
| click | -  | -    |

## slots

| 插槽名  | 说明 | 接收值 |
|------|----|----|
| name | -  | -  |

`circle`\|`square`
`small`\|`medium`\|`large`
`error`\|`warning`\|`success`\|`primary`\|`info`
`bottom`\|`center`\|`left`\|`right`\|`top`
`row`\|`column`