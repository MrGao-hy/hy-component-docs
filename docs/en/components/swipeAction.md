# SwipeAction Swipe Cell Component

> A swipe cell component used to reveal an action menu by swiping left or right, commonly used for operations such as deleting and favoriting.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :warning: Notes

::: warning Notes

- The component supports both left and right swipe directions; the `left` and `right` slots are used to define the action buttons on each side
- The `options` property is used to configure the right-side buttons and only takes effect when the `left` slot is not used
- `modelValue` controls the swipe state, with a value of `left`, `right`, or `close`
- The `beforeClose` hook function is triggered before the swipe buttons close and can be used to confirm operations
- When multiple swipe cells are used together, swiping one will automatically close the other open cells
- Tapping the content area of an opened swipe cell will automatically close it

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

### Disable Swiping

```html
<template>
    <hy-swipe-action borderBottom :disabled="true">
        <view class="cell">
            <view class="cell-title">Swiping disabled</view>
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
            <view class="cell-value">Animation transition duration is 500ms</view>
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
            <view class="cell-value">A confirmation prompt is triggered before closing</view>
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

### Listening for Click Events

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
            <view class="cell-value">Tap the content or buttons to trigger events</view>
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
                <view class="cell-value">Open and close via buttons</view>
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
        { title: 'List item 1', desc: 'This is the first entry' },
        { title: 'List item 2', desc: 'This is the second entry' },
        { title: 'List item 3', desc: 'This is the third entry' },
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
| options | Right-side button configuration (takes effect when the `left` slot is not used) | `SwipeActionOptionsVo[]` | [See below](./swipeAction/#options) |
| duration | Animation transition duration, in ms | `number` | 300 |
| beforeClose | Hook function triggered before the swipe buttons close | `(reason: SwipeActionReason, position: SwipeActionPosition) => void` | - |

### Events

| Event | Description | Callback Parameters |
| --- | --- | --- |
| click | When the swipe buttons are open, tapping the entire swipe action container triggers the click event | `value: SwipeActionPosition` |
| clickAction | Triggered when a right-side action button is clicked | `item: SwipeActionOptionsVo, index: number` |
| update:modelValue | Triggered when the swipe state changes | `value: SwipeActionStatus` |

### Slots

| Slot    | Description      | Accepted Values |
| ------- | ---------------- | --------------- |
| left    | Custom left buttons | -            |
| default | Custom content   | -               |
| right   | Custom right buttons | -            |

### Typings

::: details Type Definitions

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

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-swipe-action-button-padding` | Button padding | `0 15px` |
| `--hy-swipe-action-button-line-height` | Button line height | `46px` |
| `--hy-swipe-action-button-color` | Button text color | `#ffffff` |

<demo-model url="pages-design/swipeAction/swipeAction"></demo-model>