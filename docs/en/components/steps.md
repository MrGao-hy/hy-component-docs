# Steps Component

> The Steps component is used to display the multiple steps of a task and indicate which step is currently active. It includes three components: `hy-steps` (a convenient data-driven wrapper), `hy-step-group` (steps container), and `hy-step-item` (step item); the latter two can be combined to deeply customize the content of each step.

## :pushpin:Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | -------------------- | ------------------- |
| ✔        | ✔   | ✔                    | ✔                   |

## :warning:Notes

::: warning Notes

- `hy-steps` quickly renders the steps by passing in a `list` dataset; when you need to customize each step, use the composable approach of `hy-step-group` combined with `hy-step-item`
- The `current` property is indexed starting from 0
- The `direction` property supports two directions: `row` (horizontal) and `column` (vertical)
- When an item in `list` has `error` set to `true` and that step is the current step, an error status is displayed; when `current` changes and the previous step is an error step, the component automatically jumps back to the first error step
- When the `status` property of `hy-step-item` is passed in, it overrides the status automatically calculated based on `current`
- When `hy-step-item` has no `title` passed, default text is displayed according to the status: Completed / Failed / In Progress / Not Started

:::

## :japanese_castle:Basic Usage Examples

### Basic Usage

Pass step data via `list`, and two-way bind the current step with `v-model:current`.

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

### Composable Usage (hy-step-group + hy-step-item)

When you need to customize the title, description, icon, or status of each step, use `hy-step-group` with `hy-step-item` and control the current progress via `current`.

```html
<template>
    <hy-step-group :current="current">
        <hy-step-item title="Sign Up" description="Fill in phone number and verify"></hy-step-item>
        <hy-step-item title="Complete Profile" description="Fill in name, avatar, and other information"></hy-step-item>
        <hy-step-item title="Log In" description="Registration successful"></hy-step-item>
    </hy-step-group>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(1);
</script>
```

### Vertical Mode

After setting `direction="column"`, steps are arranged vertically, which is suitable for displaying process details along with description information.

```html
<template>
    <hy-steps :list="list" direction="column"></hy-steps>

    <!-- Composable usage -->
    <hy-step-group :current="current" direction="column" style="margin-top: 30rpx">
        <hy-step-item title="Sign Up" description="Fill in phone number and verify"></hy-step-item>
        <hy-step-item title="Complete Profile" description="Fill in name, avatar, and other information"></hy-step-item>
        <hy-step-item title="Log In" description="Registration successful"></hy-step-item>
    </hy-step-group>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(1);
    const list = ref([
        { title: 'Ordered', docs: '2024-10-13', date: '10:30' },
        { title: 'Shipped', date: '2024-10-13' },
        { title: 'In Transit', docs: 'Expected delivery tomorrow', date: '2024-10-13' },
        { title: 'Delivered', date: '2024-10-14' },
    ]);
</script>
```

### Dot Mode

```html
<template>
    <hy-steps :list="list" dot></hy-steps>

    <!-- Composable usage -->
    <hy-step-group :current="current" dot style="margin-top: 30rpx">
        <hy-step-item title="Sign Up"></hy-step-item>
        <hy-step-item title="Complete Profile"></hy-step-item>
        <hy-step-item title="Log In"></hy-step-item>
    </hy-step-group>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(1);
    const list = ref([{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }]);
</script>
```

### Center Alignment

After setting `align-center`, the step content is horizontally centered; only effective for horizontal step bars.

```html
<template>
    <hy-steps :list="list" align-center></hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const list = ref([{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }]);
</script>
```

### Custom Colors

```html
<template>
    <hy-steps :list="list" activeColor="#4F8EF7" inactiveColor="#CCCCCC"></hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const list = ref([{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }]);
</script>
```

### Custom Icons

When `icon` is passed to `hy-step-item`, the indicator displays as an icon; the icon and indicator sizes can be controlled via the CSS variables `--hy-step-item-icon-size` and `--hy-step-item-indicator-size` (the `iconSize` property of `hy-steps` maps to these two variables).

```html
<template>
    <hy-step-group :current="current">
        <hy-step-item
            v-for="(item, i) in list"
            :key="i"
            :title="item.title"
            icon="check-circle"
        ></hy-step-item>
    </hy-step-group>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(1);
    const list = ref([{ title: 'Completed' }, { title: 'In Progress' }, { title: 'Not Started' }]);
</script>
```

### Error Status

