# Modal 模态框组件
> 弹出模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [modal组件](https://uiadmin.net/uview-plus/components/modal.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|-----|----|-------|
| ✔   | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-modal v-model="true" title="通知"></hy-modal>
<!-- 单个组件引入 -->
<HyModal v-model="true" title="通知"></HyModal>
```
```ts
import { HyModal } from "hy-app"
```

## 点击遮罩关闭
- 有时候我们不显示"关闭"按钮的时候，需要点击遮罩也可以关闭Modal，这时通过配置`closeOnClickOverlay`为`true`即可
::: warning 注意
关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调
:::
```html
<template>
    <hy-modal v-model="show" closeOnClickOverlay @close="show = false"></hy-modal>
</template>

<script setup>
    import {ref} from "vue";
    const show = ref(true);
</script>
```

## 控制模态框宽度
- 可以通过设置`width`参数控制模态框的宽度，不支持百分比，可以数值，px，rpx单位
```html
<template>
    <hy-modal v-model="true" width="300px"></hy-modal>
</template>
```

## 缩放效果
- 开启缩放效果，在打开和收起模态框的时候，会带有缩放效果，具体效果请见示例，此效果默认开启，通过`zoom`参数配置
```html
<template>
    <hy-modal v-model="true" :zoom="false"></hy-modal>
</template>
```

## 对调按钮
- 通过配置`buttonReverse`来对调按钮位置
- 通过配置`showCancelButton`来显示取消按钮
```html
<template>
    <hy-modal v-model="true" buttonReverse showCancelButton></hy-modal>
</template>
```

## 自定义插槽

```html
<template>
    <view >
        <hy-modal v-model="show"  :title="title" >
            <view class="slot-content">
                <rich-text :nodes="content"></rich-text>
            </view>
        </hy-modal>
        <up-button @click="show = true">打开</up-button>
    </view>
</template>

<script setup>
    import { ref } from 'vue';

    // 创建响应式数据  
    const show = ref(false);
    const title = ref('标题');
    const content = ref(`空山新雨后<br>天气晚来秋`);
</script>
```

## API

| 参数                  | 说明                                                                     | 类型                        | 默认值    |
|---------------------|------------------------------------------------------------------------|---------------------------|--------|
| modelValue          | 是否显示模态框                                                                | `boolean`                 | false  |
| title               | 标题内容	                                                                  | `string`                  | -      |
| content             | 模态框内容，如传入slot内容，则此参数无效                                                 | `string`                  | -      |
| confirmText         | 确认按钮的文字                                                                | `string`                  | 确认     |
| cancelText          | 取消按钮的文字                                                                | `string`                  | 取消     |
| showConfirmButton   | 是否显示确认按钮                                                               | `boolean`                 | true   |
| showCancelButton    | 是否显示取消按钮                                                               | `boolean`                 | false  |
| confirmColor        | 确认按钮的颜色                                                                | `string`                  | -      |
| cancelColor         | 取消按钮的颜色                                                                | `string`                  | -      |
| buttonReverse       | 对调确认和取消的位置                                                             | `boolean`                 | false  |
| zoom                | 是否开启缩放模式                                                               | `boolean`                 | true   |
| round               | 模态框圆角                                                                  | `string` \| `number`      | 16     |
| asyncClose          | 是否异步关闭，只对确定按钮有效，见上方说明                                                  | `boolean`                 | false  |
| asyncCloseTip       | 确定按钮异步关闭启用时，如果点击取消时的文案提示                                               | `string`                  | -      |
| asyncCancelClose    | 是否异步关闭，只对取消按钮有效                                                        | `boolean`                 | false  |
| closeOnClickOverlay | 是否允许点击遮罩关闭Modal（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调） | `boolean`                 | false  |
| negativeTop         | 往上偏移的值，给一个负的margin-top，往上偏移，避免和键盘重合的情况，单位任意，数值则默认为px单位                 | `string` \| `number`      | 0      |
| width               | modal宽度，不支持百分比，可以数值，px，rpx单位                                           | `string` \| `number`      | 650rpx |
| confirmButtonShape  | 确认按钮的样式,如设置，将不会显示取消按钮                                                  | `circle` \| `square`      | -      |
| contentTextAlign    | 文案对齐方式                                                                 | `center`\|`left`\|`right` | left   |

## Events

| 事件名           | 说明                                   | 回调参数 |
|---------------|--------------------------------------|------|
| confirm       | 点击确认按钮时触发                            | -    |
| cancel        | 点击取消按钮时触发                            | -    |
| close         | 点击遮罩关闭时触发，closeOnClickOverlay为true有效 | -    |
| cancelOnAsync | 异步操作进行中点击取消按钮触发                      | -    |

## Slots

| 插槽名           | 说明                          | 接收值 |
|---------------|-----------------------------|-----|
| default       | 传入自定义内容，见上方说明               | -   |
| confirmButton | 传入自定义按钮，用于在微信小程序弹窗通过按钮授权的场景 | -   |

<demo-model url="pages/components/modal/modal"></demo-model>