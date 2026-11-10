# SwipeAction Swipe Cell Component

> A swipe cell component used in scenarios where you swipe left or right to reveal an action menu, commonly used for operations such as deleting and favoriting.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :warning: Precautions

::: warning Precautions

- The component supports both left and right swipe directions; the action buttons on each side are defined via the `left` and `right` slots respectively
- The `options` property is used to configure right-side buttons and only takes effect when the `left` slot is not used
- `modelValue` controls the swipe state, with a value of `left`, `right`, or `close`
- The `beforeClose` hook function is triggered before the swipe buttons close and can be used to confirm operations
- When multiple swipe cells are used together, swiping one will automatically close the other opened cells
- Clicking the content area of an opened swipe cell will close it automatically

:::

## :japanese_castle: Basic Usage Examples

### Basic Usage

```html
<template>
    <hy-swipe-action borderBottom>
        <view class="cell">
            <view class="cell-title">Title</view>
            <view class="cell-value">Content</view>
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

### Right-Side Action Buttons (Default)

```html
<template>
    <hy-swipe-action borderBottom :options="options">
        <view class="cell">
            <view class="cell-title">Swipe to delete</view>
            <view class="cell-value">Swipe left to show action buttons</view>
        </view>
    </hy-swipe-action>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const options = [
        {
            text: 'Favorite',
            style: {
                backgroundColor: '#3c9cff',
            },
        },
        {
            text: 'Delete',
            style: {
                backgroundColor: '#f56c6c',
            },
        },
    ];
</script>
```

### Left-Side Action Buttons

```html
<template>
    <hy-swipe-action borderBottom>
        <view class="cell">
            <view class="cell-title">Swipe right</view>
            <view class="cell-value">Show left action buttons</view>
        </view>
        <template #left>
            <view class="action">
                <view class="action-btn" style="background-color: #3c9cff">Mark</view>
                <view class="action-btn" style="background-color: #f56c6c">Delete</view>
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

### Action Buttons on Both Sides

```html
<template>
    <hy-swipe-action borderBottom>
        <view class="cell">
            <view class="cell-title">Swipe both ways</view>
            <view class="cell-value">Swipe left or right to show action buttons</view>
        </view>
        <template #left>
            <view class="action">
                <view class="action-btn" style="background-color: #3c9cff">Favorite</view>
            </view>
        </template>
        <template #right>
            <view class="action">
                <view class="action-btn" style="background-color: #19be6b">Edit</view>
                <view class="action-btn" style="background-color: #f56c6c">Delete</view>
            </view>
        </template>
    </hy-swipe-action>
</template>
```

### Disabled Swiping

```html
<template>
    <hy-swipe-action borderBottom :disabled="true">
        <view class="cell">
            <view class="cell-title">Disabled swiping</view>
            <view class="cell-value">This cell cannot be swiped</view>
        </view>
    </hy-swipe-action>
</template>
```

### Custom Animation Duration

```html
<template>
    <hy-swipe-action borderBottom :duration="500">
        <view class="cell">
            <view class="cell-title">Slow animation</view>
            <view class="cell-value">Animation transition time is 500ms</view>
        </view>
    </hy-swipe-action>
</template>
```

### Before-Close Hook

```html
<template>
    <hy-swipe-action borderBottom :options="options" :beforeClose="handleBeforeClose">
        <view class="cell">
            <view class="cell-title">Close confirmation</view>
            <view class="cell-value">A confirmation prompt appears before closing</view>
        </view>
    </hy-swipe-action>
</template>

<script setup lang="ts">
    const options = [
        {
            text: 'Delete',
            style: {
                backgroundColor: '#f56c6c',
            },
        },
    ];

    const handleBeforeClose = (reason: string, position: string) => {
        console.log('Close reason:', reason);
        console.log('Close position:', position);
        uni.showToast({
            title: 'Action closed',
            icon: 'none',
        });
    };
</script>
```

### Listening to Click Events

```html
<template>
    <hy-swipe-action
        borderBottom
        :options="options"
        @click="handleClick"
        @clickAction="handleAction"
    >
        <view class="cell">
            <view class="cell-title">Click events</view>
            <view class="cell-value">Click the content or buttons to trigger events</view>
        </view>
    </hy-swipe-action>
</template>

<script setup lang="ts">
    const options = [
        {
            text: 'Favorite',
            style: {
                backgroundColor: '#3c9cff',
            },
        },
        {
            text: 'Delete',
            style: {
                backgroundColor: '#f56c6c',
            },
        },
    ];

    const handleClick = (value: string) => {
        console.log('Click position:', value);
        uni.showToast({
            title: `Clicked: ${value}`,
            icon: 'none',
        });
    };

    const handleAction = (item: any, index: number) => {
        console.log('Action button:', item, index);
        uni.showToast({
            title: `Clicked: ${item.text}`,
            icon: 'none',
        });
    };
</script>
```

