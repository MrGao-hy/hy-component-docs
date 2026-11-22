# Tag Component

> The tag component is generally used for marking and selection. We provide richer presentation styles that can comprehensively cover your usage scenarios.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage

```html
<!-- Global usage -->
<hy-tag label="Label"></hy-tag>
```

### Theme Colors

- Configure the theme color by setting `type`
    - `primary`: Info tag (default)
    - `success`: Main tag
    - `info`: Default tag
    - `warning`: Warning tag
    - `error`: Danger tag
- Set custom colors or gradients with the `color` value;

```html
<template>
    <hy-tag label="Label" type="primary"></hy-tag>
    <hy-tag label="Label" type="success"></hy-tag>
    <hy-tag label="Label" type="error"></hy-tag>
    <hy-tag label="Label" type="warning"></hy-tag>
    <hy-tag label="Label" type="info"></hy-tag>
    <hy-tag label="Label" color="#800080"></hy-tag>
    <hy-tag label="Label" color="#FFF420"></hy-tag>
    <hy-tag label="Label" color="#A4E82F"></hy-tag>
    <hy-tag label="Label" color="#E72F8C"></hy-tag>
</template>
```

### Plain Tags

- Set a hollow background color via `plain`

```html
<template>
    <hy-tag label="Label" type="primary" plain></hy-tag>
    <hy-tag label="Label" type="success" plain></hy-tag>
    <hy-tag label="Label" type="error" plain></hy-tag>
    <hy-tag label="Label" type="warning" plain></hy-tag>
    <hy-tag label="Label" type="info" plain></hy-tag>
    <hy-tag label="Label" color="#800080" plain></hy-tag>
    <hy-tag label="Label" color="#FFF420" plain></hy-tag>
    <hy-tag label="Label" color="#A4E82F" plain></hy-tag>
    <hy-tag label="Label" color="#E72F8C" plain></hy-tag>
</template>
```

### Plain with Background Color

- Set `plainFill` to make the background semi-transparent

```html
<template>
    <hy-tag label="Label" type="primary" plain plainFill></hy-tag>
    <hy-tag label="Label" type="success" plain plainFill></hy-tag>
    <hy-tag label="Label" type="error" plain plainFill></hy-tag>
    <hy-tag label="Label" type="warning" plain plainFill></hy-tag>
    <hy-tag label="Label" type="info" plain plainFill></hy-tag>
    <hy-tag label="Label" color="#800080" plain plainFill></hy-tag>
    <hy-tag label="Label" color="#FFF420" plain plainFill></hy-tag>
    <hy-tag label="Label" color="#A4E82F" plain plainFill></hy-tag>
    <hy-tag label="Label" color="#E72F8C" plain plainFill></hy-tag>
</template>
```

### Plain with Background Color and No Border

```html
<template>
    <hy-tag :label="t('label')" type="primary" :border="false" shape="circle"></hy-tag>
    <hy-tag :label="t('label')" type="success" :border="false"></hy-tag>
    <hy-tag
        :label="t('label')"
        type="primary"
        plain
        plain-fill
        :border="false"
        shape="circle"
    ></hy-tag>
    <hy-tag :label="t('label')" type="error" plain plain-fill :border="false"></hy-tag>
</template>
```

### Tag Shapes

- Set the tag shape via `shape`
    - `circle`: semicircular
    - `square`: square
    - `opposite`: diagonally rounded corners

```html
<template>
    <hy-tag label="Circle" shape="circle"></hy-tag>
    <hy-tag label="Square" shape="square"></hy-tag>
    <hy-tag label="Opposite" shape="opposite"></hy-tag>
</template>
```

### Closable Tags

- Configure `closable` to display a delete icon in the top-right corner of the tag

```html
<template>
    <up-tag label="Label" closable :show="show" @close="show = false"></up-tag>
</template>

<script setup>
    import { ref } from 'vue';

    const show = ref(true);
</script>
```

### Tag Size Settings

- The `size` property provides tags in multiple sizes, with medium as the default.
    - `large`: Large tag
    - `medium`: Medium tag
    - `small`: Small tag
    - `mini`: Mini

