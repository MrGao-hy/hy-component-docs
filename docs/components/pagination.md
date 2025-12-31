# Pagination 分页组件
> 当数据量过多时，使用分页分解数据。

::: tip 温馨提示
本项目参考了 Wot-UI 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 Wot-UI 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考Wot-UI的 [pagination组件](https://wot-design-uni.cn/component/pagination.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-pagination v-model="value" :total="999"></hy-pagination>
<!-- 单个组件引入 -->
<HyPagination v-model="value" :total="999"></HyPagination>
```
```ts
import { HyPagination } from "hy-app";
import { ref } from "vue";

const value = ref<number>(1)
```

## 显示图标
- 通过设置`show-icon`，将分页导航展示为Icon图标
```html
<template>
    <hy-pagination v-model="value" :total="999" show-icon></hy-pagination>
</template>
```

## 文字提示
- 通过设置`show-message`，展示文字提示
```html
<template>
    <hy-pagination v-model="value" :total="999" show-message></hy-pagination>
</template>
```

## 一页展示数
- 通过设置`pageSize`，显示一页展示数量
```html
<template>
    <hy-pagination v-model="value" :total="999" :page-size="20"></hy-pagination>
</template>
```

## 设置展示文字
- 通过设置`prevText`，显示上一页按钮文本
- 通过设置`nextText`，显示下一页按钮文本
```html
<template>
    <hy-pagination v-model="value" :total="999" prevText="上" nextText="下"></hy-pagination>
</template>
```

## API

| 参数            | 说明                          | 类型              | 默认值   |
|---------------|-----------------------------|-----------------|-------|
| v-model       | 当前页                         | `number`        | 1     |
| totalPage     | 总页数，如果有total，则优先使用total计算页数 | `number`        | 1     |
| showIcon      | 是否展示分页Icon                  | `boolean`       | false |
| showMessage   | 是否展示文字提示                    | `boolean`       | false |
| total         | 总数据个数                       | `number`        | -     |
| pageSize      | 分页大小                        | `number`        | 10    |
| prevText      | 上一页按钮文字                     | `string`        | 上一页   |
| nextText      | 下一页按钮文字                     | `string`        | 下一页   |
| hideIfOnePage | 总页数只有一页时是否隐藏                | `boolean`       | true  |
| customStyle   | 自定义需要用到的外部样式                | `CSSProperties` | -     |
| customClass   | 自定义外部类名                     | `string`        | -     |

## Events

| 事件名    | 说明    | 回调参数             |
|--------|-------|------------------|
| change | 值修改事件 | value: value为当前数 |


<demo-model url="pages/components/pagination/pagination"></demo-model>