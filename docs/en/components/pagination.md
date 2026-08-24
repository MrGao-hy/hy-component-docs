# Pagination Component

> When there is too much data, use pagination to break it down.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-pagination v-model="value" :total="999"></hy-pagination>
```

```ts
import { ref } from 'vue';

const value = ref<number>(1);
```

### Show Icons

- By setting `show-icon`, the pagination navigation is displayed as icons

```html
<template>
    <hy-pagination v-model="value" :total="999" show-icon></hy-pagination>
</template>
```

### Text Prompt

- By setting `show-message`, display a text prompt

```html
<template>
    <hy-pagination v-model="value" :total="999" show-message></hy-pagination>
</template>
```

### Items per Page

- By setting `pageSize`, display the number of items shown per page

```html
<template>
    <hy-pagination v-model="value" :total="999" :page-size="20"></hy-pagination>
</template>
```

### Set Display Text

- By setting `prevText`, display the previous page button text
- By setting `nextText`, display the next page button text

```html
<template>
    <hy-pagination v-model="value" :total="999" prevText="Prev" nextText="Next"></hy-pagination>
</template>
```

## API

### Pagination Props

| Parameter      | Description                                                        | Type            | Default Value |
| -------------- | ------------------------------------------------------------------ | --------------- | ------------- |
| v-model        | Current page                                                       | `number`        | 1             |
| totalPage      | Total number of pages; if `total` is provided, it takes precedence when calculating the page count | `number` | 1      |
| showIcon       | Whether to show pagination icons                                   | `boolean`       | false         |
| showMessage    | Whether to show the text prompt                                    | `boolean`       | false         |
| total          | Total number of data items                                         | `number`        | -             |
| pageSize       | Page size                                                          | `number`        | 10            |
| prevText       | Previous page button text                                          | `string`        | Previous page |
| nextText       | Next page button text                                              | `string`        | Next page     |
| hideIfOnePage  | Whether to hide when there is only one page in total               | `boolean`       | true          |
| customStyle    | Custom external styles to be applied                               | `CSSProperties` | -             |
| customClass    | Custom external class name                                         | `string`        | -             |

### Events

| Event Name | Description       | Callback Parameter                      |
| ---------- | ----------------- | --------------------------------------- |
| change     | Value change event | value: value is the current page number |

<demo-model url="pages-design/pagination/pagination"></demo-model>