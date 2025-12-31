# CodeInput 验证码输入组件
> 该组件一般用于验证用户短信验证码的场景，也可以结合华玥的键盘组件使用

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [codeInput组件](https://uiadmin.net/uview-plus/components/codeInput.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-code-input v-model="value"></hy-code-input>
<!-- 单个组件引入 -->
<HyCodeInput v-model="value"></HyCodeInput>
```
```ts
import { HyCodeInput } from "hy-app";
import {ref} from "vue";

const value = ref("");
```

## 自定义长度
- 通过设置`maxlength`设置输入长度
```html
<template>
    <hy-code-input v-model="value" :maxlength="4"></hy-code-input>
</template>
```

## 格子间距
- 通过设置`space`设置格子之间的间距。
```html
<template>
    <hy-code-input v-model="value" :space="20"></hy-code-input>
</template>
```

## 用"●"替代输入内容
- `dot`参数配置后，输入内容将不可见，用点替代，事件回调中会返回真实值
```html
<template>
    <hy-code-input v-model="value" dot></hy-code-input>
</template>
```

## 调整颜色
- 通过color和borderColor可设置颜色
```html
<template>
    <hy-code-input v-model="value" color="#f56c6c" borderColor="#f56c6c"></hy-code-input>
</template>
```

## 细边框
- 通过`hairline`可设置细边框
```html
<template>
    <hy-code-input v-model="value" hairline></hy-code-input>
</template>
```

## 自动获取焦点
- 通过`focus`设置为true自动获取焦点
```html
<template>
    <hy-code-input v-model="value" focus></hy-code-input>
</template>
```

## 无边框
- 通过`border`设置为false设置无边框校验码
```html
<template>
    <hy-code-input v-model="value" :border="false" size="50"></hy-code-input>
</template>
```

## 禁止唤起系统键盘
uview-plus有键盘组件，如果您想结合键盘组件进行自定义的输入效果，就需要设置`disabled-keyboard`为true，来保证点击 输入框时不会触发系统自带的键盘，否则会造成冲突。


## API

| 参数               | 说明               | 类型                 | 默认值   |
|------------------|------------------|--------------------|-------|
| v-model          | 预置值              | `string`\|`number` | -     |
| adjustPosition   | 键盘弹起时，是否自动上推页面   | `boolean`          | true  |
| maxlength        | 输入字符个数           | `number`           | 6     |
| border           | 无边框输入框           | `boolean`          | true  |
| dot              | 是否用圆点填充          | `boolean`          | true  |
| mode             | 模式选择，见上方"基本使用"说明 | `box`\|`line`      | box   |
| hairline         | 是否细边框            | `boolean`          | false |
| space            | 字符间的距离           | `number`           | 10    |
| focus            | 是否自动获取焦点         | `boolean`          | false |
| bold             | 字体和输入横线是否加粗      | `boolean`          | false |
| color            | 字体颜色             | `string`           | -     |
| fontSize         | 字体大小，单位rpx       | `string`\|`number` | 18    |
| size             | 输入框的大小，宽等于高      | `string`\|`number` | 35    |
| disabledKeyboard | 禁止点击输入框唤起系统键盘    | `boolean`          | false |
| borderColor      | 边框和线条颜色          | `string`           | -     |
| disabledDot      | 是否禁止输入"."符号      | `boolean`          | true  |
| customStyle      | 自定义需要用到的外部样式     | `CSSProperties`    | -     |
| customClass      | 自定义外部类名          | `string`           | -     |

## Events

| 事件名   | 说明 | 回调参数 |
|-------|--|----|
| change | 输入内容发生改变时触发，具体见上方说明 | value：当前输入的值   |
| finish | 输入字符个数达maxlength值时触发，见上方说明 | value：当前输入的值   |

<demo-model url="pages/components/codeInput/codeInput"></demo-model>