After setting `error: true` on a `list` item, the error status is displayed when that step is the current step; with the composable approach, you can directly pass `status="error"` to `hy-step-item`.

```html
<template>
    <hy-steps :list="list" v-model:current="current" direction="column"></hy-steps>

    <!-- Composable usage -->
    <hy-step-group :current="current" direction="column">
        <hy-step-item title="Ordered" description="Order submitted successfully"></hy-step-item>
        <hy-step-item title="Paid" description="Payment amount: ¥199.00"></hy-step-item>
        <hy-step-item title="Delivery Failed" description="Item sold out" status="error"></hy-step-item>
        <hy-step-item title="Pending" description="Waiting for customer service"></hy-step-item>
    </hy-step-group>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(2);
    const list = ref([
        { title: 'Ordered', docs: 'Order submitted successfully', date: '2024-10-13' },
        { title: 'Paid', docs: 'Payment amount: ¥199.00', date: '2024-10-13' },
        { title: 'Delivery Failed', docs: 'Item sold out', date: '2024-10-14', error: true },
        { title: 'Pending', docs: 'Waiting for customer service', date: '' },
    ]);
</script>
```

### Dynamically Controlling the Current Step

```html
<template>
    <view>
        <hy-steps :list="list" v-model:current="current"></hy-steps>
        <view class="controls">
            <hy-button
                text="Previous"
                size="small"
                :disabled="current <= 0"
                @click="current--"
            ></hy-button>
            <hy-button
                text="Next"
                type="primary"
                size="small"
                :disabled="current >= list.length - 1"
                @click="current++"
            ></hy-button>
        </view>
    </view>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(0);
    const list = ref([{ title: 'Sign Up' }, { title: 'Fill in Basic Information' }, { title: 'Log In' }]);
</script>
```

### Custom Slots - Custom Icon

Replace the default indicator via the `icon` slot of `hy-step-item`.

```html
<template>
    <hy-step-group :current="current">
        <hy-step-item v-for="(item, i) in list" :key="i" :title="item.title">
            <template #icon>
                <view class="custom-icon">
                    <text v-if="i < current">{{ i + 1 }}</text>
                    <text v-else-if="i === current">●</text>
                    <text v-else>○</text>
                </view>
            </template>
        </hy-step-item>
    </hy-step-group>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(1);
    const list = ref([{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }]);
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
    }
</style>
```

### Custom Slots - Custom Title and Description

Customize the content structure via the `title` and `description` slots of `hy-step-item`.

```html
<template>
    <hy-step-group :current="current">
        <hy-step-item v-for="(item, i) in list" :key="i">
            <template #title>
                <view class="custom-title">
                    <text class="step-num">{{ i + 1 }}.</text>
                    <text>{{ item.title }}</text>
                </view>
            </template>
            <template #description>
                <view class="custom-desc" v-if="item.docs">
                    <text class="desc-text">{{ item.docs }}</text>
                    <text class="desc-date" v-if="item.date">{{ item.date }}</text>
                </view>
            </template>
        </hy-step-item>
    </hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(1);
    const list = ref([
        { title: 'Order Placed', docs: 'Order submitted successfully', date: '2024-10-13 10:30' },
        { title: 'Payment Complete', docs: 'Payment amount: ¥199.00', date: '2024-10-13 10:35' },
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

### Custom Slots - Custom Content

Use the `title` slot of `hy-step-item` to carry the complete content structure (title, status tag, description, date), suitable for vertical timeline scenarios.

```html
<template>
    <hy-step-group :current="current" direction="column">
        <hy-step-item v-for="(item, i) in list" :key="i">
            <template #title>
                <view class="custom-content">
                    <view class="content-header">
                        <text class="content-title">{{ item.title }}</text>
                        <text
                            :class="[
                                'status-tag',
                                i < current ? 'static-done' : '',
                                i === current ? 'static-active' : '',
                                i > current ? 'static-pending' : ''
                            ]"
                        >
                            {{
                                i < current ? 'Completed' : i === current ? 'In Progress' : 'Pending'
                            }}
                        </text>
                    </view>
                    <view class="content-info" v-if="item.docs">
                        <text>{{ item.docs }}</text>
                    </view>
                    <view class="content-date" v-if="item.date">
                        <text>{{ item.date }}</text>
                    </view>
                </view>
            </template>
        </hy-step-item>
    </hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(1);
    const list = ref([
        { title: 'User Registration', docs: 'Fill in phone number and verify', date: '2024-10-13 10:00' },
        { title: 'Complete Profile', docs: 'Fill in name, avatar, and other information', date: '2024-10-13 10:15' },
        { title: 'Email Verification', docs: 'Verify email validity', date: '2024-10-13 10:30' },
        { title: 'Done', docs: 'Registration successful', date: '' },
    ]);
