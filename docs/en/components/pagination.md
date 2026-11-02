# Pagination

> When the data volume is too large, use pagination to break up the data.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage

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

### Text Tips

- By setting `show-message`, text tips are displayed

```html
<template>
    <hy-pagination v-model="value" :total="999" show-message></hy-pagination>
</template>
```

### Items Per Page

- By setting `pageSize`, the number of items displayed per page is configured

```html
<template>
    <hy-pagination v-model="value" :total="999" :page-size="20"></hy-pagination>
</template>
```

### Set Display Text

- By setting `prevText`, the previous page button text is displayed
- By setting `nextText`, the next page button text is displayed

```html
<template>
    <hy-pagination v-model="value" :total="999" prevText="Prev" nextText="Next"></hy-pagination>
</template>
```

## API

### Pagination Props

| Parameter     | Description                                                        | Type            | Default Value |
| ------------- | ------------------------------------------------------------------ | --------------- | ------------- |
| v-model       | Current page                                                       | `number`        | 1             |
| totalPage     | Total number of pages; if `total` is set, it takes priority when calculating the page count | `number` | 1      |
| showIcon      | Whether to show pagination icons                                   | `boolean`       | false         |
| showMessage   | Whether to show text tips                                          | `boolean`       | false         |
| total         | Total number of data items                                         | `number`        | -             |
| pageSize      | Page size                                                          | `number`        | 10            |
| prevText      | Previous page button text                                          | `string`        | Previous Page |
| nextText      | Next page button text                                              | `string`        | Next Page     |
| hideIfOnePage | Whether to hide when there is only one page                        | `boolean`       | true          |
| customStyle   | Custom external styles to be applied                               | `CSSProperties` | -             |
| customClass   | Custom external class name                                         | `string`        | -             |

### Events

| Event Name | Description      | Callback Parameter                 |
| ---------- | ---------------- | ---------------------------------- |
| change     | Value change event | value: the current page number   |

### CSS Variables

| Variable Name | Description | Default Value |
| --- | --- | --- |
| `--hy-pagination-nav-min-width` | Minimum width of the previous/next page buttons | `60px` |
| `--hy-pagination-nav-active-color` | Active color of the previous/next page buttons | `rgba(0, 0, 0, 0.65)` |
| `--hy-pagination-nav-disabled-color` | Disabled color of the previous/next page buttons | `rgba(0, 0, 0, 0.15)` |
| `--hy-pagination-font-size` | Font size of the info text | Follows `--hy-font-size-sm` (24rpx) |

<demo-model url="pages-design/pagination/pagination"></demo-model>