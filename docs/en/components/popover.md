# Popover Bubble Component

> Commonly used to display prompt information.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Example

::: warning Note

- Currently, the bubble container has a fixed width and cannot adapt its width automatically, because an adaptive width cannot exceed the parent container's width
- When wrapping `hy-button` with `hy-popover`, you need to add `stop="false"` to `hy-button`; otherwise, event propagation will be blocked, preventing the bubble from displaying

:::

```html
<!-- Global usage -->
<hy-popover content="I am a prompt message">
    <hy-button type="primary" :stop="false">Button</hy-button>
</hy-popover>
```

### Popover Placement Position

- Control the bubble position by setting `placement`
    - `top`: bubble at the top center position
    - `top-start`: bubble at the top left position
    - `top-end`: bubble at the top right position
    - `bottom`: bubble at the bottom center position
    - `bottom-start`: bubble at the bottom left position
    - `bottom-end`: bubble at the bottom right position
    - `left`: bubble at the left center position
    - `left-start`: bubble at the left top position
    - `left-end`: bubble at the left bottom position
    - `right `: bubble at the right center position
    - `right-start`: bubble at the right top position
    - `right-end`: bubble at the right bottom position

```html
<template>
    <hy-popover content="I am a prompt message" placement="top">
        <hy-button type="primary" :stop="false">Top</hy-button>
    </hy-popover>
</template>
```

### Setting the Mode

::: tip Tip

In normal mode, `content` must be set as a string; in menu mode, `content` must be set as an array

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

### Bubble Position

- Control the position by setting `offset`

```html
<template>
    <hy-popover content="I am a prompt message" placement="top">
        <hy-button type="primary" :stop="false">Top</hy-button>
    </hy-popover>
</template>
```

### Slots

::: warn Tip

When using custom slot content, you need to add the `width`, `background`, `z-index`, and `position` properties to the outermost element to prevent corner badge styling issues

:::

```html
<template>
    <hy-popover>
        <template #content>
            <view class="pop-content">This is a piece of custom styled content.</view>
        </template>
        <hy-button type="primary" :stop="false">Top</hy-button>
    </hy-popover>
</template>
```

```scss
.pop-content {
    /* Required - Start */
    width: 150px;
    background: #fff;
    z-index: 999;
    position: relative;
    /* Required - End */
    color: #8268de;
    font-weight: bolder;
    padding: 10px;
    border-radius: 4px;
}
```

### Closing the Bubble Popup on the Page

```html
<template>
    <view style="height: 800px; width: 300px" @tap="closeOutside">
        <hy-popover v-model="show" content="I am a prompt message" placement="top">
            <hy-button type="primary" :stop="false">Top</hy-button>
        </hy-popover>
    </view>
</template>
```

```ts
import { useQueue } from 'hy-app';

const { closeOutside } = useQueue();
const show = ref(false);
```

## API

### Popover Props

| Parameter   | Description                                          | Type                | Default |
| ----------- | ---------------------------------------------------- | ------------------- | ------- |
| v-model     | Whether manually visible                             | `boolean`           | false   |
| content     | Displayed content                                    | `string` \| `Array` | -       |
| mode        | Current display mode, determines how content is shown | `normal` \| `menu`  | normal  |
| placement   | The position where the popover appears[^1]           | `string`            | bottom  |
| disabled    | Whether the popover is enabled                       | `boolean`           | false   |
| offset      | Offset of the appearance position                    | `number`            | 0       |
| customClass | Custom external class name                           | `string`            | -       |
| customStyle | Defines external styles to be used                   | `CSSProperties`     | -       |
| showClose   | Whether to show the close button                     | `boolean`           | false   |

### Methods

| Event Name | Description                                    | Callback Parameters        |
| ---------- | ---------------------------------------------- | -------------------------- |
| open       | Event triggered when the tooltip popup opens   | -                          |
| close      | Event triggered when the tooltip popup closes  | -                          |
| change     | Triggered when the bubble state changes        | params: PopoverParamsVo    |
| menuClick  | Triggered when a menu item is clicked          | params: PopoverItemParamsVo |

### Slots

| Slot Name | Description                     | Accepted Value |
| --------- | ------------------------------- | -------------- |
| default   | Default slot                    | -              |
| content   | Custom content inside the bubble | -              |

### CSS Variables

| Variable Name                 | Description                          | Default                                |
| ----------------------------- | ------------------------------------ | -------------------------------------- |
| `--hy-popover-z-index`        | Z-index level                        | `998`                                  |
| `--hy-popover-icon-size`      | Icon size                            | `18px`                                 |
| `--hy-popover-menu-padding`   | Menu padding                         | `20rpx 0`                              |
| `--hy-popover-min-height`     | Minimum height                       | `36px`                                 |
| `--hy-popover-width`          | Width                                | `200px`                                |
| `--hy-popover-line-height`    | Line height                          | `22px`                                 |
| `--hy-popover-radius`         | Bubble/menu border radius            | Follows `--hy-radius-sm` (8rpx)        |
| `--hy-popover-border`         | Menu row divider                     | Follows `--hy-border-line`             |
| `--hy-popover-background`     | Popup bubble background color        | Follows `--hy-background--box`         |
| `--hy-popover-inner-padding`  | Custom content area padding          | Follows `--hy-border-margin-padding-base` |
| `--hy-popover-menu-padding-x` | Menu bubble horizontal padding       | Follows `--hy-border-margin-padding-base` |
| `--hy-popover-shadow-base`    | Base shadow                          | Follows `--hy-shadow-base`             |

[^1]: `left-top`: top-left; `left-bottom`: bottom-left; `right-top`: top-right; `right-bottom`: bottom-right; `left-center`: middle-left; `right-center`: middle-right; `top-center`: top-center; `bottom-center`: bottom-center;

<demo-model url="pages-design/popover/popover"></demo-model>