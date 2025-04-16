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
import { HyFoldingPanel } from "hy-app";

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

| 参数            | 说明          | 类型                         | 默认值                 |
|---------------|-------------|----------------------------|---------------------|
| list          | 列表数据集       | `array`                    | -                   |
| accordion     | 是否手风琴模式     | `boolean`                  | false               |
| title         | 头部标题        | `string`                   | -                   |
| titleBorder   | 是否显示头部底部边框  | `boolean`                  | false               |
| border        | 是否显示cell下边框 | `boolean`                  | true                |
| verticalColor | 标题前缀竖线颜色    | `string`                   | ColorConfig.primary |
| showVertical  | 是否显示标题前缀竖线  | `boolean`                  | true                |
| disabled      | 是否禁用        | `boolean`                  | false               |
| size          | 单元的大小       | `small`\|`medium`\|`large` | medium              |
| contentHeight | 内容面板高度      | `string` \| `number`       | 120                 |
| customStyle   | 定义需要用到的外部样式 | `CSSProperties`            | -                   |


## list

| 参数             | 说明         | 类型                   | 默认值  |
|----------------|------------|----------------------|------|
| spread         | 是否展示       | `boolean`            | -    |
| icon           | 单元格左图标     | `string`             | -    |
| title          | 单元格标题      | `string`             | -    |
| sub            | 单元格副标题     | `string`             | -    |
| disabled       | 是否禁用单元格    | `boolean`            | -    |
| rightIcon      | 单元格右图标     | `string`             | -    |
| value          | 单元格值       | `string`             | -    |
| url            | 跳转页面地址     | `string`             | -    |
| arrowDirection | 单元格右侧箭头的方向 | `left`\|`up`\|`down` | left |
| content        | 展示面板里值     | `string`             | -    |

## Events

| 事件名    | 说明       | 回调参数                    |
|--------|----------|-------------------------|
| change | 改成面板开关状态 | temp：list单条数据, index：索引 |
| open   | 打开面板     | temp：list单条数据, index：索引 |
| close  | 关闭面板     | temp：list单条数据, index：索引 |

## slots

| 插槽名     | 说明         | 接收值    |
|---------|------------|--------|
| default | 主体部分的内容    | record |
| icon    | 单元格图标      | icon   |
| title   | 单元格标题内容    | title  |
| value   | 单元格右侧value | record |