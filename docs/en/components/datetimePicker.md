# DatetimePicker Date/Time Picker Component

> This picker is used for selecting dates and times

::: danger Note

Please run `npm i dayjs` first to install the dependency.

:::

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :warning: Notes

::: warning Notes

- The `minDate` and `maxDate` parameters must be passed as timestamps (in milliseconds), not date strings
- WeChat Mini Program does not support passing function parameters via props; `formatter` must be set through the `setFormatter` method
- When `hasInput` is set to `true`, the component comes with a built-in input box, and clicking the input box opens the picker
- `mode` supports multiple formats, see the description below for details
- `minHour`, `maxHour`, `minMinute`, `maxMinute` are only effective when `mode=time`

:::

## :japanese_castle: Basic Usage Examples

### Open via the built-in input box

```html
<template>
    <hy-datetime-picker v-model="value" has-input></hy-datetime-picker>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref('');
</script>
```

### Open via an external button

```html
<template>
    <view>
        <hy-button @click="showPicker = true" :text="value || '选择日期'"></hy-button>
        <hy-datetime-picker
            v-model="value"
            v-model:show="showPicker"
            mode="date"
        ></hy-datetime-picker>
    </view>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref('');
    const showPicker = ref(false);
</script>
```

### Various time modes

- `datetime`: Select date in format YYYY-MM-DD HH:mm:ss
- `date`: Select date in format YYYY-MM-DD
- `time`: Select time in format HH:mm
- `year-month`: Select date in format YYYY-MM
- `month-day`: Select date in format MM-DD
- `hour-minute`: Select time in format HH:mm
- `minute-second`: Select time in format mm:ss

```html
<template>
    <view>
        <!-- Full datetime -->
        <hy-datetime-picker v-model="value1" has-input></hy-datetime-picker>

        <!-- Year-month-day -->
        <hy-datetime-picker v-model="value2" has-input mode="date"></hy-datetime-picker>

        <!-- Year-month -->
        <hy-datetime-picker v-model="value3" has-input mode="year-month"></hy-datetime-picker>

        <!-- Month-day -->
        <hy-datetime-picker v-model="value4" has-input mode="month-day"></hy-datetime-picker>

        <!-- Time (hour:minute:second) -->
        <hy-datetime-picker v-model="value5" has-input mode="time"></hy-datetime-picker>

        <!-- Hour/minute -->
        <hy-datetime-picker v-model="value6" has-input mode="hour-minute"></hy-datetime-picker>

        <!-- Minute/second -->
        <hy-datetime-picker v-model="value7" has-input mode="minute-second"></hy-datetime-picker>
    </view>
</template>

<script setup>
    import { ref } from 'vue';

    const value1 = ref('');
    const value2 = ref('');
    const value3 = ref('');
    const value4 = ref('');
    const value5 = ref('');
    const value6 = ref('');
    const value7 = ref('');
</script>
```

### Set maximum and minimum values

```html
<template>
    <view>
        <hy-datetime-picker
            has-input
            v-model="value"
            :minDate="minDate"
            :maxDate="maxDate"
            mode="datetime"
        ></hy-datetime-picker>
    </view>
</template>

<script setup>
    import { ref, computed } from 'vue';

    const value = ref(Date.now());
    // Set the selectable range from one year in the past to one year in the future
    const minDate = computed(() => {
        return new Date(new Date().getFullYear() - 1, 0, 1).getTime();
    });
    const maxDate = computed(() => {
        return new Date(new Date().getFullYear() + 1, 11, 31).getTime();
    });
</script>
```

### Custom time formatting

```html
<template>
    <view>
        <hy-datetime-picker
            ref="datetimePickerRef"
            :show="show"
            v-model="value"
            mode="datetime"
            :formatter="formatter"
        ></hy-datetime-picker>
        <hy-button @click="show = true">打开</hy-button>
    </view>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    const show = ref(false);
    const value = ref(Date.now());
    const datetimePickerRef = ref(null);

    const formatter = (type, value) => {
        if (type === 'year') {
            return `${value}年`;
        }
        if (type === 'month') {
            return `${value}月`;
        }
        if (type === 'day') {
            return `${value}日`;
        }
        return value;
    };

    onMounted(() => {
        // WeChat Mini Program requires this syntax
        // datetimePickerRef.value.setFormatter(formatter);
    });
</script>
```

