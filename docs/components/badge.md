# Badge 徽标数组件
> 该组件一般用于图标右上角显示未读的消息数量，提示用户点击，有圆点和圆包含文字两种形式。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [badge组件](https://uiadmin.net/uview-plus/components/badge.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-badge :value="10"></hy-badge>
<!-- 单个组件引入 -->
<HyBadge :value="10"></HyBadge>
```
```ts
import { HyBadge } from "hy-app"
```

## 设置徽标的类型为一个圆点
- 通过`isDot`为true设置圆点
```html
<template>
    <hy-badge :value="12" isDot></hy-badge>
</template>
```

## 边角形状
- 通过`shape`设置徽标形状
  - `circle`四角均为圆角
  - `horn`左下角为直角
```html
<template>
    <hy-badge :value="123" shape="circle"></hy-badge>
    <hy-badge :value="123" shape="horn"></hy-badge>
</template>
```

## 设置数字的显示方式
- `overflow`会根据`max`字段判断，超出显示`${max}+`
- `ellipsis`会根据`max`判断，超出显示`${max}...`
- `limit`会依据`1000`作为判断条件，超出1000，显示`${value/1000}K`，比如`2.2k`、`3.34w`，最多保留2位小数
```html
<template>
    <hy-badge numberType="overflow" :value="9999"></hy-badge>
    <hy-badge numberType="ellipsis" :value="9999"></hy-badge>
    <hy-badge numberType="limit" :value="123456"></hy-badge>
</template>
```

## 显示主题色
- 通过`type`设置主题色
 - `primary`主题信息
 - `success`主题主要
 - `error`主题危险
 - `warning`主题警告
 - `info`主题默认
- 通过`bg-color`设置背景色
```html
<template>
    <hy-badge :value="12" type="primary"></hy-badge>
    <hy-badge :value="12" type="error"></hy-badge>
    <hy-badge :value="12" type="info"></hy-badge>
    <hy-badge :value="12" type="success"></hy-badge>
    <hy-badge :value="12" type="warning"></hy-badge>
    <hy-badge :value="12" bg-color="#800080"></hy-badge>
</template>
```

## 反转色
- 通过`inverted`属性设置为`true`
::: tip 温馨提示
如果是自定义颜色反转需要把`color`设置自定义颜色
:::
```html
<hy-badge :value="12" type="primary" inverted></hy-badge>
<hy-badge :value="12" type="error" inverted></hy-badge>
<hy-badge :value="12" type="info" inverted></hy-badge>
<hy-badge :value="12" type="success" inverted></hy-badge>
<hy-badge :value="12" type="warning" inverted></hy-badge>
<hy-badge :value="12" color="#800080" inverted></hy-badge>
```

## 反转色
::: warning 提示
此组件内部默认为absulote绝对定位，所以需要给badge父组件(元素)设置position: relative相对定位， 再通过调整`offset`偏移值
(数组，两个元素，第一个元素为top值，第二个元素为right值，单位rpx，可为负值，如"[-10, -10]")设置到合适的位置即可。
如果不需要组件内容默认的自动绝对定位，设置absolute参数为false即可。
:::
::: code-group
```html [vue]
<view class="relative">
    <hy-badge :value="12" absolute :offset="[-8, 50]"></hy-badge>
    <hy-avatar
            size="large"
            shape="square"
            src="https://img0.baidu.com/it/u=3196617431,1263013381&fm=253"
    ></hy-avatar>
</view>
```

```scss [index.scss]
.relative {
  position: relative;
}
```
:::

## API

| 参数          | 说明                                                                  | 类型                                                         | 默认值      |
|-------------|---------------------------------------------------------------------|------------------------------------------------------------|----------|
| isDot       | 不展示数字，只有一个小点                                                        | `boolean`                                                  | -        |
| value       | 展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为0且show-zero为false时隐藏 | `number`                                                   | -        |
| show        | 组件是否显示                                                              | `boolean`                                                  | true     |
| max         | 最大值，超过最大值会显示 '{max}+'                                               | `number`                                                   | 999      |
| zIndex      | 最大层级                                                                | `number`                                                   | 999      |
| type        | 主题类型                                                                | `error` \|  `warning` \|  `success` \| `primary` \| `info` | error    |
| showZero    | 当数值为 0 时，是否展示 Badge                                                 | `boolean`                                                  | false    |
| bgColor     | 背景颜色，优先级比type高，如设置，type参数会失效                                        | `string`                                                   | -        |
| color       | 字体颜色                                                                | `string`                                                   | #ffffff  |
| shape       | 徽标形状，circle-四角均为圆角，horn-左下角为直角                                      | `circle` \| `horn`                                         | circle   |
| numberType  | 置数字的显示方式，详细见上方文档                                                    | `overflow` \| `ellipsis` \| `limit`                        | overflow |
| offset      | 设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效          | `array`                                                    | -        |
| inverted    | 是否反转背景和字体颜色                                                         | `boolean`                                                  | false    |
| absolute    | 组件是否绝对定位                                                            | `boolean`                                                  | false    |
| customStyle | 自定义需要用到的外部样式                                                        | `CSSProperties`                                            | -        |
| customClass | 自定义外部类名                                                             | `string`                                                   | -        |


<demo-model url="pages/components/badge/badge"></demo-model>