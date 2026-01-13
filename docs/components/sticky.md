# Sticky 吸顶组件
> `hy-sticky` 是一个高性能的跨平台粘性定位组件，可实现元素随页面滚动到顶部时固定在屏幕上方的效果。该组件通过 IntersectionObserver API 实现高性能监测，并提供了优雅的降级方案以确保在各种平台上的兼容性。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## 特性

- ✅ 支持自定义吸顶偏移量
- ✅ 支持在普通滚动和 `scroll-view` 内使用
- ✅ 自动处理占位元素，避免页面抖动
- ✅ 高性能实现，优先使用 IntersectionObserver
- ✅ 支持启用/禁用控制
- ✅ 支持吸顶状态变化事件

## :japanese_castle:基本使用示例

```vue
<template>
  <view class="demo">
    <view class="header">页面头部</view>
    
    <hy-sticky>
      <view class="sticky-header">
        这是一个吸顶元素
      </view>
    </hy-sticky>
    
    <view class="content">页面内容...</view>
  </view>
</template>

<style>
    .header {
        height: 100vh;
    }
    .sticky-header {
        height: 80rpx;
        background-color: #1989fa;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content {
        height: 100vh;
    }
</style>
```

## 自定义吸顶偏移
```vue
<hy-sticky :offset-top="100">
  <view class="sticky-header">
    距离顶部100px的吸顶元素
  </view>
</hy-sticky>
```

## 在 scroll-view 中使用

```vue
<template>
  <scroll-view class="my-scroll-view" scroll-y style="height: 100vh;">
    <view class="header">滚动容器头部</view>
    
    <hy-sticky scroll-selector="my-scroll-view">
      <view class="sticky-header">
        在scroll-view中吸顶
      </view>
    </hy-sticky>
    
    <view class="content">滚动内容...</view>
  </scroll-view>
</template>
```

## 监听吸顶状态变化

```vue
<template>
  <hy-sticky @change="handleChange">
    <view class="sticky-header">
      当前状态: {{ isSticky ? '已吸顶' : '未吸顶' }}
    </view>
  </hy-sticky>
</template>

<script setup>
import { ref } from 'vue'

const isSticky = ref(false)

const handleChange = (fixed) => {
  isSticky.value = fixed
  console.log('吸顶状态变化:', fixed)
}
</script>
```

## 常见问题

::: tip 注意事项
1. 当页面内容动态变化导致吸顶元素高度改变时，请调用 `refresh` 方法重新计算
2. 在 scroll-view 内使用时，必须正确设置 `scrollSelector` 属性
3. 对于复杂的嵌套滚动场景，可能需要更精细的控制
4. 如需在 H5 端使用，确保浏览器支持 IntersectionObserver 或使用 polyfill
:::

### 1. 在自定义滚动容器中不生效？

请确保正确设置 `scrollSelector` 属性，指定滚动容器的类名（不含点）。

```vue
<scroll-view class="my-scroll-view" scroll-y>
  <hy-sticky scroll-selector="my-scroll-view">
    <!-- 内容 -->
  </hy-sticky>
</scroll-view>
```

### 2. 吸顶后页面布局抖动？

组件内部会自动创建占位元素来避免页面抖动。如果仍有抖动问题，请尝试手动调用 `refresh` 方法重新计算高度。

```vue
<template>
  <hy-sticky ref="stickyRef">
    <view class="dynamic-content">
      <!-- 动态内容 -->
    </view>
  </hy-sticky>
</template>

<script setup>
import { ref } from 'vue'

const stickyRef = ref(null)

// 当动态内容加载完成后
const loadDynamicContent = async () => {
  await fetchData()
  // 刷新组件
  if (stickyRef.value) {
    await stickyRef.value.refresh()
  }
}
</script>
```

## API

| 参数             | 说明                                             | 类型                 | 默认值  |
|----------------|------------------------------------------------|--------------------|------|
| offsetTop      | 吸顶时距离顶部的偏移量（单位：px）                             | `string`\|`number` | 0    |
| zIndex         | 吸顶时的层级                                         | `string`\|`number` | 99   |
| enable         | 是否启用吸顶功能                                       | `boolean`          | true |
| scrollSelector | 在 `scroll-view` 内使用时，指定 `scroll-view` 的类名（不含点） | `string`           | -    |

## Events

| 事件名    | 说明        | 回调参数                          |
|--------|-----------|-------------------------------|
| change | 吸顶状态变化时触发 | isFixed: Boolean - 当前是否处于吸顶状态 |

## Methods

| 事件名     | 说明                 | 参数 |
|---------|--------------------|----|
| refresh | 刷新组件状态，通常用于内容高度变化后 | -  |

## Slots

| 插槽名     | 说明   | 接收值 |
|---------|------|-----|
| default | 吸顶内容 | -   |

<demo-model url="pages-design/sticky/sticky"></demo-model>