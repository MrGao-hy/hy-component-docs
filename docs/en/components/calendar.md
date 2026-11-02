# Calendar Component

> This component is used for selecting a single date, a date range, and more. The calendar is wrapped in a container that pops up from the bottom.

::: tip Note

This component overlaps to some extent with the date selection mode of the [Picker](./picker.md). The difference is that this component is designed for more professional date selection scenarios, supporting date range selection, etc. In addition, the Picker component's date mode can be configured with more parameters, such as hours, minutes, and seconds, so you can choose between them based on different use cases.

:::

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :warning: Notes

### 1. Display Control

Use `v-model:show` to control the visibility of the calendar popup:

```html
<hy-calendar v-model:show="show" @confirm="onConfirm"></hy-calendar>
```

### 2. Default Date Format

`defaultDate` supports multiple formats:

```html
<!-- Single date -->
<hy-calendar defaultDate="2025-05-01"></hy-calendar>
<hy-calendar :defaultDate="new Date()"></hy-calendar>

<!-- Multiple dates (mode=multiple or range) -->
<hy-calendar mode="multiple" :defaultDate="['2025-05-01', '2025-05-05']"></hy-calendar>
<hy-calendar mode="range" :defaultDate="['2025-05-01', '2025-05-05']"></hy-calendar>
```

### 3. formatter Formatting Function

The `formatter` function is used to customize date display, such as adding marker dots, bottom info, etc.:

```ts
const formatter = (day: any) => {
    // The day object contains properties such as: date, day, week, disabled, dot, bottomInfo
    if (day.day === 15) {
        day.dot = true; // Show marker dot
        day.bottomInfo = 'Payday'; // Bottom info text
    }
    return day;
};
```

**Note**: For WeChat Mini Program compatibility, you need to set it via the `setFormatter` method:

```ts
onReady(() => {
    (this.$refs.calendar as any).setFormatter(formatter);
});
```

### 4. forbidDays Disabled Dates

`forbidDays` is used to specify dates that cannot be selected (only applicable to `mode=single` or `mode=multiple`):

```html
<hy-calendar
    mode="single"
    :forbidDays="['2025-05-01', '2025-05-02']"
    forbidDaysToast="This date is not selectable"
></hy-calendar>
```

### 5. Date Range Restrictions

You can set both `minDate` and `maxDate` to restrict the selectable date range:

```html
<hy-calendar minDate="2025-01-01" maxDate="2025-12-31"></hy-calendar>
```

## :japanese_castle: Basic Usage Example

```html
<template>
    <!-- Single date selection -->
    <hy-calendar v-model:show="show" @confirm="onConfirm"></hy-calendar>
</template>

<script setup>
    import { ref } from 'vue'

    const show = ref(false)

    const onConfirm = (dates: string[]) => {
        uni.showToast({
            title: `Selected: ${dates[0]}`,
            icon: 'none'
        })
    }
</script>
```

### Calendar Modes

```html
<template>
    <!-- Single mode (default) -->
    <hy-calendar v-model:show="show1" mode="single" @confirm="onConfirm"></hy-calendar>

    <!-- Multiple mode -->
    <hy-calendar v-model:show="show2" mode="multiple" @confirm="onConfirm"></hy-calendar>

    <!-- Range mode -->
    <hy-calendar v-model:show="show3" mode="range" @confirm="onConfirm"></hy-calendar>
</template>

<script setup>
    import { ref } from 'vue'

    const show1 = ref(false)
    const show2 = ref(false)
    const show3 = ref(false)

    const onConfirm = (dates: string[]) => {
        console.log('Selected dates:', dates)
    }
</script>
```

### Custom Theme Color

```html
<template>
    <hy-calendar v-model:show="show" color="#f56c6c" @confirm="onConfirm"></hy-calendar>
</template>
```

### Custom Text

```html
<template>
    <hy-calendar
        v-model:show="show"
        mode="range"
        startText="Check-in"
        endText="Check-out"
        confirmDisabledText="Please select a check-out date"
        :formatter="formatter"
        @confirm="onConfirm"
    ></hy-calendar>
</template>

<script setup>
    import { ref } from 'vue'

    const show = ref(false)

    const formatter = (day: any) => {
        const today = new Date()
        const month = today.getMonth() + 1
        const date = today.getDate()

        // Show a discount mark on the 3rd day after today
        if (day.month === month && day.day === date + 3) {
            day.bottomInfo = 'Discount'
            day.dot = true
        }
        return day
    }

    const onConfirm = (dates: string[]) => {
        uni.showToast({
            title: `${dates[0]} ~ ${dates[dates.length - 1]}`,
            icon: 'none'
        })
    }
</script>
```

