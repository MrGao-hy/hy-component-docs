# Card Component

> The Card component is generally used in scenarios with multiple list entries that share a unified style.

## :pushpin: Platform Differences

| App (vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage

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
        title="A plain base outlines the blue flowers, the brushstroke shifting from bold to faint"
        sub-title="2020-05-15"
        thumb="http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg"
        full
    >
        <template #body>
            <view class="u-body-item">
                <view class="u-body-item-title">
                    The peony painted on the vase is like your first touch of makeup; wisps of sandalwood drift through the window and I know what's on your mind; the stroke on the rice paper pauses halfway
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

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| full | Whether to leave a gap between the card and both sides of the screen | `boolean` | false |
| title | Title on the left of the header | `string` | - |
| title-color | Title color | `string` | - |
| title-size | Title font size; numbers use px by default | `string`\|`number` | - |
| sub-title | Subtitle | `string` | - |
| sub-title-size | Subtitle font size; numbers use px by default | `string`\|`number` | - |
| sub-title-color | Subtitle font color | `string` | - |
| border | Whether to show the border | `boolean` | false |
| index | Used to identify which card was clicked | `string`\|`number` | - |
| margin | Spacing between the card and the screen edges and the elements above and below; must include units, e.g. "30rpx 20rpx" | `string` | 0 0 20rpx |
| border-radius | Border radius of the whole card; numbers use px by default | `string`\|`number` | 8px |
| head-style | Custom header style, in object form | `CSSProperties` | - |
| body-style | Custom body style, in object form | `CSSProperties` | - |
| foot-style | Custom footer style, in object form | `CSSProperties` | - |
| head-border-bottom | Whether to show the header's bottom border | `boolean` | false |
| foot-border-top | Whether to show the footer's top border | `boolean` | false |
| thumb | Thumbnail path; if set, it will be displayed on the left of the title. Relative paths are not recommended (supports icons from the component library) | `string` | - |
| thumb-width | Thumbnail width; the height equals the width; numbers use px by default | `string`\|`number` | 30px |
| thumb-circle | Whether the thumbnail is circular | `boolean` | false |
| rightText | Content on the right | `string` | - |
| right-text-color | Right content color | `string` | - |
| right-text-size | Right content font size; numbers use px by default | `string`\|`number` | - |
| padding | Padding for the head, body, and foot sections; see the description above; unit rpx | `string`\|`number` | 10px |
| paddingHead | Header padding; numbers use px by default | `string`\|`number` | - |
| paddingBody | Body padding; numbers use px by default | `string`\|`number` | - |
| paddingFoot | Footer padding; numbers use px by default | `string`\|`number` | - |
| show-head | Whether to show the header (required when displaying the header) | `boolean` | false |
| show-foot | Whether to show the footer | `boolean` | true |
| box-shadow | Outer shadow of the card, in string form | `string`\|`boolean` | true |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name  | Description                                    | Callback Parameter                  |
| ----------- | ---------------------------------------------- | ----------------------------------- |
| click       | Triggered when any part of the card is clicked | index: the identifier passed by the user |
| head-click  | Triggered when the card header is clicked      | index: the identifier passed by the user |
| body-click  | Triggered when the card body is clicked        | index: the identifier passed by the user |
| foot-click  | Triggered when the card footer is clicked      | index: the identifier passed by the user |

### Slots

| Slot Name | Description                     | Accepted Values |
| --------- | ------------------------------- | --------------- |
| header    | Custom card header content      | -               |
| body      | Custom card body content        | -               |
| footer    | Custom card footer content      | -               |

### CSS Variables

| Variable Name                | Description                  | Default                                    |
| ---------------------------- | ---------------------------- | ------------------------------------------ |
| `--hy-card-font-size`        | Body font size               | Follows `--hy-font-size-base` (28rpx)      |
| `--hy-card-title-max-width`  | Maximum title width          | `400rpx`                                   |
| `--hy-card-head-padding`     | Header padding               | `20rpx 20rpx 10rpx`                        |
| `--hy-card-body-padding`     | Content padding              | `10rpx 20rpx 10rpx`                        |
| `--hy-card-foot-padding`     | Footer padding               | `10rpx 20rpx 20rpx`                        |
| `--hy-card-title-font-size`  | Header title font size       | Follows `--hy-font-size-base` (28rpx)      |
| `--hy-card-sub-color`        | Header subtitle color        | Follows `--hy-text-color--grey`            |
| `--hy-card-sub-font-size`    | Header subtitle font size    | Follows `--hy-font-size-sm` (24rpx)        |
| `--hy-card-right-color`      | Header right-side text color | Follows `--hy-text-color--grey`            |

<demo-model url="pages-design/card/card"></demo-model>