# Badge 徽标数组件
> 该组件一般用于图标右上角显示未读的消息数量，提示用户点击，有圆点和圆包含文字两种形式。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [badge组件](https://uiadmin.net/uview-plus/components/badge.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|-----|----|-------|
| ✔   | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-badge :value="10"></hy-badge>
<!-- 单个组件引入 -->
<HyBadge :value="10"></HyBadge>
```
```ts
import { HyBadge } from "hfyk-app"
```

## 设置徽标的类型为一个圆点
```html
<template>
    <hy-cell isDot></hy-cell>
</template>
```

## 设置数字的显示方式
- `overflow`会根据`max`字段判断，超出显示`${max}+`
- `ellipsis`会根据`max`判断，超出显示`${max}...`
- `limit`会依据`1000`作为判断条件，超出1000，显示`${value/1000}K`，比如`2.2k`、`3.34w`，最多保留2位小数
```html
<template>
    <hy-badge numberType="overflow" max="99" :value="9999"></hy-badge>
    <hy-badge numberType="ellipsis" max="99" :value="9999"></hy-badge>
    <hy-badge numberType="limit" max="99" :value="9999"></hy-badge>
</template>
```

## 主题色
```html
<template>
    <hy-cell :type="warning" :value="99"></hy-cell>
    <hy-cell :type="success" :value="99"></hy-cell>
    <hy-cell :type="error" :value="99"></hy-cell>
    <hy-cell :type="primary" :value="99"></hy-cell>
    <hy-cell :type="info" :value="99"></hy-cell>
</template>
```

## 设置徽标的类型为一个圆点
::: tip 提示
使用`offset`属性必须把`absolute`设置为`true`
:::
```html
<template>
    <view class="box">
        <hy-cell absolute :offset="[10, 10]" :value="99"></hy-cell>
    </view>
</template>

<style>
    .box {
        width: 40px;
        height: 40px;
        top: 100px;
        left: 100px;
        background: #3a5ccc;
        position: relative;
    }
</style>
```

## API

| 参数          | 说明                                                                  | 类型                                                         | 默认值      | 可选值                                        |
|-------------|---------------------------------------------------------------------|------------------------------------------------------------|----------|--------------------------------------------|
| isDot       | 不展示数字，只有一个小点                                                        | `boolean`                                                  | -        | -                                          |
| value       | 展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为0且show-zero为false时隐藏 | `number`                                                   | -        | -                                          |
| show        | 组件是否显示                                                              | `boolean`                                                  | true     | -                                          |
| max         | 最大值，超过最大值会显示 '{max}+'                                               | `number`                                                   | 99       | -                                          |
| type        | 主题类型                                                                | `error` \|  `warning` \|  `success` \| `primary` \| `info` | error    | error / warning / success / primary / info |
| showZero    | 当数值为 0 时，是否展示 Badge                                                 | `boolean`                                                  | false    | -                                          |
| bgColor     | 背景颜色，优先级比type高，如设置，type参数会失效                                        | `string`                                                   | -        | -                                          |
| color       | 字体颜色                                                                | `string`                                                   | #ffffff  | -                                          |
| shape       | 徽标形状，circle-四角均为圆角，horn-左下角为直角                                      | `circle` \| `horn`                                         | circle   | circle/horn                                |
| numberType  | 置数字的显示方式，详细见上方文档                                                    | `overflow` \| `ellipsis` \| `limit`                        | overflow | overflow / ellipsis / limit                |
| offset      | 设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效          | `array`                                                    | -        | -                                          |
| inverted    | 是否反转背景和字体颜色                                                         | `boolean`                                                  | false    | -                                          |
| absolute    | 组件是否绝对定位                                                            | `boolean`                                                  | false    | -                                          |
| customStyle | 定义需要用到的外部样式                                                         | `CSSProperties`                                            | -        | -                                          |
