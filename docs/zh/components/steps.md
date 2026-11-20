# Steps 步骤条组件

> 步骤条组件，用于展示任务的多个步骤，标识当前处于哪一步。包含三个组件：`hy-steps`（数据驱动的便捷封装）、`hy-step-group`（步骤容器）与 `hy-step-item`（步骤项），后两者组合使用可深度定制每个步骤的内容。

## :pushpin:平台差异说明

| APP(vue) | H5  | 微信小程序 | 支付宝小程序 |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :warning:注意事项

::: warning 注意事项

- `hy-steps` 通过传入 `list` 数据集快速渲染步骤条；需要自定义每个步骤时，使用 `hy-step-group` 搭配 `hy-step-item` 的组合式写法
- `current` 属性从 0 开始索引
- `direction` 属性支持 `row`（横向）和 `column`（竖向）两种方向
- `list` 项中 `error` 为 `true` 且该步骤为当前步骤时会显示错误状态；当 `current` 变化后上一步为错误步骤时，组件会自动回跳到首个错误步骤
- `hy-step-item` 的 `status` 属性传入后，会覆盖根据 `current` 自动计算的状态
- `hy-step-item` 未传 `title` 时，按状态显示默认文案：已完成 / 失败 / 进行中 / 未开始

:::

## :japanese_castle:基本使用示例

### 基础用法

通过 `list` 传入步骤数据，`v-model:current` 双向绑定当前步骤。

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

### 组合式用法（hy-step-group + hy-step-item）

需要自定义每个步骤的标题、描述、图标、状态时，使用 `hy-step-group` 搭配 `hy-step-item`，通过 `current` 控制当前进度。

```html
<template>
    <hy-step-group :current="current">
        <hy-step-item title="注册用户" description="填写手机号并验证"></hy-step-item>
        <hy-step-item title="完善资料" description="填写姓名、头像等信息"></hy-step-item>
        <hy-step-item title="登录" description="注册成功"></hy-step-item>
    </hy-step-group>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(1);
</script>
```

### 竖向模式

设置 `direction="column"` 后步骤纵向排列，适合搭配描述信息展示流程详情。

```html
<template>
    <hy-steps :list="list" direction="column"></hy-steps>

    <!-- 组合式写法 -->
    <hy-step-group :current="current" direction="column" style="margin-top: 30rpx">
        <hy-step-item title="注册用户" description="填写手机号并验证"></hy-step-item>
        <hy-step-item title="完善资料" description="填写姓名、头像等信息"></hy-step-item>
        <hy-step-item title="登录" description="注册成功"></hy-step-item>
    </hy-step-group>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(1);
    const list = ref([
        { title: '已下单', docs: '2024-10-13', date: '10:30' },
        { title: '已发货', date: '2024-10-13' },
        { title: '运输中', docs: '预计明天送达', date: '2024-10-13' },
        { title: '已签收', date: '2024-10-14' },
    ]);
</script>
```

### 点状模式

```html
<template>
    <hy-steps :list="list" dot></hy-steps>

    <!-- 组合式写法 -->
    <hy-step-group :current="current" dot style="margin-top: 30rpx">
        <hy-step-item title="注册用户"></hy-step-item>
        <hy-step-item title="完善资料"></hy-step-item>
        <hy-step-item title="登录"></hy-step-item>
    </hy-step-group>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(1);
    const list = ref([{ title: '步骤一' }, { title: '步骤二' }, { title: '步骤三' }]);
</script>
```

### 居中对齐

设置 `align-center` 后步骤内容水平居中，只对横向步骤条有效。

```html
<template>
    <hy-steps :list="list" align-center></hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const list = ref([{ title: '步骤一' }, { title: '步骤二' }, { title: '步骤三' }]);
</script>
```

### 自定义颜色

```html
<template>
    <hy-steps :list="list" activeColor="#4F8EF7" inactiveColor="#CCCCCC"></hy-steps>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const list = ref([{ title: '步骤一' }, { title: '步骤二' }, { title: '步骤三' }]);
</script>
```

