# LineProgress 线形进度条组件
> 展示操作或任务的当前进度，比如上传文件，是一个线形的进度条。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [lineProgress组件](https://uiadmin.net/uview-plus/components/lineProgress.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|-----|----|-------|
| ✔   | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-line-progress :percentage="30"></hy-line-progress>
<!-- 单个组件引入 -->
<HyLineProgress :percentage="30"></HyLineProgress>
```
```ts
import { HyLineProgress } from "hy-app"
```

## 不显示百分比
- `show-text`参数配置是否显示进度条内百分值
```html
<template>
    <hy-line-progress :percentage="30" :showText="false"></hy-line-progress>
</template>
```

## 自定义高度
- `height`进度条高度
```html
<template>
    <hy-line-progress :percentage="30" height="8"></hy-line-progress>
</template>
```

## 自定义样式

```html
<template>
    <hy-line-progress :percentage="30" activeColor="red" inactiveColor="greed"></hy-line-progress>
</template>
```

## 手动加减
- 通过控制`percentage`参数数值达到增减

```html
<template>
    <view style="margin-top: 50px;">
        <hy-line-progress :percentage="percentage" />
        <view style="display: flex;margin-top: 100px;">
            <button @click="computedWidth('minus')">减少</button>
            <button @click="computedWidth('plus')">增加</button>
        </view>
    </view>
</template>

<script setup>
    import { ref } from 'vue';
    import { range } from "hyfk-app";

    const percentage = ref(30);

    const computedWidth = (type) => {
        if (type === 'plus') {
            percentage.value = range(0, 100, percentage.value + 10);
        } else {
            percentage.value = range(0, 100, percentage.value - 10);
        }
    };
</script>
```

## API

| 参数            | 说明              | 类型                   | 默认值                 |
|---------------|-----------------|----------------------|---------------------|
| activeColor   | 进度条激活部分的颜色      | `string`             | ColorConfig.primary |
| inactiveColor | 进度条的底色，默认为灰色    | `string`             | #ececec             |
| percentage    | 进度百分比，数值        | `number`             | 0                   |
| showText      | 是否在进度条内部显示百分比的值 | `boolean`            | true                |
| height        | 进度条的高度，默认单位px	  | `number` \| `string` | 12                  |
| customStyle   | 自定义样式           | `CSSProperties`      | -                   |


## Slots

| 插槽名     | 说明                       | 接收值 |
|---------|--------------------------|-----|
| default | 传入自定义的显示内容，将会覆盖默认显示的百分比值 | -   |

<demo-model url="pages/components/lineProgress/lineProgress"></demo-model>