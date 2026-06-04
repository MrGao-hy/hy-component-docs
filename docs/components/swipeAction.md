# SwipeAction 滑动单元格组件

> 滑动单元格组件，用于左滑或右滑唤出操作菜单的场景，常用于删除、收藏等操作。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :warning:注意事项

:::warning
- 组件支持左滑和右滑两种方向，通过 `left` 和 `right` 插槽分别定义左右两侧的操作按钮
- `options` 属性用于配置右侧按钮，只有在没有使用 `left` 插槽时才生效
- `modelValue` 用于控制滑动状态，值为 `left`、`right` 或 `close`
- `beforeClose` 钩子函数会在关闭滑动按钮前触发，可用于确认操作
- 多个滑动单元格同时使用时，滑动一个会自动关闭其他已打开的单元格
- 点击已打开的滑动单元格内容区域会自动关闭
  :::

## :japanese_castle:基本使用示例

### 基础用法

```html
<template>
    <hy-swipe-action borderBottom>
        <view class="cell">
            <view class="cell-title">我是标题</view>
            <view class="cell-value">我是内容</view>
        </view>
    </hy-swipe-action>
</template>

<style lang="scss" scoped>
.cell {
    padding: 20rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    &-title {
        font-size: 28rpx;
        color: #333;
    }
    
    &-value {
        font-size: 24rpx;
        color: #999;
    }
}
</style>
```

### 右侧操作按钮（默认）

```html
<template>
    <hy-swipe-action borderBottom :options="options">
        <view class="cell">
            <view class="cell-title">滑动删除</view>
            <view class="cell-value">向左滑动显示操作按钮</view>
        </view>
    </hy-swipe-action>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const options = [
    {
        text: '收藏',
        style: {
            backgroundColor: '#3c9cff'
        }
    },
    {
        text: '删除',
        style: {
            backgroundColor: '#f56c6c'
        }
    }
]
</script>
```

### 左侧操作按钮

```html
<template>
    <hy-swipe-action borderBottom>
        <view class="cell">
            <view class="cell-title">向右滑动</view>
            <view class="cell-value">显示左侧操作按钮</view>
        </view>
        <template #left>
            <view class="action">
                <view class="action-btn" style="background-color: #3c9cff">
                    标记
                </view>
                <view class="action-btn" style="background-color: #f56c6c">
                    删除
                </view>
            </view>
        </template>
    </hy-swipe-action>
</template>

<style lang="scss" scoped>
.action {
    display: flex;
    height: 100%;
    
    &-btn {
        padding: 0 30rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 28rpx;
    }
}
</style>
```

### 双侧操作按钮

```html
<template>
    <hy-swipe-action borderBottom>
        <view class="cell">
            <view class="cell-title">双向滑动</view>
            <view class="cell-value">左右滑动均可显示操作按钮</view>
        </view>
        <template #left>
            <view class="action">
                <view class="action-btn" style="background-color: #3c9cff">收藏</view>
            </view>
        </template>
        <template #right>
            <view class="action">
                <view class="action-btn" style="background-color: #19be6b">编辑</view>
                <view class="action-btn" style="background-color: #f56c6c">删除</view>
            </view>
        </template>
    </hy-swipe-action>
</template>
```

### 禁用滑动

```html
<template>
    <hy-swipe-action borderBottom :disabled="true">
        <view class="cell">
            <view class="cell-title">禁用滑动</view>
            <view class="cell-value">此单元格无法滑动</view>
        </view>
    </hy-swipe-action>
</template>
```

### 自定义动画时间

```html
<template>
    <hy-swipe-action borderBottom :duration="500">
        <view class="cell">
            <view class="cell-title">慢速动画</view>
            <view class="cell-value">动画过渡时间为 500ms</view>
        </view>
    </hy-swipe-action>
</template>
```

### 关闭前钩子

```html
<template>
    <hy-swipe-action 
        borderBottom 
        :options="options"
        :beforeClose="handleBeforeClose"
    >
        <view class="cell">
            <view class="cell-title">关闭确认</view>
            <view class="cell-value">关闭前会触发确认提示</view>
        </view>
    </hy-swipe-action>
</template>

<script setup lang="ts">
const options = [
    {
        text: '删除',
        style: {
            backgroundColor: '#f56c6c'
        }
    }
]

const handleBeforeClose = (reason: string, position: string) => {
    console.log('关闭原因:', reason)
    console.log('关闭位置:', position)
    uni.showToast({
        title: '操作已关闭',
        icon: 'none'
    })
}
</script>
```

### 监听点击事件

```html
<template>
    <hy-swipe-action 
        borderBottom 
        :options="options"
        @click="handleClick"
        @clickAction="handleAction"
    >
        <view class="cell">
            <view class="cell-title">点击事件</view>
            <view class="cell-value">点击内容或按钮触发事件</view>
        </view>
    </hy-swipe-action>
</template>

<script setup lang="ts">
const options = [
    {
        text: '收藏',
        style: {
            backgroundColor: '#3c9cff'
        }
    },
    {
        text: '删除',
        style: {
            backgroundColor: '#f56c6c'
        }
    }
]

const handleClick = (value: string) => {
    console.log('点击位置:', value)
    uni.showToast({
        title: `点击了: ${value}`,
        icon: 'none'
    })
}

const handleAction = (item: any, index: number) => {
    console.log('操作按钮:', item, index)
    uni.showToast({
        title: `点击了: ${item.text}`,
        icon: 'none'
    })
}
</script>
```

