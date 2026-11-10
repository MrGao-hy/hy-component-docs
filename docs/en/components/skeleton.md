# hy-skeleton Skeleton

> A combination of placeholder graphics displayed while waiting for content to load, featuring dynamic loading effects to reduce user waiting anxiety.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :warning: Notes

::: warning Notes

- The skeleton screen is displayed when the `loading` prop is `undefined` or `true`; the slot content is displayed when it is `false`
- The `rowCol` prop takes precedence over the `theme` prop. If `rowCol` is set, the `theme` configuration will be ignored
- Animation effects add some performance overhead; it is recommended to disable animations in performance-sensitive scenarios
- The component supports virtualized host and global styles, making it easy to integrate into existing projects

:::

## :japanese_castle: Basic Usage Examples

By default, the `text` theme is used to display a text skeleton screen.

```html
<hy-skeleton />
```

### Different Themes

Four themes are supported: `text`, `avatar`, `paragraph`, and `image`.

::: tip Tips

- **text**: Text theme, displays a single line of text by default
- **avatar**: Avatar theme, displays a circular avatar
- **image**: Image theme, displays a rectangular image placeholder
- **paragraph**: Paragraph theme, displays multiple lines of text, with the last line at 55% width

:::

```html
<hy-skeleton theme="text" />
<hy-skeleton theme="avatar" />
<hy-skeleton theme="paragraph" />
<hy-skeleton theme="image" />
```

### Loading State

Use the `loading` prop to control the visibility of the skeleton screen. When `loading` is `true`, the skeleton screen is shown; when it is `false`, the actual content is shown.

```html
<hy-skeleton :loading="loading">
    <view>Actual content</view>
</hy-skeleton>
```

### Animation Effects

Two animation effects are supported: `gradient` (gradient loading animation) and `flashed` (flashing loading animation).

```html
<hy-skeleton animation="gradient" />
<hy-skeleton animation="flashed" />
```

### Custom Rows and Columns

Use the `rowCol` prop to customize the number of rows and columns, width, height, spacing, and more of the skeleton screen.

```html
<!-- Example 1: Three-row skeleton, one column in the first row, one column in the second row, two columns in the third row -->
<hy-skeleton :rowCol="[1, 1, 2]" />

<!-- Example 2: Customize the width of the third row to 100px -->
<hy-skeleton :rowCol="[1, 1, { width: '100px' }]" />

<!-- Example 3: The third row has two columns with custom width, height, and spacing -->
<hy-skeleton
    :rowCol="[1, 2, [{ width: '100px', height: '20px' }, { width: '200px', height: '20px', marginLeft: '10px' }]]"
/>
```

### Complete Example

```html
<template>
    <view>
        <hy-skeleton
            theme="avatar"
            :loading="loading"
            animation="gradient"
            :rowCol="[
        1,
        [
          { width: '24%', height: '16px', marginRight: '16px' },
          { width: '76%', height: '16px' }
        ]
      ]"
        >
            <view>Content displayed after loading</view>
        </hy-skeleton>
    </view>
</template>

<script setup>
    import { ref } from 'vue';

    const loading = ref(true);

    setTimeout(() => {
        loading.value = false;
    }, 2000);
</script>
```

## API

### Skeleton Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| theme | Skeleton style, optional values: `text`, `avatar`, `paragraph`, `image` | `string` | text |
| rowCol | Used to set the number of rows and columns, width, height, spacing, etc. | `Array<number \| SkeletonRowColObj \| Array<SkeletonRowColObj>>` | - |
| loading | Whether in loading state; when `true`, the skeleton screen is shown; when `false`, the actual content is shown | `boolean` | true |
| animation | Animation effect, optional values: `gradient` (gradient), `flashed` (flashing); empty means no animation | `string` | - |
| customStyle | Defines external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Slots

| Slot Name | Description                    | Accepted Values |
| --------- | ------------------------------ | --------------- |
| default   | Content displayed when loading is complete | -      |

### Typings

::: detail Type Definitions

```ts
export type SkeletonTheme = 'text' | 'avatar' | 'paragraph' | 'image';
export type SkeletonAnimation = 'gradient' | 'flashed';
export type SkeletonRowColObj = {
    [key: string]: any;
    type?: 'rect' | 'circle' | 'text';
    size?: string | number;
    width?: string | number;
    height?: string | number;
    margin?: string | number;
    background?: string;
    marginLeft?: string | number;
    marginRight?: string | number;
    borderRadius?: string | number;
    backgroundColor?: string;
};
export type SkeletonRowCol = number | SkeletonRowColObj | Array<SkeletonRowColObj>;
export type SkeletonThemeVars = {
    notifyPadding?: string;
    notifyFontSize?: string;
    notifyTextColor?: string;
    notifyLineHeight?: number | string;
    notifyDangerBackground?: string;
    notifyPrimaryBackground?: string;
    notifySuccessBackground?: string;
    notifyWarningBackground?: string;
};
```

:::

### CSS Variables

| Variable Name                 | Description                              | Default                           |
| ----------------------------- | ---------------------------------------- | -------------------------------- |
| `--hy-skeleton-height`        | Content placeholder height               | `20px`                           |
| `--hy-skeleton-circle-size`   | Circular avatar placeholder size         | `48px`                           |
| `--hy-skeleton-radius`        | Skeleton block border radius (text/col)  | Follows `--hy-radius-sm` (8rpx)    |
| `--hy-skeleton-rect-radius`   | Rectangular skeleton border radius       | Follows `--hy-radius-base` (20rpx) |
| `--hy-skeleton-circle-radius` | Circular skeleton border radius          | Follows `--hy-radius-circle` (50%) |

<demo-model url="pages-design/skeleton/skeleton"></demo-model>