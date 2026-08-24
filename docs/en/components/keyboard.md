# Keyboard Component <Badge type="tip">^0.7.0</Badge>

> A virtual keyboard component that supports multiple modes such as numeric keyboard, license plate keyboard, and ID card keyboard, with customizable header and keys.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

### 2. v-model Binding

The component uses `v-model:show` to control visibility, and `v-model` to bind the input value:

```html
<hy-keyboard
    v-model:show="showKeyboard"   <!-- Controls show/hide -->
    v-model="inputValue"          <!-- Binds the input value -->
    v-model:car-lang="carLang"    <!-- Effective when mode is car, switches between Chinese/English -->
></hy-keyboard>
```

### 3. License Plate Keyboard Mode

The license plate keyboard supports two modes:

| Mode        | Prop                    | Description                                            | Use Case                                        |
| ----------- | ----------------------- | ------------------------------------------------------ | ------------------------------------------------ |
| Uncontrolled | Pass `auto-switch-lang` | Language switching is managed automatically inside the component | Simple scenarios, works out of the box     |
| Controlled   | Pass `v-model:car-lang` | Manually control language switching                    | Need to listen to or control the language in the parent component |

**Uncontrolled mode example:**

```html
<!-- Set auto-switch-lang to switch automatically -->
<hy-keyboard mode="car" v-model="value" auto-switch-lang></hy-keyboard>
```

**Controlled mode example:**

```html
<hy-keyboard mode="car" v-model="value" v-model:car-lang="carLang"></hy-keyboard>
```

```ts
const carLang = ref<'zh' | 'en'>('zh');

// Manual switching logic
const handleInput = (val: string) => {
    if (val.length === 1) {
        carLang.value = 'en';
    }
};

const handleDelete = () => {
    if (carControlledValue.value.length === 1) {
        carLang.value = 'zh';
    }
};
```

### 4. custom Mode Description

The keyboard in `custom` mode has a fixed sidebar on the right side, containing the delete key and the close key:

- The delete and close keys in the sidebar are **always displayed** and require no extra configuration
- If you need to customize additional key positions, you can use the `extra-key` prop

```html
<!-- custom mode: custom keys at the bottom, fixed delete and close keys on the right -->
<hy-keyboard mode="custom" v-model="value" :extra-key="['00', '.']" close-text="Done"></hy-keyboard>
```

### 5. extraKey Prop

`extraKey` supports two formats:

```html
<!-- String: a single extra key, displayed to the left of 0 -->
<hy-keyboard mode="custom" extra-key="+"></hy-keyboard>

<!-- Array: multiple extra keys (effective in custom mode) -->
<hy-keyboard mode="custom" :extra-key="['.', '00']"></hy-keyboard>
```

### 6. showDotKey Prop

Controls whether to display the decimal point key, which is displayed by default:

```html
<!-- Hide the decimal point -->
<hy-keyboard :show-dot-key="false"></hy-keyboard>

<!-- Show the decimal point (default) -->
<hy-keyboard :show-dot-key="true"></hy-keyboard>
```

### 7. randomKeyOrder Prop

When set to `true`, the number keys will be shuffled in random order:

```html
<hy-keyboard :random-key-order="true"></hy-keyboard>
```

::: tip Note

The random order is generated only once **each time the keyboard is shown**; tapping keys while the keyboard is open will not change the positions of other keys.

:::

### 8. close Event Handling

When the close button or the overlay is tapped, the `close` event is triggered, but the keyboard will **not close automatically**; you need to handle it manually:

```html
<hy-keyboard v-model:show="showKeyboard" @close="showKeyboard = false"></hy-keyboard>
```

### 9. ID Card Keyboard

The ID card keyboard automatically includes the `X` key; it is recommended to use it together with `maxlength`:

```html
<hy-keyboard mode="idcard" :maxlength="18"></hy-keyboard>
```

## :japanese_castle: Basic Usage Examples

### Default Numeric Keyboard

```html
<hy-keyboard
    v-model:show="showKeyboard"
    mode="default"
    v-model="value"
    close-text="Done"
    @input="handleInput"
    @delete="handleDelete"
    @close="handleClose"
></hy-keyboard>
```

```ts
const showKeyboard = ref(false);
const value = ref('');

const handleInput = (val: string) => {
    console.log('Input:', val);
};

const handleDelete = () => {
    console.log('Delete');
};

const handleClose = () => {
    console.log('Close');
    showKeyboard.value = false;
};
```

### Keyboard with Right Sidebar

```html
<hy-keyboard
    v-model:show="showKeyboard"
    v-model="value"
    mode="custom"
    close-text="Done"
    @input="handleInput"
    @delete="handleDelete"
    @close="handleClose"
></hy-keyboard>
```

### ID Card Keyboard

```html
<hy-keyboard
    v-model:show="showKeyboard"
    mode="idcard"
    v-model="value"
    @input="handleInput"
    @delete="handleDelete"
    @close="handleClose"
></hy-keyboard>
```

