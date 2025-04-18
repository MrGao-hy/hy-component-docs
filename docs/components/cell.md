# Cell 单元格组件
> cell单元格一般用于一组列表的情况，比如个人中心页，设置页等。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [cell组件](https://uiadmin.net/uview-plus/components/cell.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-cell :list="list"></hy-cell>
<!-- 单个组件引入 -->
<HyCell :list="list"></HyCell>
```
```ts
import { HyCell } from "hy-app";
import { ref } from "vue";

const list = ref([
    {title: "西施", subhead: "沉鱼"},
    {title: "王昭君", subhead: "落雁"},
    {title: "貂蝉", subhead: "闭月"},
    {title: "杨玉环", subhead: "羞花"}
])
```

## 自定义icon内容
```html
<template>
  <hy-cell :list="list">
      <template #icon="{icon}">
          <hy-icon :name="icon"></hy-icon>
      </template>
      <template #right-icon="{icon}">
          {{icon}}
      </template>
  </hy-cell>
</template>

<script setup>
    import { IconConfig } from "hfyk-app";
    const list = ref([
        {title: "西施", subhead: "沉鱼", icon: IconConfig.HOME_FILL},
        {title: "王昭君", subhead: "落雁"},
        {title: "貂蝉", subhead: "闭月"},
        {title: "杨玉环", subhead: "羞花"}
    ])
</script>
```

## 右侧内容定位
- 通过设置`arrange`设置改变value的位置
  - `left`：左边
  - `center`：中间
  - `right`：右边
```html
<template>
    <hy-cell :list="list" arrange="left"></hy-cell>
    <hy-cell :list="list" arrange="center"></hy-cell>
    <hy-cell :list="list" arrange=right""></hy-cell>
</template>
```

## cell大小
```html
<template>
    <hy-cell :list="list" size="small"></hy-cell>
    <hy-cell :list="list" size="medium"></hy-cell>
    <hy-cell :list="list" size="large"></hy-cell>
</template>
```

## 右侧箭头上下左转动
```html
<template>
    <hy-cell :list="list" arrow-direction="up"></hy-cell>
    <hy-cell :list="list" arrow-direction="right"></hy-cell>
    <hy-cell :list="list" arrow-direction="down"></hy-cell>
    <hy-cell :list="list" arrow-direction="left"></hy-cell>
</template>
```

## 跳转页面
```html
<template>
    <hy-cell :list="list"></hy-cell>
</template>

<script setup>
    const list = ref([
        {title: "西施", subhead: "沉鱼", url: "/pages/componentsB/tag/tag"},
        {title: "王昭君", url: "/pages/componentsB/tag/tag"},
        {title: "貂蝉", subhead: "闭月"},
        {title: "杨玉环", subhead: "羞花"}
    ])
</script>
```

## API

| 参数             | 说明                        | 类型                             | 默认值                 |
|----------------|---------------------------|--------------------------------|---------------------|
| list           | cell列表数据                  | `array`                        | -                   |
| title          | 头部标题                      | `string`                       | -                   |
| titleBorder    | 是否显示头部底部边框                | `boolean`                      | true                |
| border         | 是否显示cell下边框               | `boolean`                      | true                |
| showVertical   | 是否显示标题前缀竖线                | `boolean`                      | true                |
| verticalColor  | 标题前缀竖线颜色                  | `string`                       | ColorConfig.primary |
| disabled       | 是否禁用cell                  | `boolean`                      | false               |
| clickable      | 是否开启点击反馈(表现为点击时加上灰色背景)    | `boolean`                      | false               |
| size           | 单元的大小                     | `small` \| `medium` \| `large` | medium              |
| value          | 右侧的内容                     | `string`                       | -                   |
| center         | 内容是否垂直居中(主要是针对右侧的value部分) | `boolean`                      | false               |
| rightIcon      | 右侧的图标箭头                   | `string`                       | IconConfig.RIGHT    |
| arrowDirection | 右侧箭头的方向                   | `left` \| `up` \| `down`       | left                |
| rightIconStyle | 自定义右侧icon样式               | `CSSProperties`                | -                   |
| customStyle    | 定义需要用到的外部样式               | `CSSProperties`                | -                   |

### list集合

| 参数             | 说明        | 类型                   | 默认值 |
|----------------|-----------|----------------------|-----|
| icon           | 左图标       | `string`             | -   |
| title          | 标题        | `string`             | -   |
| subhead        | 副标题       | `string`             | -   |
| disabled       | 是否禁用      | `boolean`            | -   |
| rightIcon      | 右图标       | `string`             | -   |
| value          | cell中间的值  | `string`             | -   |
| url            | 跳转页面地址    | `string`             | -   |
| arrowDirection | 单个右侧箭头的方向 | `left`\|`up`\|`down` | -   |

## Events

| 事件名   | 说明          | 回调参数                           |
|-------|-------------|--------------------------------|
| click | 点击cell列表时触发 | temp: cell列表当行值, index: cell索引 |


## slots

| 插槽名        | 说明           | 接收值    |
|------------|--------------|--------|
| title      | 自定义主标题部分的内容  | title  |
| default    | 自定义整个单元列表内容  | -      |
| icon       | 自定义左侧的图标     | icon   |
| cell-title | 自定义cell标题的内容 | title  |
| sub        | 自定义小标题内容     | sub    |
| value      | 自定义右侧值的内容    | record |
| right-icon | 自定义右侧图标内容    | icon   |
