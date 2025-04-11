# DatetimePicker 时间选择器组件
> 此选择器用于时间日期选择

::: danger 注意
注意： 请先执行npm i dayjs安装依赖。
:::

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [datetimePicker组件](https://uiadmin.net/uview-plus/components/datetimePicker.html) 的代码实现。
:::


## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-datetime-picker hasInput></hy-datetime-picker>
<!-- 单个组件引入 -->
<HyDatetimePicker hasInput></HyButton>
```
```ts
import { HyDatetimePicker } from "hfyk-app"
```

## 通过外部按钮打开

```html
<template>
    <view>
        <hy-datetime-picker
            :show="show"
            mode="datetime"
        ></hy-datetime-picker>
        <hy-button @click="show = true">打开</hy-button>
    </view>
</template>

<script setup>
    import { ref } from 'vue';

    const show = ref(false);
</script>
```

## 通过内部输入框打开

```html
<template>
    <view>
        <hy-datetime-picker
            hasInput
            v-model="value"
            mode="datetime"
        ></hy-datetime-picker>
    </view>
</template>

<script setup>
    import { ref } from 'vue';
    
    const value = ref(Date.now());
</script>
```

## 时间模式
- `datetime`: 选择日期格式YYYY-MM-DD HH:mm:ss
- `date`: 选择日期格式YYYY-MM-DD
- `time`: 选择日期格式HH:mm
- `year-month`: 选择日期格式YYYY-MM
- `month-day`: 选择日期格式MM-DD
- `hour-minute`: 选择日期格式HH:mm
- `minute-second`: 选择日期格式mm:ss
```html
<template>
    <view>
        <hy-datetime-picker hasInput v-model="value" mode="datetime"></hy-datetime-picker>
        <hy-datetime-picker hasInput v-model="value" mode="date"></hy-datetime-picker>
        <hy-datetime-picker hasInput v-model="value" mode="time"></hy-datetime-picker>
        <hy-datetime-picker hasInput v-model="value" mode="year-month"></hy-datetime-picker>
        <hy-datetime-picker hasInput v-model="value" mode="month-day"></hy-datetime-picker>
        <hy-datetime-picker hasInput v-model="value" mode="hour-minute"></hy-datetime-picker>
        <hy-datetime-picker hasInput v-model="value" mode="minute-second"></hy-datetime-picker>
    </view>
</template>

<script setup>
    import { ref } from 'vue';
    
    const value = ref(Date.now());
</script>
```

## 时间自定义格式化
如有需要，可以通过`formatter`参数编写自定义格式化规则。
::: warning 注意
微信小程序不支持通过props传递函数参数，所以组件内部暴露了一个setFormatter方法用于设置格式化方法，注意在页面的onMounted生命周期获取ref再操作。
:::
```html
<template>
    <view>
        <up-datetime-picker
			ref="datetimePickerRef"
			:show="show"
            v-model="value1"
			mode="datetime"
			:formatter="formatter"
        ></up-datetime-picker>
        <up-button @click="show = true">打开</up-button>
    </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const show = ref(false);
const value1 = ref(Date.now());
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
  datetimePickerRef.value.setFormatter(formatter);
});
</script>
```

## 限制最大最小值
参数`minDate`和`maxData`可以设置最大值和最小值（传入时间戳）。
```html
<template>
    <view>
        <hy-datetime-picker 
            has-input
            :show="show"
            v-model="value1"
            :minDate="1587524800000"
            :maxDate="1786778555000"
            mode="datetime"
        ></hy-datetime-picker>
    </view>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(Date.now());
