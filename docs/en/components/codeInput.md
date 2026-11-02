# CodeInput Verification Code Input Component

> This component is generally used in scenarios where the user's SMS verification code needs to be verified, and it can also be used in combination with Hy's keyboard component

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :warning: Notes

::: warning Notes

- When `disabledKeyboard` is set to `true`, tapping the input box will not bring up the system keyboard, making it suitable for use with a custom keyboard
- When the `dot` parameter is set to `true`, the input content will be displayed as dots, but event callbacks will return the real value
- `mode` supports two modes: `box` (box mode) and `line` (bottom line mode)
- The `disabledDot` parameter controls whether inputting the decimal point is prohibited; the default is `true` (input prohibited)

:::

## :japanese_castle: Basic Usage Example

```html
<template>
    <hy-code-input v-model="value"></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref('');
</script>
```

### Custom Length

```html
<template>
    <hy-code-input v-model="value" :maxlength="4"></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref('');
</script>
```

### Box Spacing

```html
<template>
    <hy-code-input v-model="value" :space="20"></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref('');
</script>
```

### Replace Input Content with Dots

```html
<template>
    <hy-code-input v-model="value" dot></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref('');
</script>
```

### Line Mode

```html
<template>
    <hy-code-input v-model="value" mode="line"></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref('');
</script>
```

### Adjust Colors

```html
<template>
    <hy-code-input v-model="value" color="#f56c6c" borderColor="#f56c6c"></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref('');
</script>
```

### Hairline Border

```html
<template>
    <hy-code-input v-model="value" hairline></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref('');
</script>
```

### Auto Focus

```html
<template>
    <hy-code-input v-model="value" focus></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref('');
</script>
```

### Borderless

```html
<template>
    <hy-code-input v-model="value" :border="false" size="50"></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref('');
</script>
```

### Working with a Custom Keyboard

When you need to use a custom keyboard, set `disabledKeyboard` to `true` to prevent conflicts between the system keyboard and the custom keyboard. The custom keyboard opens automatically when the input box is tapped and gains focus.

```html
<template>
    <view>
        <hy-code-input
            v-model="keyboardValue"
            :disabledKeyboard="true"
            mode="box"
            @finish="handleFinish"
            @focus="showKeyboard = true"
        ></hy-code-input>

        <hy-keyboard
            v-model:show="showKeyboard"
            mode="default"
            v-model="keyboardValue"
            :show-dot-key="false"
            close-text="Done"
            @close="showKeyboard = false"
        ></hy-keyboard>
    </view>
</template>

<script setup>
    import { ref } from 'vue';

    const keyboardValue = ref('');
    const showKeyboard = ref(false);

    const handleFinish = (value) => {
        console.log('Input complete:', value);
        showKeyboard.value = false;
        uni.showToast({
            title: `Input complete: ${value}`,
            icon: 'none',
        });
    };
</script>
```

### Listen to Input Events

```html
<template>
    <hy-code-input v-model="value" @change="handleChange" @finish="handleFinish"></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref('');

    const handleChange = (value) => {
        console.log('Input changed:', value);
    };

    const handleFinish = (value) => {
        console.log('Input complete:', value);
    };
</script>
```

### Listen to Focus Events

```html
<template>
    <hy-code-input v-model="value" @focus="handleFocus" @blur="handleBlur"></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref('');

    const handleFocus = () => {
        console.log('Input box focused');
        // You can open a custom keyboard here
    };

    const handleBlur = () => {
        console.log('Input box lost focus');
    };
</script>
```

## API

### CodeInput Props

| Parameter         | Description                                                        | Type               | Default |
| ----------------- | ------------------------------------------------------------------ | ------------------ | ------- |
| v-model           | Preset value                                                       | `string`\|`number` | -       |
| adjustPosition    | Whether the page is automatically pushed up when the keyboard pops up | `boolean`          | true    |
| maxlength         | Number of characters to input                                      | `number`           | 6       |
| border            | Borderless input box                                               | `boolean`          | true    |
| dot               | Whether to fill with dots                                          | `boolean`          | true    |
| mode              | Mode selection, see "Basic Usage" above for details                | `box`\|`line`      | box     |
| hairline          | Whether to use a hairline border                                   | `boolean`          | false   |
| space             | Distance between characters                                        | `number`           | 10      |
| focus             | Whether to automatically gain focus                                | `boolean`          | false   |
| bold              | Whether the font and input line are bold                           | `boolean`          | false   |
| color             | Font color                                                         | `string`           | -       |
| fontSize          | Font size, unit rpx                                                | `string`\|`number` | 18      |
| size              | Size of the input box, width equals height, numeric values default to px | `string`\|`number` | 35      |
| disabledKeyboard  | Disable bringing up the system keyboard when tapping the input box | `boolean`          | false   |
| borderColor       | Border and line color                                              | `string`           | -       |
| disabledDot       | Whether to prohibit inputting the "." symbol                       | `boolean`          | true    |
| customStyle       | Custom external styles to apply                                    | `CSSProperties`    | -       |
| customClass       | Custom external class name                                         | `string`           | -       |

### Events

| Event Name | Description                                                                               | Callback Parameter          |
| ---------- | ----------------------------------------------------------------------------------------- | --------------------------- |
| change     | Triggered when the input content changes, see above for details                           | value: the current input value |
| finish     | Triggered when the number of input characters reaches the maxlength value, see above for details | value: the current input value |
| focus      | Triggered when the input box gains focus                                                  | -                           |
| blur       | Triggered when the input box loses focus                                                  | -                           |

### CSS Variables

| Variable Name | Description | Default Value |
| --- | --- | --- |
| `--hy-code-input-font-size` | Font size | `15px` |
| `--hy-code-input-dot-size` | Password dot size | `7px` |
| `--hy-code-input-line-width` | Underline width | `40px` |
| `--hy-code-input-text-color` | Character color | Follows `--hy-icon-color` |
| `--hy-code-input-dot-radius` | Password dot border radius | Follows `--hy-radius-semicircle` (100px) |
| `--hy-code-input-no-radius` | Borderless mode border radius | Follows `--hy-radius-sm` (8rpx) |
| `--hy-code-input-cursor-color` | Cursor color | Follows `--hy-text-color` |
| `--hy-code-input-line-radius` | Underline border radius | Follows `--hy-radius-semicircle` (100px) |
| `--hy-code-input-border-color` | Default state border/line color | Follows `--hy-border-color--2` |

<demo-model url="pages-design/codeInput/codeInput"></demo-model>