### 自定义图标

`hy-step-item` 传入 `icon` 后，指示器显示为图标；图标与指示器尺寸可通过 CSS 变量 `--hy-step-item-icon-size`、`--hy-step-item-indicator-size` 控制（`hy-steps` 的 `iconSize` 属性即映射为这两个变量）。

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
    const list = ref([{ title: '已完成' }, { title: '进行中' }, { title: '未开始' }]);
</script>
```

### 错误状态

`list` 项设置 `error: true` 后，该步骤为当前步骤时显示错误状态；组合式写法可直接给 `hy-step-item` 传 `status="error"`。

```html
<template>
    <hy-steps :list="list" v-model:current="current" direction="column"></hy-steps>

    <!-- 组合式写法 -->
    <hy-step-group :current="current" direction="column">
        <hy-step-item title="已下单" description="订单已成功提交"></hy-step-item>
        <hy-step-item title="已支付" description="支付金额：¥199.00"></hy-step-item>
        <hy-step-item title="发货失败" description="商品已售罄" status="error"></hy-step-item>
        <hy-step-item title="待处理" description="等待客服介入"></hy-step-item>
    </hy-step-group>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(2);
    const list = ref([
        { title: '已下单', docs: '订单已成功提交', date: '2024-10-13' },
        { title: '已支付', docs: '支付金额：¥199.00', date: '2024-10-13' },
        { title: '发货失败', docs: '商品已售罄', date: '2024-10-14', error: true },
        { title: '待处理', docs: '等待客服介入', date: '' },
    ]);
</script>
```

### 动态控制当前步骤

```html
<template>
    <view>
        <hy-steps :list="list" v-model:current="current"></hy-steps>
        <view class="controls">
            <hy-button
                text="上一步"
                size="small"
                :disabled="current <= 0"
                @click="current--"
            ></hy-button>
            <hy-button
                text="下一步"
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
    const list = ref([{ title: '注册用户' }, { title: '填写基本信息' }, { title: '登录' }]);
</script>
```

### 自定义插槽 - 自定义图标

通过 `hy-step-item` 的 `icon` 插槽替换默认指示器。

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
    }
</style>
```

### 自定义插槽 - 自定义标题和描述

通过 `hy-step-item` 的 `title`、`description` 插槽自定义内容结构。

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

### 自定义插槽 - 自定义内容

通过 `hy-step-item` 的 `title` 插槽承载完整内容结构（标题、状态标签、描述、日期），适合竖向时间轴场景。

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
                                i < current ? '已完成' : i === current ? '进行中' : '待开始'
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
        { title: '用户注册', docs: '填写手机号并验证', date: '2024-10-13 10:00' },
        { title: '完善资料', docs: '填写姓名、头像等信息', date: '2024-10-13 10:15' },
        { title: '邮箱验证', docs: '验证邮箱有效性', date: '2024-10-13 10:30' },
        { title: '完成', docs: '注册成功', date: '' },
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

### 自定义步骤间距

`hy-step-group` 的 `space` 属性控制每个步骤的间距，默认自动平分；横向时为宽度，竖向时为高度。

```html
<template>
    <hy-step-group :current="current" space="200rpx">
        <hy-step-item title="步骤一" description="填写基本信息"></hy-step-item>
        <hy-step-item title="步骤二" description="确认信息"></hy-step-item>
        <hy-step-item title="步骤三" description="完成"></hy-step-item>
    </hy-step-group>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const current = ref(1);
</script>
```

## API

