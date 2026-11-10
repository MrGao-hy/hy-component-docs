# Input Component

> This component is an input box that allows you to quickly implement form validation, content input, dropdown selection, and other features.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Examples

- Set the input type via `type`, which defaults to `text`
- Set the placeholder shown when the input is empty via `placeholder`
- Configure whether to display the input border via `border`
- Bind the `@change` event

```html
<!-- Global usage -->
<hy-input
    text="Yueluo"
    placeholder="Please enter content"
    border="surround"
    v-model="value"
    @change="change"
></hy-input>
```

```ts
import { ref } from 'vue';

const value = ref('');
```

### Clearable

Setting `clearable` to `true` adds a clear button at the end of the input.

```html
<hy-input clearable></hy-input>
```

### Input Types

- `text` - Text input keyboard.
- `number` - Numeric input keyboard. Floating-point numbers can be entered on app-vue, while only integers can be entered on app-nvue and mini-program platforms.
- `idcard` - ID card input keyboard, available on WeChat, Alipay, Baidu, and QQ mini-programs.
- `digit` - Numeric keyboard with a decimal point, available on nvue pages in App, as well as on WeChat, Alipay, Baidu, Toutiao, and QQ mini-programs.
- `password` - Equivalent to the effect of setting password to true

```html
<hy-input type="text"></hy-input>
<hy-input type="number"></hy-input>
<hy-input type="idcard"></hy-input>
<hy-input type="digit"></hy-input>
<hy-input type="password"></hy-input>
```

### Input Shape

- Setting `shape` to `circle` produces an input with semicircular ends.
- Setting `shape` to `square` produces a square input.

```html
<hy-input shape="circle"></hy-input>
<hy-input shape="square"></hy-input>
```

### Input Border

- Set the `border` property to `surround` for a border on all four sides
- Set the `border` property to `none` for no border
- Set the `border` property to `bottom` to turn it into an underline

```html
<hy-input border="surround"></hy-input>
<hy-input border="none"></hy-input>
<hy-input border="bottom"></hy-input>
```

### Prefix and Suffix Icons

- Set `prefixIcon` to configure a prefix icon with freely customizable style information.
- Set `suffixIcon` to configure a suffix icon with freely customizable style information.

```html
<hy-input
    placeholder="Prefix icon"
    :prefixIcon="{
            name: 'search'
        }"
></hy-input>
<hy-input
    placeholder="Suffix icon"
    :suffixIcon="{
            name: 'map-fill'
        }"
    suffixIconStyle="color: #909399"
></hy-input>
```

### Prefix and Suffix Slots

Set `slot` to `prefix` or `suffix` to specify the prefix/suffix slots for custom content or icons

```html
<template>
    <!-- Prefix slot -->
    <hy-input placeholder="Prefix slot">
        <template #prefix>
            <hy-icon :name="IconConfig.search"></hy-icon>
        </template>
    </hy-input>

    <!-- Suffix slot -->
    <hy-input placeholder="Prefix slot">
        <template #suffix>
            <hy-button text="Get verification code"></hy-button>
        </template>
    </hy-input>
</template>

<script setup lang="ts"></script>
```

## API

