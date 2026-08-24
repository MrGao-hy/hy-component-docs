# ReadMore Expand-to-Read-More Component

> This component is generally used in scenarios where the content is long: part of it is initially collapsed, and clicking expands the full content.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-read-more>
    <rich-text :nodes="content"></rich-text>
</hy-read-more>
```

```ts
import { ref } from 'vue';

const content = ref(`A mountain need not be high; with an immortal dwelling, it gains renown. Water need not be deep; with a dragon, it gains spirit. This is a humble room, but my virtue makes it fragrant.
Moss stains the steps green; grass colors seep blue through the curtain. Learned scholars chat and laugh here; among visitors there are no simpletons. One may softly play the unadorned zither and read gilded scriptures.
No pipes and strings clamor in the ears, no official documents weary the body. Like Zhuge Liang's hut in Nanyang, like Yang Ziyun's pavilion in western Shu. As Confucius said: "What humbleness is there?"`);
```

### Configuring the Expansion Height

- By configuring the `showHeight` height (in px), the button labeled "Expand to read full text" will only appear if the height of the content passed in via the slot exceeds this value

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

- If you don't want the shadow, simply set `backgroundImage` to `none`; adjust `paddingTop` and `marginTop` to suitable values as needed.

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

Sometimes the content to be displayed is fetched from the backend. When the component's internal mounted lifecycle initializes, the request has not yet returned, which can cause the content height to be inaccurate during initialization. After the request completes and rendering finishes (i.e., this.$nextTick), you can call the component's init method via ref to re-initialize it.

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

    // Create a component reference
    const uReadMoreRef = ref(null);

    // Simulate a backend request
    async function fetchData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`A mountain need not be high; with an immortal dwelling, it gains renown. Water need not be deep; with a dragon, it gains spirit. This is a humble room, but my virtue makes it fragrant.
      Moss stains the steps green; grass colors seep blue through the curtain. Learned scholars chat and laugh here; among visitors there are no simpletons. One may softly play the unadorned zither and read gilded scriptures.
      No pipes and strings clamor in the ears, no official documents weary the body. Like Zhuge Liang's hut in Nanyang, like Yang Ziyun's pavilion in western Shu. As Confucius said: "What humbleness is there?"`);
            }, 2000);
        });
    }

    // Called after the component is mounted
    onMounted(async () => {
        await fetchData();
        content.value = text;

        // Wait for the DOM to update
        await nextTick();

        // Call the child component's init method
        if (uReadMoreRef.value) {
            uReadMoreRef.value.init();
        }
    });
</script>
```

## API

### readMore Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| showHeight | The "expand full text" button is only displayed when the content exceeds this height; default unit is px | `string`\|`number` | 400 |
| toggle | Whether to show a collapse button after expanding | `boolean` | false |
| closeText | Prompt text when collapsed | `string` | Expand to read full text |
| openText | Prompt text when expanded | `string` | Collapse |
| color | Color of the prompt text | `string` | - |
| fontSize | Size of the prompt text; default unit is px | `string`\|`number` | 14 |
| textIndent | Number of characters for the first-line indent of paragraphs | `string` | 2em |
| name | Used as the callback parameter returned in the open and close events | `string` | - |
| shadowStyle | Custom handling of the shadow, in object form | `CSSProperties` | - |
| customStyle | External styles to be applied | `CSSProperties` | - |

### Events

| Event Name | Description | Callback Parameters |
| ------ | ---------------- | ------------------------------ |
| open | Triggered when the content is expanded | name - the value of the name parameter passed in props |
| close | Triggered when the content is collapsed | name - the value of the name parameter passed in props |

### Slots

| Slot Name | Description | Accepted Values |
| ------- | -------- | ------ |
| default | Default slot | - |

### Methods

| Name | Description |
| ------ | ------------------------------ |
| init | Re-initializes the component's internal height calculation process |

<demo-model url="pages-design/readMore/readMore"></demo-model>