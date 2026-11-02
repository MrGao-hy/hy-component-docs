# ReadMore Expand to Read More Component

> This component is generally used in scenarios where the content is long, part of it is initially collapsed, and clicking expands the full content.

## :pushpin:Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle:Basic Usage

```html
<!-- Global usage -->
<hy-read-more>
    <rich-text :nodes="content"></rich-text>
</hy-read-more>
```

```ts
import { ref } from 'vue';

const content = ref(`山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`);
```

### Configuring Expansion Height

- By configuring the `showHeight` height (in px), the button with the text "Expand to read full text" will only appear when the height of the content passed into the slot exceeds this value.

```html
<hy-read-more showHeight="600">
    <rich-text :nodes="content"></rich-text>
</hy-read-more>
```

### Custom Styles

::: warning Note

The upper part of this component has a white faded shadow, used to blend the click area with the text content. If you don't want this shadow, you can adjust the shadowStyle object, whose internal structure is as follows:

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

- If you don't want the shadow, simply set `backgroundImage` to `none`. As for `paddingTop` and `marginTop`, just adjust them to appropriate values yourself.

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

Sometimes the content to be displayed is fetched from the backend. When the component initializes in its internal mounted lifecycle hook, the request has not yet returned, which can cause an inaccuracy in the content height during initialization. After the request completes and rendering is finished (i.e., in this.$nextTick), you can call the component's init method via ref to re-initialize it.

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
                resolve(`山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
      苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
      无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`);
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

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| showHeight | The "expand full text" button is only displayed when the content exceeds this height; default unit is px | `string`\|`number` | 400 |
| toggle | Whether to show the collapse button after expanding | `boolean` | false |
| closeText | Prompt text when collapsed | `string` | Expand to read full text |
| openText | Prompt text when expanded | `string` | Collapse |
| color | Color of the prompt text | `string` | - |
| fontSize | Font size of the prompt text; default unit is px | `string`\|`number` | 14 |
| textIndent | Number of characters to indent the first line of a paragraph | `string` | 2em |
| name | Returned as a callback parameter in the open and close events | `string` | - |
| shadowStyle | Custom handling of the shadow, in object form | `CSSProperties` | - |
| customStyle | Defines external styles to be applied | `CSSProperties` | - |

### Events

| Event Name | Description | Callback Parameters |
| ------ | ---------------- | ------------------------------ |
| open   | Triggered when the content is expanded | name - the value of the name parameter passed in via props |
| close  | Triggered when the content is collapsed | name - the value of the name parameter passed in via props |

### Slots

| Slot Name  | Description     | Accepted Value |
| ------- | -------- | ------ |
| default | Default slot | -      |

### Methods

| Name | Description                           |
| ------ | ------------------------------ |
| init   | Re-initializes the component's internal height calculation process |

### CSS Variables

| Variable Name | Description | Default Value |
| --- | --- | --- |
| `--hy-read-more-font-size` | Font size | `15px` |
| `--hy-read-more-mask-height` | Gradient mask height | `100px` |
| `--hy-read-more-line-height` | Line height | `30px` |

<demo-model url="pages-design/readMore/readMore"></demo-model>