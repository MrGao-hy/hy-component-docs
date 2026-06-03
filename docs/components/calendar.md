# Calendar 日历组件
> 此组件用于单个选择日期，范围选择日期等，日历被包裹在底部弹起的容器中。


::: tip 注意
此组件与[Picker 选择器](./picker.md)的日期选择模式有一定的重合之处，区别在于本组件为更专业的日期选择场景，能选择日期范围等。另外 Picker 组件的日期模式可以配置更多的参数，如时、分、秒等，可以根据不同的使用场景进行选择。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :warning: 注意事项

### 1. 显示控制

使用 `v-model:show` 控制日历弹窗的显示与隐藏：

```html
<hy-calendar v-model:show="show" @confirm="onConfirm"></hy-calendar>
```

### 2. 默认日期格式

`defaultDate` 支持多种格式：

```html
<!-- 单个日期 -->
<hy-calendar defaultDate="2025-05-01"></hy-calendar>
<hy-calendar :defaultDate="new Date()"></hy-calendar>

<!-- 多个日期（mode=multiple或range） -->
<hy-calendar mode="multiple" :defaultDate="['2025-05-01', '2025-05-05']"></hy-calendar>
<hy-calendar mode="range" :defaultDate="['2025-05-01', '2025-05-05']"></hy-calendar>
```

### 3. formatter 格式化函数

`formatter` 函数用于自定义日期显示，可以添加标记点、底部提示等：

```ts
const formatter = (day: any) => {
    // day 对象包含: date, day, week, disabled, dot, bottomInfo 等属性
    if (day.day === 15) {
        day.dot = true        // 显示标记点
        day.bottomInfo = '发薪日' // 底部提示文字
    }
    return day
}
```

**注意**：如需兼容微信小程序，需要通过 `setFormatter` 方法设置：

```ts
onReady(() => {
    (this.$refs.calendar as any).setFormatter(formatter)
})
```

### 4. forbidDays 禁用日期

`forbidDays` 用于指定禁止选中的日期（仅适用于 `mode=single` 或 `mode=multiple`）：

```html
<hy-calendar
    mode="single"
    :forbidDays="['2025-05-01', '2025-05-02']"
    forbidDaysToast="该日期不可选"
></hy-calendar>
```

### 5. 日期范围限制

可以同时设置 `minDate` 和 `maxDate` 限制可选日期范围：

```html
<hy-calendar
    minDate="2025-01-01"
    maxDate="2025-12-31"
></hy-calendar>
```

## :japanese_castle:基本使用示例

```html
<template>
    <!-- 单个日期选择 -->
    <hy-calendar v-model:show="show" @confirm="onConfirm"></hy-calendar>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)

const onConfirm = (dates: string[]) => {
    uni.showToast({
        title: `选择了: ${dates[0]}`,
        icon: 'none'
    })
}
</script>
```

### 日历模式

```html
<template>
    <!-- 单选模式（默认） -->
    <hy-calendar v-model:show="show1" mode="single" @confirm="onConfirm"></hy-calendar>
    
    <!-- 多选模式 -->
    <hy-calendar v-model:show="show2" mode="multiple" @confirm="onConfirm"></hy-calendar>
    
    <!-- 范围模式 -->
    <hy-calendar v-model:show="show3" mode="range" @confirm="onConfirm"></hy-calendar>
</template>

<script setup>
import { ref } from 'vue'

const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)

const onConfirm = (dates: string[]) => {
    console.log('选择的日期:', dates)
}
</script>
```

### 自定义主题颜色

```html
<template>
    <hy-calendar
        v-model:show="show"
        color="#f56c6c"
        @confirm="onConfirm"
    ></hy-calendar>
</template>
```

### 自定义文案

```html
<template>
    <hy-calendar
        v-model:show="show"
        mode="range"
        startText="住店"
        endText="离店"
        confirmDisabledText="请选择离店日期"
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
    
    // 今天之后第3天显示优惠标记
    if (day.month === month && day.day === date + 3) {
        day.bottomInfo = '有优惠'
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

### 日期范围限制

```html
<template>
    <!-- 设置最大日期 -->
    <hy-calendar v-model:show="show1" maxDate="2025-05-05" @confirm="onConfirm"></hy-calendar>
    
    <!-- 设置最小和最大日期 -->
    <hy-calendar
        v-model:show="show2"
        minDate="2025-01-01"
        maxDate="2025-12-31"
        @confirm="onConfirm"
    ></hy-calendar>
</template>
```

### 显示农历

```html
<template>
    <hy-calendar v-model:show="show" showLunar @confirm="onConfirm"></hy-calendar>
</template>
```

### 默认日期

```html
<template>
    <!-- 单个日期 -->
    <hy-calendar v-model:show="show1" defaultDate="2025-05-01" @confirm="onConfirm"></hy-calendar>
    
    <!-- 多个日期（多选模式） -->
    <hy-calendar
        v-model:show="show2"
        mode="multiple"
        :defaultDate="['2025-04-25', '2025-04-30']"
        @confirm="onConfirm"
    ></hy-calendar>
    
    <!-- 日期范围（范围模式） -->
    <hy-calendar
        v-model:show="show3"
        mode="range"
        :defaultDate="['2025-05-01', '2025-05-05']"
        @confirm="onConfirm"
    ></hy-calendar>
</template>
```

### 范围选择限制

```html
<template>
    <hy-calendar
        v-model:show="show"
        mode="range"
        :maxRange="7"
        rangePrompt="最多选择7天"
        allowSameDay
        @confirm="onConfirm"
    ></hy-calendar>
