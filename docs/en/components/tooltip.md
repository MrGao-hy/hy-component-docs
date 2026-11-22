# Tooltip Long-Press Prompt Component

> The Tooltip component is mainly used for long-press interactions, similar to WeChat's long-press bubble, providing features such as copy and extension buttons.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | -------------------- | ------------------- |
| ✔        | ✔   | ✔                    | ✔                   |

## :warning: Notes

::: warning Notes

- Triggered by long press by default (`longpress`); can be switched to click trigger (`click`) via the `triggerMode` property
- The copy feature relies on `uni.setClipboardData` and requires the user to authorize clipboard permission
- Extension buttons are configured via the `buttons` array; clicking one triggers the `click` event

:::

## :japanese_castle: Basic Usage

```html
<template>
    <view>
        <!-- Basic usage -->
        <hy-tooltip text="Content to copy"></hy-tooltip>

        <!-- Customize content with a slot -->
        <hy-tooltip text="Content to copy">
            <text>Long-press to copy</text>
        </hy-tooltip>
    </view>
</template>
```

### Placement

Tooltip supports 12 popup placements, controlled by the `placement` property:

```html
<template>
    <view>
        <!-- Bottom center (default) -->
        <hy-tooltip text="Bottom tooltip" placement="bottom"></hy-tooltip>

        <!-- Top center -->
        <hy-tooltip text="Top tooltip" placement="top"></hy-tooltip>

        <!-- Left -->
        <hy-tooltip text="Left tooltip" placement="left"></hy-tooltip>

        <!-- Right -->
        <hy-tooltip text="Right tooltip" placement="right"></hy-tooltip>
    </view>
</template>
```

### Copy Feature

```html
<template>
    <view>
        <!-- Copies the value of the text property by default -->
        <hy-tooltip text="Content to copy"></hy-tooltip>

        <!-- Custom copy content -->
        <hy-tooltip text="Displayed text" copyText="Actually copied content"></hy-tooltip>

        <!-- Hide the copy button -->
        <hy-tooltip text="No copy" :showCopy="false"></hy-tooltip>
    </view>
</template>
```

### Extension Buttons

```html
<template>
    <view>
        <!-- Single extension button -->
        <hy-tooltip text="Actions" :buttons="['Favorite']" @click="handleClick"></hy-tooltip>

        <!-- Multiple extension buttons -->
        <hy-tooltip
            text="Actions"
            :buttons="['Favorite', 'Share', 'Report']"
            @click="handleClick"
        ></hy-tooltip>

        <!-- Show only extension buttons (hide copy) -->
        <hy-tooltip
            text="Actions"
            :buttons="['Edit', 'Delete']"
            :showCopy="false"
            @click="handleClick"
        ></hy-tooltip>
    </view>
</template>

<script setup lang="ts">
    const handleClick = (index: number) => {
        // index = 0: copy button
        // index = 1: first extension button
        // index = 2: second extension button
        uni.showToast({
            title: `Clicked button ${index}`,
            icon: 'none',
        });
    };
</script>
```

### Custom Styles

```html
<template>
    <view>
        <!-- Custom text style -->
        <hy-tooltip text="Custom style" size="20" color="#ff6b6b" bold></hy-tooltip>

        <!-- Highlight the selected text background -->
        <hy-tooltip text="Highlighted text" bgColor="#fff3cd"></hy-tooltip>

        <!-- Custom external styles -->
        <hy-tooltip
            text="Custom style"
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

### Trigger Mode

```html
<template>
    <view>
        <!-- Long-press trigger (default) -->
        <hy-tooltip text="Long-press trigger" triggerMode="longpress"></hy-tooltip>

        <!-- Click trigger -->
        <hy-tooltip text="Click trigger" triggerMode="click"></hy-tooltip>
    </view>
</template>
```

### :bento: Overlay

```html
<template>
    <view>
        <!-- Show overlay (prevent touch pass-through) -->
        <hy-tooltip text="Show overlay" :overlay="true"></hy-tooltip>

        <!-- Hide overlay (allow touch pass-through) -->
        <hy-tooltip text="Hide overlay" :overlay="false"></hy-tooltip>
    </view>
</template>
```

### Complete Example

```html
<template>
    <view class="demo">
        <view class="demo-title">Message List</view>

        <view class="message-item" v-for="(item, index) in messages" :key="index">
            <hy-tooltip
                :text="item.content"
                :copyText="item.content"
                :buttons="['Forward', 'Delete']"
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
    import { ref } from 'vue';

    const messages = ref([
        { content: 'This is an important message', time: '10:30' },
        { content: 'Please check the attachment', time: '11:45' },
        { content: 'The meeting time has changed', time: '14:20' },
    ]);

    const handleAction = (messageIndex: number, actionIndex: number) => {
        const actions = ['Copy', 'Forward', 'Delete'];
        uni.showToast({
            title: `${actions[actionIndex]}: ${messages.value[messageIndex].content}`,
            icon: 'none',
        });
    };
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

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| text | Tooltip text to display | `string` | - |
| copyText | Text to copy when the copy button is clicked; falls back to the text value if empty | `string` | - |
| size | Font size; numbers use px by default | `string`\|`number` | 14 |
| bold | Bold text | `boolean` | false |
| color | Font color | `string` | - |
| bgColor | Background color of the text when the tooltip pops up | `string` | transparent |
| zIndex | z-index of the tooltip | `number` | 10071 |
| showCopy | Whether to show the copy button | `boolean` | true |
| buttons | Extension button group | `string[]` | [] |
| overlay | Whether to show a transparent overlay to prevent touch pass-through | `boolean` | true |
| showToast | Whether to show a toast on copy success or failure | `boolean` | true |
| triggerMode | Trigger mode | `'longpress'\|'click'` | longpress |
| placement | Placement of the popover | `'left'\|'top'\|'right'\|'bottom'` | bottom |
| customStyle | External styles to apply | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description | Callback Parameters |
| ------ | ------------ | --------------------------------------------------------- |
| click  | Triggered on click | index: the index of the clicked button (0 is the copy button; extension buttons start from 1) |

### Tooltip Slots

| Slot Name | Description                     | Accepted Values |
| ------- | ------------------------ | ------ |
| default | Default slot for custom content | -      |

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-tooltip-bg` | Background color | `rgb(50, 50, 51)` |
| `--hy-tooltip-min-height` | Minimum height | `36px` |
| `--hy-tooltip-btn-font-size` | Button font size | `13px` |
| `--hy-tooltip-radius` | Bubble border radius | Follows `--hy-radius-sm` (8rpx) |
| `--hy-tooltip-btn-color` | Menu button color | `#ffffff` |
| `--hy-tooltip-btn-hover-background` | Background color of the action button pressed state | Follows `--hy-background--hover` |
| `--hy-tooltip-btn-padding` | Padding of the action buttons | Follows `--hy-border-margin-padding-base` |
| `--hy-tooltip-shadow-base` | Base shadow | Follows `--hy-shadow-base` |

<demo-model url="pages-design/tooltip/tooltip"></demo-model>