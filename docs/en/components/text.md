# Text Component

> This component integrates commonly used text-related features in projects, including status, phone calls, date formatting, asterisk replacement, hyperlinks, and more. There's no need for you to define special text yourself — the text component covers almost every scenario you might encounter.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Examples

```html
<!-- Global usage -->
<hy-text text="With ten years of youth, I keep my final promise to you"></hy-text>
```

### Theme Color

- Set the text theme color via `type`
    - `primary` (default)
    - `error` failure
    - `success` success
    - `warning` warning
    - `info` info
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
- Set `format` to `encrypt` to replace the middle four digits with asterisks
- Set `call` to enable tapping to dial the phone number

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

- Set `mode` to `name` to display a name
- Set `format` to `encrypt` to turn the middle characters into asterisks

```html
<template>
    <hy-text mode="name" text="Zhang San" format="encrypt"></hy-text>
    <hy-text mode="name" text="Zhang Yida" format="encrypt"></hy-text>
    <hy-text mode="name" text="Gulnazar" format="encrypt"></hy-text>
</template>
```

### Hyperlink

- Set `mode` to `link` to create a hyperlink that navigates when tapped

```html
<template>
    <hy-text mode="link" text="Slacking Diary" href="https://gxh151.top/h5"></hy-text>
</template>
```

### Displaying Amounts

- Set `mode` to `price` to display an amount

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

- Set `lines` to a number; when the text exceeds that number of lines, an ellipsis will be shown

```html
<template>
    <hy-text
        :lines="2"
        text="Regarding the origin of the name uview-plus: the first letter 'u' comes from the first letter of uni-app; 'plus' references element-plus, making it easy to understand that this is the Vue3 version. uni-app is based on Vue.js, and Vue and View (extended to mean UI, view) are homophones, while the view component is the most fundamental and important component in uni-app. Hence the name uview-plus, expressing its origins from uni-app and Vue, along with our gratitude to them."
    ></hy-text>
</template>
```

### Mini Program Open Capabilities

- Set `openType` to enable the WeChat mini program sharing feature

```html
<template>
    <hy-text text="Share to WeChat" openType="share" type="success" @click="clickHandler"></hy-text>
</template>
```

## API

### Text Props

| Parameter | Description | Type | Default Value                  |
| --- | --- | --- |----------------------|
| text | Displayed value | `string`\|`number` | -                    |
| type | Theme color | `string` | -                    |
| show | Whether to show | `boolean` | true                 |
| prefixIcon | Prefix icon | `string` | -                    |
| suffixIcon | Suffix icon | `string` | -                    |
| mode | Match mode for text processing[^1] | `text`\|`price`\|`phone` \|`name`\|`date`\|`link` | text                 |
| href | The link configured when mode=link | `string` | -                    |
| format | Formatting rules[^2] | `string`\|`Function` | -                    |
| call | When mode=phone, whether tapping the text dials the phone | `boolean` | false                |
| openType | Open method for mini programs | `string` | -                    |
| bold | Whether bold, defaults to normal | `boolean` | false                |
| block | Whether block display | `boolean` | false                |
| lines | Number of lines to display text; if set, an ellipsis will be shown beyond this number of lines | `string`\|`number` | -                    |
| color | Text color | `string` | -                    |
| size | Font size, number values default to px unit | `string`\|`number` | -                    |
| iconStyle | Icon style | `CSSProperties` | \{fontSize: "15px"\} |
| decoration | Text decoration, such as underline, line-through, etc. | `none`\|`underline`\|`line-through` | -                    |
| margin | Outer margin; can be a string or numeric value | `string` | 0                    |
| lineHeight | Text line height, number values default to px unit | `string`\|`number` | -                    |
| align | Text alignment | `center`\|`left`\|`right` | left                 |
| wordWrap | Word wrapping | `normal`\|`break-word`\|`anywhere` | normal               |
| flex | Whether to fill the remaining space | `boolean` | true                 |
| customStyle | External styles to be applied | `CSSProperties` | -                    |

### Events

| Event Name | Description         | Callback Parameters |
| ------ | ------------ | -------- |
| click  | Triggered on click | -        |

[^1]: `text` - plain text, `price` - price, `phone` - phone number, `name` - name, `date` - date, `link` - hyperlink

[^2]: When `mode` equals `phone` or `name`, setting `format` to `encrypt` hides the middle content

<demo-model url="pages-design/text/text"></demo-model>