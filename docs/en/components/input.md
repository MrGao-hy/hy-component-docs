# Input

> This component is an input field. It can be used to quickly implement features such as form validation, text input, and dropdown selection.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage

- Set the input type via `type`; defaults to `text`
- Set the placeholder shown when the input is empty via `placeholder`
- Configure whether to show the input border via `border`
- Bind the `@change` event

```html
<!-- Global usage -->
<hy-input
    text="moonset"
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

Set `clearable` to `true` to add a clear button at the end of the input field.

```html
<hy-input clearable></hy-input>
```

### Input Types

- `text` - Text input keyboard.
- `number` - Numeric input keyboard. Floating-point numbers can be entered on app-vue, while only integers can be entered on app-nvue and mini-program platforms.
- `idcard` - ID card input keyboard, available on WeChat, Alipay, Baidu, and QQ mini-programs.
- `digit` - Numeric keyboard with a decimal point, available on App nvue pages and WeChat, Alipay, Baidu, Toutiao, and QQ mini-programs.
- `password` - Equivalent to setting password to true

```html
<hy-input type="text"></hy-input>
<hy-input type="number"></hy-input>
<hy-input type="idcard"></hy-input>
<hy-input type="digit"></hy-input>
<hy-input type="password"></hy-input>
```

### Input Shape

- Set `shape` to `circle` for an input field with semicircular ends.
- Set `shape` to `square` for a square input field.

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

- Configure the prefix icon via `prefixIcon`, with freely customizable style information.
- Configure the suffix icon via `suffixIcon`, with freely customizable style information.

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

Use the `prefix` or `suffix` slot to specify custom content or icons at the front or back of the input.

```html
<template>
    <!-- Prefix slot -->
    <hy-input placeholder="Prefix slot">
        <template #prefix>
            <hy-icon :name="IconConfig.search"></hy-icon>
        </template>
    </hy-input>

    <!-- Suffix slot -->
    <hy-input placeholder="Suffix slot">
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
| maxlength | Maximum input length; set to -1 for unlimited length (Note: Alipay does not support -1, so set any other value) | `number` | 140 |
| placeholder | Placeholder shown when the input is empty | `string` | - |
| placeholderClass | Style class for the placeholder; note that when scoped is used in the page or component style, you need to prefix the class name with /deep/ | `string` | input-placeholder |
| placeholderStyle | Style of the placeholder | `CSSProperties` | - |
| confirmType | Sets the text of the button in the bottom-right corner; see the uni-app documentation for compatibility details | `string` | done |
| confirmHold | Whether to keep the keyboard up when the bottom-right keyboard button is tapped; not effective on H5 | `boolean` | false |
| holdKeyboard | When focused, the keyboard will not collapse when tapping the page; effective on WeChat Mini Program | `boolean` | false |
| focus | Auto focus. On the H5 platform, whether focusing works and whether the soft keyboard pops up along with it depends on the current browser's implementation. | `boolean` | false |
| autoBlur | Whether focus is automatically lost when the keyboard collapses; currently only effective on App 3.0.0+ | `boolean` | false |
| cursor | Specifies the cursor position when focused | `number` | -1 |
| cursorSpacing | Distance between the bottom of the input and the keyboard when focused | `number` | 30 |
| selectionStart | Cursor start position, effective on auto focus, must be used together with selection-end | `number` | -1 |
| selectionEnd | Cursor end position, effective on auto focus, must be used together with selection-start | `number` | -1 |
| adjustPosition | Whether to automatically push the page up when the keyboard pops up | `boolean` | true |
| inputAlign | Alignment of the input content | `string` | left |
| fontSize | Font size of the input; number values default to the unit px | `string` \| `number` | 15px |
| color | Font color of the input | `string` | - |
| prefixIcon | Prefix icon of the input; see [Icon API](./icon#api) for configuration details | `HyIconProps` | - |
| suffixIcon | Suffix icon of the input; see [Icon API](./icon#api) for configuration details | `HyIconProps` | - |
| border | Border type[^2] | `surround`\|`bottom`\|`none` | surround |
| readonly | Whether it is read-only; the difference from disabled is that disabled grays out the component, while readonly does not | `boolean` | false |
| shape | Input shape[^3] | `circle`\|`square` | square |
| formatter | Input filtering or formatting function (for WeChat Mini Program compatibility, only the setFormatter method can be used) | `function` \| `null` | null |
| customStyle | Custom external styles to apply | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |
| ignoreCompositionEvent | Whether to ignore the handling of text composition system events within the component | `boolean` | false |

### Events

| Event Name            | Description                                            | Callback Parameters |
| --------------------- | ------------------------------------------------------ | ------------------- |
| blur                  | Triggered when the input loses focus                   | value: content value |
| focus                 | Triggered when the input is focused                    | -                   |
| confirm               | Triggered when the done button is tapped               | value: content value |
| keyboardheightchange  | Triggered when the keyboard height changes             | event               |
| update:modelValue     | Triggered when the content changes                     | value: content value |
| change                | Triggered when the content changes                     | value: content value |
| clear                 | Tapped to clear the content                            | -                   |
| onPrefix              | Triggered when the prefix is tapped                    | -                   |
| onSuffix              | Triggered when the suffix is tapped                    | -                   |

### Slots

| Slot Name | Description                |
| --------- | -------------------------- |
| prefix    | Prefix content of the input |
| suffix    | Suffix content of the input |

### CSS Variables

| Variable Name                    | Description                                | Default Value                                     |
| -------------------------------- | ------------------------------------------ | ------------------------------------------------- |
| `--hy-input-radius-square`       | Border radius of the square shape           | `4px`                                             |
| `--hy-input-radius-circle`       | Border radius of the capsule shape          | Follows `--hy-radius-semicircle` (100px)          |
| `--hy-input-height`              | Input height                               | `24px`                                            |
| `--hy-input-line-height`         | Line height                                | `26px`                                            |
| `--hy-input-font-size`           | Font size                                  | `15px`                                            |
| `--hy-input-clear-size`          | Clear button size                          | `20px`                                            |
| `--hy-input-color`               | Input text color                           | Follows `--hy-text-color`                         |
| `--hy-input-placeholder-color`   | Placeholder color                          | Follows `--hy-text-color--placeholder`            |
| `--hy-input-disabled-color`      | Disabled text color                        | Follows `--hy-text-color--disabled`               |
| `--hy-input-clear-radius`        | Clear button border radius                 | Follows `--hy-radius-semicircle` (100px)          |
| `--hy-input-border`              | Border                                     | Follows `--hy-border-line`                        |
| `--hy-input-clear-background`    | Clear button background color              | Follows `--hy-background--track`                  |
| `--hy-input-disabled-background` | Input disabled-state background color      | Follows `--hy-background--disabled`               |
| `--hy-input-field-margin`        | Right margin of the input area             | Follows `--hy-border-margin-padding-base`         |
| `--hy-input-prefix-icon-margin`  | Right margin of the prefix icon            | Follows `--hy-border-margin-padding-sm`           |
| `--hy-input-subfix-icon-margin`  | Left margin of the suffix icon             | Follows `--hy-border-margin-padding-sm`           |
| `--hy-input-text-color`          | Text color                                 | Follows `--hy-text-color`                         |

[^1]: `text`: text input content; `number`: numeric input keyboard — floating-point numbers can be entered on app-vue, while only integers can be entered on app-nvue and mini-program platforms; `idcard`: ID card input keyboard for WeChat, Alipay, Baidu, and QQ mini-programs; `digit`: numeric keyboard with a decimal point for App nvue pages and WeChat, Alipay, Baidu, Toutiao, and QQ mini-programs; `password`: password input field

[^2]: `surround`: border on all four sides; `bottom`: border on the bottom only; `none`: no border

[^3]: `circle`: semicircular ends; `square`: square with rounded corners

<demo-model url="pages-design/input/input"></demo-model>