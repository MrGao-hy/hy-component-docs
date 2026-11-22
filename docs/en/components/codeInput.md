# CodeInput Verification Code Input Component

> This component is generally used in scenarios where a user's SMS verification code needs to be verified. It can also be used together with Hy's keyboard component

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :warning: Notes

::: warning Notes

- When `disabledKeyboard` is set to `true`, tapping the input box will not bring up the system keyboard, making it suitable for use with a custom keyboard
- When the `dot` parameter is set to `true`, the entered content is displayed as dots, but event callbacks still return the real value
- `mode` supports two modes: `box` (box mode) and `line` (bottom underline mode)
- The `disabledDot` parameter controls whether entering the decimal point is disabled; the default is `true` (input disabled)

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
            <!-- Simulates the verification code auto-fill suggestion bar of the system keyboard: reads the clipboard when the keyboard is brought up, and fills in the code with one tap -->
            <template #title>
                <view v-if="clipboardCode" class="hy-code-suggestion" @click="handleFillCode">
                    <hy-icon name="message" size="14"></hy-icon>
                    <text class="hy-code-suggestion__label">Clipboard verification code</text>
                    <text class="hy-code-suggestion__code">{{ clipboardCode }}</text>
                    <text class="hy-code-suggestion__fill">Tap to fill</text>
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
     * Brings up the custom keyboard and tries to read the verification code from the clipboard.
     * Simulates the auto-fill suggestion that appears above the keyboard in a real app
     * after receiving an SMS verification code.
     */
    const handleOpenKeyboard = () => {
        showKeyboard.value = true;
        uni.getClipboardData({
            success: (res) => {
                // Strip non-numeric characters and take the first 6 digits, e.g. "Your verification code is 123456, do not share it" -> "123456"
                const code = String(res.data || '')
                    .replace(/\D/g, '')
                    .slice(0, 6);
                // Don't show the suggestion bar again if the same code has already been filled in
                clipboardCode.value = code && code !== keyboardValue.value ? code : '';
            },
            fail: () => {
                clipboardCode.value = '';
            },
        });
    };

    /**
     * Simulates blur in sync when closing the custom keyboard,
     * to avoid a lingering focus highlight
     * */
    const handleCloseKeyboard = () => {
        showKeyboard.value = false;
        codeInputRef.value?.blur();
    };

    /**
     * Fills in the verification code with one tap from the suggestion bar and collapses the keyboard
     * */
    const handleFillCode = () => {
        keyboardValue.value = clipboardCode.value;
        clipboardCode.value = '';
        showKeyboard.value = false;
        // Simulate blur in sync to avoid a lingering focus highlight
        codeInputRef.value?.blur();
    };
</script>

<style scoped lang="scss">
    .hy-tip {
        margin-top: 20rpx;
        font-size: 24rpx;
        color: #909399;
    }

    /* Verification code auto-fill suggestion bar (in the keyboard header, white capsule + light shadow, modeled after the system keyboard's SMS verification code fill suggestion) */
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
        console.log('Input changed:', value);
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
        console.log('Input box blurred');
    };
</script>
```

## API

### CodeInput Props

| Parameter         | Description                                                        | Type               | Default |
| ----------------- | ------------------------------------------------------------------ | ------------------ | ------- |
| v-model           | Preset value                                                       | `string`\|`number` | -       |
| adjustPosition    | Whether to automatically push the page up when the keyboard pops up | `boolean`          | true    |
| maxlength         | Number of characters to input                                      | `number`           | 6       |
| border            | Borderless input box                                               | `boolean`          | true    |
| dot               | Whether to fill with dots                                          | `boolean`          | true    |
| mode              | Mode selection, see "Basic Usage" above for details                | `box`\|`line`      | box     |
| hairline          | Whether to use a hairline border                                   | `boolean`          | false   |
| space             | Spacing between characters                                         | `number`           | 10      |
| focus             | Whether to automatically gain focus                                | `boolean`          | false   |
| bold              | Whether the font and input line are bold                           | `boolean`          | false   |
| color             | Font color                                                         | `string`           | -       |
| fontSize          | Font size, unit rpx                                                | `string`\|`number` | 18      |
| size              | Size of the input box, width equals height, numeric values default to px | `string`\|`number` | 35 |
| disabledKeyboard  | Disable bringing up the system keyboard when the input box is tapped | `boolean`         | false   |
| borderColor       | Border and line color                                              | `string`           | -       |
| disabledDot       | Whether to disable entering the "." symbol                         | `boolean`          | true    |
| customStyle       | Custom external styles to apply                                    | `CSSProperties`    | -       |
| customClass       | Custom external class name                                         | `string`           | -       |

### Events

| Event             | Description                                                                  | Callback Parameters     |
| ----------------- | ---------------------------------------------------------------------------- | ----------------------- |
| update:modelValue | Update value                                                                 | value: current input    |
| click             | Triggered when the component is clicked                                      | -                       |
| change            | Triggered when the input content changes, see above for details              | value: current input    |
| finish            | Triggered when the number of input characters reaches the maxlength value, see above for details | value: current input |
| focus             | Triggered when the input box gains focus                                     | -                       |
| blur              | Triggered when the input box loses focus                                     | -                       |

### Methods

| Method | Description                                                                                      | Parameters |
| ------ | ------------------------------------------------------------------------------------------------ | ---------- |
| blur   | Exposes a blur method, allowing external code to simulate blur in scenarios such as closing a custom keyboard | -  |

### CSS Variables

| Variable                        | Description                          | Default                                    |
| ------------------------------- | ------------------------------------ | ------------------------------------------ |
| `--hy-code-input-font-size`     | Font size                            | `15px`                                     |
| `--hy-code-input-dot-size`      | Password dot size                    | `7px`                                      |
| `--hy-code-input-line-width`    | Underline width                      | `40px`                                     |
| `--hy-code-input-text-color`    | Character color                      | Follows `--hy-icon-color`                  |
| `--hy-code-input-dot-radius`    | Password dot border radius           | Follows `--hy-radius-semicircle` (100px)   |
| `--hy-code-input-no-radius`     | Borderless mode border radius        | Follows `--hy-radius-sm` (8rpx)            |
| `--hy-code-input-cursor-color`  | Cursor color                         | Follows `--hy-text-color`                  |
| `--hy-code-input-line-radius`   | Underline border radius              | Follows `--hy-radius-semicircle` (100px)   |
| `--hy-code-input-border-color`  | Default border/line color            | Follows `--hy-border-color--2`             |
| `--hy-code-input-icon-color`    | Icon color                           | Follows `--hy-icon-color`                  |
| `--hy-code-input-no-background` | Borderless mode cell background      | Follows `--hy-background--track`           |
| `--hy-code-input-primary`       | Theme color                          | Follows `--hy-primary`                     |

<demo-model url="pages-design/codeInput/codeInput"></demo-model>