# Sticky Component

> `hy-sticky` is a high-performance, cross-platform sticky positioning component that pins elements to the top of the screen as the page scrolls. It leverages the IntersectionObserver API for high-performance monitoring and provides an elegant fallback solution to ensure compatibility across various platforms.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | -------------------- | ------------------- |
| ✔        | ✔   | ✔                    | ✔                   |

## Features

- ✅ Supports custom sticky offset
- ✅ Works with both regular page scrolling and `scroll-view`
- ✅ Automatically handles placeholder elements to prevent page jitter
- ✅ High-performance implementation, prioritizing IntersectionObserver
- ✅ Supports enable/disable control
- ✅ Supports sticky state change events

## :japanese_castle: Basic Usage Example

```vue
<template>
    <view class="demo">
        <view class="header">Page Header</view>

        <hy-sticky>
            <view class="sticky-header">This is a sticky element</view>
        </hy-sticky>

        <view class="content">Page content...</view>
    </view>
</template>

<style>
    .header {
        height: 100vh;
    }
    .sticky-header {
        height: 80rpx;
        background-color: #1989fa;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content {
        height: 100vh;
    }
</style>
```

### Custom Sticky Offset

```vue
<hy-sticky :offset-top="100">
  <view class="sticky-header">
    Sticky element 100px from the top
  </view>
</hy-sticky>
```

### Using Inside a scroll-view

```vue
<template>
    <scroll-view class="my-scroll-view" scroll-y style="height: 100vh;">
        <view class="header">Scroll container header</view>

        <hy-sticky scroll-selector="my-scroll-view">
            <view class="sticky-header">Sticky within a scroll-view</view>
        </hy-sticky>

        <view class="content">Scrolling content...</view>
    </scroll-view>
</template>
```

### Listening to Sticky State Changes

```vue
<template>
    <hy-sticky @change="handleChange">
        <view class="sticky-header">Current state: {{ isSticky ? 'Sticky' : 'Not sticky' }}</view>
    </hy-sticky>
</template>

<script setup>
    import { ref } from 'vue';

    const isSticky = ref(false);

    const handleChange = (fixed) => {
        isSticky.value = fixed;
        console.log('Sticky state changed:', fixed);
    };
</script>
```

### FAQ

::: tip Notes

1. When dynamic changes in page content cause the sticky element's height to change, call the `refresh` method to recalculate
2. When using inside a scroll-view, the `scrollSelector` property must be set correctly
3. For complex nested scrolling scenarios, more fine-grained control may be required
4. To use on the H5 platform, make sure the browser supports IntersectionObserver or use a polyfill

:::

#### 1. Not working in a custom scroll container?

Make sure the `scrollSelector` property is set correctly, specifying the class name of the scroll container (without the dot).

```vue
<scroll-view class="my-scroll-view" scroll-y>
  <hy-sticky scroll-selector="my-scroll-view">
    <!-- Content -->
  </hy-sticky>
</scroll-view>
```

#### 2. Page layout jitters after sticking?

The component automatically creates a placeholder element internally to avoid page jitter. If jitter still occurs, try manually calling the `refresh` method to recalculate the height.

```vue
<template>
    <hy-sticky ref="stickyRef">
        <view class="dynamic-content">
            <!-- Dynamic content -->
        </view>
    </hy-sticky>
</template>

<script setup>
    import { ref } from 'vue';

    const stickyRef = ref(null);

    // After dynamic content has finished loading
    const loadDynamicContent = async () => {
        await fetchData();
        // Refresh the component
        if (stickyRef.value) {
            await stickyRef.value.refresh();
        }
    };
</script>
```

## API

### Sticky Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| offsetTop | Offset from the top when sticky; the default unit is px for numeric values | `string`\|`number` | 0 |
| zIndex | z-index level when sticky | `string`\|`number` | 99 |
| enable | Whether to enable the sticky functionality | `boolean` | true |
| scrollSelector | When used inside a `scroll-view`, specifies the class name of the `scroll-view` (without the dot) | `string` | - |

### Events

| Event  | Description                        | Callback Parameters                            |
| ------ | ---------------------------------- | ---------------------------------------------- |
| change | Triggered when sticky state changes | isFixed: Boolean - Whether currently sticky |

### Methods

| Name    | Description                                                        | Parameters |
| ------- | ------------------------------------------------------------------ | ---------- |
| refresh | Refreshes the component state, typically used after content height changes | -          |

### Slots

| Slot    | Description   | Accepted Values |
| ------- | ------------- | --------------- |
| default | Sticky content | -               |

<demo-model url="pages-design/sticky/sticky"></demo-model>