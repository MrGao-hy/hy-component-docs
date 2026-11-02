# NumberStep Stepper Component

> This component is typically used in shopping mall scenarios for selecting item quantities

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## Notes

::: warning Note

This input box only accepts integers greater than or equal to 0

:::

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-number-step v-model="value"></hy-number-step>
```

```ts
import { vue } from 'vue';

const value = ref(12);
```

### Step Setting

- Use the `step` property to set the value that changes each time the plus or minus button is clicked. Defaults to 1. In the example below, 2 is added or subtracted each time

```html
<template>
    <hy-number-step v-model="value" :step="2"></hy-number-step>
</template>
```

### Limit Input Range

- `min` - minimum value
- `max` - maximum value

```html
<template>
    <hy-number-step v-model="value" :min="1" :max="100"></hy-number-step>
</template>
```

### Restrict Input to Integers Only

- Use `integer` to restrict the input type

```html
<template>
    <hy-number-step v-model="value" integer></hy-number-step>
</template>
```

### Disable

- Use `disabled` to disable the stepper; when disabled, the plus/minus buttons cannot be clicked and the input value cannot be modified
- Use `disabledInput` to disable the input box
- Use `disablePlus` to disable the plus button
- Use `disableMinus` to disable the minus button
- Use `longPress` to disable the long-press event

```html
<!-- Disable the input box by setting the `disabled` parameter; when disabled, the plus/minus buttons cannot be clicked and the input value cannot be modified -->
<hy-number-step :disabled="true"></hy-number-step>

<!-- Disable the input box -->
<hy-number-step :disabledInput="true"></hy-number-step>

<!-- Disable the plus button -->
<hy-number-step :disablePlus="true"></hy-number-step>

<!-- Disable the minus button -->
<hy-number-step :disableMinus="true"></hy-number-step>

<!-- Disable long press -->
<hy-number-step :longPress="false"></hy-number-step>
```

### Color and Size

- Use the `button-size` parameter to set the button size
- Use the `icon-style` parameter to set the style of the plus/minus button icons

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

### Hide the Minus Sign

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

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| v-model | The value used for two-way binding; on initialization, it is set to the default min value (minimum) | `number` | - |
| min | The minimum value the user can enter | `number` | 1 |
| max | The maximum value the user can enter | `number` | Number.MAX_SAFE_INTEGER |
| step | Step size, the value added or subtracted each time; decimal values are supported if needed | `number` | 1 |
| integer | Whether only positive integers can be entered | `boolean` | false |
| disabled | Whether to disable operations, including the input box and plus/minus buttons | `boolean` | false |
| disabledInput | Whether to disable the input box | `boolean` | false |
| asyncChange | Whether to enable asynchronous changes; when enabled, the input value must be controlled manually | `boolean` | false |
| inputWidth | Input box width; numerical values default to px | `string`\|`number` | 35 |
| showMinus | Whether to show the minus button | `boolean` | true |
| showPlus | Whether to show the plus button | `boolean` | true |
| decimalLength | Number of decimal places to display | `string`\|`number` | - |
| longPress | Whether long-press is allowed for plus/minus operations | `boolean` | true |
| color | Color of the input box text and plus/minus button icons | `string` | - |
| buttonWidth | Button width; numerical values default to px | `string`\|`number` | 30 |
| buttonSize | Button height; numerical values default to px, and the input box height stays consistent with this value | `string`\|`number` | 30 |
| buttonRadius | Button border radius; numerical values default to px | `string`\|`number` | - |
| bgColor | Background color of the input box and buttons | `string` | - |
| inputBgColor | Independent background color of the input box | `string` | - |
| cursorSpacing | Specifies the distance between the cursor and the keyboard to prevent the keyboard from covering the input box; numerical values default to px | `string`\|`number` | 100 |
| disablePlus | Whether to disable the plus button | `boolean` | false |
| disableMinus | Whether to disable the minus button | `boolean` | false |
| minusIcon | Collection of minus button icon properties; see [Icon API](./icon#api) for details | `HyIconProps` | - |
| plusIcon | Collection of plus button icon properties; see [Icon API](./icon#api) for details | `HyIconProps` | - |
| miniMode | Mini mode, commonly used for food delivery; only the + button is displayed when the value is 0 | `boolean` | false |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description | Callback Parameters |
| --------- | ------------------------ | --------------------- |
| focus     | Triggered when the input box gains focus | value: number |
| blur      | Triggered when the input box loses focus | value: number |
| change    | Triggered when the input box content changes | value: number |
| overLimit | Triggered when the range threshold is exceeded | type: `minus`\|`plus` |
| plus      | Triggered when the plus button is clicked | value: number |
| minus     | Triggered when the minus button is clicked | value: number |

### Slots

| Slot Name | Description | Accepted Value |
| ------ | -------- | ------ |
| minus  | Minus button | -      |
| input  | Input box   | record |
| plus   | Plus button | -      |

### CSS Variables

| Variable Name | Description | Default Value |
| --- | --- | --- |
| `--hy-number-step-btn-width` | Plus/minus button width | `35px` |
| `--hy-number-step-radius` | Border radius | `4px` |
| `--hy-number-step-font-size` | Font size | `15px` |
| `--hy-number-step-input-margin` | Input box outer margin | `0 2px` |
| `--hy-number-step-input-color` | Input text color | Follows `--hy-text-color` |
| `--hy-number-step-disabled-color` | Disabled text color | Follows `--hy-text-color--disabled` |

<demo-model url="pages-design/numberBox/numberBox"></demo-model>