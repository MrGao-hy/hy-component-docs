# Tooltip 长按提示组件

> Tooltip组件主要用于长按操作，类似微信的长按气泡，提供复制、扩展按钮等功能。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :warning:注意事项

:::warning

- 默认使用长按触发（`longpress`），可通过 `triggerMode` 属性设置为点击触发（`click`）
- 复制功能依赖 `uni.setClipboardData`，需要用户授权剪贴板权限
- 扩展按钮通过 `buttons` 数组配置，点击后触发 `click` 事件
:::

## :japanese_castle:基本使用示例

```html
<template>
    <view>
        <!-- 基础用法 -->
        <hy-tooltip text="复制内容"></hy-tooltip>

        <!-- 使用插槽自定义内容 -->
        <hy-tooltip text="复制内容">
            <text>长按复制</text>
        </hy-tooltip>
    </view>
</template>
```

### 弹出位置

Tooltip 支持12种弹出位置，通过 `placement` 属性控制：

```html
<template>
    <view>
        <!-- 下方居中（默认） -->
        <hy-tooltip text="底部提示" placement="bottom"></hy-tooltip>

        <!-- 上方居中 -->
        <hy-tooltip text="顶部提示" placement="top"></hy-tooltip>

        <!-- 左侧 -->
        <hy-tooltip text="左侧提示" placement="left"></hy-tooltip>

        <!-- 右侧 -->
        <hy-tooltip text="右侧提示" placement="right"></hy-tooltip>
    </view>
</template>
```

### 复制功能

```html
<template>
    <view>
        <!-- 默认复制 text 属性值 -->
        <hy-tooltip text="复制内容"></hy-tooltip>

        <!-- 自定义复制内容 -->
        <hy-tooltip text="显示文本" copyText="实际复制的内容"></hy-tooltip>

        <!-- 隐藏复制按钮 -->
        <hy-tooltip text="无复制" :showCopy="false"></hy-tooltip>
    </view>
</template>
```

### 扩展按钮

```html
<template>
    <view>
        <!-- 单个扩展按钮 -->
        <hy-tooltip text="操作" :buttons="['收藏']" @click="handleClick"></hy-tooltip>

        <!-- 多个扩展按钮 -->
        <hy-tooltip
            text="操作"
            :buttons="['收藏', '分享', '举报']"
            @click="handleClick"
        ></hy-tooltip>

        <!-- 仅显示扩展按钮（隐藏复制） -->
        <hy-tooltip
            text="操作"
            :buttons="['编辑', '删除']"
            :showCopy="false"
            @click="handleClick"
        ></hy-tooltip>
    </view>
</template>

<script setup lang="ts">
    const handleClick = (index: number) => {
        // index = 0: 复制按钮
        // index = 1: 第一个扩展按钮
        // index = 2: 第二个扩展按钮
        uni.showToast({
            title: `点击了第${index}个按钮`,
            icon: 'none'
        })
    }
</script>
```

### 自定义样式

```html
<template>
    <view>
        <!-- 自定义文字样式 -->
        <hy-tooltip text="自定义样式" size="20" color="#ff6b6b" bold></hy-tooltip>

        <!-- 高亮选中文本背景色 -->
        <hy-tooltip text="高亮文本" bgColor="#fff3cd"></hy-tooltip>

        <!-- 自定义外部样式 -->
        <hy-tooltip
            text="自定义样式"
            :customStyle="{ padding: '10px 20px' }"
            customClass="my-tooltip"
        ></hy-tooltip>
    </view>
</template>

<style>
    .my-tooltip {
        border-radius: 8px;
    }
</style>
```

### 触发模式

```html
<template>
    <view>
        <!-- 长按触发（默认） -->
        <hy-tooltip text="长按触发" triggerMode="longpress"></hy-tooltip>

        <!-- 点击触发 -->
        <hy-tooltip text="点击触发" triggerMode="click"></hy-tooltip>
    </view>
</template>
```

### :bento:遮罩层

```html
<template>
    <view>
        <!-- 显示遮罩层（禁止触摸穿透） -->
        <hy-tooltip text="显示遮罩层" :overlay="true"></hy-tooltip>

        <!-- 不显示遮罩层（允许触摸穿透） -->
        <hy-tooltip text="不显示遮罩层" :overlay="false"></hy-tooltip>
    </view>
</template>
```

### 综合示例

```html
<template>
    <view class="demo">
        <view class="demo-title">消息列表</view>

        <view class="message-item" v-for="(item, index) in messages" :key="index">
            <hy-tooltip
                :text="item.content"
                :copyText="item.content"
                :buttons="['转发', '删除']"
                placement="bottom-start"
                @click="handleAction(index, $event)"
            >
                <view class="message-content">
                    <text class="message-text">{{ item.content }}</text>
                    <text class="message-time">{{ item.time }}</text>
                </view>
            </hy-tooltip>
        </view>
    </view>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const messages = ref([
        { content: '这是一条重要消息', time: '10:30' },
        { content: '请查看附件内容', time: '11:45' },
        { content: '会议时间已变更', time: '14:20' }
    ])

    const handleAction = (messageIndex: number, actionIndex: number) => {
        const actions = ['复制', '转发', '删除']
        uni.showToast({
            title: `${actions[actionIndex]}: ${messages.value[messageIndex].content}`,
            icon: 'none'
        })
    }
</script>

<style lang="scss">
    .demo {
        padding: 20rpx;
    }

    .demo-title {
        font-size: 32rpx;
        font-weight: bold;
        margin-bottom: 20rpx;
    }

    .message-item {
        margin-bottom: 15rpx;
        background: #fff;
        padding: 20rpx;
        border-radius: 12rpx;
    }

    .message-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .message-text {
        font-size: 28rpx;
        color: #333;
    }

    .message-time {
        font-size: 24rpx;
        color: #999;
    }
</style>
```

## API

### Tooltip Props

| 参数          | 说明                       | 类型                                 | 默认值         |
|-------------|--------------------------|------------------------------------|-------------|
| text        | 需要显示的提示文字                | `string`                           | -           |
| copyText    | 点击复制按钮时，复制的文本，为空则使用text值 | `string`                           | -           |
| size        | 文本大小                     | `string`\|`number`                 | 14          |
| bold        | 文本粗细                     | `boolean`                          | false       |
| color       | 字体颜色                     | `string`                           | -           |
| bgColor     | 弹出提示框时，文本的背景色            | `string`                           | transparent |
| zIndex      | 弹出提示的z-index             | `number`                           | 10071       |
| showCopy    | 是否显示复制按钮                 | `boolean`                          | true        |
| buttons     | 扩展的按钮组                   | `string[]`                         | []          |
| overlay     | 是否显示透明遮罩以防止触摸穿透          | `boolean`                          | true        |
| showToast   | 是否显示复制成功或者失败的toast       | `boolean`                          | true        |
| triggerMode | 触发模式                     | `'longpress'\|'click'`             | longpress   |
| placement   | 指定 popover 的放置位置         | `'left'\|'top'\|'right'\|'bottom'` | bottom      |
| customStyle | 定义需要用到的外部样式              | `CSSProperties`                    | -           |
| customClass | 自定义外部类名                  | `string`                           | -           |

### Events

| 事件名   | 说明     | 回调参数                             |
|-------|--------|----------------------------------|
| click | 点击触发事件 | index：被点击按钮的索引（0为复制按钮，从1开始为扩展按钮） |

<demo-model url="pages-design/tooltip/tooltip"></demo-model>