### Date Range Restrictions

```html
<template>
    <!-- Set maximum date -->
    <hy-calendar v-model:show="show1" maxDate="2025-05-05" @confirm="onConfirm"></hy-calendar>

    <!-- Set minimum and maximum dates -->
    <hy-calendar
        v-model:show="show2"
        minDate="2025-01-01"
        maxDate="2025-12-31"
        @confirm="onConfirm"
    ></hy-calendar>
</template>
```

### Show Lunar Calendar

```html
<template>
    <hy-calendar v-model:show="show" showLunar @confirm="onConfirm"></hy-calendar>
</template>
```

### Default Date

```html
<template>
    <!-- Single date -->
    <hy-calendar v-model:show="show1" defaultDate="2025-05-01" @confirm="onConfirm"></hy-calendar>

    <!-- Multiple dates (multiple mode) -->
    <hy-calendar
        v-model:show="show2"
        mode="multiple"
        :defaultDate="['2025-04-25', '2025-04-30']"
        @confirm="onConfirm"
    ></hy-calendar>

    <!-- Date range (range mode) -->
    <hy-calendar
        v-model:show="show3"
        mode="range"
        :defaultDate="['2025-05-01', '2025-05-05']"
        @confirm="onConfirm"
    ></hy-calendar>
</template>
```

### Range Selection Restrictions

```html
<template>
    <hy-calendar
        v-model:show="show"
        mode="range"
        :maxRange="7"
        rangePrompt="You can select up to 7 days"
        allowSameDay
        @confirm="onConfirm"
    ></hy-calendar>
</template>
```

### Disabled Dates

```html
<template>
    <hy-calendar
        v-model:show="show"
        mode="single"
        :forbidDays="forbidDays"
        forbidDaysToast="This date has already been booked"
        @confirm="onConfirm"
    ></hy-calendar>
</template>

<script setup>
    import { ref } from 'vue';

    const show = ref(false);
    const forbidDays = ref(['2025-05-01', '2025-05-02', '2025-05-03']);
</script>
```

### Read-only Mode

```html
<template>
    <hy-calendar v-model:show="show" readonly defaultDate="2025-05-01"></hy-calendar>
</template>
```

## API

### Calendar Props

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| show | Whether to show the calendar popup | `boolean` | false |
| title | Title content | `string` | Select Date |
| showTitle | Whether to show the title | `boolean` | true |
| showSubtitle | Whether to show the subtitle | `boolean` | true |
| mode | Date selection type | `single`\|`multiple`\|`range` | single |
| startText | When mode=range, the hint text at the bottom of the first date | `string` | Start |
| endText | When mode=range, the hint text at the bottom of the last date | `string` | End |
| customList | Custom list | `array` | [] |
| color | Theme color, effective for the bottom button and selected dates | `string` | - |
| minDate | Minimum selectable date | `number` \| `string` | 0 |
| maxDate | Maximum selectable date | `number` \| `string` | 0 |
| defaultDate | Default selected date; must be in array format when mode is multiple or range | `string`\|`string[]`\|`Date`\|`null` | null |
| maxCount | When mode=multiple, the maximum number of selectable dates | `number` | Number.MAX_SAFE_INTEGER |
| rowHeight | Date row height; numeric values default to px | `number` | 56 |
| formatter | Date formatting function (for WeChat Mini Program compatibility, it can only be set via the setFormatter method) | `Function` \| `null` | null |
| showLunar | Whether to show the lunar calendar | `boolean` | false |
| showMark | Whether to show the month background mark | `boolean` | true |
| showConfirm | Whether to show the confirm button | `boolean` | true |
| confirmText | Text of the confirm button | `string` | Confirm |
| confirmDisabledText | Text of the confirm button when in disabled state | `string` | Confirm |
| closeOnClickOverlay | Whether to allow closing the calendar by clicking the overlay (Note: the close event must be handled by yourself; the close callback is only triggered when clicking the overlay after enabling closeOnClickOverlay) | `boolean` | false |
| readonly | Whether it is in read-only state; date selection is disabled in read-only state | `boolean` | false |
| maxRange | Maximum number of selectable days in a date range, unlimited by default, effective when mode = range | `number` | Number.MAX_SAFE_INTEGER |
| rangePrompt | Prompt text shown when the range selection exceeds the maximum number of selectable days, effective when mode = range | `string` \| `null` | Cannot select more than xx days |
| showRangePrompt | Whether to show the prompt text when the range selection exceeds the maximum number of selectable days, effective when mode = range | `boolean` | true |
| allowSameDay | Whether to allow the start and end of the date range to be the same day, effective when mode = range | `boolean` | false |
| round | Border radius value, no rounding by default | `string` \| `number` | 0 |
| monthNum | Maximum number of months to display | `number` | 3 |
| weekText | Weekday texts, useful for multi-language support. | `string[]` | ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] |
| forbidDays | List of dates that cannot be selected in single and multiple modes, effective when mode != range. | `Date[]` | [] |
| forbidDaysToast | Prompt shown when selecting a forbidden date in single or multiple mode | `string` | This date is disabled |

