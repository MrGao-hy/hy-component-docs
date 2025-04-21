# Picker 选择器组件
> 此选择器用于单列，多列，多列联动的选择场景。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [picker组件](https://uiadmin.net/uview-plus/components/picker.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|---|----|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-picker :show="show" :columns="columns"></hy-picker>
<!-- 单个组件引入 -->
<HyButton :show="show" :columns="columns"></HyButton>
```
```ts
import { HyButton } from "hy-app"
import { ref, reactive } from 'vue';

const show = ref(true);
const columns = reactive([
    ['中国', '美国', '日本']
]);
```

## 通过按钮点击事件打开

```html
<template>
    <view>
        <hy-picker :show="show" :columns="columns"></-picker>
        <hy-button @click="show = true">打开</hy-button>
    </view>
</template>

<script setup>
    import { ref, reactive } from 'vue';

    const show = ref(false);
    const columns = reactive([
        ['中国', '美国', '日本']
    ]);
</script>
```

## 通过点击输入框直接打开

```html
<template>
    <hy-picker v-model="value" has-input :columns="columns"></-picker>
</template>

<script setup>
    import { reactive, ref } from 'vue';
    
    const value = ref("");
    const columns = reactive([
        ['中国', '美国', '日本']
    ]);
</script>
```

### 多列模式与多列联动
此模式通过传入`columns`参数，此参数为二维数组，通过`change`事件完成联动操作。
```html
<template>
    <hy-picker v-model="value" ref="uPickerRef" has-input :columns="columns" @change="changeHandler"></hy-picker>
</template>

<script setup>
import { ref, reactive } from 'vue';

const value = ref("");
const columns = reactive([
  ['中国', '美国'],
  ['深圳', '厦门', '上海', '拉萨']
]);
const columnData = reactive([
  ['深圳', '厦门', '上海', '拉萨'],
  ['得州', '华盛顿', '纽约', '阿拉斯加']
]);

const uPickerRef = ref(null)
const changeHandler = (e) => {
  const {
    columnIndex,
    value,
    values,
    index,
  } = e;

  if (columnIndex === 0) {
    uPickerRef.value.setColumnValues(1, columnData[index]);
  }
};
</script>
```

## 接受对象数据数据

```html
<template>
    <hy-picker :show="show" :columns="columns"></hy-picker>
</template>

<script setup>
import { ref, reactive } from 'vue';

const show = ref(true);
const columns = reactive([
  [
    {
        text: '雪月夜', 
        value: 2021
    },
    {
        text: '冷夜雨',
        value: 804
    }
  ]
]);
</script>
```

## 自定义选项值
参数`columns`可以传入自定义选项值，可以通过`keyName`参数控制对应的显示属性。

```html
<template>
    <hy-picker :show="show" :columns="columns" keyName="label"></hy-picker>
</template>

<script setup>
import { ref, reactive } from 'vue';

const show = ref(true);
const columns = reactive([
  [
    {
      label: '雪月夜',
      id: 2021
      // ...
    },
    {
      label: '冷夜雨',
      id: 804
    }
  ]
]);
</script>
```

## API

| 参数                  | 说明                         | 类型                                         | 默认值     |
|---------------------|----------------------------|--------------------------------------------|---------|
| modelValue          | 回显到输入框值（hasInput为true必须设置） | `string` \| `array`                        | -       |
| disabled            | 是否禁用输入框（hasInput为true可以设置） | `boolean`                                  | true    |
| show                | 是否显示选择器（hasInput为true不用设置） | `boolean`                                  | true    |
| popupMode           | 弹窗弹出模式                     | `bottom`\|`center`\|`left`\|`right`\|`top` | bottom  |
| separator           | 多列分隔符                      | `string`                                   | \       |
| showToolbar         | 是否显示顶部的操作栏                 | `boolean`                                  | true    |
| title               | 顶部标题                       | `string`                                   | -       |
| columns             | 设置每一列的数据，见上方说明             | `array`                                    | -       |
| loading             | 是否显示加载中状态                  | `boolean`                                  | false   |
| itemHeight          | 各列中，单个选项的高度                | `number`                                   | 44      |
| cancelText          | 取消按钮的文字                    | `string`                                   | 取消      |
| confirmText         | 确认按钮的文字                    | `string`                                   | 确定      |
| cancelColor         | 取消按钮的颜色                    | `string`                                   | #909193 |
| confirmColor        | 确认按钮的颜色                    | `string`                                   | #3c9cff |
| visibleItemCount    | 每列中可见选项的数量                 | `number`                                   | 5       |
| keyName             | 选项对象中，需要展示的属性键名            | `string`                                   | text    |
| closeOnClickOverlay | 是否允许点击遮罩关闭选择器              | `boolean`                                  | false   |
| defaultIndex        | 各列的默认索引                    | `array`                                    | -       |
| immediateChange     | 是否在手指松开时立即触发change事件       | `boolean`                                  | true    |
| zIndex              | 最高层级                       | `number`                                   | 10076   |
| hasInput            | 是否显示输入框                    | `boolean`                                  | false   |
| placeholder         | 输入框默认占位内容                  | `string`                                   | 请选择     |

## Events

| 事件名     | 说明              | 回调参数                 |
|---------|-----------------|----------------------|
| close   | 关闭选择器时触发        | -                    |
| confirm | 点击确定按钮，返回当前选择的值 | Array: 见上方"回调参数"部分说明 |
| change  | 当选择值变化时触发       | Array: 见上方"回调参数"部分说明 |
| cancel  | 点击取消按钮	         | -                    |

## Slots
| 插槽名            | 说明                                                          | 回调参数 |
|----------------|-------------------------------------------------------------|------|
| default        | 自定义输入框内容                                                    | -    |
| toolbar-right  | 工具栏右侧内容，自定义右侧内容，因为微信小程序限制，需要同时设置:toolbarRightSlot="true"生效。 | -    |
| toolbar-bottom | 输入框下方自定义区域                                                  | -    |
