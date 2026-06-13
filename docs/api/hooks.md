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

### 基础用法

```vue
<script setup lang="ts">
import { useShare } from 'hy-app'

const { onShareAppMessage, onShareTimeline } = useShare({
    title: '华玥组件库',
    path: '/pages/index/index',
    friendImageUrl: '/static/share friend.png',
    timelineImageUrl: '/static/share_timeline.png'
})

// 在小程序页面中暴露方法
defineExpose({
    onShareAppMessage,
    onShareTimeline
})
</script>
```

### 动态配置

```vue
<script setup lang="ts">
import { useShare } from 'hy-app'

const shareConfig = {
    title: '推荐一个好用的组件库',
    path: '/pages/goods/detail',
    friendImageUrl: 'https://example.com/friend.jpg',
    timelineImageUrl: 'https://example.com/timeline.jpg'
}

const { onShareAppMessage, onShareTimeline } = useShare(shareConfig)

defineExpose({
    onShareAppMessage,
    onShareTimeline
})
</script>
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

### 基础用法

```vue
<template>
    <hy-toast></hy-toast>
    <hy-button @click="handleSuccess">成功提示</hy-button>
    <hy-button @click="handleError">错误提示</hy-button>
    <hy-button @click="handleLoading">加载提示</hy-button>
</template>

<script setup lang="ts">
import { useToast } from 'hy-app'

const toast = useToast()

const handleSuccess = () => {
    toast.success('操作成功！')
}

const handleError = () => {
    toast.error('操作失败，请重试')
}

const handleLoading = () => {
    toast.loading('加载中...')
    // 模拟异步操作
    setTimeout(() => {
        toast.close()
    }, 2000)
}
</script>
```

### 完整示例

```vue
<template>
    <hy-toast></hy-toast>
    <hy-button @click="handleClick">点击提示</hy-button>
</template>

<script setup lang="ts">
import { useToast } from 'hy-app'

const toast = useToast()

const handleClick = async () => {
    try {
        // 显示加载
        toast.loading('正在提交...')
        
        // 模拟请求
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // 关闭加载，显示成功
        toast.close()
        toast.success('提交成功！')
    } catch (error) {
        toast.close()
        toast.error('提交失败')
    }
}
</script>
```

### 关闭所有提示

```vue
<script setup lang="ts">
  import { useToast } from 'hy-app'

  const toast = useToast()

  // 关闭所有 toast
  toast.close(true)
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


### 基础用法

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

## useShakeService 摇一摇传感器组合式 API

### 功能介绍

`useShakeService` 是一个基于 Vue 3 Composition API 的摇一摇传感器钩子，用于监听设备加速度传感器实现摇一摇功能。

- 支持启动和停止摇一摇监听
- 支持自定义摇一摇阈值
- 基于设备加速度传感器实现
- 兼容 uni-app 的加速度传感器 API

### 基础用法

```vue
<template>
    <view>
        <hy-button @click="startShake">开始摇一摇</hy-button>
        <hy-button @click="stopShake">停止摇一摇</hy-button>
        <view>摇一摇次数: {{ shakeCount }}</view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useShakeService } from 'hy-app'

const shakeCount = ref(0)
const { startShakeListener, stopShakeListener } = useShakeService()

const handleShake = () => {
    shakeCount.value++
    uni.vibrateShort()
    uni.showToast({
        title: '摇一摇成功',
        icon: 'none'
    })
}

const startShake = () => {
    startShakeListener(handleShake)
}

const stopShake = () => {
    stopShakeListener()
}

// 组件销毁时停止监听
onUnmounted(() => {
    stopShakeListener()
})
</script>
```

### 自定义阈值

```vue
<script setup lang="ts">
import { useShakeService } from '@/package/libs/composables/useShakeService'

// 阈值越大，需要摇动的幅度越大
const { startShakeListener, stopShakeListener } = useShakeService(50)

startShakeListener(() => {
    console.log('剧烈摇动')
})
</script>
```

### 实现摇一摇抽奖

```vue
<script setup lang="ts">
import { useShakeService } from '@/package/libs/composables/useShakeService'

const { startShakeListener, stopShakeListener } = useShakeService()

const startLottery = () => {
    startShakeListener(async () => {
        // 震动反馈
        uni.vibrateShort()
        
        // 停止监听
        stopShakeListener()
        
        // 执行抽奖逻辑
        await performLottery()
    })
}

const performLottery = async () => {
    uni.showLoading({ title: '抽奖中...' })
    // 模拟抽奖请求
    await new Promise(resolve => setTimeout(resolve, 1500))
    uni.hideLoading()
    uni.showModal({
        title: '恭喜您',
        content: '抽中一等奖！',
        showCancel: false
    })
}
</script>
```

