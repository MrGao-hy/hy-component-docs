# Text Component

> This component integrates common text-related features frequently used in projects, including status, phone dialing, date formatting, asterisk (\*) replacement, hyperlinks, and more. You don't need to define special text handling yourself — the text component covers almost every scenario you'll encounter.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-text text="I spent ten years of my youth for our final promise"></hy-text>
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
- Set `call` to enable dialing the phone number when tapped

```html
<template>
    <hy-text mode="phone" text="19807123294" call></hy-text>
    <hy-text mode="phone" text="19807123294" format="encrypt"></hy-text>
</template>
```

### Date Formatting

- Set `mode` to `date` to format dates

```html
<template>
    <hy-text mode="date" :text="1746024799822"></hy-text>
</template>
```

### Name Masking

- Set `mode` to `name` to display names
- Set `format` to `encrypt` to mask the middle characters with asterisks

```html
<template>
    <hy-text mode="name" text="Tom" format="encrypt"></hy-text>
    <hy-text mode="name" text="Tom Smith" format="encrypt"></hy-text>
    <hy-text mode="name" text="Michael Johnson" format="encrypt"></hy-text>
</template>
```

### Hyperlink

- Set `mode` to `link` to create a hyperlink; tapping it navigates to the target

```html
<template>
    <hy-text mode="link" text="Slacking Diary" href="https://gxh151.top/h5"></hy-text>
</template>
```

### Displaying Amounts

- Set `mode` to `price` to display amounts

```html
<template>
    <hy-text mode="price" text="728732.32"></hy-text>
</template>
```

### Displaying Icons

- Set `prefixIcon` to add an icon before the text
- Set `suffixIcon` to add an icon after the text

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

### Hide Overflow Beyond Two Lines

- Set `lines` to a number; text exceeding that number of lines will be truncated with an ellipsis

```html
<template>
    <hy-text
        :lines="2"
        text="Regarding the origin of the name uview-plus: the initial letter u comes from the first letter of uni-app, and 'plus' is named after element-plus so that everyone can easily understand this is the Vue3 version. uni-app is based on Vue.js; Vue and View (extended to mean UI, view) are homophones, and the view component is the most fundamental and important component in uni-app. Hence the name uview-plus, expressing that it originates from uni-app and Vue, and we hereby express our gratitude to them as well."
    ></hy-text>
</template>
```

### Mini Program Open Capabilities

- Set `openType` to enable the WeChat Mini Program sharing feature

```html
<template>
    <hy-text text="Share to WeChat" openType="share" type="success" @click="clickHandler"></hy-text>
</template>
```

## API

### Text Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| text | The value to display | `string`\|`number` | - |
| type | Theme color | `string` | - |
| show | Whether to show | `boolean` | true |
| prefixIcon | Prefix icon | `string` | - |
| suffixIcon | Suffix icon | `string` | - |
| mode | Text processing mode[^1] | `text`\|`price`\|`phone` \|`name`\|`date`\|`link` | text |
| href | The link configured when mode=link | `string` | - |
| format | Formatting rule[^2] | `string`\|`Function` | - |
| call | When mode=phone, whether tapping the text dials the phone | `boolean` | false |
| openType | Mini program open type | `string` | - |
| bold | Whether bold; defaults to normal | `boolean` | false |
| block | Whether to display as block | `boolean` | false |
| lines | Number of lines to display; if set, text beyond this will be truncated with an ellipsis | `string`\|`number` | - |
| color | Text color | `string` | - |
| size | Font size; numbers default to px | `string`\|`number` | - |
| iconStyle | Icon style | `CSSProperties` | \{fontSize: "15px"\} |
| decoration | Text decoration, e.g. underline, line-through | `none`\|`underline`\|`line-through` | - |
| margin | Outer margin; accepts string or number forms | `string` | 0 |
| lineHeight | Text line height; numbers default to px | `string`\|`number` | - |
| align | Text alignment | `center`\|`left`\|`right` | left |
| wordWrap | Word wrapping | `normal`\|`break-word`\|`anywhere` | normal |
| flex | Whether to fill the remaining space | `boolean` | true |
| customStyle | Custom external styles to apply | `CSSProperties` | - |

### Events

| Event Name | Description   | Callback Parameters |
| ------ | ------------ | -------- |
| click  | Triggered on click | -        |

### CSS Variables

| Variable Name                 | Description           | Default Value                            |
| --------------------------- | ------------ | ----------------------------------- |
| `--hy-text-price-font-size` | Font size in price mode | `14px`                              |
| `--hy-text-font-size`       | Body text font size | Follows `--hy-font-size-base` (28rpx) |
| `--hy-text-price-color`     | Price text color | Follows `--hy-text-color--grey`        |

[^1]: `text` - plain text, `price` - price, `phone` - phone number, `name` - name, `date` - date, `link` - hyperlink

[^2]: When `mode` is `phone` or `name`, setting `format` to `encrypt` hides the middle content

<demo-model url="pages-design/text/text"></demo-model>