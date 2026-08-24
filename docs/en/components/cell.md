# Cell Component

> The cell component is generally used for groups of lists, such as personal center pages, settings pages, etc.

## :pushpin:Platform Difference Notes

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle:Basic Usage Example

::: tip Tip

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

### Setting the icon content

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

### Right-side content positioning

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

### Cell size

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

### Rotating the right arrow up, down, or left

- Set the arrow direction via `arrow-direction`
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

### Page navigation

```html
<template>
    <hy-cell>
        <hy-cell-item url="/page/index/tools"></hy-cell-item>
    </hy-cell>
</template>
```

## API

### Cell Props

| Parameter       | Description                                                        | Type               | Default |
| -------------- | ------------------------------------------------------------------ | ------------------ | ------- |
| border         | Whether to show the cell's bottom border                           | `boolean`          | true    |
| disabled       | Whether to disable the cell                                        | `boolean`          | false   |
| clickable      | Whether to enable click feedback (shown as a gray background on click) | `boolean`       | false   |
| size           | Size of the cell, default unit is px                               | `string`\|`number` | medium  |
| arrange        | Whether the content is vertically centered (mainly for the value on the right side) | `string`  | right   |
| isRightIcon    | Whether to show the right icon                                     | `boolean`          | true    |
| arrowDirection | Direction of the right arrow                                       | `string`           | right   |
| customStyle    | Define external styles to be used                                  | `CSSProperties`    | -       |
| customClass    | Custom external class name                                         | `string`           | -       |

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
| stop           | Whether to stop event propagation on cell click | `boolean`       | true    |
| name           | Identifier, used for returning in the click event | `string`\|`number` | -    |
| customStyle    | Define external styles to be used            | `CSSProperties`    | -       |
| customClass    | Custom external class name                   | `string`           | -       |

## Events

### Cell Emits

| Event Name | Description                        | Callback Parameter |
| ---------- | ---------------------------------- | ------------------ |
| click      | Triggered when a cell in the list is clicked | name: unique identifier |

### CellItem Emits

| Event Name | Description                        | Callback Parameter |
| ---------- | ---------------------------------- | ------------------ |
| click      | Triggered when a cell in the list is clicked | name: unique identifier |

### Cell Slots

| Slot Name | Description                        | Received Value |
| --------- | ---------------------------------- | -------------- |
| default   | Default insertion of CellItem components | title    |

### CellItem Slots

| Slot Name  | Description                            | Received Value |
| ---------- | -------------------------------------- | -------------- |
| title      | Custom content for the cell title      | title          |
| icon       | Custom left icon                       | icon           |
| sub        | Custom subtitle content                | sub            |
| value      | Custom right-side value content        | record         |
| right-icon | Custom right-side icon content         | icon           |

<demo-model url="pages-design/cell/cell"></demo-model>