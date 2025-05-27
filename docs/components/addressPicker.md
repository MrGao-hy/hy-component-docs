# AddressPicker 地址选择器组件
> 此选择器用于选择地址


::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节。
:::


## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-address-picker hasInput></hy-address-picker>
<!-- 单个组件引入 -->
<HyAddressPicker hasInput></HyButton>
```
```ts
import { HyAddressPicker } from "hy-app"
```

## 通过外部按钮打开

```html
<template>
    <view>
        <hy-address-picker
            :show="show"
        ></hy-address-picker>
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
        <hy-address-picker
            hasInput
            v-model="value"
        ></hy-address-picker>
    </view>
</template>

<script setup>
    import { ref } from 'vue';
    
    const value = ref(Date.now());
</script>
```


## API

| 参数                  | 说明                                              | 类型                                         | 默认值     |
|---------------------|-------------------------------------------------|--------------------------------------------|---------|
| hasInput            | 是否自带input输入框                                    | `boolean`                                  | false   |
| input               | 输入框属性集合，hasInput为true可填，详见[输入框Api](./input#api) | `HyInputProps`                             | -       |
| show                | 用于控制选择器的弹出与收起                                   | `boolean`                                  | false   |
| popupMode           | 用于控制选择器的弹出方向                                    | `bottom`\|`center`\|`left`\|`right`\|`top` | bottom  |
| showToolbar         | 是否显示顶部的操作栏                                      | `boolean`                                  | true    |
| v-model             | 绑定值                                             | `string`                                   | -       |
| title               | 顶部标题                                            | `string`                                   | -       |
| separator           | 字符串截取数组条件                                       | `string`                                   | " "     |
| loading             | 是否显示加载中状态                                       | `boolean`                                  | false   |
| itemHeight          | 各列中，单个选项的高度                                     | `number`                                   | 44      |
| cancelText          | 取消按钮的文字                                         | `string`                                   | 取消      |
| confirmText         | 确认按钮的文字                                         | `string`                                   | 确认      |
| cancelColor         | 取消按钮的颜色                                         | `string`                                   | #909193 |
| confirmColor        | 确认按钮的颜色                                         | `string`                                   | -       |
| visibleItemCount    | 每列中可见选项的数量                                      | `number`                                   | 5       |
| closeOnClickOverlay | 是否允许点击遮罩关闭选择器                                   | `boolean`                                  | false   |
| defaultIndex        | 各列的默认索引                                         | `array`                                    | -       |
| toolbarRightSlot    | 是否右边插槽                                          | `boolean`                                  | false   |
| customStyle         | 自定义输入框外部样式                                      | `CSSProperties`                            | -       |

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

<demo-model url="pages/components/addressPicker/addressPicker"></demo-model>

