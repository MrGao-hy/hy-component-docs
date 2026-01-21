# hooks全局方法

## useShare 小程序全局配置分享

**useShare()**
- `options` \<Object\> 传的参数
  - `title` \<String\> 标题名称;
  - `path` \<String\> 小程序路径;
  - `friendImageUrl` \<String\> 分享朋友的封面图片;
  - `timelineImageUrl` \<String\> 分享朋友圈的封面图片;

::: tip 温馨提示
需要注意的是，小程序(uni)没有提供类似`getNavigationBarTitle`这样的接口，所以我们无法获取当前页面导航栏的标题，换言之，我们想要每个页面个性化的 分享标题，需要手动设置，否则默认为小程序的名称。
:::
::: warning 注意
分享功能是默认关闭的，但是我们写好各项配置，您只要在main.js中引入对应的文件即可，我们没有默认引入，是因为某些用户并不需要此功能。
:::

### 平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ❌        | ❌  | ✔     | ✔      |

### 配置小程序分享功能：
```ts [main.ts]
import {useShare} from 'hy-app';
import { createSSRApp } from "vue";
import App from "./App.vue";

export function createApp() {
    const app = createSSRApp(App);
    
    app.mixin(
        useShare({
            title: "华玥组件库",
        }),
    );
    
    return {
        app,
    };
}
```

## useToast 全局提示消息

**useToast()**

- `options` \<Object\> 传的参数
  - `message` \<String\>` 显示文本信息
  - `type` \<String\>` 主题类型：primary，success，error，warning，info
  - `position` \<String\>` toast出现的位置：top，center，bottom
  - `icon` \<Boolean | String\>` 显示的图标
  - `overlay` \<Boolean\>` 是否防止触摸穿透
  - `loading` \<Boolean\>` 是否加载中状态
  - `loadMode` \<String\>` 加载状态
  - `duration` \<Number\>` 时间（毫秒）
  - `complete` \<Function\>` 执行完后的回调函数

```ts
toast.show("默认提示"); // 默认提示（无图标）
toast.info("信息提示"); // 信息提示
toast.success("成功提示"); // 成功提示
toast.error("错误提示"); // 错误提示
toast.warning("警告提示"); // 警告提示
toast.primary("主题提示"); // 主题提示
toast.loading(); // 加载中
toast.close(); // 关闭所以提示
```


### 基础使用

```vue

<template>
  <hy-toast/>
</template>

<script setup lang="ts">
  import {useToast} from "hy-app";
  import {onMounted} from "vue";

  const toast = useToast();

  onMounted(() => {
    toast.show("消息提示")
  });
</script>
```

## useMessage 消息弹窗组合式 API

**useMessage()**

- `options` \<Object\> 传的参数
    - `title` \<String\>` 弹窗标题
    - `content` \<String\>` 弹窗内容
    - `confirmText` \<String\>` 确认按钮文本
    - `cancelText` \<String\>` 取消按钮文本
    - `showConfirmButton` \<Boolean\>` 是否显示确认按钮
    - `showCancelButton` \<Boolean\>` 是否显示取消按钮
    - `confirmColor` \<String\>` 确认按钮颜色
    - `cancelColor` \<Number\>` 取消按钮颜色
    - `buttonReverse` \<Function\>` 是否反转按钮顺序
    - `zoom` \<Function\>` 是否启用缩放动画
    - `round` \<Function\>` 弹窗圆角大小
    - `autoClose` \<Function\>` 是否自动关闭
    - `loading` \<Function\>` 是否显示加载状态
    - `closeOnClickOverlay` \<Function\>` 点击遮罩层是否关闭弹窗
    - `negativeTop` \<Function\>` 弹窗顶部距离
    - `width` \<Function\>` 弹窗宽度
    - `confirmButtonShape` \<Function\>` 确认按钮形状
    - `contentTextAlign` \<Function\>` 内容文本对齐方式
    - `confirm` \<Function\>` 确认按钮点击回调，支持异步
    - `cancel` \<Function\>` 取消按钮点击回调
    - `close` \<Function\>` 弹窗关闭回调

`useMessage` 是一个基于 Vue 3 Composition API 的消息弹窗工具，提供了简洁易用的 `alert` 和 `confirm` 方法，用于在应用中显示提示信息和确认对话框。

- 支持 Promise 风格的回调处理
- 支持丰富的配置选项
- 支持异步确认操作
- 提供响应式的弹窗状态管理

