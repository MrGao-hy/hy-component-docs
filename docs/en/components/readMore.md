# ReadMore Expand-to-Read-More Component

> This component is typically used for scenarios where the content is long: part of it is initially collapsed, and clicking expands the full content.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-read-more>
    <rich-text :nodes="content"></rich-text>
</hy-read-more>
```

```ts
import { ref } from 'vue';

const content = ref(`A mountain needs no height; with immortals it gains fame. Water needs no depth; with a dragon it gains spirit. Though this is a humble room, my virtue lends it fragrance.
Moss creeps green up the steps; grass hues drift blue through the blinds. Scholars chat and laugh here; no unlearned visitors come. One may strum the plain zither or read the golden classics.
No strings and pipes to disturb the ear, no scrolls and ledgers to weary the body. Like Zhuge's cottage in Nanyang and Ziyun's pavilion in western Shu. As Confucius said: "How can it be humble?"`);
```

### Configuring the Expand Height

- By configuring the `showHeight` height in px, the "Expand to read full text" button will only appear if the height of the content passed in via the slot exceeds this value

```html
<hy-read-more showHeight="600">
    <rich-text :nodes="content"></rich-text>
</hy-read-more>
```

### Custom Styles

::: warning Note

The upper part of this component has a white fading shadow, used to blend the click area with the text content. If you don't want this shadow, you can adjust the shadowStyle object, whose internals are as follows:

```javascript
{
    // #ifndef APP-NVUE
    backgroundImage: "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 80%)",
    // #endif
    // #ifdef APP-NVUE
    // Complex backgroundImage properties are not supported on nvue
    backgroundImage: "linear-gradient(to top, #fff, rgba(255, 255, 255, 0.5))",
    // #endif
    paddingTop: "100px",
    marginTop: "-100px",
}
```

:::

- If you don't want the shadow, simply set `backgroundImage` to `none`, and adjust `paddingTop` and `marginTop` to appropriate values yourself.

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

### Asynchronous Initialization

::: warning Note

Sometimes the content to be displayed is fetched from the backend. When the component initializes in its internal mounted lifecycle, the request has not yet returned, which can cause an inaccuracy in the content height during initialization. After the request completes and rendering finishes (i.e., in `this.$nextTick`), you can call the component's init method via ref to re-initialize it.

:::

```html
<template>
    <hy-read-more showHeight="600" ref="uReadMoreRef">
        <rich-text :nodes="content"></rich-text>
    </hy-read-more>
</template>

<script setup>
    import { ref, onMounted, nextTick } from 'vue';

    // Create reactive data
    const content = ref('');

    // Create component reference
    const uReadMoreRef = ref(null);

    // Simulate a backend request
    async function fetchData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`A mountain needs no height; with immortals it gains fame. Water needs no depth; with a dragon it gains spirit. Though this is a humble room, my virtue lends it fragrance.
      Moss creeps green up the steps; grass hues drift blue through the blinds. Scholars chat and laugh here; no unlearned visitors come. One may strum the plain zither or read the golden classics.
      No strings and pipes to disturb the ear, no scrolls and ledgers to weary the body. Like Zhuge's cottage in Nanyang and Ziyun's pavilion in western Shu. As Confucius said: "How can it be humble?"`);
            }, 2000);
        });
    }

    // Called after the component is mounted
    onMounted(async () => {
        await fetchData();
        content.value = text;

        // Wait for the DOM to update
        await nextTick();

        // Call the init method of the child component
        if (uReadMoreRef.value) {
            uReadMoreRef.value.init();
        }
    });
</script>
```

## API

### readMore Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| showHeight | The "expand full text" button is only displayed when the content exceeds this height; the default unit is px | `string`\|`number` | 400 |
| toggle | Whether to show a collapse button after expanding | `boolean` | false |
| closeText | Prompt text when collapsed | `string` | Expand to read full text |
| openText | Prompt text when expanded | `string` | Collapse |
| color | Color of the prompt text | `string` | - |
| fontSize | Size of the prompt text; the default unit is px | `string`\|`number` | 14 |
| textIndent | Number of characters to indent the first line of a paragraph | `string` | 2em |
| name | Used as the callback parameter returned in the open and close events | `string` | - |
| shadowStyle | Custom handling of the shadow, in object form | `CSSProperties` | - |
| customStyle | External styles to be applied | `CSSProperties` | - |

### Events

| Event Name | Description | Callback Parameter |
| ---------- | ----------- | ------------------ |
| open       | Triggered when the content is expanded | name - the value of the name prop passed in |
| close      | Triggered when the content is collapsed | name - the value of the name prop passed in |

### Slots

| Slot Name | Description | Accepted Value |
| --------- | ----------- | -------------- |
| default   | Default slot | -              |

### Methods

| Method | Description |
| ------ | ----------- |
| init   | Re-initializes the component's internal height calculation process |

### CSS Variables

| Variable Name                 | Description | Default |
| ----------------------------- | ----------- | ------- |
| `--hy-read-more-font-size`   | Font size | `15px`  |
| `--hy-read-more-mask-height` | Gradient mask height | `100px` |
| `--hy-read-more-line-height` | Line height | `30px`  |

<demo-model url="pages-design/readMore/readMore"></demo-model>