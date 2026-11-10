# Cell Component

> The cell is generally used for a group of lists, such as personal center pages, settings pages, etc.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Example

::: tip Friendly Reminder

If you want to use click events on `hy-cell`, you must set a unique `name` value for each `hy-cell-item` to distinguish which child element was clicked

:::

```html
<template>
    <!-- Global usage -->
    <hy-cell @click="onClick">
        <hy-cell-item
            title="Toolbox"
            name="tools"
            :icon="{ name: IconConfig.SETTING, color: 'red' }"
        ></hy-cell-item>
        <hy-cell-item title="Mine" name="my" sub="I am a magical little box" value="Back"></hy-cell-item>
        <hy-cell-item title="Disabled" name="disabled" disabled></hy-cell-item>
    </hy-cell>
</template>
```

### Setting the Icon Content

```vue
<template>
    <hy-cell>
        <hy-cell-item
            title="Toolbox"
            :icon="{ name: IconConfig.SETTING, color: 'red' }"
        ></hy-cell-item>
    </hy-cell>

    <!-- Custom icon -->
    <hy-cell>
        <hy-cell-item title="Toolbox">
            <template #icon>
                <hy-icon name="tools" />
            </template>
        </hy-cell-item>
    </hy-cell>
</template>
```

### Right-Side Content Positioning

- Change the position of the value by setting `arrange`
    - `left`: left
    - `center`: center
    - `right`: right

```html
<template>
    <hy-cell arrange="left"></hy-cell>
    <hy-cell arrange="center"></hy-cell>
    <hy-cell arrange="right"></hy-cell>
</template>
```

### Cell Size

- Set the cell size via `size`
    - `small`: small
    - `medium`: default
    - `large`: large

```html
<template>
    <hy-cell size="small"></hy-cell>
    <hy-cell size="medium"></hy-cell>
    <hy-cell size="large"></hy-cell>
</template>
```

### Rotating the Right Arrow (Up/Down/Left)

- Set the direction via `arrow-direction`
    - `up`: up
    - `right`: right
    - `down`: down
    - `left`: left

```html
<template>
    <hy-cell arrow-direction="up"></hy-cell>
    <hy-cell arrow-direction="right"></hy-cell>
    <hy-cell arrow-direction="down"></hy-cell>
    <hy-cell arrow-direction="left"></hy-cell>
</template>
```

### Page Navigation

```html
<template>
    <hy-cell>
        <hy-cell-item url="/page/index/tools"></hy-cell-item>
    </hy-cell>
</template>
```

## API

### Cell Props

| Parameter       | Description                                                          | Type               | Default |
| -------------- | -------------------------------------------------------------------- | ------------------ | ------- |
| border         | Whether to show the bottom border of the cell                        | `boolean`          | true    |
| disabled       | Whether to disable the cell                                          | `boolean`          | false   |
| clickable      | Whether to enable click feedback (shown as a gray background on tap) | `boolean`          | false   |
| size           | Size of the cell, default unit is px for numeric values              | `string`\|`number` | medium  |
| arrange        | Whether the content is vertically centered (mainly for the value part on the right) | `string` | right |
| isRightIcon    | Whether to show the right-side icon                                  | `boolean`          | true    |
| arrowDirection | Direction of the right arrow                                         | `string`           | right   |
| customStyle    | Custom external styles to be used                                    | `CSSProperties`    | -       |
| customClass    | Custom external class name                                           | `string`           | -       |

### CellItem Props

| Parameter       | Description                                  | Type               | Default |
| -------------- | -------------------------------------------- | ------------------ | ------- |
| title          | Header title                                 | `string`           | -       |
| sub            | Small hint below the title                   | `string`           | -       |
| disabled       | Whether to disable the cell                  | `boolean`          | false   |
| value          | Right-side content                           | `string`\|`number` | -       |
| icon           | Left icon, [Icon API](icon#api)              | `HyIconProps`      | -       |
| rightIcon      | Right icon, [Icon API](icon#api)             | `HyIconProps`      | -       |
| arrowDirection | Direction of the right arrow                 | `string`           | right   |
| url            | URL address to navigate to after clicking    | `string`           | -       |
| stop           | Whether clicking the cell stops event propagation | `boolean`      | true    |
| name           | Identifier, returned in the click event      | `string`\|`number` | -       |
| customStyle    | Custom external styles to be used            | `CSSProperties`    | -       |
| customClass    | Custom external class name                   | `string`           | -       |

## Events

### Cell Emits

| Event Name | Description                          | Callback Parameters   |
| ---------- | ------------------------------------ | --------------------- |
| click      | Triggered when the cell list is clicked | name: unique identifier |

### CellItem Emits

| Event Name | Description                          | Callback Parameters   |
| ---------- | ------------------------------------ | --------------------- |
| click      | Triggered when the cell list is clicked | name: unique identifier |

### Cell Slots

| Slot Name | Description                            | Slot Props |
| --------- | -------------------------------------- | ---------- |
| default   | Default slot for CellItem components   | title      |

### CellItem Slots

| Slot Name  | Description                          | Slot Props |
| ---------- | ------------------------------------ | ---------- |
| title      | Custom content for the cell title    | title      |
| icon       | Custom left-side icon                | icon       |
| sub        | Custom subtitle content              | sub        |
| value      | Custom right-side value content      | record     |
| right-icon | Custom right-side icon content       | icon       |

### CSS Variables

| Variable Name                     | Description             | Default Value                        |
| --------------------------------- | ----------------------- | ------------------------------------ |
| `--hy-cell-item-icon-margin`      | Right margin of the icon | `10px`                              |
| `--hy-cell-item-value-max-width`  | Max width of the right-side value | `90%`                     |
| `--hy-cell-item-font-size-large`  | large title font size   | Follows `--hy-font-size-lg` (36rpx)   |
| `--hy-cell-item-font-size-medium` | medium title font size  | Follows `--hy-font-size-base` (28rpx) |
| `--hy-cell-item-font-size-small`  | small title font size   | Follows `--hy-font-size-sm` (24rpx)   |
| `--hy-cell-item-sub-color`        | Description text color  | Follows `--hy-text-color--grey`       |
| `--hy-cell-item-sub-font-size`    | Description text font size | Follows `--hy-font-size-sm` (24rpx) |
| `--hy-cell-item-value-color`      | Right-side value text color | Follows `--hy-text-color--grey`   |
| `--hy-cell-item-arrow-color`      | Right arrow color       | Follows `--hy-text-color--3`          |
| `--hy-cell-item-disabled-color`   | Disabled text color     | Follows `--hy-text-color--disabled`   |

<demo-model url="pages-design/cell/cell"></demo-model>