# CodeInput Verification Code Input Component

> This component is generally used in scenarios for verifying users' SMS verification codes, and can also be used in combination with Huayue's keyboard component

## :pushpin: Platform Difference Notes

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :warning: Notes

::: warning Notes

- When `disabledKeyboard` is set to `true`, tapping the input box will not bring up the system keyboard, which is suitable for use with a custom keyboard
- When the `dot` parameter is set to `true`, the input content will be displayed as dots, but event callbacks will return the real value
- `mode` supports two modes: `box` (box mode) and `line` (bottom line mode)
- The `disabledDot` parameter controls whether inputting a decimal point is disabled; the default is `true` (input disabled)

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

### Cell Spacing

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

### No Border

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

When you need to use a custom keyboard, set `disabledKeyboard` to `true` to prevent the system keyboard from conflicting with the custom keyboard. The custom keyboard opens automatically when the input box is tapped and gains focus.

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

### Listening to Input Events

```html
<template>
    <hy-code-input v-model="value" @change="handleChange" @finish="handleFinish"></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref('');

    const handleChange = (value) => {
        console.log('Input content changed:', value);
    };

    const handleFinish = (value) => {
        console.log('Input complete:', value);
    };
</script>
```

### Listening to Focus Events

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

| Parameter        | Description                                                            | Type               | Default |
| ---------------- | ---------------------------------------------------------------------- | ------------------ | ------- |
| v-model          | Preset value                                                           | `string`\|`number` | -       |
| adjustPosition   | Whether to automatically push the page up when the keyboard pops up    | `boolean`          | true    |
| maxlength        | Number of input characters                                             | `number`           | 6       |
| border           | Input box without border                                               | `boolean`          | true    |
| dot              | Whether to fill with dots                                              | `boolean`          | true    |
| mode             | Mode selection, see "Basic Usage" above for details                    | `box`\|`line`      | box     |
| hairline         | Whether to use a hairline border                                       | `boolean`          | false   |
| space            | Distance between characters                                            | `number`           | 10      |
| focus            | Whether to automatically gain focus                                    | `boolean`          | false   |
| bold             | Whether the font and input line are bold                               | `boolean`          | false   |
| color            | Font color                                                             | `string`           | -       |
| fontSize         | Font size, unit rpx                                                    | `string`\|`number` | 18      |
| size             | Size of the input box, width equals height, numeric value defaults to px | `string`\|`number` | 35      |
| disabledKeyboard | Disable bringing up the system keyboard when tapping the input box     | `boolean`          | false   |
| borderColor      | Border and line color                                                  | `string`           | -       |
| disabledDot      | Whether to disable inputting the "." symbol                            | `boolean`          | true    |
| customStyle      | Custom external styles to be applied                                   | `CSSProperties`    | -       |
| customClass      | Custom external class name                                             | `string`           | -       |

### Events

| Event Name | Description                                                                        | Callback Parameters           |
| ---------- | ---------------------------------------------------------------------------------- | ----------------------------- |
| change     | Triggered when the input content changes, see above for details                    | value: current input value    |
| finish     | Triggered when the number of input characters reaches maxlength, see above         | value: current input value    |
| focus      | Triggered when the input box gains focus                                           | -                             |
| blur       | Triggered when the input box loses focus                                           | -                             |

<demo-model url="pages-design/codeInput/codeInput"></demo-model>