# Popup 弹出层组件

> 弹出层容器，用于展示弹窗、信息提示等内容，支持上、下、左、右和中部弹出。组件只提供容器，内部内容由用户自定义。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :warning:注意事项

- 组件只提供弹出层容器，内部内容需要用户自定义
- `mode="center"` 时，默认开启缩放动画，可以通过 `zoom` 属性关闭
- `round` 属性仅对 `mode="top"`、`mode="bottom"`、`mode="center"` 生效
- `closeOnClickOverlay` 设置为 `true` 时，点击遮罩只会触发 `close` 事件，不会自动隐藏弹窗，需要在事件回调中手动处理
- `closeIconPos` 目前仅支持 `top-left` 和 `top-right` 两个位置

## :japanese_castle:基本使用示例

### 基础用法

```html
<template>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="打开弹窗"></hy-cell-item>
    </hy-cell>
    
    <hy-popup :show="show" @close="show = false">
        <view class="popup-content">
            <text>这是弹窗内容</text>
            <hy-button text="关闭" @click="show = false"></hy-button>
        </view>
    </hy-popup>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<style lang="scss" scoped>
.popup-content {
    padding: 40rpx;
    background: #fff;
    border-radius: 16rpx 16rpx 0 0;
}
</style>
```

### 设置弹出方向

```html
<template>
    <!-- 顶部弹出 -->
    <hy-popup :show="showTop" mode="top" @close="showTop = false">
        <view class="popup-top">顶部弹窗内容</view>
    </hy-popup>
    
    <!-- 底部弹出 -->
    <hy-popup :show="showBottom" mode="bottom" @close="showBottom = false">
        <view class="popup-bottom">底部弹窗内容</view>
    </hy-popup>
    
    <!-- 居中弹出 -->
    <hy-popup :show="showCenter" mode="center" @close="showCenter = false">
        <view class="popup-center">居中弹窗内容</view>
    </hy-popup>
    
    <!-- 左侧弹出 -->
    <hy-popup :show="showLeft" mode="left" @close="showLeft = false">
        <view class="popup-left">左侧弹窗内容</view>
    </hy-popup>
    
    <!-- 右侧弹出 -->
    <hy-popup :show="showRight" mode="right" @close="showRight = false">
        <view class="popup-right">右侧弹窗内容</view>
    </hy-popup>
</template>
```

### 自定义遮罩样式

```html
<template>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="自定义遮罩"></hy-cell-item>
    </hy-cell>
    
    <hy-popup 
        :show="show" 
        mode="center"
        :overlayOpacity="0.3"
        :overlayStyle="{ backgroundColor: '#000' }"
        @close="show = false"
    >
        <view class="popup-content">
            <text>自定义遮罩透明度和颜色</text>
        </view>
    </hy-popup>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>
```

### 禁用点击遮罩关闭

```html
<template>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="禁用遮罩关闭"></hy-cell-item>
    </hy-cell>
    
    <hy-popup 
        :show="show" 
        :closeOnClickOverlay="false"
        title="必须点击按钮关闭"
        @close="show = false"
    >
        <view class="popup-content">
            <text>点击遮罩无法关闭弹窗</text>
            <hy-button text="关闭弹窗" @click="show = false"></hy-button>
        </view>
    </hy-popup>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>
```

### 显示关闭图标

```html
<template>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="带关闭图标"></hy-cell-item>
    </hy-cell>
    
    <hy-popup 
        :show="show" 
        :closeable="true"
        closeIconPos="top-right"
        @close="show = false"
    >
        <view class="popup-content">
            <text>点击右上角图标可关闭弹窗</text>
        </view>
    </hy-popup>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>
```

### 设置圆角

```html
<template>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="带圆角弹窗"></hy-cell-item>
    </hy-cell>
    
    <hy-popup 
        :show="show" 
        :round="20"
        @close="show = false"
    >
        <view class="popup-content">
            <text>圆角弹窗内容</text>
        </view>
    </hy-popup>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>
```