</template>
```

### 禁用日期

```html
<template>
    <hy-calendar
        v-model:show="show"
        mode="single"
        :forbidDays="forbidDays"
        forbidDaysToast="该日期已被预约"
        @confirm="onConfirm"
    ></hy-calendar>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
const forbidDays = ref(['2025-05-01', '2025-05-02', '2025-05-03'])
</script>
```

### 只读模式

```html
<template>
    <hy-calendar
        v-model:show="show"
        readonly
        defaultDate="2025-05-01"
    ></hy-calendar>
</template>
```

## API
### Calendar Props

| 参数                  | 说明                                                                  | 类型                                   | 默认值                                 |
|---------------------|---------------------------------------------------------------------|--------------------------------------|-------------------------------------|
| show                | 是否显示日历弹窗                                                            | `boolean`                            | false                               |
| title               | 标题内容                                                                | `string`                             | 日期选择                                |
| showTitle           | 是否显示标题                                                              | `boolean`                            | true                                |
| showSubtitle        | 是否显示副标题                                                             | `boolean`                            | true                                |
| mode                | 日期类型选择                                                              | `single`\|`multiple`\|`range`        | single                              |
| startText           | mode=range时，第一个日期底部的提示文字                                            | `string`                             | 开始                                  |
| endText             | mode=range时，最后一个日期底部的提示文字                                           | `string`                             | 结束                                  |
| customList          | 自定义列表                                                               | `array`                              | []                                  |
| color               | 主题色，对底部按钮和选中日期有效                                                    | `string`                             | -                                   |
| minDate             | 最小的可选日期                                                             | `number` \| `string`                 | 0                                   |
| maxDate             | 最大可选日期                                                              | `number` \| `string`                 | 0                                   |
| defaultDate         | 默认选中的日期，mode为multiple或range是必须为数组格式                                 | `string`\|`string[]`\|`Date`\|`null` | null                                |
| maxCount            | mode=multiple时，最多可选多少个日期                                            | `number`                             | Number.MAX_SAFE_INTEGER             |
| rowHeight           | 日期行高                                                                | `number`                             | 56                                  |
| formatter           | 日期格式化函数(如需兼容微信小程序，则只能通过setFormatter方法)                              | `Function` \| `null`                 | null                                |
| showLunar           | 是否显示农历                                                              | `boolean`                            | false                               |
| showMark            | 是否显示月份背景色                                                           | `boolean`                            | true                                |
| showConfirm         | 显示确认按钮                                                              | `boolean`                            | true                                |
| confirmText         | 确定按钮的文字                                                             | `string`                             | 确定                                  |
| confirmDisabledText | 确认按钮处于禁用状态时的文字                                                      | `string`                             | 确定                                  |
| closeOnClickOverlay | 是否允许点击遮罩关闭日历（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调） | `boolean`                            | false                               |
| readonly            | 是否为只读状态，只读状态下禁止选择日期                                                 | `boolean`                            | false                               |
| maxRange            | 日期区间最多可选天数，默认无限制，mode = range时有效                                    | `number`                             | Number.MAX_SAFE_INTEGER             |
| rangePrompt         | 范围选择超过最多可选天数时的提示文案，mode = range时有效                                  | `string` \| `null`                   | 选择天数不能超过 xx 天                       |
| showRangePrompt     | 范围选择超过最多可选天数时，是否展示提示文案，mode = range时有效                              | `boolean`                            | true                                |
| allowSameDay        | 是否允许日期范围的起止时间为同一天，mode = range时有效                                   | `boolean`                            | false                               |
| round               | 圆角值，默认无圆角                                                           | `string` \| `number`                 | 0                                   |
| monthNum            | 最大展示的月份数量                                                           | `number`                             | 3                                   |
| weekText            | 星期文案，可用于多语言。                                                        | `string[]`                           | ['日', '一', '二', '三', '四', '五', '六'] |
| forbidDays          | 单选与多选禁止选中的日期列表，mode!=range时有效。                                      | `Date[]`                             | []                                  |
| forbidDaysToast     | 单选与多选禁止选中的日期选择时提示                                                   | `string`                             | 该日期已禁用                              |

### Methods

| 方法名          | 说明                           |
|--------------|------------------------------|
| setFormatter | 为兼容微信小程序而暴露的内部方法，用于设置日期格式化函数 |

### Events

| 事件名     | 说明                                      | 回调参数              |
|---------|-----------------------------------------|-------------------|
| confirm | 日期选择完成后触发，若show-confirm为true，则点击确认按钮后触发 | 选择日期数组 `string[]` |
| close   | 日历关闭时触发                                 | -                 |

### typings

:::details 类型说明

```ts
// 日期项
export interface DateItem {
    date: string | number | Date
    day: number | string
    week: number
    disabled?: boolean
    dot?: boolean
    bottomInfo?: string
    [key: string]: any
}

// 月份数据
export interface MonthData {
    year: number | string
    month: number | string
    date: DateItem[]
}

// 月份组件属性
export interface IMonthProps {
    showMark?: boolean
    color?: string
    months?: MonthData[]
    mode?: 'single' | 'multiple' | 'range'
    rowHeight?: string | number
    maxCount?: number
    startText?: string
    endText?: string
    defaultDate?: string | string[] | Date | null
    minDate?: string | number
    maxDate?: string | number
    maxMonth?: number
    readonly?: boolean
    maxRange?: number
    rangePrompt?: string
    showRangePrompt?: boolean
    allowSameDay?: boolean
    forbidDays?: string[]
    forbidDaysToast?: string
}
```

:::

<demo-model url="pages-design/calendar/calendar"></demo-model>