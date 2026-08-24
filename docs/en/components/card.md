# Card Component

> The card component is generally used for scenarios with multiple list entries and a unified style.

## :pushpin: Platform Compatibility

| APP(vue) | H5 | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Example

```html
<template>
    <hy-card title="Title"></hy-card>
</template>
```

### Card with Thumbnail and Subtitle

```html
<template>
    <hy-card
        title="Andy Lau"
        sub-title="Brief description text"
        right-text="2020-05-15"
        thumb="https://example.com/avatar.jpg"
        thumb-width="40"
        thumbCircle
        full
    ></hy-card>
</template>
```

### Custom Shadow

```html
<template>
    <hy-card title="Custom Shadow" box-shadow="0 0 10rpx 10rpx rgba(0, 0, 0, 0.5)"></hy-card>
</template>
```

### Using Custom Slots

```html
<template>
    <hy-card
        title="Blue flowers sketched on plain porcelain, the brushstroke shifting from rich to light"
        sub-title="2020-05-15"
        thumb="http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg"
        full
    >
        <template #body>
            <view class="u-body-item">
                <view class="u-body-item-title">
                    Peonies painted on the vase like your first makeup, lingering sandalwood drifting through the window reveals my thoughts, the brush on the rice paper pauses halfway here
                </view>
                <image
                    src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg"
                    mode="aspectFill"
                ></image>
            </view>
        </template>
        <template #footer>
            <hy-icon name="chat-fill" size="25" label="30 comments"></hy-icon>
        </template>
    </hy-card>
</template>

<style scoped lang="scss">
    .u-body-item {
        font-size: 32rpx;
        padding: 20rpx 10rpx;
        display: flex;
        justify-content: space-between;
    }

    .u-body-item image {
        width: 120rpx;
        height: 120rpx;
        border-radius: 8rpx;
        margin-left: 12rpx;
    }
</style>
```

### Controlling Header and Footer Display

```html
<template>
    <view>
        <hy-card title="Show header only" :showFoot="false"></hy-card>

        <hy-card title="Show body only" :showHead="false" :showFoot="false">
            <template #body>
                <view>This is the card body content</view>
            </template>
        </hy-card>
    </view>
</template>
```

### Custom Padding

```html
<template>
    <hy-card title="Custom Padding" :paddingHead="20" :paddingBody="30" :paddingFoot="10"></hy-card>
</template>
```

## API

### Card Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| full | Whether to leave gaps between the card and both sides of the screen | `boolean` | false |
| title | Title on the left of the header | `string` | - |
| title-color | Title color | `string` | - |
| title-size | Title font size, default unit px for numeric values | `string`\|`number` | - |
| sub-title | Subtitle | `string` | - |
| sub-title-size | Subtitle font size, default unit px for numeric values | `string`\|`number` | - |
| sub-title-color | Subtitle font color | `string` | - |
| border | Whether to show the border | `boolean` | false |
| index | Used to identify which card was clicked | `string`\|`number` | - |
| margin | Spacing between the card and the screen edges and elements above/below, must include units, e.g. "30rpx 20rpx" | `string` | 0 0 20rpx |
| border-radius | Border radius of the entire card, default unit px for numeric values | `string`\|`number` | 8px |
| head-style | Custom header style, in object form | `CSSProperties` | - |
| body-style | Custom body style, in object form | `CSSProperties` | - |
| foot-style | Custom footer style, in object form | `CSSProperties` | - |
| head-border-bottom | Whether to show the header's bottom border | `boolean` | false |
| foot-border-top | Whether to show the footer's top border | `boolean` | false |
| thumb | Thumbnail path; if set, it will be displayed on the left of the title. Relative paths are not recommended (supports component library icons) | `string` | - |
| thumb-width | Thumbnail width, height equals width, default unit px for numeric values | `string`\|`number` | 30px |
| thumb-circle | Whether the thumbnail is circular | `boolean` | false |
| rightText | Right-side content | `string` | - |
| right-text-color | Right-side content color | `string` | - |
| right-text-size | Right-side content font size, default unit px for numeric values | `string`\|`number` | - |
| padding | Padding for the head, body, and foot sections, see description above, unit rpx | `string`\|`number` | 10px |
| paddingHead | Header padding, default unit px for numeric values | `string`\|`number` | - |
| paddingBody | Body padding, default unit px for numeric values | `string`\|`number` | - |
| paddingFoot | Footer padding, default unit px for numeric values | `string`\|`number` | - |
| show-head | Whether to show the header (required when displaying the header) | `boolean` | false |
| show-foot | Whether to show the footer | `boolean` | true |
| box-shadow | Card outer shadow, in string form | `string`\|`boolean` | true |
| customStyle | Custom external styles to be used | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description                          | Callback Parameters             |
| ---------- | ------------------------------------ | ------------------------------- |
| click      | Triggered when any part of the entire card is clicked | index: identifier passed by the user |
| head-click | Triggered when the card header is clicked     | index: identifier passed by the user |
| body-click | Triggered when the card body is clicked       | index: identifier passed by the user |
| foot-click | Triggered when the card footer is clicked     | index: identifier passed by the user |

### Slots

| Slot Name | Description                  | Accepted Values |
| --------- | ---------------------------- | --------------- |
| header    | Custom card header content   | -               |
| body      | Custom card body content     | -               |
| footer    | Custom card footer content   | -               |

<demo-model url="pages-design/card/card"></demo-model>