### hy-steps Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前步骤索引（从 0 开始） | `number` | 0 |
| list | 步骤条数据集 | `StepListVo[]` | [] |
| direction | 方向，`row`-横向，`column`-竖向 | `string` | row |
| activeColor | 激活状态颜色，映射为进行中/已完成相关 CSS 变量 | `string` | - |
| inactiveColor | 未激活状态颜色，映射为等待态文字与连接线 CSS 变量 | `string` | - |
| dot | 是否显示点状样式 | `boolean` | false |
| alignCenter | 是否将步骤条水平居中显示，只对横向步骤条有效 | `boolean` | false |
| iconSize | 指示器与图标大小，数值默认单位 px | `string` \| `number` | - |
| customStyle | 定义需要用到的外部样式 | `CSSProperties` | - |
| customClass | 自定义外部类名 | `string` | - |

### hy-step-group Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前步骤索引（从 0 开始） | `number` | 0 |
| direction | 方向，`row`-横向，`column`-竖向 | `string` | row |
| dot | 是否为点状步骤条样式 | `boolean` | false |
| space | 步骤条之间的间距，默认自动计算 | `string` | - |
| alignCenter | 是否将步骤条水平居中显示，只对横向步骤条有效 | `boolean` | false |
| activeColor | 激活状态颜色，映射为进行中/已完成相关 CSS 变量 | `string` | - |
| inactiveColor | 未激活状态颜色，映射为等待态文字与连接线 CSS 变量 | `string` | - |
| iconSize | 指示器与图标大小，数值默认单位 px | `string` \| `number` | - |
| customStyle | 自定义样式 | `CSSProperties` | {} |
| customClass | 自定义类名 | `string` | - |

### hy-step-item Props

| 参数        | 说明                                              | 类型            | 默认值 |
| ----------- | ------------------------------------------------- | --------------- | ------ |
| title       | 步骤标题，不传时根据状态显示默认文案              | `string`        | -      |
| description | 步骤描述                                          | `string`        | -      |
| icon        | 步骤图标，传入后指示器显示为图标                  | `string`        | -      |
| status      | 步骤状态，传入后覆盖根据 `current` 自动计算的状态 | `StepStatus`    | -      |
| customStyle | 自定义样式                                        | `CSSProperties` | {}     |
| customClass | 自定义类名                                        | `string`        | -      |

### List Item 结构

`list` 数据项（`StepListVo`）字段如下，`docs` 与 `date` 会拼接为描述文案展示：

| 参数  | 说明                             | 类型      | 默认值 |
| ----- | -------------------------------- | --------- | ------ |
| title | 标题                             | `string`  | -      |
| docs  | 描述信息                         | `string`  | -      |
| date  | 日期时间                         | `string`  | -      |
| error | 是否为错误状态（当前步骤时生效） | `boolean` | -      |

### hy-steps Events

| 事件名         | 说明                                        | 回调参数        |
| -------------- | ------------------------------------------- | --------------- |
| change         | 步骤改变时触发                              | `index: number` |
| update:current | 步骤改变时触发，配合 `v-model:current` 使用 | `index: number` |

### Slots

`hy-steps` 插槽：

| 插槽名  | 说明                                 | 接收值 |
| ------- | ------------------------------------ | ------ |
| default | 自定义内容插槽，仅 `list` 为空时渲染 | -      |

`hy-step-item` 插槽：

| 插槽名      | 说明               | 接收值 |
| ----------- | ------------------ | ------ |
| icon        | 自定义指示器图标区 | -      |
| title       | 自定义步骤标题     | -      |
| description | 自定义步骤描述     | -      |

## Typings

::: details 类型说明

```ts
/** 步骤条数据项 */
export interface StepListVo {
    /** 标题 */
    title?: string;
    /** 描述 */
    docs?: string;
    /** 时间日期 */
    date?: string;
    /** 是否错误 */
    error?: boolean;
}

/**
 * 步骤状态
 * finished: 已完成 process: 进行中 error: 失败 wait: 未开始
 */
export type StepStatus = 'finished' | 'process' | 'error' | 'wait';
```

:::

### CSS 变量

组件样式基于 `hy-step-item` 的 CSS 变量控制：

