# Tag Component

> The tag component is generally used for marking and selection. We provide richer presentation forms that can comprehensively cover your usage scenarios.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage

```html
<!-- Global usage -->
<hy-tag label="Tag"></hy-tag>
```

### Theme Colors

- Configure the theme color by setting `type`
    - `primary`: Information tag (default)
    - `success`: Primary tag
    - `info`: Default tag
    - `warning`: Warning tag
    - `error`: Danger tag
- Use the `color` value to set custom colors or gradient colors;

```html
<template>
    <hy-tag label="Tag" type="primary"></hy-tag>
    <hy-tag label="Tag" type="success"></hy-tag>
    <hy-tag label="Tag" type="error"></hy-tag>
    <hy-tag label="Tag" type="warning"></hy-tag>
    <hy-tag label="Tag" type="info"></hy-tag>
    <hy-tag label="Tag" color="#800080"></hy-tag>
    <hy-tag label="Tag" color="#FFF420"></hy-tag>
    <hy-tag label="Tag" color="#A4E82F"></hy-tag>
    <hy-tag label="Tag" color="#E72F8C"></hy-tag>
</template>
```

### Plain (Outlined) Tags

- Set the plain (outlined) background color by setting `plain`

```html
<template>
    <hy-tag label="Tag" type="primary" plain></hy-tag>
    <hy-tag label="Tag" type="success" plain></hy-tag>
    <hy-tag label="Tag" type="error" plain></hy-tag>
    <hy-tag label="Tag" type="warning" plain></hy-tag>
    <hy-tag label="Tag" type="info" plain></hy-tag>
    <hy-tag label="Tag" color="#800080" plain></hy-tag>
    <hy-tag label="Tag" color="#FFF420" plain></hy-tag>
    <hy-tag label="Tag" color="#A4E82F" plain></hy-tag>
    <hy-tag label="Tag" color="#E72F8C" plain></hy-tag>
</template>
```

### Plain with Background Color

- Give the background color semi-transparency by setting `plainFill`

```html
<template>
    <hy-tag label="Tag" type="primary" plain plainFill></hy-tag>
    <hy-tag label="Tag" type="success" plain plainFill></hy-tag>
    <hy-tag label="Tag" type="error" plain plainFill></hy-tag>
    <hy-tag label="Tag" type="warning" plain plainFill></hy-tag>
    <hy-tag label="Tag" type="info" plain plainFill></hy-tag>
    <hy-tag label="Tag" color="#800080" plain plainFill></hy-tag>
    <hy-tag label="Tag" color="#FFF420" plain plainFill></hy-tag>
    <hy-tag label="Tag" color="#A4E82F" plain plainFill></hy-tag>
    <hy-tag label="Tag" color="#E72F8C" plain plainFill></hy-tag>
</template>
```

### Plain with Background Color and No Border

- Set the border color via the `borderColor` property

```html
<template>
    <hy-tag label="Tag" type="primary" plain plainFill borderColor="transparent"></hy-tag>
    <hy-tag label="Tag" type="success" plain plainFill borderColor="transparent"></hy-tag>
    <hy-tag label="Tag" type="error" plain plainFill borderColor="transparent"></hy-tag>
    <hy-tag label="Tag" type="warning" plain plainFill borderColor="transparent"></hy-tag>
    <hy-tag label="Tag" type="info" plain plainFill borderColor="transparent"></hy-tag>
    <hy-tag label="Tag" color="#800080" plain plainFill borderColor="transparent"></hy-tag>
</template>
```

### Tag Shape

- Set the tag shape by configuring `shape`
    - `circle`: Semicircle
    - `square`: Square
    - `opposite`: Diagonal rounded corners

```html
<template>
    <hy-tag label="Circle" shape="circle"></hy-tag>
    <hy-tag label="Square" shape="square"></hy-tag>
    <hy-tag label="Diagonal rounded corners" shape="opposite"></hy-tag>
</template>
```

### Closable Tags

- By configuring `closable`, an icon for removing the tag is provided in the upper right corner

```html
<template>
    <up-tag label="Tag" closable :show="show" @close="show = false"></up-tag>
</template>

<script setup>
    import { ref } from 'vue';

    const show = ref(true);
</script>
```

### Tag Size Settings

- The `size` property offers tags in three size specifications, medium by default.
    - `large`: Large tag
    - `medium`: Medium tag
    - `small`: Small tag
    - `mini`: Mini version

```html
<template>
    <hy-tag label="Tag" size="large"></hy-tag>
    <hy-tag label="Tag" size="medium"></hy-tag>
    <hy-tag label="Tag" size="small"></hy-tag>
    <hy-tag label="Tag" size="mini"></hy-tag>
</template>
```

### Tag Prefix Icon

```html
<template>
    <hy-tag label="Address" :icon="IconConfig.MAP"></hy-tag>
    <hy-tag label="Help" :icon="IconConfig.HELP"></hy-tag>
</template>

<script setup>
    import { IconConfig } from '@/hy-app/ui';
</script>
```

## API

### Tag Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| label | Text content of the tag | `string` | - |
| type | Theme type | `error`\|`warning`\|`success`\|`primary`\|`info` | primary |
| disabled | Disabled | `boolean` | false |
| size | Tag size | `mini`\|`small`\|`medium`\|`large` | medium |
| shape | Tag shape | `circle`\|`square`\|`opposite` | square |
| bgColor | Background color, defaults to an empty string, i.e., not processed | `string` | - |
| color | Tag font color, defaults to an empty string, i.e., not processed | `string` | - |
| borderColor | Border color of the tag | `string` | - |
| closeColor | Color of the close button icon | `string` | - |
| value | Index value returned on click, used to distinguish which element of the iterated array was clicked | `string`\|`number` | - |
| plainFill | Whether to fill the background color when plain | `boolean` | false |
| plain | Whether the tag is plain (outlined) | `boolean` | false |
| closable | Whether the tag is closable; when set to true, a close icon appears to the right of the text | `boolean` | false |
| show | Tag visibility | `boolean` | true |
| icon | Icon, see [Icon API](./icon#api) for details | `HyIconProps` | - |
| customStyle | Defines external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `CSSProperties` | - |

### Events

| Event Name | Description                                   | Callback Parameters                             |
| ------ | -------------------------------------- | ------------------------------------ |
| click  | Triggered when the tag is clicked                           | \{label: displayed text content, value: text value\} |
| close  | Triggered when the tag's close button is clicked while `closable` is true | value: text content                      |

<demo-model url="pages-design/tag/tag"></demo-model>