</script>

<style lang="scss" scoped>
    .custom-content {
        padding: 16rpx;
        border-radius: 8rpx;
        background: #f5f6f8;

        .content-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .content-title {
            font-weight: 600;
            font-size: 28rpx;
        }

        .content-info {
            margin-top: 8rpx;
            font-size: 24rpx;
            color: #666;
        }

        .content-date {
            margin-top: 4rpx;
            font-size: 22rpx;
            color: #999;
        }

        .status-tag {
            font-size: 22rpx;
            padding: 4rpx 16rpx;
            border-radius: 20rpx;

            &.static-done {
                background: #f6ffed;
                color: #52c41a;
            }

            &.static-active {
                background: #e6f7ff;
                color: #1890ff;
            }

            &.static-pending {
                background: #f5f5f5;
                color: #999;
            }
        }
    }
</style>
```

### Custom Step Spacing

The `space` property of `hy-step-group` controls the spacing of each step, which is automatically distributed evenly by default; it represents width in horizontal mode and height in vertical mode.

```html
<template>
    <hy-step-group :current="current" space="200rpx">
        <hy-step-item title="Step 1" description="Fill in basic information"></hy-step-item>
        <hy-step-item title="Step 2" description="Confirm information"></hy-step-item>
        <hy-step-item title="Step 3" description="Done"></hy-step-item>
    </hy-step-group>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(1);
</script>
```

## API

### hy-steps Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| current | Current step index (starting from 0) | `number` | 0 |
| list | Steps dataset | `StepListVo[]` | [] |
| direction | Direction, `row`-horizontal, `column`-vertical | `string` | row |
| activeColor | Active state color, mapped to CSS variables related to in-progress/completed states | `string` | - |
| inactiveColor | Inactive state color, mapped to CSS variables for waiting-state text and connecting lines | `string` | - |
| dot | Whether to display dot style | `boolean` | false |
| alignCenter | Whether to horizontally center the steps, only effective for horizontal step bars | `boolean` | false |
| iconSize | Indicator and icon size, defaults to px for numeric values | `string` \| `number` | - |
| customStyle | External styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### hy-step-group Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| current | Current step index (starting from 0) | `number` | 0 |
| direction | Direction, `row`-horizontal, `column`-vertical | `string` | row |
| dot | Whether to display dot-style steps | `boolean` | false |
| space | Spacing between steps, automatically calculated by default | `string` | - |
| alignCenter | Whether to horizontally center the steps, only effective for horizontal step bars | `boolean` | false |
| activeColor | Active state color, mapped to CSS variables related to in-progress/completed states | `string` | - |
| inactiveColor | Inactive state color, mapped to CSS variables for waiting-state text and connecting lines | `string` | - |
| iconSize | Indicator and icon size, defaults to px for numeric values | `string` \| `number` | - |
| customStyle | Custom style | `CSSProperties` | {} |
| customClass | Custom class name | `string` | - |

### hy-step-item Props

| Parameter | Description | Type | Default |
| --------- | --------------------------------------------- | --------------- | ------ |
| title | Step title; when not passed, default text is displayed based on status | `string` | - |
| description | Step description | `string` | - |
| icon | Step icon; when passed, the indicator displays as an icon | `string` | - |
| status | Step status; when passed, overrides the status automatically calculated from `current` | `StepStatus` | - |
| customStyle | Custom style | `CSSProperties` | {} |
| customClass | Custom class name | `string` | - |

### List Item Structure

The fields of `list` data items (`StepListVo`) are as follows; `docs` and `date` are concatenated as the description text for display:

| Parameter | Description | Type | Default |
| --------- | ------------------------------------------- | --------- | ------ |
| title | Title | `string` | - |
| docs | Description information | `string` | - |
| date | Date and time | `string` | - |
| error | Whether it is an error state (effective when it is the current step) | `boolean` | - |

### hy-steps Events

| Event Name | Description | Callback Parameters |
| ---------- | ------------------------------------------- | ------------------- |
| change | Triggered when the step changes | `index: number` |
| update:current | Triggered when the step changes, used with `v-model:current` | `index: number` |

### Slots

`hy-steps` slots:

| Slot Name | Description | Received Values |
| --------- | ------------------------------------ | ------ |
| default | Custom content slot, only rendered when `list` is empty | - |

`hy-step-item` slots:

| Slot Name | Description | Received Values |
| --------- | ------------------ | ------ |
| icon | Custom indicator icon area | - |
| title | Custom step title | - |
| description | Custom step description | - |

## Typings

::: details Type Description

```ts
/** Step data item */
export interface StepListVo {
    /** Title */
    title?: string;
    /** Description */
    docs?: string;
    /** Date and time */
    date?: string;
    /** Whether it is an error */
    error?: boolean;
}

