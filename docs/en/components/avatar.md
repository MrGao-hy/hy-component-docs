# Avatar Component

> This component is generally used where avatars are displayed, such as in personal centers or user avatar displays on comment list pages.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :warning: Notes

::: warning Notes

1. Priority Order

Avatar content is displayed in the following priority order:

```
Slot > mpAvatar (Mini Program avatar) > icon > text > src (image)
```

2. size Parameter

`size` supports both string and number types:

```html
<!-- String preset values -->
<hy-avatar size="small"></hy-avatar>
<hy-avatar size="medium"></hy-avatar>
<hy-avatar size="large"></hy-avatar>

<!-- Number (unit: px) -->
<hy-avatar :size="40"></hy-avatar>
<hy-avatar :size="60"></hy-avatar>
```

3. randomBgColor Usage

When random background color is enabled, the avatar will randomly select from 20 preset colors:

```html
<hy-avatar text="Gao" random-bg-color></hy-avatar>
```

You can specify a specific color index (0-19) via `colorIndex`:

```html
<hy-avatar text="Gao" random-bg-color :color-index="5"></hy-avatar>
```

4. Mini Program Avatar

`mpAvatar` is only effective for WeChat, QQ, and Baidu Mini Programs; it automatically obtains the user's avatar:

```html
<hy-avatar mp-avatar></hy-avatar>
```

5. Default Avatar

When `src` fails to load, a built-in default avatar (base64 format) will be displayed; you can also customize it via `defaultUrl`:

```html
<hy-avatar src="xxx" default-url="https://xxx.png"></hy-avatar>
```

:::

## :japanese_castle: Basic Usage Examples

```html
<template>
    <!-- Image avatar -->
    <hy-avatar src="https://pic1.imgdb.cn/item/67628833d0e0a243d4e5d22b.webp"></hy-avatar>

    <!-- Text avatar -->
    <hy-avatar text="Gao"></hy-avatar>

    <!-- Icon avatar -->
    <hy-avatar :icon="IconConfig.MINE"></hy-avatar>
</template>
```

### Avatar Shape

```html
<template>
    <!-- Circle (default) -->
    <hy-avatar :src="url" shape="circle"></hy-avatar>

    <!-- Rounded square -->
    <hy-avatar :src="url" shape="square"></hy-avatar>
</template>

<script setup>
    import { ref } from 'vue';
    const url = ref('https://pic1.imgdb.cn/item/67628833d0e0a243d4e5d22b.webp');
</script>
```

### Avatar Size

```html
<template>
    <hy-avatar :src="url" size="small"></hy-avatar>
    <hy-avatar :src="url" size="medium"></hy-avatar>
    <hy-avatar :src="url" size="large"></hy-avatar>
    <hy-avatar :src="url" :size="40"></hy-avatar>
</template>

<script setup>
    import { ref } from 'vue';
    const url = ref('https://pic1.imgdb.cn/item/67628833d0e0a243d4e5d22b.webp');
</script>
```

### Text Avatar (Automatic Background Color)

```html
<template>
    <hy-avatar text="北" font-size="18" random-bg-color></hy-avatar>
    <hy-avatar text="京" font-size="18" random-bg-color></hy-avatar>
    <hy-avatar text="欢" font-size="18" random-bg-color></hy-avatar>
    <hy-avatar text="迎" font-size="18" random-bg-color></hy-avatar>
</template>
```

### Custom Background Color

```html
<template>
    <!-- Custom background color and text color -->
    <hy-avatar text="Gao" bg-color="#448aca" color="#ffffff"></hy-avatar>

    <!-- Specify color index -->
    <hy-avatar text="Li" random-bg-color :color-index="5"></hy-avatar>
</template>
```

### Using Icons

```html
<template>
    <hy-avatar :icon="IconConfig.MINE_FILL" />
    <hy-avatar :icon="IconConfig.PHOTO" />
    <hy-avatar :icon="IconConfig.STAR" />
    <hy-avatar :icon="IconConfig.CUSTOMER_SERVICE" bg-color="#89c152" />
</template>

<script setup>
    import { IconConfig } from 'hy-app';
</script>
```

### Mini Program Avatar

```html
<template>
    <!-- Automatically obtain the Mini Program user's avatar -->
    <hy-avatar mp-avatar size="large"></hy-avatar>
</template>
```

### Custom Content Slot

```html
<template>
    <hy-avatar>
        <view class="custom-avatar">
            <text>Custom</text>
        </view>
    </hy-avatar>
</template>

<style lang="scss" scoped>
    .custom-avatar {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 50%;

        text {
            color: #fff;
            font-size: 24rpx;
        }
    }
</style>
```

### Click Event

```html
<template>
    <hy-avatar :src="url" name="avatar1" @click="onClick"></hy-avatar>
</template>

<script setup>
    import { ref } from 'vue';

    const url = ref('https://pic1.imgdb.cn/item/67628833d0e0a243d4e5d22b.webp');

    const onClick = ({ name, url }) => {
        // Preview the large image
        uni.previewImage({
            urls: [url],
            longPressActions: {
                itemList: ['Send to friend', 'Save image', 'Favorite'],
                success: function () {},
                fail: function (err) {
                    console.log(err.errMsg);
                },
            },
        });
    };
</script>
```

## API

### Avatar Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| src | Avatar path; if loading fails, the default avatar will be displayed (cannot be a relative path) | `string` | - |
| shape | Avatar shape | `circle`\|`square` | circle |
| size | Avatar size, can be a specified string (large, medium, small), or a number; the default unit for numbers is px | `string`\|`number` | medium |
| mode | Crop mode for the avatar image, see [uniapp image](https://uniapp.dcloud.net.cn/component/image.html) | `string` | scaleToFill |
| text | Use text in place of an image; takes priority over src | `string` | - |
| bg-color | Background color, generally used when displaying text | `string` | #c0c4cc |
| color | Text color | `string` | #ffffff |
| font-size | Font size; the default unit for numbers is px | `number`\|`string` | 18 |
| icon | Icon to display | `string` | - |
| mp-avatar | Display the Mini Program avatar; only effective for Baidu, WeChat, and QQ Mini Programs | `boolean` | false |
| random-bg-color | Whether to use a random background color | `boolean` | false |
| default-url | Default avatar used when loading fails (the component has a built-in default image) | `string` | - |
| color-index | If randomBgColor is set to true and this value is configured, the color value at the corresponding index will be taken from the default background color array; valid range is 0-19 | `number` | 0 |
| name | Component identifier | `string` | - |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description | Callback Parameters                           |
| ---------- | ----------- | --------------------------------------------- |
| click      | Avatar is clicked | config: IAvatarClickConfig, event: Event object |

### Typings

::: details Type Definitions

```ts
interface IAvatarClickConfig {
    /** Component identifier */
    name: string;
    /** Avatar image URL */
    url?: string;
}
```

:::

### Avatar Slots

| Slot Name | Description                              | Accepted Values |
| --------- | ---------------------------------------- | --------------- |
| default   | Default slot, used for custom content | -               |

### CSS Variables

| Variable Name               | Description                  | Default Value                                 |
| --------------------------- | ---------------------------- | --------------------------------------------- |
| `--hy-avatar-circle-radius` | Circle avatar border radius | Follows `--hy-radius-circle` (50%)            |
| `--hy-avatar-square-radius` | Square avatar border radius | Follows `--hy-border-margin-padding-sm` (10rpx) |

<demo-model url="pages-design/avatar/avatar"></demo-model>