### 禁用缩放动画

```html
<template>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="禁用缩放动画"></hy-cell-item>
    </hy-cell>
    
    <hy-popup 
        :show="show" 
        mode="center"
        :zoom="false"
        @close="show = false"
    >
        <view class="popup-content">
            <text>无缩放动画的居中弹窗</text>
        </view>
    </hy-popup>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>
```

### 自定义样式

```html
<template>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="自定义样式"></hy-cell-item>
    </hy-cell>
    
    <hy-popup 
        :show="show" 
        mode="center"
        bgColor="#f5f5f5"
        :customStyle="{ width: '600rpx', padding: '40rpx' }"
        customClass="custom-popup"
        @close="show = false"
    >
        <view class="popup-content">
            <text>自定义背景色和样式</text>
        </view>
    </hy-popup>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<style lang="scss" scoped>
.custom-popup {
    border-radius: 20rpx;
}
</style>
```

### 安全区域适配

```html
<template>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="安全区域适配"></hy-cell-item>
    </hy-cell>
    
    <hy-popup 
        :show="show" 
        :safeAreaInsetBottom="true"
        :safeAreaInsetTop="true"
        @close="show = false"
    >
        <view class="popup-content">
            <text>自动适配底部安全区域（iPhoneX等机型）</text>
            <text>自动适配顶部状态栏</text>
        </view>
    </hy-popup>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>
```

## API
### Popup Props

| 参数                  | 说明                                                                | 类型              | 默认值       |
|---------------------|-------------------------------------------------------------------|-----------------|-----------|
| show                | 是否展示弹窗                                                            | `boolean`       | false     |
| overlay             | 是否显示遮罩                                                            | `boolean`       | true      |
| mode                | 弹出方向，可选值：`left`、`right`、`top`、`bottom`、`center`                   | `string`        | bottom    |
| duration            | 遮罩打开或收起的动画过渡时间，单位ms                                               | `number`        | 300       |
| closeable           | 是否显示关闭图标                                                          | `boolean`       | false     |
| overlayStyle        | 遮罩自定义样式，一般用于修改遮罩颜色                                                | `CSSProperties` | -         |
| overlayOpacity      | 遮罩透明度，0-1之间，勿与overlayStyle共用                                      | `number`        | 0.5       |
| closeOnClickOverlay | 点击遮罩是否关闭弹窗（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调） | `boolean`       | true      |
| zIndex              | 弹出层的z-index值                                                      | `number`        | 10086     |
| safeAreaInsetBottom | 是否为iPhoneX等机型留出底部安全距离                                             | `boolean`       | true      |
| safeAreaInsetTop    | 是否留出顶部安全距离（状态栏高度）                                                 | `boolean`       | false     |
| closeIconPos        | 自定义关闭图标位置，可选值：`top-left`、`top-right`                              | `string`        | top-right |
| round               | 设置圆角值，仅对`mode=top                                                 | bottom          | center`生效 | `string` \| `number`                       | -      |
| zoom                | 当`mode=center`时是否开启缩放                                             | `boolean`       | true      |
| bgColor             | 背景色，一般用于特殊弹窗内容场景，设置为`transparent`可去除默认的白色背景                       | `string`        | -         |
| customStyle         | 自定义需要用到的外部样式                                                      | `CSSProperties` | {}        |
| customClass         | 自定义外部类名                                                           | `string`        | -         |

### Events

| 事件名         | 说明              | 回调参数               |
|-------------|-----------------|--------------------|
| open        | 弹出层打开触发         | -                  |
| close       | 弹出层关闭触发         | -                  |
| click       | 弹出层点击触发         | -                  |
| update:show | 弹出层显示/隐藏状态变化时触发 | `visible: boolean` |

### Slots

| 插槽名     | 说明    | 接收值 |
|---------|-------|-----|
| default | 弹出层内容 | -   |


<demo-model url="pages-design/popup/popup"></demo-model>
