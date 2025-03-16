# Switch 开关选择器组件
> 选择开关用于在打开和关闭状态之间进行切换。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [switch组件](https://uiadmin.net/uview-plus/components/switch.html) 的代码实现。
:::

## 平台差异说明

| APP | H5 | 微信小程序 |
|-----|----|-------|
| ✔   | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-switch v-model="value" @change="change"></hy-switch>
<!-- 单个组件引入 -->
<HySwitch v-model="value" @change="change">按钮</HySwitch>
```
```ts
import { HySwitch } from "hfyk-app";
import { ref } from "vue";

const value = ref(false);
const change = (e) => {
    console.log('change', e);
}
```

## 加载中
```html
<template>
    <hy-switch v-model="value" loading ></hy-switch>
</template>
<script setup>
    import { ref } from "vue";

    const value = ref(false);
</script>
```

## 加载中
设置`loading`属性，默认为`true`，可以让`switch`处于加载中的状态，这时`switch`是不可操作的，
您可以通过`:loading='loading'`以动态设置加载状态
```html
<template>
    <hy-switch v-model="value" loading ></hy-switch>
</template>
<script setup>
    import { ref } from "vue";

    const value = ref(true);
</script>
```

## 禁用switch
设置`disabled`属性,默认为`true`，即可禁用某个组件，让用户无法点击，禁用分为两种状态：
- 一是关闭情况下的禁用，这时只显示一个白色的区域。
- 二是打开后再禁用，这时会在原有的颜色上加一个`opacity`透明度，但此时依然是不可操作的。
```html
<template>
    <hy-switch v-model="value" disabled ></hy-switch>
</template>
<script setup>
    import { ref } from "vue";

    const value = ref(false);
</script>
```

## 自定义尺寸
```html
<template>
    <hy-switch v-model="value" size="28" ></hy-switch>
</template>
<script setup>
    import { ref } from "vue";

    const value = ref(false);
</script>
```

## 自定义颜色
```html
<template>
    <hy-switch v-model="value" activeColor="#f56c6c" ></hy-switch>
    <hy-switch v-model="value" activeColor="red" ></hy-switch>
    <hy-switch v-model="value" activeColor="#rgb(0,0,0)" ></hy-switch>
</template>
<script setup>
    import { ref } from "vue";

    const value = ref(false);
</script>
```

## 异步控制
异步控制场景，一般发生在用户打开或者关闭选择器时，需要本地或者向后端请求判断，是否允许用户打开或者关闭的场景。
同时您也可以组合使用，例如根据接口结果添加`disabled`，`loading`属性等
::: warning 提示
请添加`asyncChange`属性来支持异步控制操作，否则您将先操作`v-model`绑定的值，并失去控制效果
:::
```html
<template>
    <hy-switch v-model="value" asyncChange @change="asyncChange" ></hy-switch>
</template>
<script setup>
    import { ref } from "vue";

    const value = ref(false);
    const asyncChange = (e) => {
        uni.showModal({
            content: e ? '确定要打开吗' : '确定要关闭吗',
            success: (res) => {
                if (res.confirm) {
                    value.value = e;
                }
            },
        });
    };
</script>
```

## API

| 参数            | 说明                    | 类型                   | 默认值                 | 可选值 |
|---------------|-----------------------|----------------------|---------------------|-----|
| v-model       | 通过v-model双向绑定的值       | `boolean`            | false               | -   |
| loading       | 是否处于加载中               | `boolean`            | false               | -   |
| disabled      | 是否禁用	                 | `boolean`            | false               | -   |
| size          | 开关尺寸，单位rpx            | `string` \| `number` | 25                  | -   |
| activeColor   | 打开时的背景色               | `string`             | ColorConfig.primary | -   |
| inactiveColor | 关闭时的背景色               | `string`             | #ffffff             | -   |
| activeValue   | switch打开时的值           | `boolean`            | true                | -   |
| inactiveValue | switch关闭时的值	          | `boolean`            | false               | -   |
| asyncChange   | 是否开启异步变更，开启后需要手动控制输入值 | `boolean`            | false               | -   |
| space         | 圆点与外边框的距离             | `string` \| `number` | 0                   | -   |
| customStyle   | 自定义样式                 | `CSSProperties`      | -                   | -   |

## Events

| 事件名    | 说明              | 回调参数                                      |
|--------|-----------------|-------------------------------------------|
| change | 在switch打开或关闭时触发 | value：打开时为activeValue值，关闭时为inactiveValue值 |
