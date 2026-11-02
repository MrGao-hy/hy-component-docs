# Popover Component

> Commonly used to display prompt messages.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage

::: warning Note

Currently, the popover container is given a fixed width and cannot adapt to its content, because an adaptive width cannot exceed the parent container's width.

:::

```html
<!-- 全局使用 -->
<hy-popover content="我是提示信息">
    <hy-button type="primary" :stop="false">按钮</hy-button>
</hy-popover>
```

### Popover Placement

- Set the popover position via `placement`
    - `top` popover at the top center
    - `top-start` popover at the top left
    - `top-end` popover at the top right
    - `bottom` popover at the bottom center
    - `bottom-start` popover at the bottom left
    - `bottom-end` popover at the bottom right
    - `left` popover at the left center
    - `left-start` popover at the left, upper side
    - `left-end` popover at the left, lower side
    - `right` popover at the right center
    - `right-start` popover at the right, upper side
    - `right-end` popover at the right, lower side

```html
<template>
    <hy-popover content="我是提示信息" placement="top">
        <hy-button type="primary" :stop="false">上面</hy-button>
    </hy-popover>
</template>
```

### Setting the Mode

::: tip Friendly Reminder

In normal mode, `content` must be set to a string; in menu mode, `content` must be set as an array.

:::

- Set `mode` to `normal`: normal mode
- Set `mode` to `menu`: menu mode

```html
<template>
    <hy-popover :content="menuList" mode="menu">
        <hy-button type="primary" :stop="false">菜单</hy-button>
    </hy-popover>
</template>

<script setup lang="ts">
    import { reactive } from 'vue';
    import { IconConfig } from 'hy-app';

    const menuList = reactive([
        {
            iconClass: IconConfig.REMIND,
            content: '全部标记已读',
        },
        {
            iconClass: IconConfig.DELETE,
            content: '清空最近会话',
        },
        {
            iconClass: IconConfig.SETTING,
            content: '消息订阅设置',
        },
        {
            iconClass: IconConfig.NOTICE,
            content: '消息异常检测',
        },
    ]);
</script>
```

### Popover Position

- Control the position by setting `offset`

```html
<template>
    <hy-popover content="我是提示信息" placement="top">
        <hy-button type="primary" :stop="false">上面</hy-button>
    </hy-popover>
</template>
```

### Slots

::: warn Tip

When using custom slot content, you need to add `width`, `background`, `z-index`, and `position` properties to the outermost element to prevent arrow style issues.

:::

```html
<template>
    <hy-popover>
        <template #content>
            <view class="pop-content">这是一段自定义样式的内容。</view>
        </template>
        <hy-button type="primary" :stop="false">上面</hy-button>
    </hy-popover>
</template>
```

```scss
.pop-content {
    /* 必填 开始 */
    width: 150px;
    background: #fff;
    z-index: 999;
    position: relative;
    /* 必填 结束 */
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
        <hy-popover content="我是提示信息" placement="top">
            <hy-button type="primary" :stop="false">上面</hy-button>
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

| Parameter | Description                                        | Type                | Default |
| --------- | -------------------------------------------------- | ------------------- | ------- |
| v-model   | Whether the popover is visible (manual state)      | `boolean`           | false   |
| content   | Content to display                                 | `string` \| `Array` | -       |
| mode      | Current display mode, determines how content is rendered | `normal` \| `menu`  | normal  |
| placement | Position of the popover[^1]                        | `string`            | bottom  |
| disabled  | Whether the popover is disabled                    | `boolean`           | false   |
| offset    | Offset of the position                             | `number`            | 0       |

### Methods

| Event Name | Description                       | Callback Parameters |
| ---------- | --------------------------------- | ------------------- |
| open       | Event fired when the tooltip opens  | -                   |
| close      | Event fired when the tooltip closes | -                   |

### Slots

| Slot Name | Description                    | Accepted Value |
| --------- | ------------------------------ | -------------- |
| default   | Default slot                   | -              |
| content   | Custom content inside the popover | -           |

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-popover-z-index` | Stacking level | `998` |
| `--hy-popover-icon-size` | Icon size | `18px` |
| `--hy-popover-menu-padding` | Menu padding | `20rpx 0` |
| `--hy-popover-min-height` | Minimum height | `36px` |
| `--hy-popover-width` | Width | `200px` |
| `--hy-popover-line-height` | Line height | `22px` |
| `--hy-popover-radius` | Popover/menu border radius | Follows `--hy-radius-sm` (8rpx) |
| `--hy-popover-border` | Menu row divider | Follows `--hy-border-line` |

[^1]: `left-top`: top-left; `left-bottom`: bottom-left; `right-top`: top-right; `right-bottom`: bottom-right; `left-center`: center-left; `right-center`: center-right; `top-center`: top-center; `bottom-center`: bottom-center;

<demo-model url="pages-design/popover/popover"></demo-model>