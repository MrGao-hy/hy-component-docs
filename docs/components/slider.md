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
import { HySlider } from "hy-app"
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
    <hy-button type="primary" @click="popupShow = !popupShow" text="打开遮罩框"></hy-button>
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

## 自定义滑块
```html
<template>
    <hy-slider v-model="value">
        <template #default>
            <view>
                <svg t="1722094047017" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11063" width="32" height="32"><path d="M965.12 469.333333c-81.493333-90.88-230.186667-149.333333-378.453333-149.333333h-6.826667a193.28 193.28 0 0 0-289.493333-109.226667 188.373333 188.373333 0 0 0-51.2 47.36 42.666667 42.666667 0 0 0-2.773334 45.653334 42.666667 42.666667 0 0 0 42.666667 21.333333A149.333333 149.333333 0 0 1 384 355.626667l-16.426667 6.4A42.666667 42.666667 0 0 0 341.333333 401.28v221.44A42.666667 42.666667 0 0 0 367.36 661.333333l16.64 7.466667a150.4 150.4 0 0 1-106.666667 30.506667 42.666667 42.666667 0 0 0-42.666666 21.333333 42.666667 42.666667 0 0 0 2.773333 45.866667 187.946667 187.946667 0 0 0 51.2 47.36 194.56 194.56 0 0 0 103.893333 29.653333A192 192 0 0 0 580.053333 704h6.613334c149.333333 0 296.96-58.666667 378.453333-149.333333a64 64 0 0 0 0-85.333334z m-535.68-130.773333a192 192 0 0 0-155.946667-55.04 146.133333 146.133333 0 0 1 39.68-36.693333 152.533333 152.533333 0 0 1 176.213334 10.24 149.333333 149.333333 0 0 1 46.293333 65.28 615.04 615.04 0 0 0-104.746667 18.346666 20.053333 20.053333 0 0 0-1.493333-2.133333zM489.173333 768a152.32 152.32 0 0 1-176.213333 10.24 135.893333 135.893333 0 0 1-38.826667-36.266667 192 192 0 0 0 155.093334-55.466666 21.333333 21.333333 0 0 0 2.133333-3.84 615.466667 615.466667 0 0 0 104.533333 18.346666A149.333333 149.333333 0 0 1 489.173333 768z m444.16-242.133333C859.52 608.213333 723.413333 661.333333 586.666667 661.333333a546.773333 546.773333 0 0 1-202.666667-38.613333V401.28A549.76 549.76 0 0 1 586.666667 362.666667c136.746667 0 272.853333 53.12 346.666666 135.466666a21.333333 21.333333 0 0 1 0 27.733334z" fill="#CE4141" p-id="11064"></path><path d="M682.666667 426.666667a85.333333 85.333333 0 1 0 85.333333 85.333333 85.333333 85.333333 0 0 0-85.333333-85.333333z m0 128a42.666667 42.666667 0 1 1 42.666666-42.666667 42.666667 42.666667 0 0 1-42.666666 42.666667zM128 448h149.333333a21.333333 21.333333 0 0 0 0-42.666667H128a21.333333 21.333333 0 0 0 0 42.666667zM298.666667 597.333333a21.333333 21.333333 0 0 0-21.333334-21.333333H192a21.333333 21.333333 0 0 0 0 42.666667h85.333333a21.333333 21.333333 0 0 0 21.333334-21.333334zM298.666667 512a21.333333 21.333333 0 0 0-21.333334-21.333333H64a21.333333 21.333333 0 0 0 0 42.666666h213.333333a21.333333 21.333333 0 0 0 21.333334-21.333333z" fill="#CE4141" p-id="11065"></path><path d="M448 426.666667m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z" fill="#CE4141" p-id="11066"></path><path d="M448 512m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z" fill="#CE4141" p-id="11067"></path><path d="M448 597.333333m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z" fill="#CE4141" p-id="11068"></path></svg>
            </view>
        </template>
    </hy-slider>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref(30);
</script>
```

## 区间选择
```html
<template>
    <hy-slider
            isRange
            showValue
            v-model:rangeValue="value"
    ></hy-slider>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref([20, 80]);
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

| 参数            | 说明                | 类型                   | 默认值    |
|---------------|-------------------|----------------------|--------|
| v-model       | 双向绑定滑块选择值         | `number`             | 0      |
| blockSize     | 滑块的大小             | `number` \| `string` | 18     |
| min           | 可选的最小值            | `number`             | 1      |
| max           | 可选的最大值            | `number`             | 100    |
| step          | 选择的步长             | `number`             | 1      |
| activeColor   | 进度条的激活部分颜色        | `string`             | -      |
| inactiveColor | 进度条的背景颜色          | `string`             | -      |
| blockColor    | 滑块背景颜色            | `string`             | -      |
| showValue     | 是否显示当前 value      | `boolean`            | false  |
| blockStyle    | 滑块按钮自定义样式，对象形式    | `CSSProperties`      | -      |
| height        | 进度条高度             | `string` \| `number` | 2px    |
| isRange       | 开始其双滑快模式          | `boolean`            | false  |
| useNative     | 是否渲染uni-app框架内置组件 | `boolean`            | false  |
| rangeValue    | 双滑快双向绑定值，数组形式     | `array`              | [0, 0] |
| customStyle   | 自定义样式             | `CSSProperties`      | -      |

## Events

| 事件名      | 说明          | 回调参数      |
|----------|-------------|-----------|
| changing | 触发事件（拖动过程中） | value：当前值 |
| change   | 触发事件        | value：当前值 |
| start    | 开始滑动        | value：当前值 |


<demo-model url="pages/components/slider/slider"></demo-model>