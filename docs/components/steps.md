# Steps 步骤条组件

> 步骤条组件，用于展示任务的多个步骤，标识当前处于哪一步。

## :pushpin:平台差异说明

| APP(vue) | H5  | 微信小程序 | 支付宝小程序 |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :warning:注意事项

:::warning 注意事项
- `list` 属性是必填项，数组项必须包含 `title` 字段
- `current` 属性从 0 开始索引
- `direction` 属性支持 `row`（横向）和 `column`（竖向）两种方向
- `list` 项中 `error` 为 `true` 时会显示错误状态
:::

## :japanese_castle:基本使用示例

### 基础用法

```html
<template>
    <hy-steps :list="list" v-model:current="current"></hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const current = ref(1)
    const list = ref([
        { title: '已下单', docs: '2024-10-13' },
        { title: '已发货', docs: '2024-10-13' },
        { title: '发货失败', docs: '2024-10-14', error: true }
    ])
</script>
```

### 横向模式（默认）

```html
<template>
    <hy-steps :list="list" direction="row"></hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const list = ref([{ title: '步骤一' }, { title: '步骤二' }, { title: '步骤三' }])
</script>
```

### 竖向模式

```html
<template>
    <hy-steps :list="list" direction="column"></hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const list = ref([
        { title: '已下单', docs: '2024-10-13', date: '10:30' },
        { title: '已发货', docs: '快递员正在打包', date: '14:20' },
        { title: '运输中', docs: '预计明天送达', date: '16:00' }
    ])
</script>
```

### 点状模式

```html
<template>
    <hy-steps :list="list" dot></hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const list = ref([{ title: '步骤一' }, { title: '步骤二' }, { title: '步骤三' }])
</script>
```

### 自定义颜色

```html
<template>
    <hy-steps :list="list" activeColor="#4F8EF7" inactiveColor="#CCCCCC"></hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const list = ref([{ title: '步骤一' }, { title: '步骤二' }, { title: '步骤三' }])
</script>
```

### 自定义图标

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
    import { ref } from 'vue'

    const list = ref([{ title: '已完成' }, { title: '进行中' }, { title: '未开始' }])
</script>
```

### 错误状态

```html
<template>
    <hy-steps :list="list" v-model:current="current"></hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const current = ref(2)
    const list = ref([
        { title: '步骤一', docs: '已完成', date: '2024-10-13' },
        { title: '步骤二', docs: '已完成', date: '2024-10-13' },
        { title: '步骤三', docs: '执行失败', date: '2024-10-14', error: true },
        { title: '步骤四', docs: '未开始', date: '' }
    ])
</script>
```

### 动态控制当前步骤

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
    import { ref } from 'vue'

    const current = ref(0)
    const list = ref([{ title: '注册用户' }, { title: '填写基本信息' }, { title: '登录' }])
</script>
```

### 自定义插槽 - 自定义图标

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
    import { ref } from 'vue'

    const current = ref(1)
    const list = ref([{ title: '步骤一' }, { title: '步骤二' }, { title: '步骤三' }])
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

### 自定义插槽 - 自定义标题和描述

```html
<template>
    <hy-steps :list="list" v-model:current="current">
        <template #title="{ title, index }">
            <view class="custom-title">
                <text class="step-num">{{ index + 1 }}.</text>
                <text>{{ title }}</text>
            </view>
        </template>
        <template #desc="{ docs, date }">
            <view class="custom-desc" v-if="docs">
                <text class="desc-text">{{ docs }}</text>
                <text class="desc-date" v-if="date">{{ date }}</text>
            </view>
        </template>
    </hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const current = ref(1)
    const list = ref([
        { title: '订单提交', docs: '订单已成功提交', date: '2024-10-13 10:30' },
        { title: '支付完成', docs: '支付金额：¥199.00', date: '2024-10-13 10:35' },
        { title: '订单发货', docs: '快递单号：SF1234567890', date: '2024-10-13 14:00' }
    ])
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

### 自定义插槽 - 自定义内容

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
    import { ref } from 'vue'

    const current = ref(1)
    const list = ref([
        { title: '用户注册', docs: '填写手机号并验证' },
        { title: '完善资料', docs: '填写姓名、头像等信息' },
        { title: '完成', docs: '注册成功' }
    ])
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

| 参数            | 说明                      | 类型                   | 默认值   |
|---------------|-------------------------|----------------------|-------|
| current       | 当前步骤索引（从0开始）            | `number`             | 0     |
| list          | 步骤条数据集合                 | `StepListVo[]`       | []    |
| direction     | 方向，`row`-横向，`column`-竖向 | `string`             | row   |
| activeColor   | 激活状态颜色                  | `string`             | -     |
| inactiveColor | 未激活状态颜色                 | `string`             | -     |
| activeIcon    | 激活状态的图标                 | `string`             | -     |
| inactiveIcon  | 未激活状态图标                 | `string`             | -     |
| dot           | 是否显示点状样式                | `boolean`            | false |
| iconSize      | 图标大小                    | `string` \| `number` | 17    |

### List Item 结构

| 参数    | 说明      | 类型        | 默认值 |
|-------|---------|-----------|-----|
| title | 标题      | `string`  | -   |
| docs  | 描述信息    | `string`  | -   |
| date  | 日期时间    | `string`  | -   |
| error | 是否为错误状态 | `boolean` | -   |

### Events

| 事件名            | 说明      | 回调参数            |
|----------------|---------|-----------------|
| change         | 步骤改变时触发 | `index: number` |
| update:current | 步骤改变时触发 | `index: number` |

### Slots

| 插槽名  | 说明                   | 接收值                                          |
| ------- | ---------------------- | ----------------------------------------------- |
| icon    | 自定义步骤左侧图标     | `index: number`, `error: boolean`               |
| content | 自定义步骤右侧整体内容 | `item: StepListVo`, `index: number`             |
| title   | 自定义步骤标题         | `title: string`, `index: number`                |
| desc    | 自定义步骤描述         | `docs: string`, `date: string`, `index: number` |

## Typings

:::details 类型说明

```ts
export interface StepListVo {
    /** 标题 */
    title?: string
    /** 描述信息 */
    docs?: string
    /** 日期时间 */
    date?: string
    /** 是否为错误状态 */
    error?: boolean
}
```

:::

<demo-model url="pages-design/steps/steps"></demo-model>
