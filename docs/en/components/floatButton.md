# FloatButton Floating Button

> A floating action button component that displays a set of action buttons when pressed.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Examples

```html
<!-- Global usage -->
<hy-float-button></hy-float-button>
```

### FloatButton Default Button

```html
<template>
    <hy-float-button
        text="Customer Service"
        :icon="IconConfig.CUSTOMER_SERVICE"
        iconSize="25"
    ></hy-float-button>
</template>
```

### FloatButton Displaying a Menu Bar

```html
<template>
    <hy-float-button :menus="menus_1"></hy-float-button>
    <hy-float-button :menus="menus_2"></hy-float-button>
</template>

<script setup>
    const menus_1 = ['Menu 1', 'Menu 2', 'Menu 3'];
    const menus_2 = [
        { label: 'Menu 1', url: '/pages/keFu/index' },
        { label: 'Menu 2' },
        { label: 'Menu 3' },
    ];
</script>
```

### FloatButton Size

- Set the float button size via `size`
    - `small`: small button
    - `medium`: medium button
    - `large`: large button
    - Enter a number or a number with a unit to customize the button size

```html
<template>
    <hy-float-button size="small"></hy-float-button>
    <hy-float-buttton size="medium"></hy-float-buttton>
    <hy-float-buttton size="large"></hy-float-buttton>
    <hy-float-buttton :size="20"></hy-float-buttton>
    <hy-float-buttton size="50rpx"></hy-float-buttton>
</template>
```

### FloatButton Shape

- Set different float button shapes via `shape`
    - `circle`: circular
    - `square`: square

```html
<template>
    <hy-float-button shape="circle"></hy-float-button>
    <hy-float-buttton shape="square"></hy-float-buttton>
</template>
```

### FloatButton Open Direction

- Set different expansion directions for the float button via `direction`
    - `column`: expands upward
    - `row`: expands horizontally

::: tip Note

Horizontal display expands to the right by default; if the `left` value is greater than half of the screen width, it will expand to the left instead.

:::

```html
<template>
    <hy-float-button :menus="menus" direction="column"></hy-float-button>
    <hy-float-button :menus="menus" direction="row"></hy-float-button>
    <hy-float-button :menus="menus" left="80vw" direction="row"></hy-float-button>
</template>

<script setup>
    const menus = ['Menu 1', 'Menu 2', 'Menu 3'];
</script>
```

### Whether to Float

- Set whether the float button floats via `float`

```html
<template>
    <hy-float-button :float="true"></hy-float-button>
</template>
```

### Show Shadow

- Set whether the float button displays a shadow via `shadow`

```html
<template>
    <hy-float-button :shadow="true"></hy-float-button>
</template>
```

### Set Opacity

- Set the float button's opacity via `opacity`

```html
<template>
    <hy-float-button :opacity="0.1"></hy-float-button>
</template>
```

## API

### FloatButton Props

| Parameter    | Description                                                                  | Type                     | Default Value                                   |
| ------------ | ---------------------------------------------------------------------------- | ------------------------ | ----------------------------------------------- |
| menus        | Menu collection                                                              | `(string\|AnyObject)[]`  | -                                               |
| direction    | Open direction[^1]                                                           | `row`\|`column`          | column                                          |
| icon         | Icon displayed on the button                                                 | `string`                 | PLUS                                            |
| iconSize     | Button icon size, numeric values default to px                               | `number`\|`string`       | -                                               |
| iconColor    | Button icon color                                                            | `string`                 | #FFFFFF                                         |
| gap          | Spacing between the float button and the edge of the visible area, numeric values default to px | `Object`        | \{ left: 16, right: 16, top: 16, bottom: 40 \}  |
| zIndex       | z-index                                                                      | `number`                 | 10086                                           |
| bgColor      | Button background color                                                      | `string`                 | -                                               |
| text         | Button text                                                                  | `string`                 | -                                               |
| fontSize     | Button text size, numeric values default to px                               | `number`\|`string`       | 12px                                            |
| textColor    | Button text color                                                            | `string`                 | -                                               |
| size         | Button size[^2]                                                              | `string`                 | medium                                          |
| shape        | Button shape[^3]                                                             | `circle`\|`square`       | circle                                          |
| opacity      | Button opacity                                                               | `number`                 | 1                                               |
| shadow       | Whether to show a shadow                                                     | `boolean`                | true                                            |
| float        | Whether to show the floating animation                                       | `boolean`                | true                                            |
| fixed        | Whether to fix the position                                                  | `boolean`                | true                                            |
| draggable    | Whether the float button can be dragged                                      | `boolean`                | true                                            |
| position     | Float button position[^4]                                                    | `string`                 | 'right-bottom'                                  |
| expandable   | Controls whether the menu expands on click                                   | `boolean`                | true                                            |
| customStyle  | Custom external styles to be applied                                         | `CSSProperties`          | -                                               |
| customClass  | Custom external class name                                                   | `string`                 | -                                               |

### gap

| Parameter | Description                           | Type     | Default |
| --------- | ------------------------------------- | -------- | ------- |
| left      | Minimum distance from the left edge   | `number` | 16      |
| right     | Minimum distance from the right edge  | `number` | 16      |
| top       | Minimum distance from the top edge    | `number` | 16      |
| bottom    | Minimum distance from the bottom edge | `number` | 40      |

### Events

| Event Name | Description              | Callback Parameters                     |
| ---------- | ------------------------ | --------------------------------------- |
| click      | Click on the button      | -                                       |
| clickItem  | Click on a menu item     | temp: menu data, index: index           |

### Slots

| Slot Name | Description    | Received Value |
| --------- | -------------- | -------------- |
| default   | Button content | -              |

### CSS Variables

| Variable Name                        | Description            | Default Value                          |
| ------------------------------------ | ---------------------- | -------------------------------------- |
| `--hy-float-button-radius`           | Button border radius   | Follows `--hy-radius-sm` (8rpx)        |
| `--hy-float-button-menus-max-height` | Menu max height        | `250px`                                |
| `--hy-float-button-menu-font-size`   | Menu font size         | Follows `--hy-font-size-base` (28rpx)  |

[^1]: `row`: horizontal; `column`: vertical

[^2]: `circle`: semicircular on both sides; `square`: square with rounded corners

[^3]: `normal`: default size; `large`: large size; `small`: small size; `number`: any size;

[^4]: `left-top`: top-left; `left-bottom`: bottom-left; `right-top`: top-right; `right-bottom`: bottom-right; `left-center`: middle-left; `right-center`: middle-right; `top-center`: top-center; `bottom-center`: bottom-center;

<demo-model url="pages-design/floatButton/floatButton"></demo-model>