# LineProgress Linear Progress Bar Component

> Displays the current progress of an operation or task, such as file uploading, in the form of a linear progress bar.

## :pushpin: Platform Compatibility Notes

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Examples

```html
<!-- Global usage -->
<hy-line-progress :percentage="30"></hy-line-progress>
```

### Hide Percentage

- The `show-text` parameter configures whether to display the percentage value inside the progress bar

```html
<template>
    <hy-line-progress :percentage="30" :showText="false"></hy-line-progress>
</template>
```

### Custom Height

- `height`: the height of the progress bar

```html
<template>
    <hy-line-progress :percentage="30" height="8"></hy-line-progress>
</template>
```

### Custom Styles

```html
<template>
    <hy-line-progress :percentage="30" activeColor="red" inactiveColor="greed"></hy-line-progress>
</template>
```

### Manual Increment/Decrement

- Increase or decrease by controlling the value of the `percentage` parameter

```html
<template>
    <view style="margin-top: 50px;">
        <hy-line-progress :percentage="percentage" />
        <view style="display: flex;margin-top: 100px;">
            <button @click="computedWidth('minus')">Decrease</button>
            <button @click="computedWidth('plus')">Increase</button>
        </view>
    </view>
</template>

<script setup>
    import { ref } from 'vue';
    import { range } from 'hyfk-app';

    const percentage = ref(30);

    const computedWidth = (type) => {
        if (type === 'plus') {
            percentage.value = range(0, 100, percentage.value + 10);
        } else {
            percentage.value = range(0, 100, percentage.value - 10);
        }
    };
</script>
```

## API

### LineProgress Props

| Parameter     | Description                                                   | Type                 | Default Value |
| ------------- | ------------------------------------------------------------- | -------------------- | ------ |
| activeColor   | Color of the active portion of the progress bar               | `string`             | -      |
| inactiveColor | Background color of the progress bar, defaults to gray        | `string`             | -      |
| percentage    | Progress percentage, numeric value                            | `number`             | 0      |
| showText      | Whether to display the percentage value inside the progress bar | `boolean`            | true   |
| height        | Height of the progress bar; default unit for numeric values is px | `number` \| `string` | 12     |
| fontSize      | Font size; default unit for numeric values is px              | `number` \| `string` | -      |
| customStyle   | Custom external styles to be applied                          | `CSSProperties`      | -      |
| customClass   | Custom external class name                                    | `string`             | -      |

### Slots

| Slot Name | Description                                                                        | Accepted Value |
| --------- | ---------------------------------------------------------------------------------- | -------------- |
| default   | Custom display content passed in, which overrides the default percentage display   | -              |

<demo-model url="pages-design/lineProgress/lineProgress"></demo-model>