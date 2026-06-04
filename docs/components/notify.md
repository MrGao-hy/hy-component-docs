# Notify 消息提示组件

> 该组件一般用于页面顶部向下滑出一个提示，尔后自动收起的场景。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :warning:注意事项

- `duration` 为 0 时，消息提示不会自动消失，需要手动调用 `close` 方法关闭
- H5 端默认会自动留出导航栏高度（44px），其他平台不受影响
- `safeAreaInsetTop` 设置为 true 时会自动留出顶部状态栏高度

## :japanese_castle:基本使用示例

### 基础使用

```html
<template>
    <hy-notify ref="notifyRef" message="我是消息提示"></hy-notify>
    <hy-button text="显示通知" @click="showNotify"></hy-button>
</template>

<script setup>
import { ref } from 'vue'

const notifyRef = ref()

const showNotify = () => {
    notifyRef.value.show({
        message: '这是一条消息提示'
    })
}
</script>
```

### 通过 v-model 控制显示

```html
<template>
    <hy-notify v-model="show" message="消息内容"></hy-notify>
    <hy-button text="切换显示" @click="show = !show"></hy-button>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>
```

### 不同主题类型

```html
<template>
    <hy-notify ref="notifyRef"></hy-notify>
    <hy-button text="成功提示" @click="showSuccess"></hy-button>
    <hy-button text="警告提示" @click="showWarning"></hy-button>
    <hy-button text="错误提示" @click="showError"></hy-button>
    <hy-button text="信息提示" @click="showInfo"></hy-button>
</template>

<script setup>
import { ref } from 'vue'

const notifyRef = ref()

const showSuccess = () => {
    notifyRef.value.show({
        type: 'success',
        message: '操作成功'
    })
}

const showWarning = () => {
    notifyRef.value.show({
        type: 'warning',
        message: '警告信息'
    })
}

const showError = () => {
    notifyRef.value.show({
        type: 'error',
        message: '操作失败'
    })
}

const showInfo = () => {
    notifyRef.value.show({
        type: 'info',
        message: '提示信息'
    })
}
</script>
```

### 自定义显示时长

```html
<template>
    <hy-notify ref="notifyRef"></hy-notify>
    <hy-button text="显示5秒" @click="showLongNotify"></hy-button>
    <hy-button text="永久显示" @click="showPermanent"></hy-button>
</template>

<script setup>
import { ref } from 'vue'

const notifyRef = ref()

const showLongNotify = () => {
    notifyRef.value.show({
        message: '5秒后自动消失',
        duration: 5000
    })
}

const showPermanent = () => {
    notifyRef.value.show({
        message: '手动关闭',
        duration: 0  // 为0时不自动消失
    })
}

// 手动关闭
const closeNotify = () => {
    notifyRef.value.close()
}
</script>
```

### 自定义样式

```html
<template>
    <hy-notify ref="notifyRef"></hy-notify>
    <hy-button text="自定义颜色" @click="showCustomStyle"></hy-button>
</template>

<script setup>
import { ref } from 'vue'

const notifyRef = ref()

const showCustomStyle = () => {
    notifyRef.value.show({
        message: '自定义颜色和大小',
        color: '#fff',
        bgColor: '#4F8EF7',
        fontSize: 16,
        top: 100
    })
}
</script>
```

### 留出顶部安全距离

```html
<template>
    <hy-notify ref="notifyRef"></hy-notify>
    <hy-button text="显示通知" @click="showNotify"></hy-button>
</template>

<script setup>
import { ref } from 'vue'

const notifyRef = ref()

const showNotify = () => {
    notifyRef.value.show({
        message: '自动适配状态栏',
        safeAreaInsetTop: true
    })
}
</script>
```

### 自定义图标