指示器：

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| `--hy-step-item-indicator-size` | 圆形指示器宽高 | `18px` |
| `--hy-step-item-circle-radius` | 指示器圆角 | 跟随 `--hy-radius-circle` |
| `--hy-step-item-circle-bg` | 等待状态指示器背景色 | 跟随 `--hy-background--3` |
| `--hy-step-item-circle-process-bg` | 进行中状态指示器背景色 | 跟随 `--hy-primary` |
| `--hy-step-item-circle-text-color` | 等待状态指示器文字颜色 | 跟随 `--hy-text-color--grey` |
| `--hy-step-item-circle-text-process-color` | 进行中状态指示器文字颜色 | `#ffffff` |
| `--hy-step-item-circle-text-finished-color` | 已完成状态图标颜色 | 跟随 `--hy-primary` |
| `--hy-step-item-circle-text-font-size` | 指示器文字字号 | `12px` |
| `--hy-step-item-icon-size` | 自定义图标大小 | `18px` |
| `--hy-step-item-icon-color` | 等待状态图标颜色 | 跟随 `--hy-text-color--grey` |
| `--hy-step-item-icon-active-color` | 激活状态图标颜色 | 跟随 `--hy-primary` |
| `--hy-step-item-icon-error-color` | 失败状态图标颜色 | 跟随 `--hy-error` |

点状指示器：

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| `--hy-step-item-dot-size` | 点状指示器宽高 | `10px` |
| `--hy-step-item-dot-wait-bg` | 等待状态圆点背景色 | 跟随 `--hy-background--3` |
| `--hy-step-item-dot-process-bg` | 进行中/已完成圆点背景色 | 跟随 `--hy-primary` |
| `--hy-step-item-dot-process-ring-color` | 进行中状态描边颜色 | 跟随 `--hy-primary-disabled` |
| `--hy-step-item-dot-finished-bg` | 已完成状态背景色 | 跟随 `--hy-primary-light` |
| `--hy-step-item-dot-finished-ring-color` | 已完成状态描边颜色 | 跟随 `--hy-primary` |
| `--hy-step-item-dot-error-bg` | 失败状态圆点背景色 | 跟随 `--hy-error` |

连接线：

| 变量名                             | 说明               | 默认值                    |
| ---------------------------------- | ------------------ | ------------------------- |
| `--hy-step-item-line-spacing`      | 连接线与指示器间距 | `4px`                     |
| `--hy-step-item-line-height`       | 连接线粗细         | `1px`                     |
| `--hy-step-item-line-color`        | 连接线默认颜色     | 跟随 `--hy-background--3` |
| `--hy-step-item-line-active-color` | 已完成连接线颜色   | 跟随 `--hy-primary`       |

内容区与文字：

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| `--hy-step-item-content-margin-top` | 内容区距头部间距 | `8px` |
| `--hy-step-item-vertical-content-margin-left` | 垂直布局内容区左边距 | `32px` |
| `--hy-step-item-vertical-content-padding-bottom` | 垂直布局内容区下边距 | `20px` |
| `--hy-step-item-vertical-header-dot-top` | 垂直布局点状指示器顶部偏移 | `6px` |
| `--hy-step-item-title-font-size` | 标题字号 | 跟随 `--hy-font-size-base` |
| `--hy-step-item-title-font-weight` | 标题字重 | 跟随 `--hy-font-weight-medium` |
| `--hy-step-item-title-color` | 标题默认颜色 | 跟随 `--hy-text-color--2` |
| `--hy-step-item-title-active-color` | 标题激活颜色 | 跟随 `--hy-primary` |
| `--hy-step-item-title-error-color` | 标题失败颜色 | 跟随 `--hy-error` |
| `--hy-step-item-description-font-size` | 描述字号 | 跟随 `--hy-font-size-sm` |
| `--hy-step-item-description-color` | 描述颜色 | 跟随 `--hy-text-color--grey` |
| `--hy-step-item-description-margin-top` | 描述距标题间距 | `4px` |

<demo-model url="pages-design/steps/steps"></demo-model>
