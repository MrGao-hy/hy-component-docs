# Icon Component

> A font-based icon set that includes icons for most common scenarios. It is easy to use and works out of the box—there is no need to write styles for each icon yourself, just apply simple configuration. Custom icons are supported.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage

::: tip Friendly Reminder

The icons use online links from the Alibaba icon library. If icons fail to load due to poor network conditions when accessing the repository, this is normal. You can download the icons locally and import them yourself. If you need to download the icons locally, please contact the author: Hy Author

:::

```html
<!-- Global import -->
<hy-icon :name="IconConfig.Loading"></hy-icon>
```

### Modify Icon Styles

- Modify the icon color via the `color` parameter
- Modify the icon size via the `size` parameter, in px

```html
<hy-icon name="photo" color="#2979ff" size="28"></hy-icon>
```

### Image Icon (with rounded corners)

```html
<view class="hy-flex">
    <hy-icon
        name="https://q9.itc.cn/q_70/images03/20250211/6ee1b8e0f4704083ba715986c8c3795f.jpeg"
        size="80"
        round="5px"
    />
</view>
```

### Icon Text Position

```html
<view class="hy-flex">
    <hy-icon :name="IconConfig.LOCK" label="Horizontal" label-pos="right" />
    <hy-icon :name="IconConfig.LOCK" label="Vertical" label-pos="bottom" />
</view>
```

### Icon Rotation

```html
<view class="hy-flex">
    <hy-icon :name="IconConfig.LOCK" is-rotate />
</view>
```

### Custom Icon

- Download directly from the Alibaba vector icon library,
    - `name` is the icon name,
    - `customPrefix` is the FontClass/Symbol prefix in your project settings

```html
<hy-icon label="uview-plus" size="40" name="search" customPrefix="custom-icon"></hy-icon>
```

::: tip Note

The default class name after downloading is `.iconfont`; you need to manually replace `.iconfont` with `.custom-icon`

:::

```scss
@font-face {
  font-family: "custom-icon";
  src: url('iconfont.woff2?t=1764230155023') format('woff2'),
  url('iconfont.woff?t=1764230155023') format('woff'),
  url('iconfont.ttf?t=1764230155023') format('truetype');
}

.iconfont { // [!code --]
.custom-icon { // [!code ++]
  font-family: "custom-icon";
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

## API

### Icon Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| name | Icon name, see the example icon set | `string` \| `IconConfig` | - |
| size | Icon font size, defaults to px for numeric values | `string` \| `number` | 16px |
| color | Icon color | `string` | - |
| bold | Whether to display in bold | `boolean` | false |
| index | A value used to distinguish multiple icons, passed out via the click event when the icon is clicked | `string` \| `number` | - |
| hoverClass | The style class applied when the icon is pressed, same usage as the hover-class parameter of uni's view component. See: [hover-class](https://uniapp.dcloud.net.cn/component/view.html) | `string` | - |
| customPrefix | When using a custom font icon library, this value must be specified. See: Extending Custom Icon Library | `string` | hy-icon |
| label | Label text displayed to the right/below the icon | `string` | - |
| labelPos | Position of the label relative to the icon | `string` | right |
| labelSize | Label font size, defaults to px for numeric values | `string` \| `number` | - |
| labelColor | Label font color | `string` | - |
| space | Distance between the label and the icon, defaults to px for numeric values | `string` \| `number` | 3px |
| imgMode | Image cropping/scaling mode, a native attribute of the image component. See: [image](https://uniapp.dcloud.net.cn/component/image.html#image) | `string` | - |
| width | Image width when name is an image path, defaults to px for numeric values | `string` \| `number` | - |
| height | Image height when name is an image path, defaults to px for numeric values | `string` \| `number` | - |
| top | Distance from the icon to the top. In some scenarios, if the icon is not vertically centered, you can adjust this parameter. Defaults to px for numeric values | `string` \| `string` \| `number` | 0 |
| stop | Whether to stop event propagation | `booolean` | false |
| isRotate | Whether to rotate automatically (used for loading) | `booolean` | false |
| round | Icon border radius, defaults to px for numeric values | `string` \| `number` | - |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description           | Callback Parameters                            |
| ------ | -------------- | ----------------------------------- |
| click  | Triggered when the icon is clicked | `index`: the `index` value passed via `props` |

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-icon-label-max-width` | Maximum width of the label text | `150rpx` |
| `--hy-icon-label-color` | Label text color | Follows `--hy-text-color--grey` |
| `--hy-icon-label-font-size` | Label font size | Follows `--hy-font-size-sm` (24rpx) |

## Icon Set

<TheIconList />

<demo-model url="pages-design/icon/icon"></demo-model>