### Programmatic Open/Close Control

```html
<template>
    <view>
        <hy-swipe-action borderBottom v-model="status" :options="options">
            <view class="cell">
                <view class="cell-title">Programmatic control</view>
                <view class="cell-value">Control open/close via buttons</view>
            </view>
        </hy-swipe-action>
        <view class="controls">
            <hy-button text="Open" @click="status = 'right'"></hy-button>
            <hy-button text="Close" @click="status = 'close'"></hy-button>
        </view>
    </view>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const status = ref('close');
    const options = [
        {
            text: 'Delete',
            style: {
                backgroundColor: '#f56c6c',
            },
        },
    ];
</script>

<style lang="scss" scoped>
    .controls {
        display: flex;
        gap: 20rpx;
        padding: 20rpx;
    }
</style>
```

### List Scenario

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
    import { ref } from 'vue';

    const list = ref([
        { title: 'List item 1', desc: 'This is the first data entry' },
        { title: 'List item 2', desc: 'This is the second data entry' },
        { title: 'List item 3', desc: 'This is the third data entry' },
    ]);

    const options = [
        {
            text: 'Delete',
            style: {
                backgroundColor: '#f56c6c',
            },
        },
    ];

    const handleDelete = (index: number) => {
        uni.showModal({
            title: 'Notice',
            content: 'Are you sure you want to delete this entry?',
            success: (res) => {
                if (res.confirm) {
                    list.value.splice(index, 1);
                    uni.showToast({
                        title: 'Deleted successfully',
                        icon: 'success',
                    });
                }
            },
        });
    };
</script>

<style lang="scss" scoped>
    .list {
        background: #fff;
    }
</style>
```

## API

### SwipeAction Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | State of the swipe buttons | `'left'` \| `'close'` \| `'right'` | close |
| disabled | Whether to disable swiping | `boolean` | false |
| borderBottom | Whether to show the bottom border | `boolean` | false |
| options | Right-side button configuration (effective when no `left` slot is used) | `SwipeActionOptionsVo[]` | [See below](./swipeAction/#options) |
| duration | Animation transition duration, in ms | `number` | 300 |
| beforeClose | Hook function triggered before the swipe buttons close | `(reason: SwipeActionReason, position: SwipeActionPosition) => void` | - |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| click | Triggered when clicking the entire swipe action container while the swipe buttons are open | `value: SwipeActionPosition` |
| clickAction | Triggered when clicking a right-side action button | `item: SwipeActionOptionsVo, index: number` |
| update:modelValue | Triggered when the swipe state changes | `value: SwipeActionStatus` |

### Slots

| Slot Name | Description             | Accepted Values |
| ------- | -------------- | ------ |
| left    | Custom left-side buttons | -      |
| default | Custom content           | -      |
| right   | Custom right-side buttons | -      |

### Typings

::: details Type Description

```ts
export interface SwipeActionOptionsVo {
    /** Button text */
    text: string;
    /** Button style */
    style?: CSSProperties;
    /** Button icon */
    icon?: string;
    /** Icon size */
    iconSize?: string | number;
}

/** Swipe button status */
export type SwipeActionStatus = 'close' | 'left' | 'right';

/** Close reason */
export type SwipeActionReason = 'click' | 'swipe' | 'value';

/** Click position */
export type SwipeActionPosition = SwipeActionStatus | 'inside';

/** Before-close hook function type */
export type SwipeActionBeforeClose = (
    reason: SwipeActionReason,
    position: SwipeActionPosition
) => void;
```

:::

### options

```ts
[
    {
        text: 'Favorite',
        style: {
            backgroundColor: '#3c9cff',
        },
    },
    {
        text: 'Delete',
        style: {
            backgroundColor: '#f56c6c',
        },
    },
];
```

### CSS Variables

| Variable Name                          | Description      | Default  |
| -------------------------------------- | ------------ | --------- |
| `--hy-swipe-action-button-padding`     | Button padding   | `0 15px`  |
| `--hy-swipe-action-button-line-height` | Button line height | `46px`    |
| `--hy-swipe-action-button-color`       | Button text color | `#ffffff` |

<demo-model url="pages-design/swipeAction/swipeAction"></demo-model>