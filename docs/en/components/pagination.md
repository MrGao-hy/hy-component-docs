# Pagination Component

> When there is too much data, use pagination to break down the data.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Examples

```html
<template>
    <hy-pagination v-model="basicPage" :total="50" :page-size="10"></hy-pagination>
</template>
```

```ts
import { ref } from 'vue';

/** Basic usage: 50 total items, 10 per page, 5 pages in total */
const basicPage = ref<number>(5);
```

### Simple Mode

- By setting `mode` to `simple`, only the current page/total pages and previous/next buttons are displayed, suitable for compact spaces; the default is `multi`, the full page-number mode

```html
<template>
    <hy-pagination v-model="simplePage" mode="simple" :total="120" :page-size="10"></hy-pagination>
</template>
```

### Show Ellipsis

- By setting `pageCount`, control the number of page-number buttons (excluding previous, next, and ellipsis); the ellipsis is shown when the page count exceeds the window

```html
<template>
    <hy-pagination
        v-model="ellipsisPage"
        :total="130"
        :page-size="10"
        :page-count="3"
    ></hy-pagination>
</template>
```

### Icon Buttons

- By setting `show-icon`, the previous and next buttons are displayed as icons

```html
<template>
    <hy-pagination v-model="iconPage" show-icon :total="50" :page-size="10"></hy-pagination>
</template>
```

### Show Total Count

- By setting `show-message`, display the total count

```html
<template>
    <hy-pagination v-model="messagePage" :total="999" show-message></hy-pagination>
</template>
```

### Page Size

- By setting `pageSize`, set the number of items displayed per page

```html
<template>
    <hy-pagination v-model="sizePage" :total="999" :page-size="20"></hy-pagination>
</template>
```

### Set Display Text

- By setting `prevText`, set the previous page button text
- By setting `nextText`, set the next page button text
- By setting `ellipsisText`, set the page-number ellipsis text

```html
<template>
    <hy-pagination
        v-model="textPage"
        :total="999"
        prevText="Prev"
        nextText="Next"
        ellipsisText="···"
    ></hy-pagination>
</template>
```

### Custom Slots

- Customize the page-number content via the `page` slot; the scope provides `text` (page number text) and `active` (whether it is the current page)
- Customize the previous/next page content via the `prev-text` and `next-text` slots

```vue
<template>
    <hy-pagination v-model="slotPage" :total="50" :page-size="10">
        <template #page="{ text, active }">
            <text
                class="pagination-slot__page"
                :class="{ 'pagination-slot__page--active': active }"
            >
                {{ text }}
            </text>
        </template>
        <template #prev-text>
            <text class="pagination-slot__arrow">←</text>
        </template>
        <template #next-text>
            <text class="pagination-slot__arrow">→</text>
        </template>
    </hy-pagination>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    /** Custom slots: page numbers, previous, and next are all rendered via slots */
    const slotPage = ref<number>(3);
</script>

<style scoped lang="scss">
    /* page slot example: custom page-number font size and weight */
    .pagination-slot__page {
        font-size: 30rpx;
        font-weight: 500;

        &--active {
            font-weight: 700;
        }
    }

    /* prev-text / next-text slot example: replace the default text with arrows */
    .pagination-slot__arrow {
        font-size: 32rpx;
    }
</style>
```

### Directly Specify Total Pages

- When `total` is not passed, you can directly specify the total number of pages via `totalPage`

```html
<template>
    <hy-pagination v-model="countPage" :total-page="8"></hy-pagination>
</template>
```

### Custom Styles

- Override the theme color, radius, and cell background on an ancestor node via [CSS variables](#css-variables)

```vue
<template>
    <view class="pagination-custom">
        <hy-pagination v-model="customPage" :total="999"></hy-pagination>
    </view>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const customPage = ref<number>(1);
</script>

<style lang="scss">
    .pagination-custom {
        /* Override the theme color, cell radius, and track background */
        --hy-pagination-primary: #1bbfe8;
        --hy-pagination-radius: 44rpx;
        --hy-pagination-background: transparent;
    }
</style>
```

## API

### Pagination Props

| Parameter     | Description                                                           | Type                  | Default |
| ------------- | --------------------------------------------------------------------- | --------------------- | ------- |
| v-model       | Current page                                                          | `number`              | 1       |
| mode          | Pagination mode                                                       | `'simple' \| 'multi'` | `multi` |
| totalPage     | Total pages; if total is provided, total takes priority when counting | `number`              | 1       |
| pageCount     | Number of page-number buttons, excluding previous/next and ellipsis   | `number`              | 5       |
| showIcon      | Whether the previous/next buttons use icons                           | `boolean`             | false   |
| showMessage   | Whether to show the total count                                       | `boolean`             | false   |
| total         | Total count                                                           | `number`              | 0       |
| pageSize      | Items per page                                                        | `number`              | 10      |
| prevText      | Previous page text                                                    | `string`              | Prev    |
| nextText      | Next page text                                                        | `string`              | Next    |
| ellipsisText  | Ellipsis text                                                         | `string`              | `...`   |
| hideIfOnePage | Whether to hide when there is only one page                           | `boolean`             | true    |
| customStyle   | External styles to be applied                                         | `CSSProperties`       | -       |
| customClass   | Custom external class name                                            | `string`              | -       |

### Events

| Event Name | Description      | Callback Parameter                  |
| ---------- | ---------------- | ----------------------------------- |
| change     | Value change event | value: value is the current number |

### Slots

| Slot Name | Description                          | Accepted Value                                |
| --------- | ------------------------------------ | --------------------------------------------- |
| page      | Custom page-number content           | `{ text: string \| number, active: boolean }` |
| prev-text | Custom previous page button content  | -                                             |
| next-text | Custom next page button content      | -                                             |

### CSS Variables

#### Size

| Variable Name | Description | Default Value |
| --- | --- | --- |
| `--hy-pagination-item-height` | Cell height, meeting the minimum touch target area on mobile (44px) | `88rpx` |
| `--hy-pagination-item-width` | Minimum width of page-number cells | `72rpx` |
| `--hy-pagination-nav-width` | Minimum width of previous/next page cells | `144rpx` |
| `--hy-pagination-gap` | Cell spacing, ensuring adjacent touch targets do not stick together | `16rpx` |
| `--hy-pagination-radius` | Cell border radius | `12rpx` |
| `--hy-pagination-font-size` | Font size | Follows `--hy-font-size-base` (28rpx) |
| `--hy-pagination-content-padding` | Content area padding | Follows `--hy-border-margin-padding-base` |

#### Colors

| Variable Name | Description | Default Value |
| --- | --- | --- |
| `--hy-pagination-primary` | Theme color | Follows `--hy-primary` |
| `--hy-pagination-background` | Cell background, a light track base ensuring the clickable area is distinguishable | Follows `--hy-background--track` |
| `--hy-pagination-text-color` | Page-number text color, with sufficient contrast in both light/dark themes | Follows `--hy-text-color--grey` |
| `--hy-pagination-nav-color` | Previous/next page text color | Follows `--hy-text-color` |
| `--hy-pagination-disabled-color` | Disabled text color | Follows `--hy-text-color--disabled` |
| `--hy-pagination-disabled-background` | Disabled background color | Follows `--hy-background--disabled` |
| `--hy-pagination-ellipsis-color` | Ellipsis color | Follows `--hy-text-color--3` |
| `--hy-pagination-message-color` | Message text color | Follows `--hy-text-color--3` |

<demo-model url="pages-design/pagination/pagination"></demo-model>