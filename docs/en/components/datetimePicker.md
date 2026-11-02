# DatetimePicker Component

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

- The `minDate` and `maxDate` parameters require a timestamp (in milliseconds), not a date string
- WeChat Mini Program does not support passing function parameters via props; `formatter` must be set via the `setFormatter` method
- When `hasInput` is set to `true`, the component comes with a built-in input box, and clicking the input box opens the picker
- `mode` supports multiple formats, see the description below for details
- `minHour`, `maxHour`, `minMinute`, and `maxMinute` are only valid when `mode=time`

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

- `datetime`: Selects date/time in the format YYYY-MM-DD HH:mm:ss
- `date`: Selects date in the format YYYY-MM-DD
- `time`: Selects time in the format HH:mm
- `year-month`: Selects date in the format YYYY-MM
- `month-day`: Selects date in the format MM-DD
- `hour-minute`: Selects time in the format HH:mm
- `minute-second`: Selects time in the format mm:ss

```html
<template>
    <view>
        <!-- 完整时间 -->
        <hy-datetime-picker v-model="value1" has-input></hy-datetime-picker>

        <!-- 年月日 -->
        <hy-datetime-picker v-model="value2" has-input mode="date"></hy-datetime-picker>

        <!-- 年月 -->
        <hy-datetime-picker v-model="value3" has-input mode="year-month"></hy-datetime-picker>

        <!-- 月日 -->
        <hy-datetime-picker v-model="value4" has-input mode="month-day"></hy-datetime-picker>

        <!-- 时间(时分秒) -->
        <hy-datetime-picker v-model="value5" has-input mode="time"></hy-datetime-picker>

        <!-- 小时/分 -->
        <hy-datetime-picker v-model="value6" has-input mode="hour-minute"></hy-datetime-picker>

        <!-- 分/秒 -->
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
    // 设置可选范围为过去一年到未来一年
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
        // 微信小程序需要用此写法
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

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| show | Controls the popup and collapse of the picker | `boolean` | false |
| v-model | Binding value | `string` \| `number` \| `Date` | - |
| mode | Display format | `date` \| `datetime` \| `time` \| `year-month` \| `month-day` \| `hour-minute` \| `minute-second` | datetime |
| hasInput | Whether to include a built-in input box | `boolean` | false |
| input | Collection of input box attributes; available when hasInput is true, see [Input API](./input#api) for details | `HyInputProps` | - |
| format | Date format displayed in the input box | `string` | 'YYYY-MM-DD HH:mm' |
| popupMode | Controls the popup direction of the picker | `bottom` \| `center` \| `left` \| `right` \| `top` | bottom |
| showToolbar | Whether to show the top toolbar | `boolean` | true |
| title | Top title | `string` | - |
| maxDate | Maximum selectable time (timestamp in milliseconds) | `number` | 10 years ahead |
| minDate | Minimum selectable time (timestamp in milliseconds) | `number` | 10 years back |
| minHour | Minimum selectable hour, only valid when mode=time | `number` | 0 |
| maxHour | Maximum selectable hour, only valid when mode=time | `number` | 23 |
| minMinute | Minimum selectable minute, only valid when mode=time | `number` | 0 |
| maxMinute | Maximum selectable minute, only valid when mode=time | `number` | 59 |
| filter | Option filter function | `function` | null |
| formatter | Option formatter function | `function` | null |
| loading | Whether to show the loading state | `boolean` | false |
| itemHeight | Height of a single option in each column | `number` | 44 |
| cancelText | Text of the cancel button | `string` | Cancel |
| confirmText | Text of the confirm button | `string` | Confirm |
| cancelColor | Color of the cancel button | `string` | #909193 |
| confirmColor | Color of the confirm button | `string` | #3c9cff |
| visibleItemCount | Number of visible options per column | `number` | 5 |
| closeOnClickOverlay | Whether clicking the overlay is allowed to close the picker | `boolean` | false |
| defaultIndex | Default index of each column | `array` | - |
| toolbarRightSlot | Whether to enable the right slot | `boolean` | false |
| customStyle | Custom outer style of the input box | `CSSProperties` | - |
| customClass | Custom outer class name | `string` | - |

### Events

| Event    | Description                                                    | Callback          |
| ------- | ------------------------------ | ----------------- |
| close   | Triggered when the picker is closed                            | -                 |
| confirm | Triggered when the confirm button is clicked, returns the currently selected value | `{ value, mode }` |
| change  | Triggered when the selected value changes                      | `{ value, mode }` |
| cancel  | Triggered when the cancel button is clicked                    | -                 |

### Slots

| Slot | Description |
| --- | --- |
| toolbar-right | Content on the right side of the toolbar; customizes the right-side content. Due to WeChat Mini Program limitations, `toolbarRightSlot="true"` must also be set for it to take effect |
| toolbar-bottom | Custom area below the input box |

### Methods

| Method       | Description                                                 |
| ------------ | ---------------------------------------------------- |
| setFormatter | Internal method exposed for WeChat Mini Program compatibility, used to set the formatter function |

### Typings

::: details Type Description

```ts
type IParam = {
    /** 值 */
    value: string | number;
    /** 时间模型 */
    mode: HyApp.DateModeEnum;
};
```

:::

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-datetime-picker-radius` | Border radius | `4px` |
| `--hy-datetime-picker-border` | Border | `1px solid #eee` |
| `--hy-datetime-picker-padding` | Padding | `0 10px` |

<demo-model url="pages-design/dateTimePicker/dateTimePicker"></demo-model>