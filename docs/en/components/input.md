# Input Component

> This component is an input box that allows you to quickly implement features such as form validation, content input, and dropdown selection.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Examples

- Use `type` to set the type of the input box, defaults to `text`
- Use `placeholder` to set the placeholder shown when the input box is empty
- Use `border` to configure whether to display the input box border
- Bind the `@change` event

```html
<!-- 全局使用 -->
<hy-input
    text="月落"
    placeholder="请输入内容"
    border="surround"
    v-model="value"
    @change="change"
></hy-input>
```

```ts
import { ref } from 'vue';

const value = ref('');
```

### Clearable Input

Setting `clearable` to `true` adds a clear button after the input box.

```html
<hy-input clearable></hy-input>
```

### Input Box Types

- `text` - Text input keyboard.
- `number` - Numeric input keyboard; floating-point numbers can be entered on app-vue, while only integers can be entered on app-nvue and mini program platforms.
- `idcard` - ID card input keyboard; available on WeChat, Alipay, Baidu, and QQ Mini Programs.
- `digit` - Numeric keyboard with decimal point; available on App nvue pages, WeChat, Alipay, Baidu, Toutiao, and QQ Mini Programs.
- `password` - Equivalent to setting password to true

```html
<hy-input type="text"></hy-input>
<hy-input type="number"></hy-input>
<hy-input type="idcard"></hy-input>
<hy-input type="digit"></hy-input>
<hy-input type="password"></hy-input>
```

### Input Box Shape

- Setting `shape` to `circle` gives you an input box with semicircular ends.
- Setting `shape` to `square` gives you a square input box.

```html
<hy-input shape="circle"></hy-input>
<hy-input shape="square"></hy-input>
```

### Input Box Border

- Setting the `border` property to `surround` gives you a border on all four sides
- Setting the `border` property to `none` gives you no border
- Setting the `border` property to `bottom` turns it into an underline

```html
<hy-input border="surround"></hy-input>
<hy-input border="none"></hy-input>
<hy-input border="bottom"></hy-input>
```

### Prefix and Suffix Icons

- Configure the prefix icon via `prefixIcon` with freely customizable style information.
- Configure the suffix icon via `suffixIcon` with freely customizable style information.

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

### Prefix and Suffix Slots

Set `slot` to `prefix` or `suffix` to specify the prefix or suffix slot for custom content or icons.

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

<script setup lang="ts"></script>
```

## API

### Input Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | The value of the input | `string` | - |
| type | Type of the input box[^1] | `number`\|`idcard`\|`digit`\| `password`\|`text` | text |
| disabled | Whether to disable the input box | `boolean` | false |
| disabledColor | Background color in the disabled state | `string` | - |
| clearable | Whether to show the clear control | `boolean` | false |
| password | Whether it is a password type | `boolean` | false |
| maxlength | Maximum input length; set to -1 for unlimited length (Note: Alipay does not support -1, so you need to set it to any other value) | `number` | 140 |
| placeholder | Placeholder shown when the input box is empty | `string` | - |
| placeholderClass | Specifies the style class of the placeholder; note that when scoped is used in the style of the page or component, you need to write /deep/ before the class name | `string` | input-placeholder |
| placeholderStyle | Specifies the style of the placeholder | `CSSProperties` | - |
| showWordLimit | Whether to show the input word count; only effective when type ="text" or type ="textarea" | `boolean` | false |
| confirmType | Sets the text of the button in the bottom-right corner; see the uni-app documentation for compatibility details | `string` | done |
| confirmHold | Whether to keep the keyboard from collapsing when the button in the bottom-right corner of the keyboard is tapped; not effective on H5 | `boolean` | false |
| holdKeyboard | When focused, the keyboard does not collapse when the page is tapped; effective on WeChat Mini Program | `boolean` | false |
| focus | Automatically gets focus; on the H5 platform, whether it can focus and whether the soft keyboard pops up along with it depends on the implementation of the current browser itself. | `boolean` | false |
| autoBlur | Whether to automatically lose focus when the keyboard collapses; currently only effective on App 3.0.0+ | `boolean` | false |
| disableDefaultPadding | Whether to remove the default padding on iOS; only effective on WeChat Mini Program with type=textarea | `boolean` | false |
| cursor | Specifies the cursor position when focused | `number` | -1 |
| cursorSpacing | Distance between the bottom of the input box and the keyboard when the input box is focused | `number` | 30 |
| selectionStart | Cursor start position; effective with auto focus, must be used together with selection-end | `number` | -1 |
| selectionEnd | Cursor end position; effective with auto focus, must be used together with selection-start | `number` | -1 |
| adjustPosition | Whether the page is automatically pushed up when the keyboard pops up | `boolean` | true |
| inputAlign | Alignment of the input box content | `string` | left |
| fontSize | Font size of the input box; numbers default to px | `string` \| `number` | 15px |
| color | Font color of the input box | `string` | - |
| prefixIcon | Prefix icon of the input box; see [Icon API](./icon#api) for configuration details | `HyIconProps` | - |
| suffixIcon | Suffix icon of the input box; see [Icon API](./icon#api) for configuration details | `HyIconProps` | - |
| border | Border type[^2] | `surround`\|`bottom`\|`none` | surround |
| readonly | Whether it is read-only; the difference from disabled is that disabled grays out the component, while readonly does not | `boolean` | false |
| shape | Shape of the input box[^3] | `circle`\|`square` | square |
| formatter | Input filtering or formatting function (for WeChat Mini Program compatibility, it can only be set via the setFormatter method) | `function` \| `null` | null |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name            | Description                                        | Callback Parameters |
| --------------------- | -------------------------------------------------- | ------------------- |
| blur                  | Triggered when the input box loses focus           | value: content value |
| focus                 | Triggered when the input box gains focus           | -                   |
| confirm               | Triggered when the done button is tapped           | value: content value |
| keyboardheightchange  | Triggered when the keyboard height changes         | event               |
| update:modelValue     | Triggered when the content changes                 | value: content value |
| change                | Triggered when the content changes                 | value: content value |
| clear                 | Tapped to clear the content                        | -                   |
| onPrefix              | Triggered when the prefix is tapped                | -                   |
| onSuffix              | Triggered when the suffix is tapped                | -                   |

### Slots

| Slot Name | Description                    |
| --------- | ------------------------------ |
| prefix    | Prefix content of the input box |
| suffix    | Suffix content of the input box |

[^1]: `text`: text input content; `number`: numeric input keyboard, floating-point numbers can be entered on app-vue, while only integers can be entered on app-nvue and mini program platforms; `idcard`: ID card input keyboard, available on WeChat, Alipay, Baidu, and QQ Mini Programs; `digit`: numeric keyboard with decimal point, available on App nvue pages, WeChat, Alipay, Baidu, Toutiao, and QQ Mini Programs; `password`: password input box

[^2]: `surround`: border on all four sides; `bottom`: border on the bottom; `none`: no border

[^3]: `circle`: semicircular ends; `square`: square with rounded corners

<demo-model url="pages-design/input/input"></demo-model>