### Methods

| Method Name  | Description                                              |
| ------------ | -------------------------------------------------------- |
| setFormatter | Internal method exposed for WeChat Mini Program compatibility, used to set the date formatting function |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| confirm | Triggered when date selection is complete; if show-confirm is true, it is triggered when the confirm button is clicked | Selected dates array `string[]` |
| close | Triggered when the calendar is closed | - |

### Typings

::: details Type Definitions

```ts
// Date item
export interface DateItem {
    date: string | number | Date;
    day: number | string;
    week: number;
    disabled?: boolean;
    dot?: boolean;
    bottomInfo?: string;
    [key: string]: any;
}

// Month data
export interface MonthData {
    year: number | string;
    month: number | string;
    date: DateItem[];
}

// Month component props
export interface IMonthProps {
    showMark?: boolean;
    color?: string;
    months?: MonthData[];
    mode?: 'single' | 'multiple' | 'range';
    rowHeight?: string | number;
    maxCount?: number;
    startText?: string;
    endText?: string;
    defaultDate?: string | string[] | Date | null;
    minDate?: string | number;
    maxDate?: string | number;
    maxMonth?: number;
    readonly?: boolean;
    maxRange?: number;
    rangePrompt?: string;
    showRangePrompt?: boolean;
    allowSameDay?: boolean;
    forbidDays?: string[];
    forbidDaysToast?: string;
}
```

:::

### CSS Variables

| Variable | Description | Default Value |
| --- | --- | --- |
| `--hy-calendar-confirm-padding` | Confirm button padding | `7px 18px` |
| `--hy-calendar-title-font-size` | Title font size | `16px` |
| `--hy-calendar-title-height` | Title height (including line height) | `42px` |
| `--hy-calendar-subtitle-font-size` | Subtitle font size | `14px` |
| `--hy-calendar-subtitle-height` | Subtitle height (including line height) | `40px` |
| `--hy-calendar-weekday-font-size` | Weekday font size | `13px` |
| `--hy-calendar-weekday-line-height` | Weekday line height | `30px` |
| `--hy-calendar-month-title-font-size` | Month title font size | `14px` |
| `--hy-calendar-month-title-height` | Month title height (including line height) | `42px` |
| `--hy-calendar-month-mark-font-size` | Month watermark text size | `155px` |
| `--hy-calendar-day-selected-radius` | Selected date border radius | `3px` |
| `--hy-calendar-day-dot-size` | Date dot size | `7px` |
| `--hy-calendar-day-info-font-size` | Date number font size | `16px` |
| `--hy-calendar-day-bottom-info-font-size` | Date bottom info font size | `10px` |
| `--hy-calendar-subtitle-color` | Subtitle color | Follows `--hy-text-color--2` |
| `--hy-calendar-weekday-color` | Weekday color | Follows `--hy-text-color--grey` |
| `--hy-calendar-month-title-color` | Month title color | Follows `--hy-text-color--2` |
| `--hy-calendar-month-mark-color` | Month watermark color | Follows `--hy-text-color--4` |
| `--hy-calendar-day-selected-color` | Selected date text color | `#ffffff` |
| `--hy-calendar-day-disabled-color` | Disabled date text color | Follows `--hy-text-color--disabled` |
| `--hy-calendar-day-bottom-info-color` | Date bottom info color | Follows `--hy-text-color--2` |

<demo-model url="pages-design/calendar/calendar"></demo-model>