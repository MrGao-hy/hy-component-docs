# Input 输入框组件
> 此组件为一个输入框，利用它可以快速实现表单验证，输入内容，下拉选择等功能。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [input组件](https://uiadmin.net/uview-plus/components/input.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|---|----|
| ✔        | ✔  | ✔     |

## 基本使用示例

- 通过`type`设置输入框的类型，默认`text`
- 通过`placeholder`设置输入框为空时的占位符
- 通过`border`配置是否显示输入框的边框
- 绑定`@change`事件
```html
<!-- 全局使用 -->
<hy-input 
    text="月落"
    placeholder="请输入内容"
    border="surround"
    v-model="value"
    @change="change"
></hy-input>
<!-- 单个组件引入 -->
<HyInput type="primary"  v-model="value"></HyInput>
```
```ts
import { HyInput } from "hy-app";
import { ref } from 'vue';

const value = ref('');
```

## 可清空字符
将`clearable`设置为`true`，会在输入框后方增加一个清空按钮。
```html
<hy-input clearable></hy-input>
```

## 输入框的类型
- `text`-文本输入键盘。
- `number`-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数。
- `idcard`-身份证输入键盘，微信、支付宝、百度、QQ小程序。
- `digit`-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序。
- `password`-等同于设置password为true的效果
```html
<hy-input type="text"></hy-input>
<hy-input type="number"></hy-input>
<hy-input type="idcard"></hy-input>
<hy-input type="digit"></hy-input>
<hy-input type="password"></hy-input>
```

## 输入框形状
- 将`shape`设置为`circle`，会得到两边半圆输入框。
- 将`shape`设置为`square`，会得到方形输入框。
```html
<hy-input shape="circle"></hy-input>
<hy-input shape="square"></hy-input>
```

## 输入框边框
- 通过设置属性`border`为`surround`即可四周边框
- 通过设置属性`border`为`none`无边框
- 通过设置属性`border`为`bottom`即可变成一个下划线
```html
<hy-input border="surround"></hy-input>
<hy-input border="none"></hy-input>
<hy-input border="bottom"></hy-input>
```

## 前后图标
- 通过设置`prefixIcon`配置前缀图标可自由设置样式信息。
- 通过设置`suffixIcon`配置后缀图标可自由设置样式信息。
```html
<hy-input
        placeholder="前置图标"
        :prefixIcon="{
            name: 'search'
        }"
></hy-input>
<hy-input
        placeholder="后置图标"
        :suffixIcon="{
            name: 'map-fill'
        }"
        suffixIconStyle="color: #909399"
></hy-input>
```

## 前后插槽
通过设置`slot`为`prefix`或`suffix`来指定前后插槽,自定义内容或者图标
```html
<template>
    <!-- 前置插槽 -->
    <hy-input placeholder="前置插槽">
        <template #prefix>
            <hy-icon :name="IconConfig.search"></hy-icon>
        </template>
    </hy-input>

    <!-- 后置插槽 -->
    <hy-input placeholder="前置插槽">
        <template #suffix>
            <hy-button text="获取验证码"></hy-button>
        </template>
    </hy-input>
</template>

<script setup lang="ts">
    import { IconConfig } from "hy-app"
</script>
```

## API

| 参数                    | 说明                                                      | 类型                                               | 默认值               |
|-----------------------|---------------------------------------------------------|--------------------------------------------------|-------------------|
| modelValue            | 输入的值                                                    | `string` \| `number`                             | -                 |
| type                  | 输入框类型[^1]                                               | `number`\|`idcard`\|`digit`\| `password`\|`text` | text              |
| disabled              | 是否禁用输入框                                                 | `boolean`                                        | false             |
| disabledColor         | 禁用状态时的背景色                                               | `string`                                         | -                 |
| clearable             | 是否显示清除控件                                                | `boolean`                                        | false             |
| password              | 是否密码类型                                                  | `boolean`                                        | false             |
| maxlength             | 最大输入长度，设置为 -1 的时候不限制最大长度                                | `number`                                         | 140               |
| placeholder           | 输入框为空时的占位符                                              | `string`                                         | -                 |
| placeholderClass      | 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/ | `string`                                         | input-placeholder |
| placeholderStyle      | 指定placeholder的样式                                        | `CSSProperties`                                  | -                 |
| showWordLimit         | 是否显示输入字数统计，只在 type ="text"或type ="textarea"时有效          | `boolean`                                        | false             |
| confirmType           | 设置右下角按钮的文字，兼容性详见uni-app文档                               | `string`                                         | done              |
| confirmHold           | 点击键盘右下角按钮时是否保持键盘不收起，H5无效	                               | `boolean`                                        | false             |
| holdKeyboard          | focus时，点击页面的时候不收起键盘，微信小程序有效	                            | `boolean`                                        | false             |
| focus                 | 自动获取焦点，在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。	           | `boolean`                                        | false             |
| autoBlur              | 键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效	                          | `boolean`                                        | false             |
| disableDefaultPadding | 是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效	              | `boolean`                                        | false             |
| cursor                | 指定focus时光标的位置	                                          | `number`                                         | 	-1               |
| cursorSpacing         | 输入框聚焦时底部与键盘的距离	                                         | `number`                                         | 30                |
| selectionStart        | 光标起始位置，自动聚集时有效，需与selection-end搭配使用	                     | `number`                                         | -1                |
| selectionEnd          | 光标结束位置，自动聚集时有效，需与selection-start搭配使用	                   | `number`                                         | -1                |
| adjustPosition        | 键盘弹起时，是否自动上推页面	                                         | `boolean`                                        | true              |
| inputAlign            | 输入框内容对齐方式	                                              | `string`                                         | left              |
| fontSize              | 输入框字体的大小	                                               | `string` \| `number`                             | 15px              |
| color                 | 输入框字体颜色	                                                | `string`                                         | -                 |
| prefixIcon            | 输入框前置图标,配置详情见[图标Api](./icon#api)	                       | `HyIconProps`                                    | -                 |
| suffixIcon            | 输入框后置图标,配置详情见[图标Api](./icon#api)                        | `HyIconProps`                                    | -                 |
| border                | 边框类型[^2]                                                | `surround`\|`bottom`\|`none`                     | surround          |
| readonly              | 是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会          | `boolean`                                        | false             |
| shape                 | 输入框形状[^3]                                               | `circle`\|`square`                               | square            |
| formatter             | 输入过滤或格式化函数(如需兼容微信小程序，则只能通过setFormatter方法)               | `function` \| `null`                             | null              |
| customStyle           | 自定义需要用到的外部样式                                            | `CSSProperties`                                  | -                 |
| customClass           | 自定义外部类名                                                 | `string`                                         | -                 |


## Events
| 事件名                  | 说明               | 回调参数      |
|----------------------|------------------|-----------|
| blur                 | 输入框失去焦点时触发       | value：内容值 |
| focus                | 输入框聚焦时触发         | -         |
| confirm              | 点击完成按钮时触发        | value：内容值 |
| keyboardheightchange | 键盘高度发生变化的时候触发此事件 | event     |
| update:modelValue    | 内容发生变化触发此事件      | value：内容值 |
| change               | 内容发生变化触发此事件      | value：内容值 |
| clear                | 点击清空内容           | -         |
| onPrefix             | 点击前缀触发           | -         |
| onSuffix             | 点击后缀触发           | -         |


## Slots
| 插槽名    | 说明      |
|--------|---------|
| prefix | 输入框前置内容 |
| suffix | 输入框后置内容 |

[^1]: `text`：输入文本内容；`number`：数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数；`idcard`：身份证输入键盘，微信、支付宝、百度、QQ小程序；`digit`-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序；`password`-密码输入框
[^2]: `surround`：四周边框；`bottom`：底部有边框；`none`：无边框
[^3]: `circle`：两边为半圆；`square`：方形带圆角

<demo-model url="pages/components/input/input"></demo-model>