/**
 * Step status
 * finished: completed process: in progress error: failed wait: not started
 */
export type StepStatus = 'finished' | 'process' | 'error' | 'wait';
```

:::

### CSS Variables

Component styles are controlled via CSS variables on `hy-step-item`:

Indicator:

| Variable Name | Description | Default |
| --- | --- | --- |
| `--hy-step-item-indicator-size` | Width and height of the circular indicator | `18px` |
| `--hy-step-item-circle-radius` | Indicator border radius | Follows `--hy-radius-circle` |
| `--hy-step-item-circle-bg` | Waiting-state indicator background color | Follows `--hy-background--3` |
| `--hy-step-item-circle-process-bg` | In-progress indicator background color | Follows `--hy-primary` |
| `--hy-step-item-circle-text-color` | Waiting-state indicator text color | Follows `--hy-text-color--grey` |
| `--hy-step-item-circle-text-process-color` | In-progress indicator text color | `#ffffff` |
| `--hy-step-item-circle-text-finished-color` | Completed-state icon color | Follows `--hy-primary` |
| `--hy-step-item-circle-text-font-size` | Indicator text font size | `12px` |
| `--hy-step-item-icon-size` | Custom icon size | `18px` |
| `--hy-step-item-icon-color` | Waiting-state icon color | Follows `--hy-text-color--grey` |
| `--hy-step-item-icon-active-color` | Active-state icon color | Follows `--hy-primary` |
| `--hy-step-item-icon-error-color` | Failed-state icon color | Follows `--hy-error` |

Dot indicator:

| Variable Name | Description | Default |
| ------------------------------- | ----------------------- | ------------------------- |
| `--hy-step-item-dot-size` | Width and height of the dot indicator | `10px` |
| `--hy-step-item-dot-wait-bg` | Waiting-state dot background color | Follows `--hy-background--3` |
| `--hy-step-item-dot-process-bg` | In-progress/completed dot background color | Follows `--hy-primary` |
| `--hy-step-item-dot-error-bg` | Failed-state dot background color | Follows `--hy-error` |

Connecting line:

| Variable Name | Description | Default |
| ---------------------------------- | ------------------ | ------------------------- |
| `--hy-step-item-line-spacing` | Spacing between the connecting line and the indicator | `4px` |
| `--hy-step-item-line-height` | Connecting line thickness | `1px` |
| `--hy-step-item-line-color` | Default connecting line color | Follows `--hy-background--3` |
| `--hy-step-item-line-active-color` | Completed connecting line color | Follows `--hy-primary` |

Content area and text:

| Variable Name | Description | Default |
| --- | --- | --- |
| `--hy-step-item-content-margin-top` | Spacing between the content area and the header | `8px` |
| `--hy-step-item-vertical-content-margin-left` | Left margin of the content area in vertical layout | `32px` |
| `--hy-step-item-vertical-content-padding-bottom` | Bottom padding of the content area in vertical layout | `20px` |
| `--hy-step-item-vertical-header-dot-top` | Top offset of the dot indicator in vertical layout | `6px` |
| `--hy-step-item-title-font-size` | Title font size | Follows `--hy-font-size-base` |
| `--hy-step-item-title-font-weight` | Title font weight | Follows `--hy-font-weight-medium` |
| `--hy-step-item-title-color` | Default title color | Follows `--hy-text-color--2` |
| `--hy-step-item-title-active-color` | Active title color | Follows `--hy-primary` |
| `--hy-step-item-title-error-color` | Error title color | Follows `--hy-error` |
| `--hy-step-item-description-font-size` | Description font size | Follows `--hy-font-size-sm` |
| `--hy-step-item-description-color` | Description color | Follows `--hy-text-color--grey` |
| `--hy-step-item-description-margin-top` | Spacing between the description and the title | `4px` |

<demo-model url="pages-design/steps/steps"></demo-model>