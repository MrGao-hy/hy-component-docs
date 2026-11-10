# Popover Component

> Commonly used to display hint messages.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Examples

::: warning Note

Currently, the popover container uses a fixed width and cannot auto-adapt, because an auto-adaptive width cannot exceed the parent container's width.

:::

```html
<!-- Global usage -->
<hy-popover content="This is a hint message">
    <hy-button type="primary" :stop="false">Button</hy-button>
</hy-popover>
```

### Popover Placement

- Set the popover position via `placement`
    - `top`: popover at the top center
    - `top-start`: popover at the top left
    - `top-end`: popover at the top right
    - `bottom`: popover at the bottom center
    - `bottom-start`: popover at the bottom left
    - `bottom-end`: popover at the bottom right
    - `left`: popover at the left center
    - `left-start`: popover at the left top
    - `left-end`: popover at the left bottom
    - `right`: popover at the right center
    - `right-start`: popover at the right top
    - `right-end`: popover at the right bottom

```html
<template>
    <hy-popover content="This is a hint message" placement="top">
        <hy-button type="primary" :stop="false">Top</hy-button>
    </hy-popover>
</template>
```

### Mode Setting

::: tip Tip

In normal mode, `content` must be set to a string; in menu mode, `content` must be set as an array.

:::

- Set `mode` to `normal`: normal mode
- Set `mode` to `menu`: menu mode

```html
<template>
    <hy-popover :content="menuList" mode="menu">
        <hy-button type="primary" :stop="false">Menu</hy-button>
    </hy-popover>
</template>

<script setup lang="ts">
    import { reactive } from 'vue';
    import { IconConfig } from 'hy-app';

    const menuList = reactive([
        {
            iconClass: IconConfig.REMIND,
            content: 'Mark all as read',
        },
        {
            iconClass: IconConfig.DELETE,
            content: 'Clear recent conversations',
        },
        {
            iconClass: IconConfig.SETTING,
            content: 'Message subscription settings',
        },
        {
            iconClass: IconConfig.NOTICE,
            content: 'Message anomaly detection',
        },
    ]);
</script>
```

### Popover Position

- Control the position by setting `offset`

```html
<template>
    <hy-popover content="This is a hint message" placement="top">
        <hy-button type="primary" :stop="false">Top</hy-button>
    </hy-popover>
</template>
```

### Slots

::: warn Tip

When using custom slot content, you need to add `width`, `background`, `z-index`, and `position` properties to the outermost element to prevent badge styling issues.

:::

```html
<template>
    <hy-popover>
        <template #content>
            <view class="pop-content">This is a piece of content with custom styling.</view>
        </template>
        <hy-button type="primary" :stop="false">Top</hy-button>
    </hy-popover>
</template>
```

```scss
.pop-content {
    /* Required - start */
    width: 150px;
    background: #fff;
    z-index: 999;
    position: relative;
    /* Required - end */
    color: #8268de;
    font-weight: bolder;
    padding: 10px;
    border-radius: 4px;
}
```

### Closing the Popover on the Page

```html
<template>
    <view style="height: 800px; width: 300px" @tap="closeOutside">
        <hy-popover content="This is a hint message" placement="top">
            <hy-button type="primary" :stop="false">Top</hy-button>
        </hy-popover>
    </view>
</template>
```

```ts
import { useQueue } from 'hy-app';

const { closeOutside } = useQueue();
```

## API

### Popover Props

| Parameter | Description                                          | Type                | Default |
| --------- | ---------------------------------------------------- | ------------------- | ------- |
| v-model   | Whether it is visible (manual state)                 | `boolean`           | false   |
| content   | Content to display                                   | `string` \| `Array` | -       |
| mode      | Current display mode, determines how content renders | `normal` \| `menu`  | normal  |
| placement | Position where the popover appears[^1]               | `string`            | bottom  |
| disabled  | Whether the popover is available                     | `boolean`           | false   |
| offset    | Offset of the appearing position                     | `number`            | 0       |

### Methods

| Name  | Description                             | Callback Parameters |
| ----- | --------------------------------------- | ------------------- |
| open  | Event to open the tooltip popup         | -                   |
| close | Event to close the tooltip popup        | -                   |

### Slots

| Slot Name | Description                       | Value Received |
| --------- | --------------------------------- | -------------- |
| default   | Default slot                      | -              |
| content   | Custom content inside the popover | -              |

### CSS Variables

| Variable                    | Description                | Default                        |
| --------------------------- | -------------------------- | ------------------------------ |
| `--hy-popover-z-index`      | Z-index level              | `998`                          |
| `--hy-popover-icon-size`    | Icon size                  | `18px`                         |
| `--hy-popover-menu-padding` | Menu padding               | `20rpx 0`                      |
| `--hy-popover-min-height`   | Minimum height             | `36px`                         |
| `--hy-popover-width`        | Width                      | `200px`                        |
| `--hy-popover-line-height`  | Line height                | `22px`                         |
| `--hy-popover-radius`       | Popover/menu border radius | Follows `--hy-radius-sm` (8rpx) |
| `--hy-popover-border`       | Menu row divider           | Follows `--hy-border-line`     |

[^1]: `left-top`: top-left; `left-bottom`: bottom-left; `right-top`: top-right; `right-bottom`: bottom-right; `left-center`: middle-left; `right-center`: middle-right; `top-center`: top-center; `bottom-center`: bottom-center;

<demo-model url="pages-design/popover/popover"></demo-model>