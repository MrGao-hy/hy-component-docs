# Slider 滑动选择器组件
> 该组件一般用于表单中，手动选择一个区间范围的场景。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [slider组件](https://uiadmin.net/uview-plus/components/slider.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-slider v-model="value"></hy-slider>
<!-- 单个组件引入 -->
<HySlider v-model="value">按钮</HySlider>
```
```ts
import { HySlider } from "hfyk-app"
import { ref } from 'vue';

const value = ref(30);  
```

## 设置最大和最小值
通过`min`和`max`，可以设置滑块所能选择的最大和最小值
```html
<template>
    <hy-slider v-model="value" min="30" max="80"></hy-slider>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref(30);
</script>
```

## 设置步进值
::: warning 提示
需要注意的是，这个step必须要被max值整除，否则会出现无法无法滑动到最大值的情况
:::
```html
<template>
    <hy-slider v-model="value" step="20"></hy-slider>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref(30);
</script>
```

## 在弹窗等初始化不显示的容器中使用
::: warning 提示
需要注意的是，在此场景中使用要注意给slider同时一个v-if让它随着弹窗的显示再渲染，这样才能计算出滑块的正确尺寸。
:::
```html
<template>
    <hy-popup v-model:show="popupShow">
        <view class="slot-content" style="width: 100%">
            <hy-slider v-if="popupShow" v-model="sliderValue" min="1" max="4" showValue></hy-slider>
        </view>
    </hy-popup>
</template>

<script setup> 
import { ref } from "vue";
const popupShow = ref(false);
const sliderValue = ref(4);
</script>
```

## 禁用状态
```html
<template>
    <hy-slider v-model="value" disabled></hy-slider>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref(30);
</script>
```

## 自定义滑动选择器整体的样式
- 通过inactive-color配置底部滑动条背景颜色
- 通过active-color配置底部选择部分的背景颜色
- 通过block-width配置滑块宽度(高等于宽)
- 通过block-color配置滑动按钮按钮的颜色
- 通过height配置滑块条高度，单位rpx
```html
<template>
    <hy-slider v-model="value" inactive-color="red"></hy-slider>
    <hy-slider v-model="value" active-color="red"></hy-slider>
    <hy-slider v-model="value" :block-width="10"></hy-slider>
    <hy-slider v-model="value" block-color="red"></hy-slider>
    <hy-slider v-model="value" :height="4"></hy-slider>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref(30);
</script>
```

## API

| 参数            | 说明                | 类型                   | 默认值                 |
|---------------|-------------------|----------------------|---------------------|
| v-model       | 双向绑定滑块选择值         | `number`             | 0                   |
| blockSize     | 滑块的大小             | `number` \| `string` | 18                  |
| min           | 可选的最小值            | `number`             | 1                   |
| max           | 可选的最大值            | `number`             | 100                 |
| step          | 选择的步长             | `number`             | 1                   |
| activeColor   | 进度条的激活部分颜色        | `string`             | ColorConfig.primary |
| inactiveColor | 进度条的背景颜色          | `string`             | #c0c4cc             |
| blockColor    | 滑块背景颜色            | `string`             | #ffffff             |
| showValue     | 是否显示当前 value      | `boolean`            | false               |
| blockStyle    | 滑块按钮自定义样式，对象形式    | `CSSProperties`      | -                   |
| height        | 进度条高度             | `string` \| `number` | 2px                 |
| isRange       | 开始其双滑快模式          | `boolean`            | false               |
| useNative     | 是否渲染uni-app框架内置组件 | `boolean`            | false               |
| rangeValue    | 双滑快双向绑定值，数组形式     | `array`              | [0, 0]              |
| customStyle   | 自定义样式             | `CSSProperties`      | -                   |

## Events

| 事件名   | 说明          | 回调参数 |
|-------|-------------|----|
| changing | 触发事件（拖动过程中） | value：当前值   |
| change | 触发事件        | value：当前值   |
| start | 开始滑动        | value：当前值   |