```html
<template>
    <hy-tag label="Label" size="large"></hy-tag>
    <hy-tag label="Label" size="medium"></hy-tag>
    <hy-tag label="Label" size="small"></hy-tag>
    <hy-tag label="Label" size="mini"></hy-tag>
</template>
```

### Tag Prefix Icon

```html
<template>
    <hy-tag label="Address" :icon="IconConfig.MAP"></hy-tag>
    <hy-tag label="Help" :icon="IconConfig.HELP"></hy-tag>
</template>

<script setup>
    import { IconConfig } from '@hy-app/ui';
</script>
```

## API

### Tag Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| label | Text content of the tag | `string` | - |
| type | Theme type | `error`\|`warning`\|`success`\|`primary`\|`info` | primary |
| disabled | Disabled | `boolean` | false |
| size | Tag size | `mini`\|`small`\|`medium`\|`large` | medium |
| shape | Tag shape | `circle`\|`square`\|`opposite` | square |
| bgColor | Background color; defaults to an empty string, i.e., not processed | `string` | - |
| color | Tag font color; defaults to an empty string, i.e., not processed | `string` | - |
| border | Whether to show the border | `boolean` | true |
| borderColor | Border color of the tag | `string` | - |
| value | Index value returned on click, used to distinguish which element of the traversed array was clicked | `string`\|`number` | - |
| plainFill | Whether to fill the background color when plain | `boolean` | false |
| plain | Whether the tag is plain (hollow) | `boolean` | false |
| closable | Whether the tag is closable; when set to true, a close icon appears to the right of the text | `boolean` | false |
| closeColor | Color of the close button icon | `string` | - |
| closeSize | Size of the close button icon | `string`\|`number` | - |
| show | Whether the tag is displayed | `boolean` | true |
| icon | Icon; see [Icon API](./icon#api) for details | `HyIconProps` | - |
| customStyle | Custom external styles to apply | `CSSProperties` | - |
| customClass | Custom external class name | `CSSProperties` | - |

### Events

| Event | Description                                   | Callback Parameters                             |
| ------ | -------------------------------------- | ------------------------------------ |
| click  | Triggered when the tag is clicked                           | \{label: displayed text content, value: text value\} |
| close  | Triggered when the tag's close button is clicked while `closable` is true | value: text content                      |

### Tag Slots

| Slot  | Description                     | Accepted Values |
| ------- | ------------------------ | ------ |
| default | Default slot for custom content | -      |

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-tag-border-width` | Border width | `2rpx` |
| `--hy-tag-padding-mini` | mini padding | `4rpx 12rpx` |
| `--hy-tag-padding-small` | small padding | `6rpx 16rpx` |
| `--hy-tag-padding-medium` | medium padding | `8rpx 20rpx` |
| `--hy-tag-padding-large` | large padding | `10rpx 24rpx` |
| `--hy-tag-close-size-mini` | mini close icon size | `14px` |
| `--hy-tag-close-size-small` | small close icon size | `16px` |
| `--hy-tag-close-size-medium` | medium close icon size | `20px` |
| `--hy-tag-close-size-large` | large close icon size | `22px` |
| `--hy-tag-font-size-mini` | mini font size (line height follows accordingly) | Follows `--hy-font-size-xs` (20rpx) |
| `--hy-tag-font-size-small` | small font size (line height follows accordingly) | Follows `--hy-font-size-sm` (24rpx) |
| `--hy-tag-font-size-medium` | medium font size (line height follows accordingly) | Follows `--hy-font-size-base` (28rpx) |
| `--hy-tag-font-size-large` | large font size (line height follows accordingly) | Follows `--hy-font-size-md` (32rpx) |
| `--hy-tag-transition-ease` | Standard transition easing curve | Follows `--hy-transition-ease` |
| `--hy-tag-icon-margin` | Icon right spacing | `4rpx` |
| `--hy-tag-close-margin` | Close button left spacing | Follows `--hy-border-margin-padding-sm` |
| `--hy-tag-font-text-weight` | Text font weight | Follows `--hy-font-weight-medium` |

<demo-model url="pages-design/tag/tag"></demo-model>