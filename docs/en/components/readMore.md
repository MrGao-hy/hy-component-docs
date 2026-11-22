# ReadMore Expand to Read More Component

> This component is generally used in scenarios where the content is long: part of it is initially collapsed, and clicking expands the full content.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage

```html
<!-- Global usage -->
<hy-read-more>
    <rich-text :nodes="content"></rich-text>
</hy-read-more>
```

```ts
import { ref } from 'vue';

const content = ref(`A mountain need not be high; with immortals dwelling there, it gains renown. Water need not be deep; with a dragon dwelling there, it gains spirit. Though this is a humble room, my virtue lends it fragrance.
Moss creeps green up the steps, and the color of grass reflects through the curtains. Learned scholars chat and laugh here; no commoners come and go. One may play the unadorned qin or read the golden scriptures.
No cacophony of pipes and strings deafens the ears, no official documents weary the body. It is like Zhuge Liang's hut in Nanyang and Ziyun's pavilion in Western Shu. As Confucius said: "What is humble about it?"`);
```

### Configuring the Expand Height

- By setting the `showHeight` height (in px), the "Read more" button will only appear when the content passed in via the slot exceeds this height

```html
<hy-read-more showHeight="600">
    <rich-text :nodes="content"></rich-text>
</hy-read-more>
```

### Custom Styles

::: warning Tip

The upper part of this component has a white blurred shadow, used to blend the clickable area with the text content. If you don't want this shadow, you can adjust the shadowStyle object, whose internal structure is as follows:

```javascript
{
    // #ifndef APP-NVUE
    backgroundImage: "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 80%)",
    // #endif
    // #ifdef APP-NVUE
    // nvue does not support setting complex backgroundImage properties
    backgroundImage: "linear-gradient(to top, #fff, rgba(255, 255, 255, 0.5))",
    // #endif
    paddingTop: "100px",
    marginTop: "-100px",
}
```

:::

- If you don't want the shadow, simply set `backgroundImage` to `none`. As for `paddingTop` and `marginTop`, adjust them to appropriate values as needed.

```html
<template>
    <hy-read-more :shadowStyle="shadowStyle">
        <rich-text :nodes="content"></rich-text>
    </hy-read-more>
</template>

<script setup>
    import { reactive } from 'vue';

    const shadowStyle = reactive({
        backgroundImage: 'none',
        paddingTop: '0',
        marginTop: '20rpx',
    });
</script>
```

## API

### readMore Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| showHeight | The "expand full text" button is only displayed when the content exceeds this height; the default unit is px | `string`\|`number` | 400 |
| toggle | Whether to show a collapse button after expanding | `boolean` | false |
| closeText | Prompt text when collapsed | `string` | Read more |
| openText | Prompt text when expanded | `string` | Collapse |
| color | Color of the prompt text | `string` | - |
| fontSize | Size of the prompt text; the default unit is px | `string`\|`number` | 14 |
| textIndent | Number of characters for the first-line indent of paragraphs | `string` | 2em |
| name | Used as the callback parameter returned in the open and close events | `string` | - |
| shadowStyle | Custom handling of the shadow, in object form | `CSSProperties` | - |
| customStyle | External styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description | Callback Parameter |
| ------ | ---------------- | ------------------------------ |
| open   | Triggered when the content is expanded | name - the name parameter value passed in props |
| close  | Triggered when the content is collapsed | name - the name parameter value passed in props |

### Slots

| Slot Name | Description | Accepted Values |
| ------- | -------- | ------ |
| default | Default slot | -      |

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-read-more-font-size` | Font size | `15px` |
| `--hy-read-more-mask-height` | Gradient mask height | `100px` |
| `--hy-read-more-line-height` | Line height | `30px` |
| `--hy-read-more-mask-background` | Gradient background color of the expand mask (fades from transparent to this color) | Follows `--hy-background--container` |
| `--hy-read-more-primary` | Primary color | Follows `--hy-primary` |
| `--hy-read-more-text-margin` | Right margin of the expand text | Follows `--hy-border-margin-padding-sm` |
| `--hy-read-more-toggle-margin` | Top and bottom margins of the expand button | Follows `--hy-border-margin-padding-sm` |

<demo-model url="pages-design/readMore/readMore"></demo-model>