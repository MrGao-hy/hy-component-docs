# Input Component

> This component is an input box. With it, you can quickly implement features such as form validation, content input, and dropdown selection.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | -------------------- | ------------------- |
| ✔        | ✔   | ✔                    | ✔                   |

## :japanese_castle: Basic Usage Example

- Set the input type via `type`; the default is `text`
- Set the placeholder displayed when the input is empty via `placeholder`
- Use `border` to configure whether the input border is shown
- Bind the `@change` event

```html
<!-- Global usage -->
<hy-input
    text="月落"
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

Set `clearable` to `true` to add a clear button at the end of the input box.

```html
<hy-input clearable></hy-input>
```

### Input Types

- `text` - Text input keyboard.
- `number` - Numeric input keyboard. On app-vue, floating-point numbers can be entered; on app-nvue and mini program platforms, only integers can be entered.
- `idcard` - ID card input keyboard, available on WeChat, Alipay, Baidu, and QQ mini programs.
- `digit` - Numeric keyboard with a decimal point, available on App nvue pages and WeChat, Alipay, Baidu, Toutiao, and QQ mini programs.
- `password` - Equivalent to setting password to true

```html
<hy-input type="text"></hy-input>
<hy-input type="number"></hy-input>
<hy-input type="idcard"></hy-input>
<hy-input type="digit"></hy-input>
<hy-input type="password"></hy-input>
```

### Input Shape

- Set `shape` to `circle` to get an input box with semicircular ends.
- Set `shape` to `square` to get a square input box.

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

- Set `prefixIcon` to configure the prefix icon, with freely customizable style information.
- Set `suffixIcon` to configure the suffix icon, with freely customizable style information.

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

Set `slot` to `prefix` or `suffix` to designate prefix/suffix slots for custom content or icons

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

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | The entered value | `string` | - |
| type | Input box type[^1] | `number`\|`idcard`\|`digit`\| `password`\|`text` | text |
| disabled | Whether to disable the input box | `boolean` | false |
| disabledColor | Background color in the disabled state | `string` | - |
| clearable | Whether to show the clear control | `boolean` | false |
| password | Whether it is a password type | `boolean` | false |
| maxlength | Maximum input length. When set to -1, there is no limit on the maximum length (Note: Alipay does not support -1, so any other value must be set) | `number` | 140 |
| placeholder | Placeholder shown when the input box is empty | `string` | - |
| placeholderClass | Specifies the style class of the placeholder. Note that when scoped is used in the page or component style, /deep/ must be prepended to the class name | `string` | input-placeholder |
| placeholderStyle | Specifies the style of the placeholder | `CSSProperties` | - |
| showWordLimit | Whether to show the word count. Only effective when type ="text" or type ="textarea" | `boolean` | false |
| confirmType | Sets the text of the button in the bottom-right corner. See the uni-app documentation for compatibility details | `string` | done |
| confirmHold | Whether to keep the keyboard from collapsing when the bottom-right keyboard button is tapped. Not effective on H5 | `boolean` | false |
| holdKeyboard | When focused, the keyboard will not collapse when the page is tapped. Effective on WeChat Mini Program | `boolean` | false |
| focus | Automatically gets focus. On the H5 platform, whether focusing works and whether the soft keyboard pops up depend on the current browser's implementation. | `boolean` | false |
| autoBlur | Whether to automatically lose focus when the keyboard collapses. Currently only effective on App 3.0.0+ | `boolean` | false |
| disableDefaultPadding | Whether to remove the default padding on iOS. Only effective on WeChat Mini Program and when type=textarea | `boolean` | false |
| cursor | Specifies the cursor position when focused | `number` | -1 |
| cursorSpacing | Distance between the bottom of the input box and the keyboard when focused | `number` | 30 |
| selectionStart | Cursor start position. Effective when auto-focused; must be used together with selection-end | `number` | -1 |
| selectionEnd | Cursor end position. Effective when auto-focused; must be used together with selection-start | `number` | -1 |
| adjustPosition | Whether to automatically push the page up when the keyboard pops up | `boolean` | true |
| inputAlign | Alignment of the input box content | `string` | left |
| fontSize | Font size of the input box. Numbers use px as the default unit | `string` \| `number` | 15px |
| color | Font color of the input box | `string` | - |
| prefixIcon | Prefix icon of the input box. See [Icon API](./icon#api) for configuration details | `HyIconProps` | - |
| suffixIcon | Suffix icon of the input box. See [Icon API](./icon#api) for configuration details | `HyIconProps` | - |
| border | Border type[^2] | `surround`\|`bottom`\|`none` | surround |
| readonly | Whether it is read-only. The difference from disabled is that disabled grays out the component, while readonly does not | `boolean` | false |
| shape | Input box shape[^3] | `circle`\|`square` | square |
| formatter | Input filtering or formatting function (for WeChat Mini Program compatibility, it can only be set via the setFormatter method) | `function` \| `null` | null |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event                | Description                                      | Callback Parameter |
| -------------------- | ------------------------------------------------ | ------------------ |
| blur                 | Triggered when the input box loses focus         | value: content value |
| focus                | Triggered when the input box gains focus         | -                  |
| confirm              | Triggered when the done button is tapped         | value: content value |
| keyboardheightchange | Triggered when the keyboard height changes       | event              |
| update:modelValue    | Triggered when the content changes               | value: content value |
| change               | Triggered when the content changes               | value: content value |
| clear                | Triggered when tapping to clear the content      | -                  |
| onPrefix             | Triggered when the prefix is tapped              | -                  |
| onSuffix             | Triggered when the suffix is tapped              | -                  |

### Slots

| Slot | Description |
| ---- | ----------- |
| prefix | Content in front of the input box |
| suffix | Content after the input box |

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-input-radius-square` | Square corner radius | `4px` |
| `--hy-input-radius-circle` | Capsule corner radius | Follows `--hy-radius-semicircle` (100px) |
| `--hy-input-height` | Input box height | `24px` |
| `--hy-input-line-height` | Line height | `26px` |
| `--hy-input-font-size` | Font size | `15px` |
| `--hy-input-clear-size` | Clear button size | `20px` |
| `--hy-input-color` | Input text color | Follows `--hy-text-color` |
| `--hy-input-placeholder-color` | Placeholder color | Follows `--hy-text-color--placeholder` |
| `--hy-input-disabled-color` | Disabled text color | Follows `--hy-text-color--disabled` |
| `--hy-input-clear-radius` | Clear button corner radius | Follows `--hy-radius-semicircle` (100px) |
| `--hy-input-border` | Border | Follows `--hy-border-line` |


[^1]: `text`: Text input; `number`: Numeric input keyboard — floating-point numbers can be entered under app-vue, while only integers can be entered under app-nvue and mini program platforms; `idcard`: ID card input keyboard, available on WeChat, Alipay, Baidu, and QQ mini programs; `digit`: Numeric keyboard with a decimal point, available on App nvue pages and WeChat, Alipay, Baidu, Toutiao, and QQ mini programs; `password`: Password input box

[^2]: `surround`: Border on all four sides; `bottom`: Border on the bottom; `none`: No border

[^3]: `circle`: Semicircular on both ends; `square`: Square with rounded corners

<demo-model url="pages-design/input/input"></demo-model>