```ts
message.alert("默认提示"); // 默认提示（无图标）
message.confirm("信息提示"); // 信息提示
message.confirm({
    title: '删除确认',
    content: '确定要删除这条数据吗？此操作不可恢复。',
    confirm: async () => {
        // 执行确认操作
    },
    cancel: async () => {
        // 执行取消操作
    }
})
```


### 基础使用

```vue

<template>
  <hy-modal/>
  <hy-button @click="showAlert">显示警告</hy-button>
  <hy-button @click="showConfirm">显示确认</hy-button>
</template>

<script setup lang="ts">
  import {useMessage} from "hy-app";

  const message = useMessage();

  // 显示警告弹窗
  const showAlert = async () => {
    const result = await message.alert('操作成功')
    console.log('警告弹窗结果:', result) // 总是 true
  }

  // 显示确认弹窗
  const showConfirm = async () => {
    const result = await message.confirm('确定要删除吗？')
    console.log('确认弹窗结果:', result) // true 表示确认，false 表示取消

    if (result) {
      // 执行删除操作
      console.log('用户确认删除')
    } else {
      console.log('用户取消删除')
    }
  }
</script>
```

### 高级用法

```vue
<template>
  <hy-modal/>
  <hy-button @click="showAdvancedConfirm">显示高级确认</hy-button>
</template>

<script setup lang="ts">
import { useMessage } from 'hy-app'

const message = useMessage()

// 显示高级确认弹窗
const showAdvancedConfirm = async () => {
  const result = await message.confirm({
    title: '删除确认',
    content: '确定要删除这条数据吗？此操作不可恢复。',
    confirmText: '确定删除',
    cancelText: '取消',
    confirmColor: '#ff4d4f',
    cancelColor: '#666',
    width: '300px',
    confirmButtonShape: 'round',
    contentTextAlign: 'center',
    confirm: async () => {
      // 模拟异步操作
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('执行删除操作')
    }
  })
  
  console.log('确认结果:', result)
}
</script>
```

## useTouch 触摸事件组合式 API

**useTouch()**

> `useTouch` 是一个基于 Vue 3 Composition API 的触摸事件处理钩子，用于跟踪和分析用户的触摸操作，包括触摸方向、位移距离等信息。

- 支持跟踪触摸的水平和垂直方向
- 提供实时的位移数据
- 支持响应式状态管理
- 轻量简洁，易于集成

### 基础用法

```vue
<template>
  <div 
    class="touch-area"
    @touchstart="touchStart"
    @touchmove="touchMove"
  >
    <div class="info">
      <p>触摸方向: {{ direction }}</p>
      <p>水平位移: {{ deltaX }}px</p>
      <p>垂直位移: {{ deltaY }}px</p>
      <p>水平偏移: {{ offsetX }}px</p>
      <p>垂直偏移: {{ offsetY }}px</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTouch } from 'hy-app'

const {
  touchStart,
  touchMove,
  direction,
  deltaX,
  deltaY,
  offsetX,
  offsetY
} = useTouch()
</script>

<style scoped lang="scss">
.touch-area {
  width: 100%;
  height: 300px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  touch-action: none;
}

.info {
  text-align: center;
  font-size: 14px;
  color: #333;
}

.info p {
  margin: 8px 0;
}
</style>
```

### 高级用法 - 实现滑动手势

```vue
<template>
  <div 
    class="swipe-container"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
  >
    <div 
      class="swipe-content"
      :style="{
        transform: `translateX(${swipeOffset}px)`
      }"
    >
      滑动内容区域
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTouch } from '@/package/libs/composables/useTouch'

const {
  touchStart,
  touchMove,
  direction,
  deltaX
} = useTouch()

const swipeOffset = ref(0)
const maxSwipeOffset = 100

const touchEnd = () => {
  if (direction.value === 'horizontal') {
    if (deltaX.value > 50) {
      // 向右滑动超过阈值
      swipeOffset.value = maxSwipeOffset
    } else if (deltaX.value < -50) {
      // 向左滑动超过阈值
      swipeOffset.value = -maxSwipeOffset
    } else {
      // 复位
      swipeOffset.value = 0
    }
  }
}
</script>

<style scoped lang="scss">
.swipe-container {
  width: 100%;
  height: 100px;
  overflow: hidden;
  position: relative;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.swipe-content {
  width: 100%;
  height: 100%;
  background-color: #409eff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}
</style>
```