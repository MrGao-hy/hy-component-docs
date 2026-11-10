# CodeInput Verification Code Input Component

> This component is typically used in scenarios where a user's SMS verification code needs to be verified, and it can also be used in combination with Hy's keyboard component

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :warning: Notes

::: warning Notes

- When `disabledKeyboard` is set to `true`, tapping the input box will not bring up the system keyboard, making it suitable for use with a custom keyboard
- When the `dot` parameter is set to `true`, the entered content will be displayed as dots, but the event callbacks will return the real value
- `mode` supports two modes: `box` (box mode) and `line` (bottom line mode)
- The `disabledDot` parameter controls whether entering a decimal point is disabled; it defaults to `true` (input disabled)

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

When a custom keyboard is needed, set `disabledKeyboard` to `true` to prevent conflicts between the system keyboard and the custom keyboard. The custom keyboard opens automatically when the input box is tapped and gains focus.

```html
<template>
    <view>
        <hy-code-input
            ref="codeInputRef"
            v-model="keyboardValue"
            disabled-keyboard
            mode="box"
            @finish="showKeyboard = false"
            @focus="handleOpenKeyboard"
        ></hy-code-input>

        <hy-keyboard
            v-model:show="showKeyboard"
            mode="default"
            v-model="keyboardValue"
            :show-dot-key="false"
            :close-text="t('done')"
            @input="handleKeyboardInput"
            @delete="handleKeyboardDelete"
            @close="handleCloseKeyboard"
        >
            <!-- Simulates the verification code auto-fill suggestion bar of the system keyboard: reads the clipboard when the keyboard is brought up, and fills the code with one tap -->
            <template #title>
                <view v-if="clipboardCode" class="hy-code-suggestion" @click="handleFillCode">
                    <hy-icon name="message" size="14"></hy-icon>
                    <text class="hy-code-suggestion__label">Clipboard Code</text>
                    <text class="hy-code-suggestion__code">{{ clipboardCode }}</text>
                    <text class="hy-code-suggestion__fill">Tap to Fill</text>
                </view>
            </template>
        </hy-keyboard>
    </view>
</template>

<script setup>
    import { ref } from 'vue';

    const codeInputRef = ref(null);
    const keyboardValue = ref('');
    const showKeyboard = ref(false);
    const clipboardCode = ref('');

    /**
     * Brings up the custom keyboard and tries to read the verification code from the clipboard
     * Simulates the auto-fill suggestion that appears above the keyboard in a real app after an SMS verification code is received
     */
    const handleOpenKeyboard = () => {
        showKeyboard.value = true;
        uni.getClipboardData({
            success: (res) => {
                // Strip non-numeric characters and take the first 6 digits, e.g. "Your verification code is 123456, do not disclose it" -> "123456"
                const code = String(res.data || '')
                    .replace(/\D/g, '')
                    .slice(0, 6);
                // Do not show the suggestion bar again if the same verification code has already been filled in
                clipboardCode.value = code && code !== keyboardValue.value ? code : '';
            },
            fail: () => {
                clipboardCode.value = '';
            },
        });
    };

    /**
     * Simulates blur when the custom keyboard is closed, to avoid residual focus highlight
     * */
    const handleCloseKeyboard = () => {
        showKeyboard.value = false;
        codeInputRef.value?.blur();
    };

    /**
     * Taps the suggestion bar to fill in the verification code with one tap and collapse the keyboard
     * */
    const handleFillCode = () => {
        keyboardValue.value = clipboardCode.value;
        clipboardCode.value = '';
        showKeyboard.value = false;
        // Simulates blur to avoid residual focus highlight
        codeInputRef.value?.blur();
    };
</script>

<style scoped lang="scss">
    .hy-tip {
        margin-top: 20rpx;
        font-size: 24rpx;
        color: #909399;
    }

    /* Verification code auto-fill suggestion bar (placed at the top of the keyboard, white capsule + light shadow, referencing the SMS verification code fill suggestion of the system keyboard) */
    .hy-code-suggestion {
        display: flex;
        align-items: center;
        margin: 16rpx 24rpx 0;
        padding: 14rpx 24rpx;
        border-radius: 100px;
        background-color: #ffffff;
        box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.06);

        &__label {
            margin-left: 10rpx;
            font-size: 24rpx;
            color: #909399;
        }

        &__code {
            margin: 0 16rpx;
            font-size: 28rpx;
            font-weight: 600;
            letter-spacing: 4rpx;
            color: #2979ff;
        }

        &__fill {
            margin-left: auto;
            font-size: 24rpx;
            color: #2979ff;
        }
    }
</style>
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
        // A custom keyboard can be opened here
    };

    const handleBlur = () => {
        console.log('Input box blurred');
    };
</script>
```

