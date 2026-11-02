# Steps Component

> The Steps component is used to display the multiple steps of a task and indicate which step is currently active.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :warning: Notes

::: warning Note

- The `list` property is required; each array item must contain a `title` field
- The `current` property is indexed starting from 0
- The `direction` property supports two directions: `row` (horizontal) and `column` (vertical)
- When `error` is `true` in a `list` item, an error state will be displayed

:::

## :japanese_castle: Basic Usage Examples

### Basic Usage

```html
<template>
    <hy-steps :list="list" v-model:current="current"></hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(1);
    const list = ref([
        { title: 'Ordered', docs: '2024-10-13' },
        { title: 'Shipped', docs: '2024-10-13' },
        { title: 'Delivery Failed', docs: '2024-10-14', error: true },
    ]);
</script>
```

### Horizontal Mode (Default)

```html
<template>
    <hy-steps :list="list" direction="row"></hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const list = ref([{ title: 'Step One' }, { title: 'Step Two' }, { title: 'Step Three' }]);
</script>
```

### Vertical Mode

```html
<template>
    <hy-steps :list="list" direction="column"></hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const list = ref([
        { title: 'Ordered', docs: '2024-10-13', date: '10:30' },
        { title: 'Shipped', docs: 'The courier is packing the parcel', date: '14:20' },
        { title: 'In Transit', docs: 'Expected to arrive tomorrow', date: '16:00' },
    ]);
</script>
```

### Dot Mode

```html
<template>
    <hy-steps :list="list" dot></hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const list = ref([{ title: 'Step One' }, { title: 'Step Two' }, { title: 'Step Three' }]);
</script>
```

### Custom Colors

```html
<template>
    <hy-steps :list="list" activeColor="#4F8EF7" inactiveColor="#CCCCCC"></hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const list = ref([{ title: 'Step One' }, { title: 'Step Two' }, { title: 'Step Three' }]);
</script>
```

### Custom Icons

```html
<template>
    <hy-steps
        :list="list"
        activeIcon="check-circle"
        inactiveIcon="circle"
        :iconSize="20"
    ></hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const list = ref([{ title: 'Completed' }, { title: 'In Progress' }, { title: 'Not Started' }]);
</script>
```

### Error State

```html
<template>
    <hy-steps :list="list" v-model:current="current"></hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(2);
    const list = ref([
        { title: 'Step One', docs: 'Completed', date: '2024-10-13' },
        { title: 'Step Two', docs: 'Completed', date: '2024-10-13' },
        { title: 'Step Three', docs: 'Execution Failed', date: '2024-10-14', error: true },
        { title: 'Step Four', docs: 'Not Started', date: '' },
    ]);
</script>
```

### Dynamically Control the Current Step

```html
<template>
    <view>
        <hy-steps :list="list" v-model:current="current"></hy-steps>
        <view class="controls">
            <hy-button text="Previous" :disabled="current <= 0" @click="current--"></hy-button>
            <hy-button
                text="Next"
                :disabled="current >= list.length - 1"
                @click="current++"
            ></hy-button>
        </view>
    </view>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(0);
    const list = ref([{ title: 'Register User' }, { title: 'Fill in Basic Information' }, { title: 'Log In' }]);
</script>
```

### Custom Slot - Custom Icon

```html
<template>
    <hy-steps :list="list" v-model:current="current">
        <template #icon="{ index, error }">
            <view class="custom-icon" :class="{ error }">
                <text v-if="index < current">{{ index + 1 }}</text>
                <text v-else-if="index === current">In Progress</text>
                <text v-else>Pending</text>
            </view>
        </template>
    </hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(1);
    const list = ref([{ title: 'Step One' }, { title: 'Step Two' }, { title: 'Step Three' }]);
</script>

<style lang="scss" scoped>
    .custom-icon {
        width: 40rpx;
        height: 40rpx;
        border-radius: 50%;
        background: #e8e8e8;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20rpx;
        color: #999;

        &.error {
            background: #ff4d4f;
            color: #fff;
        }

        :deep(.hy-steps__item--active) & {
            background: #4f8ef7;
            color: #fff;
        }
    }
</style>
```

### Custom Slot - Custom Title and Description

```html
<template>
    <hy-steps :list="list" v-model:current="current">
        <template #title="{ title, index }">
            <view class="custom-title">
                <text class="step-num">{{ index + 1 }}.</text>
                <text>{{ title }}</text>
            </view>
        </template>
        <template #docs="{ docs, date }">
            <view class="custom-desc" v-if="docs">
                <text class="desc-text">{{ docs }}</text>
                <text class="desc-date" v-if="date">{{ date }}</text>
            </view>
        </template>
    </hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(1);
    const list = ref([
        { title: 'Order Submitted', docs: 'The order was submitted successfully', date: '2024-10-13 10:30' },
        { title: 'Payment Completed', docs: 'Payment amount: ¥199.00', date: '2024-10-13 10:35' },
        { title: 'Order Shipped', docs: 'Tracking number: SF1234567890', date: '2024-10-13 14:00' },
    ]);
</script>

<style lang="scss" scoped>
    .custom-title {
        display: flex;
        align-items: center;
        gap: 8rpx;
        font-weight: 600;

        .step-num {
            color: #4f8ef7;
        }
    }

    .custom-desc {
        display: flex;
        flex-direction: column;
        gap: 4rpx;
        margin-top: 8rpx;

        .desc-text {
            font-size: 24rpx;
            color: #666;
        }

        .desc-date {
            font-size: 22rpx;
            color: #999;
        }
    }
</style>
```

