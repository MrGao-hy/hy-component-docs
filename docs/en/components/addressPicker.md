# AddressPicker Address Picker Component

> This picker is used for selecting addresses

::: tip Friendly Reminder

This project references the component development approach of the uView-Plus open-source project, and implements custom components based on Vue 3 and TypeScript.<br> Thanks to the uView-Plus open-source project and its team members for their contributions; their component development ideas have provided valuable reference for this project. If you need to learn more about the component development details.

:::

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Examples

```html
<!-- Global usage -->
<hy-address-picker hasInput></hy-address-picker>
```

### Open via External Button

```html
<template>
    <view>
        <hy-address-picker :show="show"></hy-address-picker>
        <hy-button @click="show = true">Open</hy-button>
    </view>
</template>

<script setup>
    import { ref } from 'vue';

    const show = ref(false);
</script>
```

### Open via Built-in Input Box

```html
<template>
    <view>
        <hy-address-picker hasInput v-model="value"></hy-address-picker>
    </view>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref(Date.now());
</script>
```

## API

### AddressPicker Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| hasInput | Whether to include a built-in input box | `boolean` | false |
| input | Collection of input box attributes; can be set when hasInput is true, see [Input API](./input#api) for details | `HyInputProps` | - |
| show | Controls the popup and collapse of the picker | `boolean` | false |
| popupMode | Controls the popup direction of the picker | `bottom`\|`center`\|`left`\|`right`\|`top` | bottom |
| showToolbar | Whether to show the top toolbar | `boolean` | true |
| v-model | Binding value | `string` | - |
| title | Top title | `string` | - |
| separator | Condition for splitting a string into an array | `string` | " " |
| loading | Whether to show the loading state | `boolean` | false |
| itemHeight | Height of a single option in each column | `number` | 44 |
| cancelText | Text of the cancel button | `string` | Cancel |
| confirmText | Text of the confirm button | `string` | Confirm |
| cancelColor | Color of the cancel button | `string` | #909193 |
| confirmColor | Color of the confirm button | `string` | - |
| visibleItemCount | Number of visible options in each column | `number` | 5 |
| closeOnClickOverlay | Whether to allow closing the picker by clicking the overlay | `boolean` | false |
| defaultIndex | Default index for each column | `array` | - |
| toolbarRightSlot | Whether to enable the right slot | `boolean` | false |
| customStyle | Defines the external styles to be used | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description                           | Callback Parameters                        |
| ------- | ------------------------------ | ------------------------------- |
| close   | Triggered when the picker is closed               | -                               |
| confirm | Triggered when the confirm button is clicked, returns the currently selected value | Array: see the "Callback Parameters" section above |
| change  | Triggered when the selected value changes             | Array: see the "Callback Parameters" section above |
| cancel  | Triggered when the cancel button is clicked                   | -                               |

### Slots

| Slot Name | Description | Received Value |
| --- | --- | --- |
| trigger | Custom input box | value |
| toolbar-right | Toolbar right content; custom content on the right side. Due to WeChat Mini Program limitations, you need to also set :toolbarRightSlot="true" for it to take effect. | - |
| toolbar-bottom | Content below the toolbar; custom bottom content | - |

### CSS Variables

| Variable Name                        | Description         | Default           |
| ----------------------------- | ------------ | ---------------- |
| `--hy-address-picker-radius`  | Input box border radius   | `4px`            |
| `--hy-address-picker-border`  | Input box border   | `1px solid #eee` |
| `--hy-address-picker-padding` | Input box padding | `0 10px`         |

<demo-model url="pages-design/addressPicker/addressPicker"></demo-model>