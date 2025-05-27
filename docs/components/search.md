# Search 搜索组件
> 搜索组件，集成了常见搜索框所需功能，用户可以一键引入，开箱即用。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [search组件](https://uiadmin.net/uview-plus/components/search.html) 的代码实现。
:::

## 平台差异说明

| APP | H5 | 微信小程序 |
|-----|----|-------|
| ✔   | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-search text="月落"></hy-search>
<!-- 单个组件引入 -->
<HySearch type="primary">按钮</HySearch>
```
```ts
import { HySearch } from "hy-app"
```

## 设置输入框形状
- 通过`shape`设置输入框两端的形状。
  - `square`：方形带圆角；
  - `round`：半圆形(默认)
```html
<hy-search shape="round"></hy-search>
```

## 设置输入框内文本位置
- 通过`inputAlign`设置输入框内文本位置
  - `left`: 左边(默认)
  - `center`: 中间
  - `right`: 右边
```html
<hy-search inputAlign="left"></hy-search>
<hy-search inputAlign="center"></hy-search>
<hy-search inputAlign="right"></hy-search>
```

## 是否开启清除控件
- `clearabled`(默认为true)设置为`true`的话，输入框有内容时，右边会显示一个清除的图标
```html
<hy-search clearabled></hy-search>
```

## 是否开启右边控件
- `showAction`配置是否开启右边按钮控件
- `actionText`配置控件内容
- `animation`(默认为false)设置为`true`的话，失去焦点，或者点击控件按钮时，控件自动消失，并且带有动画效果
::: tip 说明
1. 如果不想点击右侧控件时自动消失，请把animation设置为false
2. 右侧控件的默认文字为"搜索"(它本意为控件，碰巧内容为"搜索"二字，并非说它就是一个搜索按钮)，点击它的时候触发的是custom事件，而不是search事件
:::
```html
<hy-search :show-action="true" actionText="搜索" animation></hy-search>
```

## 自定义样式
- 通过`inputAlign`设置输入框内容的对其方式，和css的text-align同理
- 通过`borderColor`设置整个搜索组件的边框，只要配置了颜色，才会出现边框
- 通过`height`设置组件高度
- 通过`disabled`设置是否禁用输入框
- 通过`bgColor`设置是搜索组件背景颜色
```html
<hy-search inputAlign="center"></hy-search>
<hy-search borderColor="red"></hy-search>
<hy-search height="80"></hy-search>
<hy-search disabled></hy-search>
<hy-search bgColor="#ffffff"></hy-search>
```

## API

| 参数               | 说明                             | 类型                 | 默认值               |
|------------------|--------------------------------|--------------------|-------------------|
| v-model          | 双向绑定输入框搜索值                     | `string`           | -                 |
| shape            | 搜索框形状，round-圆形，square-方形       | `circle`\|`square` | circle            |
| bgColor          | 搜索框背景颜色	                       | `string`           | -                 |
| placeholder      | 占位文字内容	                        | `string`           | 请输入关键字            |
| clear            | 是否启用清除控件	                      | `boolean`          | true              |
| focus            | 是否自动获得焦点	                      | `boolean`          | false             |
| showAction       | 是否显示右侧控件(右侧的"搜索"按钮)	           | `boolean`          | true              |
| actionStyle      | 右侧控件的样式，对象形式	                  | `CSSProperties`    | -                 |
| actionText       | 右侧控件文字	                        | `string`           | 搜索                |
| inputAlign       | 输入框内容水平对齐方式	                   | `left` \| `right`  | left              |
| inputStyle       | 自定义输入框样式，对象形式                  | `CSSProperties`    | -                 |
| disabled         | 是否启用输入框                        | `boolean`          | false             |
| borderColor      | 边框颜色，配置了颜色，才会有边框               | `string`           | transparent       |
| color            | 输入框字体颜色                        | `string`           | -                 |
| placeholderColor | placeholder的颜色                 | `string`           | -                 |
| searchIcon       | 输入框左边的图标，详见[图标Api](./icon#api) | `HyIconProps`      | IconConfig.SEARCH |
| margin           | 组件与其他上下左右元素之间的距离，带单位的字符串形式     | `string`           | -                 |
| animation        | 是否开启动画，见上方说明                   | `boolean`          | false             |
| maxlength        | 输入框最大能输入的长度，-1为不限制长度           | `string`\|`number` | -1                |
| height           | 输入框高度，单位rpx                    | `string`\|`number` | 64                |
| label            | 搜索左侧文本信息                       | `string`           | -                 |

## Events

| 事件名       | 说明                                  | 回调参数        |
|-----------|-------------------------------------|-------------|
| change    | 输入框内容发生变化时触发                        | value：输入框的值 |
| search    | 用户确定搜索时触发，用户按回车键，或者手机键盘右下角的"搜索"键时触发 | value：输入框的值 |
| custom    | 用户点击右侧控件时触发                         | value：输入框的值 |
| blur      | 输入框失去焦点时触发                          | value：输入框的值 |
| focus     | 输入框获得焦点时触发                          | value：输入框的值 |
| clear     | 配置了clearabled后，清空内容时会发出此事件          | -           |
| click     | disabled为true时，点击输入框，发出此事件，用于跳转搜索页  | -           |
| clickIcon | 左侧icon点击时候时触发                       | -           |


<demo-model url="pages/components/search/search"></demo-model>