### License Plate Keyboard (Uncontrolled Mode)

```html
<hy-keyboard
    v-model:show="showKeyboard"
    mode="car"
    auto-switch-lang="true"
    v-model="value"
    @input="handleInput"
    @delete="handleDelete"
    @close="handleClose"
></hy-keyboard>
```

### License Plate Keyboard (Controlled Mode)

```html
<hy-keyboard
    v-model:show="showKeyboard"
    mode="car"
    v-model="value"
    v-model:car-lang="carLang"
    @input="handleInput"
    @delete="handleDelete"
    @close="handleClose"
></hy-keyboard>
```

```ts
const carLang = ref<'zh' | 'en'>('zh');

const handleInput = (val: string) => {
    if (val.length === 1) {
        carLang.value = 'en';
    }
    console.log('License plate input:', val);
};

const handleDelete = () => {
    if (carControlledValue.value.length === 1) {
        carLang.value = 'zh';
    }
    console.log('License plate delete:', carControlledValue.value);
};
```

## :gear: Keyboard Configuration

### Hide the Decimal Point

```html
<hy-keyboard
    v-model:show="showKeyboard"
    mode="default"
    v-model="value"
    :show-dot-key="false"
    close-text="Done"
></hy-keyboard>
```

### Custom Extra Keys

```html
<!-- Single extra key -->
<hy-keyboard
    v-model:show="showKeyboard"
    mode="default"
    v-model="value"
    extra-key="+"
    close-text="Done"
></hy-keyboard>

<!-- Multiple extra keys (custom mode) -->
<hy-keyboard
    v-model:show="showKeyboard"
    mode="custom"
    v-model="value"
    :extra-key="['00', '.']"
    close-text="Done"
></hy-keyboard>
```

### Randomized Numeric Keyboard

```html
<hy-keyboard
    v-model:show="showKeyboard"
    mode="default"
    v-model="value"
    :random-key-order="true"
    close-text="Done"
></hy-keyboard>
```

## :label: Custom Header

### Keyboard with Title

```html
<hy-keyboard
    v-model:show="showKeyboard"
    mode="default"
    v-model="value"
    title="Title"
    close-text="Done"
></hy-keyboard>
```

### Custom Title via Slot

```html
<hy-keyboard v-model:show="showKeyboard" mode="default" v-model="value" close-text="Done">
    <template #title>
        <view class="custom-title">
            <text class="custom-title-text">Custom Title</text>
        </view>
    </template>
</hy-keyboard>
```

```scss
.custom-title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    &-text {
        font-size: 32rpx;
        font-weight: 500;
        color: #333;
    }
}
```

## API

### Keyboard Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| show | Whether to show the keyboard | `boolean` | false |
| modelValue | Bound value | `string` | - |
| title | Title | `string` | - |
| mode | Keyboard mode, optional values: default (numeric keyboard), custom (custom keyboard), car (license plate keyboard), idcard (ID card keyboard) | `string` | default |
| zIndex | Z-index level | `number` | 100 |
| maxlength | Maximum input length | `number` | Infinity |
| showDeleteKey | Whether to show the delete key | `boolean` | true |
| showDotKey | Whether to show the decimal point key | `boolean` | true |
| randomKeyOrder | Whether to randomize keyboard key order | `boolean` | false |
| closeText | Confirm button text | `string` | - |
| deleteText | Delete button text | `string` | - |
| closeButtonLoading | Whether the close button shows a loading state | `boolean` | false |
| modal | Whether to show the overlay | `boolean` | false |
| hideOnClickOutside | Whether to collapse the keyboard when tapping outside | `boolean` | true |
| lockScroll | Whether to lock scrolling | `boolean` | true |
| safeAreaInsetBottom | Whether to fit within the bottom safe area | `boolean` | true |
| extraKey | Extra keys, supports string or string array | `string` \| `string[]` | - |
| carLang | License plate keyboard language mode, optional values: zh (provinces), en (letters); if not passed, it's uncontrolled mode | `string` | - |
| autoSwitchLang | Whether the license plate keyboard automatically switches language | `boolean` | false |
| customStyle | External styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Keyboard Events

| Event             | Description                          | Callback Parameters               |
| ----------------- | ------------------------------------ | --------------------------------- |
| input             | Triggered when content is input      | text: the input character         |
| delete            | Triggered when content is deleted    | -                                 |
| close             | Triggered when the keyboard closes   | -                                 |
| update:show       | Triggered when visibility changes    | show: current visibility state    |
| update:modelValue | Triggered when the value changes     | value: current value              |
| update:carLang    | Triggered when the language changes  | lang: current language ('zh' or 'en') |

### Keyboard Slots

| Slot   | Description          | Received Values |
| ------ | -------------------- | --------------- |
| title  | Custom title content | -               |

<demo-model url="pages-design/keyboard/keyboard"></demo-model>