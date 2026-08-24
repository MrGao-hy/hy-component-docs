# Popover Component

> Commonly used to display hint information.

## :pushpin: Platform Difference Notes

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Example

::: warning Note

Currently, the bubble container is given a fixed width and cannot auto-fit its width, because an auto-fitting width cannot exceed the parent container's width

:::

```html
<!-- Global usage -->
<hy-popover content="I am a hint message">
    <hy-button type="primary" :stop="false">Button</hy-button>
</hy-popover>
```

### Popover Placement

- Set the bubble position via `placement`
    - `top`: bubble at the top-center position
    - `top-start`: bubble at the top-left position
    - `top-end`: bubble at the top-right position
    - `bottom`: bubble at the bottom-center position
    - `bottom-start`: bubble at the bottom-left position
    - `bottom-end`: bubble at the bottom-right position
    - `left`: bubble at the middle-left position
    - `left-start`: bubble at the upper-left position
    - `left-end`: bubble at the lower-left position
    - `right `: bubble at the middle-right position
    - `right-start`: bubble at the upper-right position
    - `right-end`: bubble at the lower-right position

```html
<template>
    <hy-popover content="I am a hint message" placement="top">
        <hy-button type="primary" :stop="false">Top</hy-button>
    </hy-popover>
</template>
```

### Setting the Mode

::: tip Friendly Reminder

In normal mode, `content` must be set to a string; in menu mode, `content` must be set as an array

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
            content: 'Message exception detection',
        },
    ]);
</script>
```

### Bubble Position

- Control the position via `offset`

```html
<template>
    <hy-popover content="I am a hint message" placement="top">
        <hy-button type="primary" :stop="false">Top</hy-button>
    </hy-popover>
</template>
```

### Slots

::: warn Tip

When using custom slot content, you need to add the `width`, `background`, `z-index`, and `position` properties to the outermost element to prevent arrow style issues

:::

```html
<template>
    <hy-popover>
        <template #content>
            <view class="pop-content">This is a piece of custom-styled content.</view>
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
        <hy-popover content="I am a hint message" placement="top">
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

| Parameter | Description                                      | Type                | Default |
| --------- | ------------------------------------------------ | ------------------- | ------- |
| v-model   | Whether manually visible                         | `boolean`           | false   |
| content   | Content to display                               | `string` \| `Array` | -       |
| mode      | Current display mode, determines content form    | `normal` \| `menu`  | normal  |
| placement | Popover placement[^1]                            | `string`            | bottom  |
| disabled  | Whether the popover is available                 | `boolean`           | false   |
| offset    | Offset of the popover position                   | `number`            | 0       |

### Methods

| Event Name | Description                            | Callback Parameters |
| ---------- | -------------------------------------- | ------------------- |
| open       | Event triggered when the tooltip opens | -                   |
| close      | Event triggered when the tooltip closes | -                  |

### Slots

| Slot Name | Description                       | Received Values |
| --------- | --------------------------------- | --------------- |
| default   | Default slot                      | -               |
| content   | Custom content inside the bubble  | -               |

<demo-model url="pages-design/popover/popover"></demo-model>

[^1]: `left-top`: top-left; `left-bottom`: bottom-left; `right-top`: top-right; `right-bottom`: bottom-right; `left-center`: middle-left; `right-center`: middle-right; `top-center`: top-center; `bottom-center`: bottom-center;