# Steps Component

> The Steps component is used to display multiple steps of a task and indicate which step is currently in progress.

## :pushpin:Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :warning:Notes

::: warning Notes

- The `list` property is required, and each item in the array must contain a `title` field
- The `current` property is indexed starting from 0
- The `direction` property supports two orientations: `row` (horizontal) and `column` (vertical)
- When `error` is `true` in a `list` item, an error state will be displayed

:::

## :japanese_castle:Basic Usage Examples

### Basic Usage

```html
<template>
    <hy-steps :list="list" v-model:current="current"></hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(1);
    const list = ref([
        { title: '已下单', docs: '2024-10-13' },
        { title: '已发货', docs: '2024-10-13' },
        { title: '发货失败', docs: '2024-10-14', error: true },
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

    const list = ref([{ title: '步骤一' }, { title: '步骤二' }, { title: '步骤三' }]);
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
        { title: '已下单', docs: '2024-10-13', date: '10:30' },
        { title: '已发货', docs: '快递员正在打包', date: '14:20' },
        { title: '运输中', docs: '预计明天送达', date: '16:00' },
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

    const list = ref([{ title: '步骤一' }, { title: '步骤二' }, { title: '步骤三' }]);
</script>
```

### Custom Colors

```html
<template>
    <hy-steps :list="list" activeColor="#4F8EF7" inactiveColor="#CCCCCC"></hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const list = ref([{ title: '步骤一' }, { title: '步骤二' }, { title: '步骤三' }]);
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

    const list = ref([{ title: '已完成' }, { title: '进行中' }, { title: '未开始' }]);
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
        { title: '步骤一', docs: '已完成', date: '2024-10-13' },
        { title: '步骤二', docs: '已完成', date: '2024-10-13' },
        { title: '步骤三', docs: '执行失败', date: '2024-10-14', error: true },
        { title: '步骤四', docs: '未开始', date: '' },
    ]);
</script>
```

### Dynamically Control the Current Step

```html
<template>
    <view>
        <hy-steps :list="list" v-model:current="current"></hy-steps>
        <view class="controls">
            <hy-button text="上一步" :disabled="current <= 0" @click="current--"></hy-button>
            <hy-button
                text="下一步"
                :disabled="current >= list.length - 1"
                @click="current++"
            ></hy-button>
        </view>
    </view>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(0);
    const list = ref([{ title: '注册用户' }, { title: '填写基本信息' }, { title: '登录' }]);
</script>
```

### Custom Slot - Custom Icon

```html
<template>
    <hy-steps :list="list" v-model:current="current">
        <template #icon="{ index, error }">
            <view class="custom-icon" :class="{ error }">
                <text v-if="index < current">{{ index + 1 }}</text>
                <text v-else-if="index === current">进行中</text>
                <text v-else>待开始</text>
            </view>
        </template>
    </hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(1);
    const list = ref([{ title: '步骤一' }, { title: '步骤二' }, { title: '步骤三' }]);
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
        { title: '订单提交', docs: '订单已成功提交', date: '2024-10-13 10:30' },
        { title: '支付完成', docs: '支付金额：¥199.00', date: '2024-10-13 10:35' },
        { title: '订单发货', docs: '快递单号：SF1234567890', date: '2024-10-13 14:00' },
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
                        {{ index < current ? '已完成' : index === current ? '进行中' : '待开始' }}
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
        { title: '用户注册', docs: '填写手机号并验证' },
        { title: '完善资料', docs: '填写姓名、头像等信息' },
        { title: '完成', docs: '注册成功' },
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

| Prop          | Description                                 | Type                 | Default |
| ------------- | ------------------------------------------- | -------------------- | ------- |
| current       | Current step index (starting from 0)        | `number`             | 0       |
| list          | Steps data array                            | `StepListVo[]`       | []      |
| direction     | Direction, `row`-horizontal, `column`-vertical | `string`          | row     |
| activeColor   | Active state color                          | `string`             | -       |
| inactiveColor | Inactive state color                        | `string`             | -       |
| activeIcon    | Icon for the active state                   | `string`             | -       |
| inactiveIcon  | Icon for the inactive state                 | `string`             | -       |
| dot           | Whether to display dot style                | `boolean`            | false   |
| iconSize      | Icon size, number values default to unit px | `string` \| `number` | 17      |

### List Item Structure

| Field | Description             | Type      | Default |
| ----- | ----------------------- | --------- | ------- |
| title | Title                   | `string`  | -       |
| docs  | Description             | `string`  | -       |
| date  | Date and time           | `string`  | -       |
| error | Whether it is an error state | `boolean` | -    |

### Events

| Event          | Description                     | Callback Parameters |
| -------------- | ------------------------------- | ------------------- |
| change         | Triggered when the step changes | `index: number`     |
| update:current | Triggered when the step changes | `index: number`     |

### Slots

| Slot    | Description                              | Received Values                                  |
| ------- | ---------------------------------------- | ------------------------------------------------ |
| icon    | Custom icon on the left of the step      | `index: number`, `error: boolean`                |
| content | Custom entire content on the right of the step | `item: StepListVo`, `index: number`         |
| title   | Custom step title                        | `title: string`, `index: number`                 |
| docs    | Custom step description                  | `docs: string`, `date: string`, `index: number`  |

## Typings

::: details Type Definitions

```ts
export interface StepListVo {
    /** 标题 */
    title?: string;
    /** 描述信息 */
    docs?: string;
    /** 日期时间 */
    date?: string;
    /** 是否为错误状态 */
    error?: boolean;
}
```

:::

### CSS Variables

| Variable                             | Description                  | Default                                |
| ------------------------------------ | ---------------------------- | -------------------------------------- |
| `--hy-steps-icon-size`               | Icon size                    | `20px`                                 |
| `--hy-steps-dot-size`                | Dot size                     | `10px`                                 |
| `--hy-steps-icon-text-font-size`     | Icon text font size          | `11px`                                 |
| `--hy-steps-title-font-size`         | Title font size              | `30rpx`                                |
| `--hy-steps-title-active-font-size`  | Active title font size       | `34rpx`                                |
| `--hy-steps-content-min-height`      | Content area minimum height  | `60px`                                 |
| `--hy-steps-icon-radius`             | Icon container border radius | Follows `--hy-radius-semicircle` (`100px`) |
| `--hy-steps-dot-radius`              | Dot border radius            | Follows `--hy-radius-circle` (`50%`)   |
| `--hy-steps-icon-text-color`         | Text color inside the icon   | Follows `--hy-text-color--grey`        |
| `--hy-steps-date-font-size`          | Date font size               | `24rpx`                                |
| `--hy-steps-date-color`              | Date color                   | `#999`                                 |
| `--hy-steps-icon-border`             | Icon container border        | Follows `--hy-border-line`             |

<demo-model url="pages-design/steps/steps"></demo-model>