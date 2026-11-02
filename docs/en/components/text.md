# Text Component

> This component integrates commonly used text-related features in projects, including status, phone calls, date formatting, asterisk masking, hyperlinks, and more. There's no need to define special text yourself — the text component covers almost every scenario you'll encounter.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | -------------------- | ------------------- |
| ✔        | ✔   | ✔                    | ✔                   |

## :japanese_castle: Basic Usage

```html
<!-- Global usage -->
<hy-text text="I spent ten years of my youth to keep our final promise"></hy-text>
```

### Theme Colors

- Set the text theme color via `type`
    - `primary` (default)
    - `error` (error)
    - `success` (success)
    - `warning` (warning)
    - `info` (info)
- Set the text color via `color`

```html
<template>
    <hy-text text="Primary" type="primary"></hy-text>
    <hy-text text="Error" type="error"></hy-text>
    <hy-text text="Success" type="success"></hy-text>
    <hy-text text="Warning" type="warning"></hy-text>
    <hy-text text="Info" type="info"></hy-text>
    <hy-text text="Color" size="30rpx" color="#892FE8"></hy-text>
</template>
```

### Phone Number

- Set `mode` to `phone` to display a phone number, which can be tapped to make a call
- Set `format` to `encrypt` to mask the middle four digits with asterisks
- Set `call` to enable dialing the phone number on tap

```html
<template>
    <hy-text mode="phone" text="19807123294" call></hy-text>
    <hy-text mode="phone" text="19807123294" format="encrypt"></hy-text>
</template>
```

### Date Formatting

- Set `mode` to `date` to enable date formatting

```html
<template>
    <hy-text mode="date" :text="1746024799822"></hy-text>
</template>
```

### Name Masking

- Set `mode` to `name` for name display
- Set `format` to `encrypt` to replace the middle characters with asterisks

```html
<template>
    <hy-text mode="name" text="Zhang San" format="encrypt"></hy-text>
    <hy-text mode="name" text="Zhang Yida" format="encrypt"></hy-text>
    <hy-text mode="name" text="Gulnazar" format="encrypt"></hy-text>
</template>
```

### Hyperlink

- Set `mode` to `link` for hyperlinks that navigate on tap

```html
<template>
    <hy-text mode="link" text="Slacking Diary" href="https://gxh151.top/h5"></hy-text>
</template>
```

### Displaying Amounts

- Set `mode` to `price` to display monetary amounts

```html
<template>
    <hy-text mode="price" text="728732.32"></hy-text>
</template>
```

### Displaying Icons

- Set `prefixIcon` to add a prefix icon before the text
- Set `suffixIcon` to add a suffix icon after the text

```html
<template>
    <hy-text :prefixIcon="IconConfig.MAP" text="Address"></hy-text>
    <hy-text
        :suffixIcon="IconConfig.ARROW_RIGHTWARD"
        :iconStyle="{ fontSize: '15px' }"
        text="View More"
    ></hy-text>
</template>
```

### Hide Text Beyond Two Lines

- Set `lines` to a number; once the text exceeds that number of lines, an ellipsis will be shown

```html
<template>
    <hy-text
        :lines="2"
        text="Regarding the origin of the name uview-plus: the initial letter u comes from the first letter of uni-app, while plus is named after element-plus to make it easy to understand that this is the Vue3 version. uni-app is based on Vue.js, and Vue sounds the same as View (extended to mean UI and views), while the view component is the most fundamental and important component in uni-app. Hence the name uview-plus, expressing that it originates from uni-app and Vue, and our gratitude goes to both."
    ></hy-text>
</template>
```

### Mini Program Open Capabilities

- Set `openType` to enable the WeChat Mini Program share feature

```html
<template>
    <hy-text text="Share to WeChat" openType="share" type="success" @click="clickHandler"></hy-text>
</template>
```

## API

### Text Props

| Prop | Description | Type | Default               |
| --- | --- | --- |-----------------------|
| text | Value to display | `string`\|`number` | -                     |
| type | Theme color | `string` | -                     |
| show | Whether to display | `boolean` | true                  |
| prefixIcon | Prefix icon | `string` | -                     |
| suffixIcon | Suffix icon | `string` | -                     |
| mode | Text processing mode[^1] | `text`\|`price`\|`phone` \|`name`\|`date`\|`link` | text                  |
| href | Link configured when mode=link | `string` | -                     |
| format | Formatting rule[^2] | `string`\|`Function` | -                     |
| call | When mode=phone, whether tapping the text dials the phone | `boolean` | false                 |
| openType | Mini program open type | `string` | -                     |
| bold | Whether bold; defaults to normal | `boolean` | false                 |
| block | Whether block-level | `boolean` | false                 |
| lines | Number of lines to display; if set, text beyond this number of lines is truncated with an ellipsis | `string`\|`number` | -                     |
| color | Text color | `string` | -                     |
| size | Font size; numbers default to px | `string`\|`number` | -                     |
| iconStyle | Icon style | `CSSProperties` | \{fontSize: "15px"\}  |
| decoration | Text decoration, e.g. underline, line-through | `none`\|`underline`\|`line-through` | -                     |
| margin | Outer margin; accepts string or numeric form | `string` | 0                     |
| lineHeight | Text line height; numbers default to px | `string`\|`number` | -                     |
| align | Text alignment | `center`\|`left`\|`right` | left                  |
| wordWrap | Word wrapping | `normal`\|`break-word`\|`anywhere` | normal                |
| flex | Whether to fill the remaining space | `boolean` | true                  |
| customStyle | Custom external styles to apply | `CSSProperties` | -                     |

### Events

| Event | Description  | Callback Parameters |
| ------ | ------------ | ------------------- |
| click  | Triggered on click | -                   |

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-text-price-font-size` | Font size in price mode | `14px` |
| `--hy-text-font-size` | Body text font size | Follows `--hy-font-size-base` (28rpx) |
| `--hy-text-price-color` | Price text color | Follows `--hy-text-color--grey` |


[^1]: `text` - plain text, `price` - price, `phone` - phone number, `name` - name, `date` - date, `link` - hyperlink
[^2]: When `mode` is `phone` or `name`, setting `format` to `encrypt` hides the middle content

<demo-model url="pages-design/text/text"></demo-model>