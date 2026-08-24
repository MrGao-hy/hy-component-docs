# Subsection Component

> A subsection component used for single-select switching among multiple options.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :warning: Notes

::: warning Notes

- The `list` prop supports three forms: string array, number array, and object array
- Object array items use the `name` and `value` fields by default, which can be customized via `customKeys`
- The background color `bgColor` is effective when `mode` is `button`, but ineffective when `mode` is `subsection`
- The `current` prop sets the default selected index (starting from 0)
- When binding with `v-model`, the value is the `value` of the selected item (string or number)

:::

## :japanese_castle: Basic Usage Examples

### String Array Form

```html
<template>
    <hy-subsection :list="list" v-model="value"></hy-subsection>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref('Unpaid');
    const list = ['Unpaid', 'To Review', 'Paid'];
</script>
```

### Number Array Form

```html
<template>
    <hy-subsection :list="list" v-model="value"></hy-subsection>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref(0);
    const list = [0, 1, 2];
</script>
```

### Object Array Form

```html
<template>
    <hy-subsection :list="list" v-model="value"></hy-subsection>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref('all');
    const list = [
        { name: 'All', value: 'all' },
        { name: 'Unused', value: 'unused' },
        { name: 'Used', value: 'used' },
    ];
</script>
```

### Default Selected Item

```html
<template>
    <hy-subsection :list="list" v-model="value" :current="1"></hy-subsection>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref('To Review');
    const list = ['Unpaid', 'To Review', 'Paid'];
</script>
```

## Mode Selection

### Button Mode (Default)

```html
<template>
    <hy-subsection :list="list" v-model="value" mode="button"></hy-subsection>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref('Option 1');
    const list = ['Option 1', 'Option 2', 'Option 3'];
</script>
```

### Subsection Mode

```html
<template>
    <hy-subsection :list="list" v-model="value" mode="subsection"></hy-subsection>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref('Option 1');
    const list = ['Option 1', 'Option 2', 'Option 3'];
</script>
```

## Color Configuration

### Custom Active Color

```html
<template>
    <hy-subsection
        :list="list"
        v-model="value"
        activeColor="#f56c6c"
        mode="subsection"
    ></hy-subsection>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref('Unpaid');
    const list = ['Unpaid', 'To Review', 'Paid'];
</script>
```

### Custom Active and Inactive Colors

```html
<template>
    <hy-subsection
        :list="list"
        v-model="value"
        activeColor="#4F8EF7"
        inactiveColor="#999999"
        mode="subsection"
    ></hy-subsection>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref('Option 1');
    const list = ['Option 1', 'Option 2', 'Option 3'];
</script>
```

### Custom Background Color (Button Mode)

```html
<template>
    <hy-subsection :list="list" v-model="value" bgColor="#F5F5F5" mode="button"></hy-subsection>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref('Unpaid');
    const list = ['Unpaid', 'To Review', 'Paid'];
</script>
```

## Font Configuration

### Custom Font Size

```html
<template>
    <hy-subsection :list="list" v-model="value" :fontSize="14" mode="subsection"></hy-subsection>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref('Option 1');
    const list = ['Option 1', 'Option 2', 'Option 3'];
</script>
```

### Active Font Without Bold

```html
<template>
    <hy-subsection :list="list" v-model="value" :bold="false" mode="subsection"></hy-subsection>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref('Option 1');
    const list = ['Option 1', 'Option 2', 'Option 3'];
</script>
```

## Custom Keys

### Using customKeys to Customize Fields

```html
<template>
    <hy-subsection
        :list="list"
        v-model="value"
        :customKeys="{ name: 'title', value: 'id' }"
    ></hy-subsection>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref(1);
    const list = [
        { title: 'All', id: 1 },
        { title: 'Pending Payment', id: 2 },
        { title: 'Completed', id: 3 },
    ];
</script>
```

## Event Listening

### Listening for Option Changes

```html
<template>
    <view>
        <hy-subsection :list="list" v-model="value" @change="handleChange"></hy-subsection>
        <view class="current-value">Current selected: {{ value }}</view>
    </view>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref('Unpaid');
    const list = ['Unpaid', 'To Review', 'Paid'];

    const handleChange = (index: number) => {
        console.log('Selected index:', index);
        console.log('Selected value:', value.value);
    };
</script>

<style lang="scss" scoped>
    .current-value {
        margin-top: 20rpx;
        padding: 20rpx;
        background: #f5f5f5;
        border-radius: 8rpx;
    }
</style>
```

### Combined with Content Switching

```html
<template>
    <view>
        <hy-subsection :list="list" v-model="value" mode="subsection"></hy-subsection>
        <view class="content-box">
            <view v-if="value === 'all'">Show all content</view>
            <view v-else-if="value === 'unused'">Show unused content</view>
            <view v-else>Show used content</view>
        </view>
    </view>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref('all');
    const list = [
        { name: 'All', value: 'all' },
        { name: 'Unused', value: 'unused' },
        { name: 'Used', value: 'used' },
    ];
</script>

<style lang="scss" scoped>
    .content-box {
        padding: 30rpx;
        background: #fff;
    }
</style>
```

## API

### Subsection Props

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| modelValue / v-model | Value of the selected item | `string` \| `number` | - |
| current | Default selected index (starting from 0) | `number` | 0 |
| list | Array of options | `SubSectionVo[]` | [] |
| customKeys | Key-value mapping for list | `object` | { name: 'name', value: 'value' } |
| activeColor | Color when active | `string` | - |
| inactiveColor | Color when inactive | `string` | - |
| mode | Mode, `button` or `subsection` | `string` | button |
| fontSize | Font size, in px | `number` | 12 |
| bold | Whether the active option's font is bold | `boolean` | true |
| bgColor | Component background color (effective in button mode) | `string` | - |
| customStyle | External styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name        | Description                          | Callback Parameters       |
| ----------------- | ------------------------------------ | ------------------------- |
| change            | Triggered when the option changes    | `index: number`           |
| update:modelValue | Triggered when the value changes     | `value: string \| number` |

### Slots

| Slot Name | Description   | Received Value |
| --------- | ------------- | -------------- |
| default   | Default slot  | -              |

### Typings

::: details Type Description

```ts
export interface SubSectionItemVo extends AnyObject {
    /** Display text */
    name: string;
    /** Corresponding value */
    value: string | number;
    /** Extended fields */
    [key: string]: any;
}

export type SubSectionVo = string | number | SubSectionItemVo;
```

:::

<demo-model url="pages-design/subsection/subsection"></demo-model>