### Input Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | The input value | `string` | - |
| type | Input type[^1] | `number`\|`idcard`\|`digit`\| `password`\|`text` | text |
| disabled | Whether to disable the input | `boolean` | false |
| disabledColor | Background color in the disabled state | `string` | - |
| clearable | Whether to show the clear control | `boolean` | false |
| password | Whether it is a password type | `boolean` | false |
| maxlength | Maximum input length; when set to -1, the maximum length is unlimited (Note: Alipay does not support -1, so set it to any other value) | `number` | 140 |
| placeholder | Placeholder shown when the input is empty | `string` | - |
| placeholderClass | Style class for the placeholder. Note that when the page or component style uses scoped, you need to write /deep/ before the class name | `string` | input-placeholder |
| placeholderStyle | Style of the placeholder | `CSSProperties` | - |
| showWordLimit | Whether to show the input word count, only effective when type="text" or type="textarea" | `boolean` | false |
| confirmType | Text of the button in the bottom-right corner of the keyboard; see the uni-app documentation for compatibility details | `string` | done |
| confirmHold | Whether to keep the keyboard from collapsing when the bottom-right keyboard button is tapped; ineffective on H5 | `boolean` | false |
| holdKeyboard | When focused, the keyboard won't collapse when tapping the page; effective on WeChat Mini Program | `boolean` | false |
| focus | Automatically obtain focus. On the H5 platform, whether focus can be obtained and whether the soft keyboard pops up along with it depends on the implementation of the current browser. | `boolean` | false |
| autoBlur | Whether to automatically lose focus when the keyboard collapses; currently only effective on App 3.0.0+ | `boolean` | false |
| disableDefaultPadding | Whether to remove the default padding on iOS; only effective on WeChat Mini Program and when type=textarea | `boolean` | false |
| cursor | Position of the cursor when focused | `number` | -1 |
| cursorSpacing | Distance between the bottom of the input and the keyboard when the input is focused | `number` | 30 |
| selectionStart | Cursor start position; effective with auto focus, must be used together with selection-end | `number` | -1 |
| selectionEnd | Cursor end position; effective with auto focus, must be used together with selection-start | `number` | -1 |
| adjustPosition | Whether to automatically push the page up when the keyboard pops up | `boolean` | true |
| inputAlign | Alignment of the input content | `string` | left |
| fontSize | Font size of the input; the default unit for numeric values is px | `string` \| `number` | 15px |
| color | Font color of the input | `string` | - |
| prefixIcon | Prefix icon of the input; see [Icon API](./icon#api) for configuration details | `HyIconProps` | - |
| suffixIcon | Suffix icon of the input; see [Icon API](./icon#api) for configuration details | `HyIconProps` | - |
| border | Border type[^2] | `surround`\|`bottom`\|`none` | surround |
| readonly | Whether it is read-only. Unlike disabled, disabled grays out the component while readonly does not | `boolean` | false |
| shape | Input shape[^3] | `circle`\|`square` | square |
| formatter | Input filtering or formatting function (for WeChat Mini Program compatibility, it can only be set via the setFormatter method) | `function` \| `null` | null |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name          | Description                                | Callback Parameters |
| ------------------- | ------------------------------------------ | ------------------- |
| blur                | Triggered when the input loses focus       | value: content value |
| focus               | Triggered when the input gains focus       | -                   |
| confirm             | Triggered when the done button is tapped   | value: content value |
| keyboardheightchange | Triggered when the keyboard height changes | event               |
| update:modelValue   | Triggered when the content changes         | value: content value |
| change              | Triggered when the content changes         | value: content value |
| clear               | Tap to clear the content                   | -                   |
| onPrefix            | Triggered when the prefix is tapped        | -                   |
| onSuffix            | Triggered when the suffix is tapped        | -                   |

### Slots

| Slot Name | Description               |
| --------- | ------------------------- |
| prefix    | Prefix content of the input |
| suffix    | Suffix content of the input |

### CSS Variables

| Variable Name                  | Description               | Default Value                          |
| ------------------------------ | ------------------------- | -------------------------------------- |
| `--hy-input-radius-square`     | Square corner radius      | `4px`                                  |
| `--hy-input-radius-circle`     | Capsule corner radius     | Follows `--hy-radius-semicircle` (100px) |
| `--hy-input-height`            | Input height              | `24px`                                 |
| `--hy-input-line-height`       | Line height               | `26px`                                 |
| `--hy-input-font-size`         | Font size                 | `15px`                                 |
| `--hy-input-clear-size`        | Clear button size         | `20px`                                 |
| `--hy-input-color`             | Input text color          | Follows `--hy-text-color`              |
| `--hy-input-placeholder-color` | Placeholder color         | Follows `--hy-text-color--placeholder` |
| `--hy-input-disabled-color`    | Disabled text color       | Follows `--hy-text-color--disabled`    |
| `--hy-input-clear-radius`      | Clear button corner radius | Follows `--hy-radius-semicircle` (100px) |
| `--hy-input-border`            | Border                    | Follows `--hy-border-line`             |

[^1]: `text`: text input keyboard; `number`: numeric input keyboard — floating-point numbers can be entered on app-vue, while only integers can be entered on app-nvue and mini-program platforms; `idcard`: ID card input keyboard, available on WeChat, Alipay, Baidu, and QQ mini-programs; `digit`: numeric keyboard with a decimal point, available on nvue pages in App, as well as on WeChat, Alipay, Baidu, Toutiao, and QQ mini-programs; `password`: password input box

[^2]: `surround`: border on all four sides; `bottom`: border at the bottom; `none`: no border

[^3]: `circle`: semicircular on both sides; `square`: square with rounded corners

<demo-model url="pages-design/input/input"></demo-model>