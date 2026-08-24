# hy-skeleton Skeleton Screen

> A combination of placeholder graphics displayed while waiting for content to load, featuring dynamic loading effects to reduce user waiting anxiety.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :warning: Notes

::: warning Notes

- The skeleton screen is displayed when the `loading` property is `undefined` or `true`; the slot content is displayed when it is `false`
- The `rowCol` property takes precedence over the `theme` property; if `rowCol` is set, the `theme` configuration will be ignored
- Animation effects add a certain amount of performance overhead; it is recommended to disable animations in performance-sensitive scenarios
- The component supports virtual hosts and global styles, making it easy to integrate into existing projects

:::

## :japanese_castle: Basic Usage Example

By default, the `text` theme is used, displaying a text skeleton screen.

```html
<hy-skeleton />
```

### Different Themes

Four themes are supported: `text`, `avatar`, `paragraph`, and `image`.

::: tip Tip

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

Use the `loading` property to control the visibility of the skeleton screen; when `loading` is `true`, the skeleton screen is displayed, and when it is `false`, the actual content is shown.

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

The `rowCol` property allows you to customize the number of rows and columns, width, height, spacing, and more of the skeleton screen.

```html
<!-- Example 1: A three-row skeleton, with one column in the first row, one column in the second row, and two columns in the third row -->
<hy-skeleton :rowCol="[1, 1, 2]" />

<!-- Example 2: Customize the width of the third row to 100px -->
<hy-skeleton :rowCol="[1, 1, { width: '100px' }]" />

<!-- Example 3: The third row has two columns, with custom width, height, and spacing -->
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

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| theme | Skeleton style, optional values: `text`, `avatar`, `paragraph`, `image` | `string` | text |
| rowCol | Used to set the number of rows and columns, width, height, spacing, etc. | `Array<number \| SkeletonRowColObj \| Array<SkeletonRowColObj>>` | - |
| loading | Whether it is in the loading state; when `true`, the skeleton screen is displayed; when `false`, the actual content is displayed | `boolean` | true |
| animation | Animation effect, optional values: `gradient` (gradient), `flashed` (flashing); if empty, no animation | `string` | - |
| customStyle | Defines the external styles to be used | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Slots

| Slot Name  | Description                 | Received Value |
| ------- | -------------------- | ------ |
| default | Content displayed when loading is complete | -      |

### Typings

::: detail Type Description

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

<demo-model url="pages-design/skeleton/skeleton"></demo-model>