### Custom button text and colors

```html
<template>
    <hy-datetime-picker
        has-input
        v-model="value"
        cancelText="取消选择"
        confirmText="确认选择"
        cancelColor="#999999"
        confirmColor="#f56c6c"
    ></hy-datetime-picker>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref('');
</script>
```

### Custom input box style

```html
<template>
    <hy-datetime-picker
        has-input
        v-model="value"
        :input="{ placeholder: '请选择日期时间', border: true }"
        customStyle="{ marginTop: '20rpx' }"
    ></hy-datetime-picker>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref('');
</script>
```

## API

### DatetimePicker Props

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| show | Controls the popup and dismiss of the picker | `boolean` | false |
| v-model | Bound value | `string` \| `number` \| `Date` | - |
| mode | Display format | `date` \| `datetime` \| `time` \| `year-month` \| `month-day` \| `hour-minute` \| `minute-second` | datetime |
| hasInput | Whether to include a built-in input box | `boolean` | false |
| input | Collection of input box properties, applicable when hasInput is true, see [Input API](./input#api) for details | `HyInputProps` | - |
| format | Date format displayed in the input box | `string` | 'YYYY-MM-DD HH:mm' |
| popupMode | Controls the popup direction of the picker | `bottom` \| `center` \| `left` \| `right` \| `top` | bottom |
| showToolbar | Whether to show the top toolbar | `boolean` | true |
| title | Top title | `string` | - |
| maxDate | Maximum selectable time (timestamp in milliseconds) | `number` | 10 years later |
| minDate | Minimum selectable time (timestamp in milliseconds) | `number` | 10 years earlier |
| minHour | Minimum selectable hour, only effective when mode=time | `number` | 0 |
| maxHour | Maximum selectable hour, only effective when mode=time | `number` | 23 |
| minMinute | Minimum selectable minute, only effective when mode=time | `number` | 0 |
| maxMinute | Maximum selectable minute, only effective when mode=time | `number` | 59 |
| filter | Option filter function | `function` | null |
| formatter | Option format function | `function` | null |
| loading | Whether to show the loading state | `boolean` | false |
| itemHeight | Height of a single option in each column | `number` | 44 |
| cancelText | Text of the cancel button | `string` | Cancel |
| confirmText | Text of the confirm button | `string` | Confirm |
| cancelColor | Color of the cancel button | `string` | #909193 |
| confirmColor | Color of the confirm button | `string` | #3c9cff |
| visibleItemCount | Number of visible options per column | `number` | 5 |
| closeOnClickOverlay | Whether to allow closing the picker by clicking the overlay | `boolean` | false |
| defaultIndex | Default index for each column | `array` | - |
| toolbarRightSlot | Whether to show the right slot | `boolean` | false |
| customStyle | Custom outer style of the input box | `CSSProperties` | - |
| customClass | Custom outer class name | `string` | - |

### Events

| Event Name | Description                           | Callback Parameters          |
| ------- | ------------------------------ | ----------------- |
| close   | Triggered when the picker is closed               | -                 |
| confirm | Triggered when the confirm button is clicked, returns the currently selected value | `{ value, mode }` |
| change  | Triggered when the selected value changes             | `{ value, mode }` |
| cancel  | Triggered when the cancel button is clicked                   | -                 |

### Slots

| Slot Name | Description |
| --- | --- |
| toolbar-right | Toolbar right content, for customizing the right side; due to WeChat Mini Program limitations, `toolbarRightSlot="true"` must also be set for it to take effect |
| toolbar-bottom | Custom area below the input box |

### Methods

| Method Name       | Description                                                 |
| ------------ | ---------------------------------------------------- |
| setFormatter | Internal method exposed for WeChat Mini Program compatibility, used to set the format function |

### Typings

::: details Type Description

```ts
type IParam = {
    /** Value */
    value: string | number;
    /** Time mode */
    mode: HyApp.DateModeEnum;
};
```

:::

<demo-model url="pages-design/dateTimePicker/dateTimePicker"></demo-model>