### 程序控制开关

```html
<template>
    <view>
        <hy-swipe-action 
            borderBottom 
            v-model="status"
            :options="options"
        >
            <view class="cell">
                <view class="cell-title">程序控制</view>
                <view class="cell-value">通过按钮控制开关</view>
            </view>
        </hy-swipe-action>
        <view class="controls">
            <hy-button text="打开" @click="status = 'right'"></hy-button>
            <hy-button text="关闭" @click="status = 'close'"></hy-button>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const status = ref('close')
const options = [
    {
        text: '删除',
        style: {
            backgroundColor: '#f56c6c'
        }
    }
]
</script>

<style lang="scss" scoped>
.controls {
    display: flex;
    gap: 20rpx;
    padding: 20rpx;
}
</style>
```

### 列表场景

```html
<template>
    <view class="list">
        <hy-swipe-action 
            v-for="(item, index) in list" 
            :key="index"
            borderBottom
            :options="options"
            @clickAction="handleDelete(index)"
        >
            <view class="cell">
                <view class="cell-title">{{ item.title }}</view>
                <view class="cell-value">{{ item.desc }}</view>
            </view>
        </hy-swipe-action>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const list = ref([
    { title: '列表项 1', desc: '这是第一条数据' },
    { title: '列表项 2', desc: '这是第二条数据' },
    { title: '列表项 3', desc: '这是第三条数据' }
])

const options = [
    {
        text: '删除',
        style: {
            backgroundColor: '#f56c6c'
        }
    }
]

const handleDelete = (index: number) => {
    uni.showModal({
        title: '提示',
        content: '确定删除此条数据吗？',
        success: (res) => {
            if (res.confirm) {
                list.value.splice(index, 1)
                uni.showToast({
                    title: '删除成功',
                    icon: 'success'
                })
            }
        }
    })
}
</script>

<style lang="scss" scoped>
.list {
    background: #fff;
}
</style>
```

## API

### SwipeAction Props

| 参数           | 说明                   | 类型                                                                   | 默认值                           |
|--------------|----------------------|----------------------------------------------------------------------|-------------------------------|
| modelValue   | 滑动按钮的状态              | `'left'` \| `'close'` \| `'right'`                                   | close                         |
| disabled     | 是否禁用滑动操作             | `boolean`                                                            | false                         |
| borderBottom | 是否显示底部边框             | `boolean`                                                            | false                         |
| options      | 右侧按钮配置（无 left 插槽时生效） | `SwipeActionOptionsVo[]`                                             | [见下方](./swipeAction/#options) |
| duration     | 动画过渡时间，单位 ms         | `number`                                                             | 300                           |
| beforeClose  | 关闭滑动按钮前的钩子函数         | `(reason: SwipeActionReason, position: SwipeActionPosition) => void` | -                             |

### Events

| 事件名               | 说明                             | 回调参数                                        |
|-------------------|--------------------------------|---------------------------------------------|
| click             | 当滑动按钮打开时，点击整个滑动操作容器触发 click 事件 | `value: SwipeActionPosition`                |
| clickAction       | 点击右侧操作按钮时触发                    | `item: SwipeActionOptionsVo, index: number` |
| update:modelValue | 滑动状态改变时触发                      | `value: SwipeActionStatus`                  |

### Slots

| 插槽名     | 说明      | 接收值 |
|---------|---------|-----|
| left    | 自定义左侧按钮 | -   |
| default | 自定义内容   | -   |
| right   | 自定义右侧按钮 | -   |

### Typings

:::details 类型说明

```ts
export interface SwipeActionOptionsVo {
    /** 按钮文本 */
    text: string
    /** 按钮样式 */
    style?: CSSProperties
    /** 按钮图标 */
    icon?: string
    /** 图标大小 */
    iconSize?: string | number
}

/** 滑动按钮状态 */
export type SwipeActionStatus = 'close' | 'left' | 'right'

/** 关闭原因 */
export type SwipeActionReason = 'click' | 'swipe' | 'value'

/** 点击位置 */
export type SwipeActionPosition = SwipeActionStatus | 'inside'

/** 关闭前钩子函数类型 */
export type SwipeActionBeforeClose = (
    reason: SwipeActionReason,
    position: SwipeActionPosition
) => void
```

:::

### options

```ts
[
    {
        text: '收藏',
        style: {
            backgroundColor: '#3c9cff'
        }
    },
    {
        text: '删除',
        style: {
            backgroundColor: '#f56c6c'
        }
    }
]
```

<demo-model url="pages-design/swipeAction/swipeAction"></demo-model>