</script>
```

## API

| 参数                  | 说明                   | 类型                                                                                         | 默认值                |
|---------------------|----------------------|--------------------------------------------------------------------------------------------|--------------------|
| hasInput            | 是否自带input输入框         | `boolean`                                                                                  | false              |
| format              | 输入框显示日期格式            | `string`                                                                                   | 'YYYY-MM-DD HH:mm' |
| placeholder         | 输入框placeholder       | `string`                                                                                   | 请选择                |
| show                | 用于控制选择器的弹出与收起        | `boolean`                                                                                  | false              |
| popupMode           | 用于控制选择器的弹出方向         | `bottom`\|`center`\|`left`\|`right`\|`top`                                                 | bottom             |
| showToolbar         | 是否显示顶部的操作栏           | `boolean`                                                                                  | true               |
| v-model             | 绑定值                  | `string` \| `number` \| `Date`                                                             | -                  |
| title               | 顶部标题                 | `string`                                                                                   | -                  |
| mode                | 展示格式                 | `date`\|`datetime`\|`time`\|`year-month`<br/>\|`month-day`\|`hour-minute`\|`minute-second` | datetime           |
| maxDate             | 可选的最大时间（时间戳毫秒）       | `number`                                                                                   | 最大默认值为后10年         |
| minDate             | 可选的最小时间（时间戳毫秒）       | `number`                                                                                   | 最小默认值为前10年         |
| minHour             | 可选的最小小时，仅mode=time有效 | `number`                                                                                   | 23                 |
| maxHour             | 可选的最大小时，仅mode=time有效 | `number`                                                                                   | 0                  |
| minMinute           | 可选的最小分钟，仅mode=time有效 | `number`                                                                                   | 0                  |
| maxMinute           | 可选的最大分钟，仅mode=time有效 | `number`                                                                                   | 59                 |
| filter              | 选项过滤函数               | `null` \| `function`                                                                       | null               |
| formatter           | 输入过滤或格式化函数           | `null` \| `function`                                                                       | null               |
| loading             | 是否显示加载中状态            | `boolean`                                                                                  | false              |
| itemHeight          | 各列中，单个选项的高度          | `number`                                                                                   | 44                 |
| cancelText          | 取消按钮的文字              | `string`                                                                                   | 取消                 |
| confirmText         | 确认按钮的文字              | `string`                                                                                   | 确认                 |
| cancelColor         | 取消按钮的颜色              | `string`                                                                                   | #909193            |
| confirmColor        | 确认按钮的颜色              | `string`                                                                                   | #3c9cff            |
| visibleItemCount    | 每列中可见选项的数量           | `number`                                                                                   | 5                  |
| closeOnClickOverlay | 是否允许点击遮罩关闭选择器        | `boolean`                                                                                  | false              |
| defaultIndex        | 各列的默认索引              | `array`                                                                                    | -                  |
| disabled            | 是否禁用输入框              | `boolean`                                                                                  | false              |
| disabledColor       | 禁用时候输入框背景色           | `string`                                                                                   | #F5F5F5            |
| toolbarRightSlot    | 是否右边插槽               | `boolean`                                                                                  | false              |
| customStyle         | 自定义输入框外部样式           | `CSSProperties`                                                                            | -                  |

## Events

| 事件名     | 说明              | 回调参数                 |
|---------|-----------------|----------------------|
| close   | 关闭选择器时触发        | -                    |
| confirm | 点击确定按钮，返回当前选择的值 | Array: 见上方"回调参数"部分说明 |
| change  | 当选择值变化时触发       | Array: 见上方"回调参数"部分说明 |
| cancel  | 点击取消按钮	         | -                    |

## Slots
| 插槽名            | 说明                                                          | 接收值 |
|----------------|-------------------------------------------------------------|-----|
| toolbar-right  | 工具栏右侧内容，自定义右侧内容，因为微信小程序限制，需要同时设置:toolbarRightSlot="true"生效。 | -   |
| toolbar-bottom | 输入框下方自定义区域                                                  | -   |

## Methods
| 方法名          | 说明                     |
|--------------|------------------------|
| setFormatter | 为兼容微信小程序而暴露的内部方法，见上方说明 |