### 注意事项

1. 该功能依赖设备的加速度传感器，部分设备可能不支持
2. 使用前请确保已在 manifest.json 中配置传感器权限
3. `stopShakeListener` 应在组件销毁时调用，避免内存泄漏
4. 摇一摇回调函数有 500ms 的防抖处理

## useTranslate 国际化翻译组合式 API

### 功能介绍

`useTranslate` 是一个基于 Vue 3 Composition API 的国际化翻译钩子，用于在组件或页面中实现多语言切换。

- 支持按模块划分语言包
- 支持参数替换
- 支持函数类型翻译值
- 基于 Vue 3 响应式系统

### 语言包格式

语言包是一个对象，键为翻译 key，值为翻译文本或函数：

```typescript
// zh-CN.ts
export default {
    hello: '你好',
    welcome: '欢迎 {name}',
    count: (count: number) => `共 ${count} 条记录`
}

// en-US.ts
export default {
    hello: 'Hello',
    welcome: 'Welcome {name}',
    count: (count: number) => `Total ${count} items`
}
```

### 基础用法

```vue
<template>
    <view>
        <text>{{ t('hello') }}</text>
        <text>{{ t('welcome', '华玥') }}</text>
    </view>
</template>

<script setup lang="ts">
import { useTranslate } from 'hy-app'

const { t } = useTranslate('common')
</script>
```

### 配合 Locale 使用

```typescript
// 初始化语言包
import { Locale } from 'hy-app'
import zhCN from './lang/zh-CN'
import enUS from './lang/en-US'

// 设置默认语言
Locale.use('zh-CN', zhCN)

// 切换语言
const switchLanguage = (lang: string) => {
    if (lang === 'en-US') {
        Locale.use('en-US', enUS)
    } else {
        Locale.use('zh-CN', zhCN)
    }
}
```

### 动态参数

```vue
<script setup lang="ts">
import { useTranslate } from 'hy-app'

const { t } = useTranslate('user')

// 输出: 欢迎，张三
console.log(t('welcome', '张三'))

// 输出: 共 10 条记录
console.log(t('count', 10))
</script>
```

### 注意事项

1. `useTranslate` 需要配合 `Locale` 语言包管理器使用
2. 语言包需要先通过 `Locale.use()` 或 `Locale.add()` 注册
3. 翻译函数支持参数替换，使用 `{0}`, `{1}` 或命名参数 `{name}`
4. 如果翻译值是函数，会自动调用并传入参数


## useQueue 队列管理组合式 API

## 功能介绍

`useQueue` 是一个基于 Vue 3 Composition API 的队列管理钩子，用于管理组件的显示顺序和互斥关闭逻辑。

- 支持组件队列管理
- 支持关闭其他组件
- 支持关闭外部所有组件
- 基于 Vue 3 Provide/Inject 机制

### 基础用法

```vue
<script setup lang="ts">
import { useQueue } from 'hy-app'

// 关闭除当前组件外的所有组件
const handleOpen = (comp: any) => {
    closeOther(comp)
}

// 关闭所有组件
const handleCloseAll = () => {
    closeOutside()
}
</script>
```

### 配合 Popup 使用

```vue
<template>
    <view>
        <hy-popup ref="popupRef" @click="handleClick">内容</hy-popup>
        <hy-popup ref="popupRef2">内容2</hy-popup>
    </view>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useQueue } from 'hy-app'

const popupRef = ref()
const popupRef2 = ref()

const { pushToQueue, removeFromQueue, closeOther } = useQueue()

onMounted(() => {
    if (popupRef.value) {
        pushToQueue(popupRef.value)
    }
    if (popupRef2.value) {
        pushToQueue(popupRef2.value)
    }
})

onUnmounted(() => {
    if (popupRef.value) {
        removeFromQueue(popupRef.value)
    }
})

const handleClick = () => {
    // 关闭其他弹窗
    if (popupRef.value) {
        closeOther(popupRef.value)
    }
}
</script>
```

### 注意事项

1. 组件必须实现 `close()` 方法才能被正确关闭
2. `pushToQueue` 通常在 `onMounted` 中调用
3. `removeFromQueue` 通常在 `onUnmounted` 中调用
4. 使用 Provide/Inject 机制，需确保在正确的组件树上下文中调用