```html
<template>
    <hy-notify ref="notifyRef">
        <template #icon>
            <hy-icon :name="IconConfig.REMIND" color="#ffd700"></hy-icon>
        </template>
    </hy-notify>
    <hy-button text="显示带图标通知" @click="showNotify"></hy-button>
</template>

<script setup>
import { ref } from 'vue'
import { IconConfig } from "hy-app"

const notifyRef = ref()

const showNotify = () => {
    notifyRef.value.show({
        message: '自定义图标示例'
    })
}
</script>
```

### 带回调函数

```html
<template>
    <hy-notify ref="notifyRef"></hy-notify>
    <hy-button text="显示通知" @click="showNotify"></hy-button>
</template>

<script setup>
import { ref } from 'vue'

const notifyRef = ref()

const showNotify = () => {
    notifyRef.value.show({
        message: '3秒后执行回调',
        duration: 3000,
        complete: () => {
            uni.showToast({
                title: '通知已关闭',
                icon: 'none'
            })
        }
    })
}
</script>
```

## API

### Notify Props

| 参数               | 说明                | 类型                                               | 默认值     |
|------------------|-------------------|--------------------------------------------------|---------|
| modelValue       | 是否显示通知            | `boolean`                                        | false   |
| top              | 到顶部的距离（H5端默认44px） | `number`                                         | 0       |
| type             | 主题类型              | `primary`\|`success`\|`warning`\|`error`\|`info` | primary |
| color            | 字体颜色              | `string`                                         | #ffffff |
| bgColor          | 背景颜色              | `string`                                         | -       |
| icon             | 自定义图标名称           | `string`                                         | -       |
| message          | 展示的文字内容           | `string`                                         | -       |
| duration         | 展示时长，为0时不消失，单位ms  | `number`                                         | 3000    |
| fontSize         | 字体大小，单位px         | `number` \| `string`                             | 15      |
| safeAreaInsetTop | 是否留出顶部安全距离（状态栏高度） | `boolean`                                        | false   |
| customStyle      | 自定义需要用到的外部样式      | `CSSProperties`                                  | -       |
| customClass      | 自定义外部类名           | `string`                                         | -       |

### Methods

| 方法名 | 说明         | 参数类型 |
|-------|------------|--------|
| show   | 显示通知并加载配置 | `NotifyOptions` |
| close  | 关闭通知       | -      |

### NotifyOptions 配置项

| 参数               | 说明               | 类型                                               | 默认值     |
|------------------|------------------|--------------------------------------------------|---------|
| top              | 到顶部的距离           | `number`                                         | 0       |
| type             | 主题类型             | `primary`\|`success`\|`warning`\|`error`\|`info` | primary |
| color            | 字体颜色             | `string`                                         | #ffffff |
| bgColor          | 背景颜色             | `string`                                         | -       |
| icon             | 自定义图标名称          | `string`                                         | -       |
| message          | 展示的文字内容          | `string`                                         | -       |
| duration         | 展示时长，为0时不消失，单位ms | `number`                                         | 3000    |
| fontSize         | 字体大小，单位px        | `number` \| `string`                             | 15      |
| safeAreaInsetTop | 是否留出顶部安全距离       | `boolean`                                        | false   |
| complete         | 关闭后的回调函数         | `() => void`                                     | -       |

### Slots

| 插槽名  | 说明     | 接收值 |
|------|--------|-----|
| icon | 自定义通知图标 | -   |

## typings

:::details 类型说明

```ts
type NotifyType = 'primary' | 'success' | 'warning' | 'error' | 'info'

interface NotifyOptions {
    /** 到顶部的距离 */
    top?: number
    /** 主题类型 */
    type?: NotifyType
    /** 字体颜色 */
    color?: string
    /** 背景颜色 */
    bgColor?: string
    /** 自定义图标 */
    icon?: string
    /** 展示的文字内容 */
    message?: string
    /** 展示时长，为0时不消失 */
    duration?: number
    /** 字体大小 */
    fontSize?: number | string
    /** 是否留出顶部安全距离 */
    safeAreaInsetTop?: boolean
    /** 关闭后的回调函数 */
    complete?: () => void
}
```

:::

<demo-model url="pages-design/notify/notify"></demo-model>
