# Search Component

> A search component that integrates the features commonly needed in a search box. Users can import it with one click and use it out of the box.

## :pushpin:Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :warning:Notes

::: warning Notes

- When `showAction` is `true`, the right control is displayed; clicking it triggers the `confirm` event instead of the `search` event
- `searchIcon` supports passing `false` to hide the icon, or an icon configuration object

:::

## :japanese_castle:Basic Usage Examples

### Basic Usage

```html
<template>
    <hy-search v-model="keyword" @search="onSearch"></hy-search>
</template>

<script setup>
    import { ref } from 'vue';

    const keyword = ref('');

    const onSearch = (event, value) => {
        console.log('Search:', value);
    };
</script>
```

### Setting the Input Shape

```html
<template>
    <hy-search shape="circle"></hy-search>
    <hy-search shape="square"></hy-search>
</template>
```

### Setting the Text Alignment Inside the Input

```html
<template>
    <hy-search inputAlign="left"></hy-search>
    <hy-search inputAlign="center"></hy-search>
    <hy-search inputAlign="right"></hy-search>
</template>
```

### Enabling/Disabling the Clear Control

```html
<template>
    <hy-search :clearable="true"></hy-search>
    <hy-search :clearable="false"></hy-search>
</template>
```

### Setting the Right Control

```html
<template>
    <hy-search :showAction="true" actionText="Search"></hy-search>
</template>
```

### Right Control with Animation

```html
<template>
    <hy-search :showAction="true" actionText="Search" animation></hy-search>
</template>
```

### Custom Styles

```html
<template>
    <hy-search
        inputAlign="center"
        borderColor="#ddd"
        :height="40"
        :disabled="false"
        bgColor="#f5f5f5"
        color="#333"
        placeholderColor="#999"
    ></hy-search>
</template>
```

### Customizing the Left Icon

```html
<template>
    <hy-search :searchIcon="{ name: 'search' }"></hy-search>
    <hy-search :searchIcon="false"></hy-search>
</template>
```

### Setting the Maximum Input Length

```html
<template>
    <hy-search :maxlength="20"></hy-search>
</template>
```

### Setting the Search Label

```html
<template>
    <hy-search label="Search" v-model="keyword"></hy-search>
</template>

<script setup>
    import { ref } from 'vue';

    const keyword = ref('');
</script>
```

### Listening to Various Events

```html
<template>
    <hy-search
        v-model="keyword"
        @change="onChange"
        @search="onSearch"
        @confirm="onConfirm"
        @blur="onBlur"
        @focus="onFocus"
        @clear="onClear"
        @click="onClick"
        @clickIcon="onClickIcon"
    ></hy-search>
</template>

<script setup>
    import { ref } from 'vue';

    const keyword = ref('');

    const onChange = (value) => {
        console.log('Content changed:', value);
    };

    const onSearch = (event, value) => {
        console.log('Search:', value);
    };

    const onConfirm = (value) => {
        console.log('Right control clicked:', value);
    };

    const onBlur = (event, value) => {
        console.log('Lost focus:', value);
    };

    const onFocus = (event, value) => {
        console.log('Gained focus:', value);
    };

    const onClear = () => {
        console.log('Content cleared');
    };

    const onClick = () => {
        console.log('Input clicked (when disabled is true)');
    };

    const onClickIcon = (keyword) => {
        console.log('Icon clicked:', keyword);
    };
</script>
```

## API

### Search Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Two-way binding for the input search value | `string` | - |
| shape | Search box shape, `circle` - round, `square` - square | `circle`\|`square` | circle |
| bgColor | Search box background color | `string` | - |
| placeholder | Placeholder text content | `string` | Search content |
| confirmType | Sets the text of the button in the bottom-right corner of the keyboard; see the uni-app documentation for compatibility details | `send`\|`search`\|`next`\|`go`\|`done` | search |
| clearable | Whether to enable the clear control | `boolean` | true |
| autoFocus | Whether to automatically gain focus | `boolean` | false |
| autoBlur | Whether to automatically lose focus when the keyboard is collapsed | `boolean` | true |
| adjustPosition | Whether to automatically push the page up when the keyboard pops up | `boolean` | true |
| showAction | Whether to show the right control | `boolean` | true |
| actionStyle | Style of the right control, in object form | `CSSProperties` | {} |
| actionText | Text of the right control | `string` | Search |
| inputAlign | Horizontal alignment of the input content; optional values: `left`, `center`, `right` | `string` | left |
| inputStyle | Custom input style, in object form | `CSSProperties` | {} |
| disabled | Whether to disable the input | `boolean` | false |
| borderColor | Border color; a border is only shown when a color is configured | `string` | transparent |
| color | Input font color | `string` | - |
| placeholderColor | Color of the placeholder | `string` | - |
| searchIcon | Collection of icon properties for the icon on the left side of the input; can be `false` (to hide the icon) or an icon configuration object; see [Icon API](./icon#api) for details | `HyIconProps` \| `boolean` | { name: SEARCH } |
| margin | Spacing between the component and other elements; supports a string (e.g., "30px") or a number | `string` \| `number` | 0 |
| animation | Whether to enable animation; see the notes above | `boolean` | false |
| maxlength | Maximum input length; -1 means unlimited | `number` | -1 |
| height | Input height; numeric values use px by default | `number` | 30 |
| label | Text displayed on the left side of the search box | `string` | - |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| change | Triggered when the input content changes | `value: string` — the input value |
| search | Triggered when the user confirms a search (pressing Enter or the "Search" key in the bottom-right corner of the keyboard) | `event: InputOnConfirmEvent`, `value: string` |
| confirm | Triggered when the user clicks the right control | `value: string` — the input value |
| blur | Triggered when the input loses focus | `event: InputOnBlurEvent`, `keyword: string` |
| focus | Triggered when the input gains focus | `event: InputOnFocusEvent`, `keyword: string` |
| clear | Triggered when the content is cleared, after `clearable` is configured | - |
| click | Triggered when the input is clicked while `disabled` is `true`; used for navigating to the search page | - |
| clickIcon | Triggered when the left icon is clicked | `keyword: string` — the current input value |

<demo-model url="pages-design/search/search"></demo-model>