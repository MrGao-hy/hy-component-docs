# Calendar 日历组件
> 此组件用于单个选择日期，范围选择日期等，日历被包裹在底部弹起的容器中。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [calendar组件](https://uiadmin.net/uview-plus/components/calendar.html) 的代码实现。
:::

::: tip 注意
此组件与[Picker 选择器](./picker.md)的日期选择模式有一定的重合之处，区别在于本组件为更专业的日期选择场景，能选择日期范围等。 另外Picker组件的日期模式可以配置更多的参数，如时、分、秒等，可以根据不同的使用场景进行选择。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-calendar text="月落"></hy-calendar>
<!-- 单个组件引入 -->
<HyCalendar type="primary">按钮</HyCalendar>
```
```ts
import { HyCalendar } from "hy-app"
```

## 日历模式
- 通过配置`mode`实现不同模式日历
  - `single`：只能选择单个日期
  - `multiple`：可以选择多个日期
  - `range`：可以选择日期范围
```html
<template>
    <hy-calendar mode="single"></hy-calendar>
    <hy-calendar mode="multiple"></hy-calendar>
    <hy-calendar mode="range"></hy-calendar>
</template>
```

## 自定义主题颜色
- 通过配置`color`参数，更改组件主题色
```html
<template>
    <hy-calendar color="#f56c6c"></hy-calendar>
</template>
```

## 自定义文案
- 通过配置`formatter`以函数的方式定义日期文案
:::code-group
```html [vue]
<template>
    <hy-calendar 
        startText="住店"
        endText="离店"
        confirmDisabledText="请选择离店日期"
        :formatter="formatter"
        :show="show"
        :mode="mode"
        @confirm="confirm"
        ref="calendar"
    ></hy-calendar>
</template>
```
```vue [.ts]

<script setup>
  import { ref } from 'vue';
  import { onReady } from '@dcloudio/uni-app';

  const show = ref(true);
  const mode = ref('range');

  const confirm = (e) => {
    console.log(e);
  };

  const formatter = (day) => {
    const d = new Date();
    let month = d.getMonth() + 1;
    const date = d.getDate();
    if (day.month == month && day.day == date + 3) {
      day.bottomInfo = '有优惠';
      day.dot = true;
    }
    return day;
  };

  const onReady = () => {
    // 如果需要兼容微信小程序的话，需要用此写法
    $refs.calendar.setFormatter(formatter);
  };
</script>
```

```scss [.scss]
.title{
  text-align: center;
  padding: 20rpx 0 0 0;
}
```
:::


## 日期最大范围
- 通过配置`maxDate`设置最大时间（可以时间格式或者时间戳）
```html
<template>
    <hy-calendar maxDate="2025-05-05"></hy-calendar>
    <hy-calendar maxDate="1745569187"></hy-calendar>
</template>
```

## 日历模式
- 通过配置`showLunar`为true显示农历
```html
<template>
    <hy-calendar showLunar></hy-calendar>
</template>
```

## 默认日期
- 通过配置`defaultDate`设置默认日期
```html
<template>
    <hy-calendar defaultDate="2025-05-01"></hy-calendar>
    <hy-calendar :defaultDate="['2025-05-01', '2025-05-05']"></hy-calendar>
</template>
```

## API

| 参数                  | 说明                                                                   | 类型                                    | 默认值                                 |
|---------------------|----------------------------------------------------------------------|---------------------------------------|-------------------------------------|
| show                | 是否显示日历弹窗                                                             | `boolean`                             | false                               |
| title               | 标题内容                                                                 | `string`                              | 日期选择                                |
| showTitle           | 是否显示标题                                                               | `boolean`                             | true                                |
| showSubtitle        | 是否显示副标题                                                              | `boolean`                             | true                                |
| mode                | 日期类型选择[^1]                                                           | `single`\|`multiple`\|`range`         | single                              |
| startText           | mode=range时，第一个日期底部的提示文字                                             | `string`                              | 开始                                  |
| endText             | mode=range时，最后一个日期底部的提示文字                                            | `string`                              | 结束                                  |
| customList          | 自定义列表                                                                | `array`                               | []                                  |
| color               | 主题色，对底部按钮和选中日期有效                                                     | `string`                              | #3c9cff                             |
| minDate             | 最小的可选日期                                                              | `number` \| `string`                  | 0                                   |
| maxDate             | 最大可选日期                                                               | `number` \| `string`                  | 0                                   |
| defaultDate         | 默认选中的日期，mode为multiple或range是必须为数组格式                                  | `string`\|`string[]`\| `Date`\|`null` | null                                |
| maxCount            | mode=multiple时，最多可选多少个日期                                             | `number`                              | Number.MAX_SAFE_INTEGER             |
| rowHeight           | 日期行高                                                                 | `boolean`                             | 56                                  |
| formatter           | 日期格式化函数(如需兼容微信小程序，则只能通过setFormatter方法)                               | `Function` \| `null`                  | null                                |
| showLunar           | 是否显示农历                                                               | `boolean`                             | false                               |
| showMark            | 是否显示月份背景色                                                            | `boolean`                             | true                                |
| showConfirm         | 显示确认按钮                                                               | `boolean`                             | true                                |
| confirmText         | 确定按钮的文字                                                              | `string`                              | 确定                                  |
| confirmDisabledText | 确认按钮处于禁用状态时的文字                                                       | `string`                              | 确定                                  |
| closeOnClickOverlay | 是否允许点击遮罩关闭日历 （注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调） | `boolean`                             | false                               |
| readonly            | 是否为只读状态，只读状态下禁止选择日期                                                  | `boolean`                             | false                               |
| maxRange            | 日期区间最多可选天数，默认无限制，mode = range时有效                                     | `number`                              | Number.MAX_SAFE_INTEGER             |
| rangePrompt         | 范围选择超过最多可选天数时的提示文案，mode = range时有效                                   | `string` \| `null`                    | 选择天数不能超过 xx 天                       |
| showRangePrompt     | 范围选择超过最多可选天数时，是否展示提示文案，mode = range时有效                               | `boolean`                             | true                                |
| allowSameDay        | 是否允许日期范围的起止时间为同一天，mode = range时有效                                    | `boolean`                             | false                               |
| round               | 圆角值，默认无圆角                                                            | `string` \| `number`                  | 0                                   |
| monthNum            | 最大展示的月份数量                                                            | `string` \| `number`                  | 3                                   |
| weekText            | 星期文案，可用于多语言。                                                         | `string[]`                            | ['一', '二', '三', '四', '五', '六', '日'] |
| forbidDays          | 单选与多选禁止选中的日期列表，mode!=range时有效。                                       | `Date[]`                              | []                                  |
| forbidDaysToast     | 单选与多选禁止选中的日期选择时提示                                                    | `string`                              | 该日期已禁用	                             |


## Methods

| 事件名          | 说明                     |
|--------------|------------------------|
| setFormatter | 为兼容微信小程序而暴露的内部方法，见上方说明 |

## Events

| 事件名     | 说明                                      | 回调参数        |
|---------|-----------------------------------------|-------------|
| confirm | 日期选择完成后触发，若show-confirm为true，则点击确认按钮后触发 | 选择日期相关的返回参数 |
| close   | 日历关闭时触发                                 | -           |


[^1]: `spinner`：花瓣形状；`circle`：圆形； `small`：小尺寸；`semicircle`：半圆

<demo-model url="pages/components/calendar/calendar"></demo-model>