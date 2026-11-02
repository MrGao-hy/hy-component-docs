# Card Component

> The card component is generally used in scenarios with multiple list entries that share a unified style.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | -------------------- | ------------------- |
| ✔        | ✔   | ✔                    | ✔                   |

## :japanese_castle: Basic Usage

```html
<template>
    <hy-card title="标题"></hy-card>
</template>
```

### Card with Thumbnail and Subtitle

```html
<template>
    <hy-card
        title="刘德华"
        sub-title="简介描述文字"
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
    <hy-card title="自定义阴影" box-shadow="0 0 10rpx 10rpx rgba(0, 0, 0, 0.5)"></hy-card>
</template>
```

### Using Custom Slots

```html
<template>
    <hy-card
        title="素胚勾勒出青花，笔锋浓转淡"
        sub-title="2020-05-15"
        thumb="http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg"
        full
    >
        <template #body>
            <view class="u-body-item">
                <view class="u-body-item-title">
                    瓶身描绘的牡丹一如你初妆，冉冉檀香透过窗心事我了然，宣纸上走笔至此搁一半
                </view>
                <image
                    src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg"
                    mode="aspectFill"
                ></image>
            </view>
        </template>
        <template #footer>
            <hy-icon name="chat-fill" size="25" label="30评论"></hy-icon>
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

### Controlling Header and Footer Visibility

```html
<template>
    <view>
        <hy-card title="只显示头部" :showFoot="false"></hy-card>

        <hy-card title="只显示主体" :showHead="false" :showFoot="false">
            <template #body>
                <view>这是卡片主体内容</view>
            </template>
        </hy-card>
    </view>
</template>
```

### Custom Padding

```html
<template>
    <hy-card title="自定义内边距" :paddingHead="20" :paddingBody="30" :paddingFoot="10"></hy-card>
</template>
```

## API

### Card Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| full | Whether to leave a gap between the card and the screen edges | `boolean` | false |
| title | Title on the left side of the header | `string` | - |
| title-color | Title color | `string` | - |
| title-size | Title font size; numbers default to px | `string`\|`number` | - |
| sub-title | Subtitle | `string` | - |
| sub-title-size | Subtitle font size; numbers default to px | `string`\|`number` | - |
| sub-title-color | Subtitle font color | `string` | - |
| border | Whether to show the border | `boolean` | false |
| index | Used to identify which card was clicked | `string`\|`number` | - |
| margin | Spacing between the card and the screen edges as well as elements above and below; must include units, e.g. "30rpx 20rpx" | `string` | 0 0 20rpx |
| border-radius | Border radius of the entire card; numbers default to px | `string`\|`number` | 8px |
| head-style | Custom header style, in object form | `CSSProperties` | - |
| body-style | Custom body style, in object form | `CSSProperties` | - |
| foot-style | Custom footer style, in object form | `CSSProperties` | - |
| head-border-bottom | Whether to show the header's bottom border | `boolean` | false |
| foot-border-top | Whether to show the footer's top border | `boolean` | false |
| thumb | Thumbnail path; if set, it will be displayed to the left of the title. Relative paths are not recommended (supports icons from the component library) | `string` | - |
| thumb-width | Thumbnail width; height equals width; numbers default to px | `string`\|`number` | 30px |
| thumb-circle | Whether the thumbnail is circular | `boolean` | false |
| rightText | Content on the right side | `string` | - |
| right-text-color | Right-side content color | `string` | - |
| right-text-size | Right-side content font size; numbers default to px | `string`\|`number` | - |
| padding | Padding for the head, body, and foot sections; see description above; unit rpx | `string`\|`number` | 10px |
| paddingHead | Header padding; numbers default to px | `string`\|`number` | - |
| paddingBody | Body padding; numbers default to px | `string`\|`number` | - |
| paddingFoot | Footer padding; numbers default to px | `string`\|`number` | - |
| show-head | Whether to show the header (required when displaying the header) | `boolean` | false |
| show-foot | Whether to show the footer | `boolean` | true |
| box-shadow | Outer shadow of the card, in string form | `string`\|`boolean` | true |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event      | Description                                    | Callback Parameters                    |
| ---------- | ---------------------------------------------- | -------------------------------------- |
| click      | Triggered when any part of the card is clicked | index: the identifier passed by the user |
| head-click | Triggered when the card header is clicked      | index: the identifier passed by the user |
| body-click | Triggered when the card body is clicked        | index: the identifier passed by the user |
| foot-click | Triggered when the card footer is clicked      | index: the identifier passed by the user |

### Slots

| Slot   | Description                       | Value Received |
| ------ | --------------------------------- | -------------- |
| header | Custom card header content        | -              |
| body   | Custom card body content          | -              |
| footer | Custom card footer content        | -              |

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-card-font-size` | Body font size | Follows `--hy-font-size-base` (28rpx) |
| `--hy-card-title-max-width` | Maximum title width | `400rpx` |
| `--hy-card-head-padding` | Header padding | `20rpx 20rpx 10rpx` |
| `--hy-card-body-padding` | Body content padding | `10rpx 20rpx 10rpx` |
| `--hy-card-foot-padding` | Footer padding | `10rpx 20rpx 20rpx` |
| `--hy-card-title-font-size` | Header title font size | Follows `--hy-font-size-base` (28rpx) |
| `--hy-card-sub-color` | Header subtitle color | Follows `--hy-text-color--grey` |
| `--hy-card-sub-font-size` | Header subtitle font size | Follows `--hy-font-size-sm` (24rpx) |
| `--hy-card-right-color` | Header right-side text color | Follows `--hy-text-color--grey` |

<demo-model url="pages-design/card/card"></demo-model>