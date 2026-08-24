# NumberStep Stepper Component

> This component is generally used in shopping mall scenarios for selecting item quantities

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## Notes

::: warning Notes

This input field only accepts integers greater than or equal to 0

:::

## :japanese_castle: Basic Usage Examples

```html
<!-- Global usage -->
<hy-number-step v-model="value"></hy-number-step>
```

```ts
import { vue } from 'vue';

const value = ref(12);
```

### Step Setting

- Set the value to change each time the increase or decrease button is clicked via the `step` attribute. The default is 1. In the example below, each click will add or subtract 2

```html
<template>
    <hy-number-step v-model="value" :step="2"></hy-number-step>
</template>
```

### Limiting the Input Range

- `min` - minimum value
- `max` - maximum value

```html
<template>
    <hy-number-step v-model="value" :min="1" :max="100"></hy-number-step>
</template>
```

### Restricting Input to Integers Only

- Restrict the input type via `integer`

```html
<template>
    <hy-number-step v-model="value" integer></hy-number-step>
</template>
```

### Disabled

- Disable the stepper via `disabled`. When disabled, the plus/minus buttons cannot be clicked and the input value cannot be modified
- Disable the input field via `disabledInput`
- Disable the increase button via `disablePlus`
- Disable the decrease button via `disableMinus`
- Disable the long-press event via `longPress`

```html
<!-- Disable the input field by setting the `disabled` parameter; when disabled, the plus/minus buttons cannot be clicked and the input value cannot be modified -->
<hy-number-step :disabled="true"></hy-number-step>

<!-- Disable the input field -->
<hy-number-step :disabledInput="true"></hy-number-step>

<!-- Disable the increase button -->
<hy-number-step :disablePlus="true"></hy-number-step>

<!-- Disable the decrease button -->
<hy-number-step :disableMinus="true"></hy-number-step>

<!-- Disable long-press -->
<hy-number-step :longPress="false"></hy-number-step>
```

### Color and Size

- Set the button size via the `button-size` parameter
- Set the style of the plus/minus button icons via the `icon-style` parameter

```html
<template>
    <hy-number-step
        v-model="value"
        button-size="36"
        color="#ffffff"
        bgColor="#2979ff"
        iconStyle="color: #fff"
    ></hy-number-step>
</template>
```

### Hiding the Minus Sign

```html
<hy-number-step
    v-model="item.quantity"
    :min="0"
    :miniMode="true"
    input-bg-color="transparent"
    :plusIcon="{ color: '#ffffff' }"
    button-radius="50%"
></hy-number-step>
```

```scss
.hidden {
    :deep(.hy-number-box__plus) {
        background-color: red;
    }

    :deep(.hy-number-box__minus) {
        border: $hy-border-line;
        background-color: transparent;
    }
}
```

### Custom Slots

::: code-group

```html [vue]
<template>
    <hy-number-step v-model="value">
        <template #minus>
            <view class="minus">
                <up-icon name="minus" size="12"></up-icon>
            </view>
        </template>
        <template #input>
            <text style="width: 50px;text-align: center;" class="input">{{value}}</text>
        </template>
        <template #plus>
            <view class="plus">
                <up-icon name="plus" color="#FFFFFF" size="12"></up-icon>
            </view>
        </template>
    </hy-number-step>
</template>
```

```ts [index.ts]
import { ref } from 'vue';

// Create reactive data
const value = ref(1);
```

```scss [index.scss]
.minus {
    width: 22px;
    height: 22px;
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.input {
    padding: 0 10px;
}

.plus {
    width: 22px;
    height: 22px;
    background-color: #ff0000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

:::

## API

### NumberStep Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Value used for two-way binding; set to the default min value (minimum) on initialization | `number` | - |
| min | Minimum value the user can enter | `number` | 1 |
| max | Maximum value the user can enter | `number` | Number.MAX_SAFE_INTEGER |
| step | Step size, the value added or subtracted each time; supports decimal values | `number` | 1 |
| integer | Whether only positive integers can be entered | `boolean` | false |
| disabled | Whether to disable operations, including the input field and plus/minus buttons | `boolean` | false |
| disabledInput | Whether to disable the input field | `boolean` | false |
| asyncChange | Whether to enable asynchronous changes; when enabled, the input value must be controlled manually | `boolean` | false |
| inputWidth | Input field width; numeric values default to px | `string`\|`number` | 35 |
| showMinus | Whether to show the decrease button | `boolean` | true |
| showPlus | Whether to show the increase button | `boolean` | true |
| decimalLength | Number of decimal places to display | `string`\|`number` | - |
| longPress | Whether long-pressing is allowed to increment/decrement | `boolean` | true |
| color | Color of the input field text and plus/minus button icons | `string` | - |
| buttonWidth | Button width; numeric values default to px | `string`\|`number` | 30 |
| buttonSize | Button height; numeric values default to px; the input field height matches this value | `string`\|`number` | 30 |
| buttonRadius | Button border radius; numeric values default to px | `string`\|`number` | - |
| bgColor | Background color of the input field and buttons | `string` | - |
| inputBgColor | Independent background color of the input field | `string` | - |
| cursorSpacing | Specifies the distance between the cursor and the keyboard to prevent the keyboard from covering the input field; numeric values default to px | `string`\|`number` | 100 |
| disablePlus | Whether to disable the increase button | `boolean` | false |
| disableMinus | Whether to disable the decrease button | `boolean` | false |
| minusIcon | Collection of minus button icon properties; see [Icon API](./icon#api) | `HyIconProps` | - |
| plusIcon | Collection of plus button icon properties; see [Icon API](./icon#api) | `HyIconProps` | - |
| miniMode | Mini mode, commonly used for food delivery; only the + button is displayed when the value is 0 | `boolean` | false |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description                     | Callback Parameters              |
| --------- | ------------------------ | --------------------- |
| focus     | Triggered when the input field gains focus       | value: numeric value           |
| blur      | Triggered when the input field loses focus     | value: numeric value           |
| change    | Triggered when the input field content changes | value: numeric value           |
| overLimit | Triggered when the range threshold is exceeded       | type: `minus`\|`plus` |
| plus      | Triggered when the increase button is clicked         | value: numeric value           |
| minus     | Triggered when the decrease button is clicked         | value: numeric value           |

### Slots

| Slot Name | Description     | Value Received |
| ------ | -------- | ------ |
| minus  | Decrease button | -      |
| input  | Input field   | record |
| plus   | Increase button | -      |

<demo-model url="pages-design/numberBox/numberBox"></demo-model>