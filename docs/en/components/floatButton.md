# FloatButton Floating Button Component

> A floating action button component that displays a set of action buttons when pressed.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage

```html
<!-- 全局使用 -->
<hy-float-button></hy-float-button>
```

### Default Floating Button

```html
<template>
    <hy-float-button
        text="客服"
        :icon="IconConfig.CUSTOMER_SERVICE"
        iconSize="25"
    ></hy-float-button>
</template>
```

### Floating Button Displaying a Menu Bar

```html
<template>
    <hy-float-button :menus="menus_1"></hy-float-button>
    <hy-float-button :menus="menus_2"></hy-float-button>
</template>

<script setup>
    const menus_1 = ['菜单1', '菜单2', '菜单3'];
    const menus_2 = [
        { label: '菜单1', url: '/pages/keFu/index' },
        { label: '菜单2' },
        { label: '菜单3' },
    ];
</script>
```

### Floating Button Size

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

### Floating Button Shape

- Set different shapes for the floating button via `shape`
    - `circle`: circular
    - `square`: square

```html
<template>
    <hy-float-button shape="circle"></hy-float-button>
    <hy-float-buttton shape="square"></hy-float-buttton>
</template>
```

### Floating Button Opening Direction

- Set the direction in which the floating button opens via `direction`
    - `column`: expands upward
    - `row`: expands horizontally

::: tip Note

Horizontal display expands to the right by default; if the left value is greater than half of the screen width, horizontal display will expand to the left

:::

```html
<template>
    <hy-float-button :menus="menus" direction="column"></hy-float-button>
    <hy-float-button :menus="menus" direction="row"></hy-float-button>
    <hy-float-button :menus="menus" left="80vw" direction="row"></hy-float-button>
</template>

<script setup>
    const menus = ['菜单1', '菜单2', '菜单3'];
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

- Set whether the floating button shows a shadow via `shadow`

```html
<template>
    <hy-float-button :shadow="true"></hy-float-button>
</template>
```

### Set Opacity

- Set whether the floating button floats via `opacity`

```html
<template>
    <hy-float-button :opacity="0.1"></hy-float-button>
</template>
```

## API

### FloatButton Props

| Prop | Description | Type | Default | | ----------- | -------------------------------------------- | ----------------------- | ---------------------------------------------- | --- | --- | | menus | Menu bar collection | `(string\|AnyObject)[]` | - | | direction | Opening direction[^1] | `row`\|`column` | column | | icon | Icon displayed on the button | `string` | PLUS | | iconSize | Button icon size; numeric values use px by default | `number`\|`string` | - | | iconColor | Button icon color | `string` | #FFFFFF | | gap | Spacing between the floating button and the edge of the visible area; numeric values use px by default | `Object` | \{ left: 16, right: 16, top: 16, bottom: 40 \} | | zIndex | Stacking level | `number` | 10086 | | bgColor | Button background color | `string` | - | | text | Button text | `string` | - | | fontSize | Button text size; numeric values use px by default | `number`\|`string` | 12px | | textColor | Button text color | `string` | - | | size | Button size[^2] | `string` | medium | | shape | Button shape[^3] | `circle`\|`square` | circle | | opacity | Button opacity | `number` | 1 | | shadow | Whether to show a shadow | `boolean` | true | | float | Whether to show the floating animation | `boolean` | true | | fixed | Whether to fix the position | `boolean` | true | | draggable | Whether the floating button can be dragged | `boolean` | true | | position | Floating button position[^4] | `string` | 'right-bottom' | | | | expandable | Controls whether the menu expands on click | `boolean` | true | | customStyle | Custom external styles to be applied | `CSSProperties` | - | | customClass | Custom external class name | `string` | - |

### gap

| Parameter | Description | Type | Default |
| ------ | ---------------- | -------- | ------ |
| left   | Minimum distance from the left | `number` | 16     |
| right  | Minimum distance from the right | `number` | 16     |
| top    | Minimum distance from the top | `number` | 16     |
| bottom | Minimum distance from the bottom | `number` | 40     |

### Events

| Event Name | Description | Callback Parameters |
| --------- | ---------- | ----------------------------- |
| click     | Button click | - |
| clickItem | Menu bar click | temp: menu bar data, index: index |

### Slots

| Slot Name | Description | Received Value |
| ------- | -------- | ------ |
| default | Button content | -      |

[^1]: `row`: horizontal; `column`: vertical

[^2]: `circle`: semicircular on both ends; `square`: square with rounded corners

[^3]: `normal`: default size; `large`: large size; `small`: small size; `number`: any size;

[^4]: `left-top`: top-left; `left-bottom`: bottom-left; `right-top`: top-right; `right-bottom`: bottom-right; `left-center`: center-left; `right-center`: center-right; `top-center`: top-center; `bottom-center`: bottom-center;

<demo-model url="pages-design/floatButton/floatButton"></demo-model>