## API

### CodeInput Props

| Parameter         | Description                                                | Type               | Default |
| ----------------- | ---------------------------------------------------------- | ------------------ | ------- |
| v-model           | Preset value                                               | `string`\|`number` | -       |
| adjustPosition    | Whether the page is automatically pushed up when the keyboard pops up | `boolean` | true |
| maxlength         | Number of characters to input                              | `number`           | 6       |
| border            | Borderless input box                                       | `boolean`          | true    |
| dot               | Whether to fill with dots                                  | `boolean`          | true    |
| mode              | Mode selection, see the "Basic Usage" section above        | `box`\|`line`      | box     |
| hairline          | Whether to use a hairline border                           | `boolean`          | false   |
| space             | Distance between characters                                | `number`           | 10      |
| focus             | Whether to automatically gain focus                        | `boolean`          | false   |
| bold              | Whether the font and input line are bold                   | `boolean`          | false   |
| color             | Font color                                                 | `string`           | -       |
| fontSize          | Font size, in rpx                                          | `string`\|`number` | 18      |
| size              | Size of the input box, width equals height, numeric values default to px | `string`\|`number` | 35 |
| disabledKeyboard  | Disable bringing up the system keyboard by tapping the input box | `boolean`    | false   |
| borderColor       | Border and line color                                      | `string`           | -       |
| disabledDot       | Whether to disable entering the "." symbol                 | `boolean`          | true    |
| customStyle       | Custom external styles to be applied                       | `CSSProperties`    | -       |
| customClass       | Custom external class name                                 | `string`           | -       |

### Events

| Event Name        | Description                                                            | Callback Parameters         |
| ----------------- | ---------------------------------------------------------------------- | --------------------------- |
| update:modelValue | Update value                                                           | value: the currently entered value |
| click             | Triggered when the component is clicked                                | -                           |
| change            | Triggered when the input content changes, see above for details        | value: the currently entered value |
| finish            | Triggered when the number of entered characters reaches the maxlength value, see above for details | value: the currently entered value |
| focus             | Triggered when the input box gains focus                               | -                           |
| blur              | Triggered when the input box loses focus                               | -                           |

### Methods

| Method | Description                                                                                     | Parameters |
| ------ | ----------------------------------------------------------------------------------------------- | ---------- |
| blur   | Exposed blur method, allowing external code to simulate blur in scenarios such as closing a custom keyboard | - |

### CSS Variables

| Variable Name                  | Description                          | Default                                |
| ------------------------------ | ------------------------------------ | -------------------------------------- |
| `--hy-code-input-font-size`    | Font size                            | `15px`                                 |
| `--hy-code-input-dot-size`     | Password dot size                    | `7px`                                  |
| `--hy-code-input-line-width`   | Underline width                      | `40px`                                 |
| `--hy-code-input-text-color`   | Character color                      | Follows `--hy-icon-color`              |
| `--hy-code-input-dot-radius`   | Password dot border radius           | Follows `--hy-radius-semicircle` (100px) |
| `--hy-code-input-no-radius`    | Borderless mode border radius        | Follows `--hy-radius-sm` (8rpx)        |
| `--hy-code-input-cursor-color` | Cursor color                         | Follows `--hy-text-color`              |
| `--hy-code-input-line-radius`  | Underline border radius              | Follows `--hy-radius-semicircle` (100px) |
| `--hy-code-input-border-color` | Default state border/line color      | Follows `--hy-border-color--2`         |

<demo-model url="pages-design/codeInput/codeInput"></demo-model>