### Custom Slot - Custom Content

```html
<template>
    <hy-steps :list="list" v-model:current="current">
        <template #content="{ item, index }">
            <view class="custom-content">
                <view class="content-title">{{ item.title }}</view>
                <view class="content-info" v-if="item.docs">
                    <text class="info-text">{{ item.docs }}</text>
                </view>
                <view class="content-status">
                    <text
                        :class="[
                            'status-tag',
                            index < current ? 'status-done' : '',
                            index === current ? 'status-active' : '',
                            index > current ? 'status-pending' : ''
                        ]"
                    >
                        {{ index < current ? 'Completed' : index === current ? 'In Progress' : 'Pending' }}
                    </text>
                </view>
            </view>
        </template>
    </hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(1);
    const list = ref([
        { title: 'User Registration', docs: 'Enter and verify phone number' },
        { title: 'Complete Profile', docs: 'Fill in name, avatar, and other information' },
        { title: 'Done', docs: 'Registration successful' },
    ]);
</script>

<style lang="scss" scoped>
    .custom-content {
        padding: 16rpx;

        .content-title {
            font-weight: 600;
            font-size: 28rpx;
        }

        .content-info {
            margin-top: 8rpx;

            .info-text {
                font-size: 24rpx;
                color: #666;
            }
        }

        .content-status {
            margin-top: 12rpx;
        }

        .status-tag {
            font-size: 22rpx;
            padding: 4rpx 16rpx;
            border-radius: 20rpx;

            &.status-done {
                background: #f6ffed;
                color: #52c41a;
            }

            &.status-active {
                background: #e6f7ff;
                color: #1890ff;
            }

            &.status-pending {
                background: #f5f5f5;
                color: #999;
            }
        }
    }
</style>
```

## API

### Props

| Property      | Description                                             | Type                 | Default |
| ------------- | ------------------------------------------------------- | -------------------- | ------- |
| current       | Current step index (starts from 0)                      | `number`             | 0       |
| list          | Steps data collection                                   | `StepListVo[]`       | []      |
| direction     | Direction, `row`-horizontal, `column`-vertical          | `string`             | row     |
| activeColor   | Active state color                                      | `string`             | -       |
| inactiveColor | Inactive state color                                    | `string`             | -       |
| activeIcon    | Icon for the active state                               | `string`             | -       |
| inactiveIcon  | Icon for the inactive state                             | `string`             | -       |
| dot           | Whether to display dot style                            | `boolean`            | false   |
| iconSize      | Icon size, default unit for numeric values is px        | `string` \| `number` | 17      |

### List Item Structure

| Property | Description                  | Type      | Default |
| -------- | ---------------------------- | --------- | ------- |
| title    | Title                        | `string`  | -       |
| docs     | Description                  | `string`  | -       |
| date     | Date and time                | `string`  | -       |
| error    | Whether it is an error state | `boolean` | -       |

### Events

| Event          | Description                      | Callback Parameters |
| -------------- | -------------------------------- | ------------------- |
| change         | Triggered when the step changes  | `index: number`     |
| update:current | Triggered when the step changes  | `index: number`     |

### Slots

| Slot    | Description                                | Parameters                                       |
| ------- | ------------------------------------------ | ------------------------------------------------ |
| icon    | Custom left icon of the step               | `index: number`, `error: boolean`                |
| content | Custom overall content on the right side   | `item: StepListVo`, `index: number`              |
| title   | Custom step title                          | `title: string`, `index: number`                 |
| docs    | Custom step description                    | `docs: string`, `date: string`, `index: number`  |

## Typings

::: details Type Definitions

```ts
export interface StepListVo {
    /** Title */
    title?: string;
    /** Description */
    docs?: string;
    /** Date and time */
    date?: string;
    /** Whether it is an error state */
    error?: boolean;
}
```

:::

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-steps-icon-size` | Icon size | `20px` |
| `--hy-steps-dot-size` | Dot size | `10px` |
| `--hy-steps-icon-text-font-size` | Icon text font size | `11px` |
| `--hy-steps-title-font-size` | Title font size | `30rpx` |
| `--hy-steps-title-active-font-size` | Active title font size | `34rpx` |
| `--hy-steps-content-min-height` | Minimum height of the content area | `60px` |
| `--hy-steps-icon-radius` | Icon container border radius | Follows `--hy-radius-semicircle` (`100px`) |
| `--hy-steps-dot-radius` | Dot shape border radius | Follows `--hy-radius-circle` (`50%`) |
| `--hy-steps-icon-text-color` | Text color inside the icon | Follows `--hy-text-color--grey` |
| `--hy-steps-date-font-size` | Date font size | `24rpx` |
| `--hy-steps-date-color` | Date color | `#999` |
| `--hy-steps-icon-border` | Icon container border | Follows `--hy-border-line` |

<demo-model url="pages-design/steps/steps"></demo-model>