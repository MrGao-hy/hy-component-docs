# FloatButton Floating Button Component

> A floating action button component that displays a group of action buttons when pressed.

## :pushpin: Platform Compatibility

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

- Set the size of the floating button via `size`
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

- Set different shapes of the floating button via `shape`
    - `circle`: circle
    - `square`: square

```html
<template>
    <hy-float-button shape="circle"></hy-float-button>
    <hy-float-buttton shape="square"></hy-float-buttton>
</template>
```

### FloatButton Opening Direction

- Set the direction in which the floating button expands via `direction`
    - `column`: expands upward
    - `row`: expands horizontally

::: tip Note

When displayed horizontally, the menu expands to the right by default. If the `left` value is greater than half the screen width, the menu will expand to the left instead.

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

- Set whether the floating button floats via `float`

```html
<template>
    <hy-float-button :float="true"></hy-float-button>
</template>
```

### Show Shadow

- Set whether the floating button displays a shadow via `shadow`

```html
<template>
    <hy-float-button :shadow="true"></hy-float-button>
</template>
```

### Set Opacity

- Set the opacity of the floating button via `opacity`

```html
<template>
    <hy-float-button :opacity="0.1"></hy-float-button>
</template>
```

## API

### FloatButton Props

| Parameter   | Description                                                        | Type                      | Default Value                                  |
| ----------- | ------------------------------------------------------------------ | ------------------------- | ---------------------------------------------- |
| menus       | Collection of menu items                                           | `(string\|AnyObject)[]`   | -                                              |
| direction   | Opening direction[^1]                                              | `row`\|`column`           | column                                         |
| icon        | Icon displayed on the button                                       | `string`                  | PLUS                                           |
| iconSize    | Button icon size; numbers use px by default                        | `number`\|`string`        | -                                              |
| iconColor   | Button icon color                                                  | `string`                  | #FFFFFF                                        |
| gap         | Spacing between the floating button and the edge of the viewport; numbers use px by default | `Object` | \{ left: 16, right: 16, top: 16, bottom: 40 \} |
| zIndex      | Stacking level                                                     | `number`                  | 10086                                          |
| bgColor     | Button background color                                            | `string`                  | -                                              |
| text        | Button text                                                        | `string`                  | -                                              |
| fontSize    | Button text size; numbers use px by default                        | `number`\|`string`        | 12px                                           |
| textColor   | Button text color                                                  | `string`                  | -                                              |
| size        | Button size[^2]                                                    | `string`                  | medium                                         |
| shape       | Button shape[^3]                                                   | `circle`\|`square`        | circle                                         |
| opacity     | Button opacity                                                     | `number`                  | 1                                              |
| shadow      | Whether to display a shadow                                        | `boolean`                 | true                                           |
| float       | Whether to show the floating animation                             | `boolean`                 | true                                           |
| fixed       | Whether the position is fixed                                      | `boolean`                 | true                                           |
| draggable   | Whether the floating button can be dragged                         | `boolean`                 | true                                           |
| position    | Floating button position[^4]                                       | `string`                  | 'right-bottom'                                 |
| expandable  | Controls whether the menu expands on click                         | `boolean`                 | true                                           |
| customStyle | Custom external styles to be applied                               | `CSSProperties`           | -                                              |
| customClass | Custom external class name                                         | `string`                  | -                                              |

### gap

| Parameter | Description                           | Type     | Default Value |
| --------- | ------------------------------------- | -------- | ------------- |
| left      | Minimum distance from the left edge   | `number` | 16            |
| right     | Minimum distance from the right edge  | `number` | 16            |
| top       | Minimum distance from the top edge    | `number` | 16            |
| bottom    | Minimum distance from the bottom edge | `number` | 40            |

### Events

| Event Name | Description             | Callback Parameters                            |
| ---------- | ----------------------- | ---------------------------------------------- |
| click      | Button is clicked       | -                                              |
| clickItem  | Menu item is clicked    | temp: menu item data, index: index             |

### Slots

| Slot Name | Description   | Accepted Value |
| --------- | ------------- | -------------- |
| default   | Button content | -              |

### CSS Variables

| Variable                                  | Description                  | Default Value                            |
| ----------------------------------------- | ---------------------------- | ---------------------------------------- |
| `--hy-float-button-radius`                | Button border radius         | Follows `--hy-radius-sm` (8rpx)          |
| `--hy-float-button-menus-max-height`      | Maximum height of the menu   | `250px`                                  |
| `--hy-float-button-menu-font-size`        | Menu font size               | Follows `--hy-font-size-base` (28rpx)    |

[^1]: `row`: horizontal; `column`: vertical

[^2]: `circle`: semicircles on both sides; `square`: square with rounded corners

[^3]: `normal`: default size; `large`: large size; `small`: small size; `number`: any size;

[^4]: `left-top`: top-left; `left-bottom`: bottom-left; `right-top`: top-right; `right-bottom`: bottom-right; `left-center`: middle-left; `right-center`: middle-right; `top-center`: top-center; `bottom-center`: bottom-center;

<demo-model url="pages-design/floatButton/floatButton"></demo-model>