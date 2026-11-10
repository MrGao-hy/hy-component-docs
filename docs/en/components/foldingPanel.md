# FoldingPanel Folding Panel Component

> Use folding panels to collapse and organize content areas.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Examples

::: tip Note

`index` is required; it is the index

:::

```html
<hy-folding-panel v-model="activeIndex">
    <hy-folding-panel-item title="Fruits" index="fruits"></hy-folding-panel-item>
    <hy-folding-panel-item title="Beverages" index="beverage"></hy-folding-panel-item>
</hy-folding-panel>
```

### Disabling Panels

- Disable all panels by setting `disabled` on `hy-folding-panel`
- Disable a single panel by setting `disabled` on `hy-folding-panel-item`

```html
<hy-folding-panel v-model="activeIndex" :disabled="true">
    <hy-folding-panel-item title="Fruits" index="fruits"></hy-folding-panel-item>
    <hy-folding-panel-item title="Beverages" index="beverage"></hy-folding-panel-item>
</hy-folding-panel>
```

### Showing Borders

- Set the border via `border`

```html
<hy-folding-panel v-model="activeIndex" :border="true">
    <hy-folding-panel-item title="Fruits" index="fruits"></hy-folding-panel-item>
    <hy-folding-panel-item title="Beverages" index="beverage"></hy-folding-panel-item>
</hy-folding-panel>
```

### Setting the Panel Size

- Set the panel size via `size`
    - `small` - small panel
    - `medium` - medium panel (default)
    - `large` - large panel

```html
<hy-folding-panel v-model="activeIndex" size="small">
    <hy-folding-panel-item title="Fruits" index="fruits"></hy-folding-panel-item>
    <hy-folding-panel-item title="Beverages" index="beverage"></hy-folding-panel-item>
</hy-folding-panel>
```

### Custom Panel Header

```html
<hy-folding-panel v-model="activeIndex" :disabled="true">
    <hy-folding-panel-item index="fruits">
        <template #header>
            <view class="hy-folding-panel-item__title">Custom Header</view>
        </template>
    </hy-folding-panel-item>
    <hy-folding-panel-item index="beverage">
        <template #title>
            <view class="hy-folding-panel-item__title">Custom Title</view>
        </template>
    </hy-folding-panel-item>
</hy-folding-panel>
```

## API

### FoldingPanel Props

| Parameter   | Description                                        | Type                       | Default |
| ----------- | -------------------------------------------------- | -------------------------- | ------- |
| modelValue  | Currently active panel index, supports v-model     | `number`\|`string`         | -1      |
| accordion   | Whether accordion mode is enabled                  | `boolean`                  | false   |
| disabled    | Whether to disable the entire folding panel group  | `boolean`                  | false   |
| border      | Whether to show the border                         | `boolean`                  | true    |
| size        | Panel header size                                  | `large`\|`medium`\|`small` | medium  |

### FoldingPanelItem Props

| Parameter    | Description                                           | Type                | Default |
| ------------ | ----------------------------------------------------- | ------------------- | ------- |
| index        | Panel index (set automatically by the parent)        | `number`\|`string`  | -1      |
| title        | Panel title                                           | `string`            | -       |
| value        | Value displayed on the right                          | `string`            | -       |
| icon         | Left icon                                             | `string`            | -       |
| iconColor    | Left icon color                                       | `string`            | -       |
| iconSize     | Left icon size, numbers default to px                 | `string`\|`numner`  | -       |
| content      | Panel content                                         | `string`            | -       |
| contentHeight | Maximum height of the content area, numbers default to px | `string`\|`numner` | 150    |
| disabled     | Whether to disable the individual panel               | `boolean`           | false   |
| defaultOpen  | Whether expanded by default                           | `boolean`           | false   |
| customStyle  | Custom external styles to apply                       | `CSSProperties`     | -       |

### Events

#### FoldingPanel Emits

| Event Name | Description                          | Callback Parameters                                 |
| ---------- | ------------------------------------ | --------------------------------------------------- |
| change     | Triggered when panel state changes   | expanded: internal expanded state, index: index     |
| open       | Triggered when a panel opens         | index: index                                        |
| close      | Triggered when a panel closes        | index: index                                        |

#### FoldingPanelItem Emits

| Event Name  | Description                                       | Callback Parameters                                 |
| ----------- | ------------------------------------------------- | --------------------------------------------------- |
| click       | Toggle the panel open/close state                 | index: index                                        |
| change      | Triggered when panel state changes                | expanded: internal expanded state, index: index     |
| open        | Triggered when a panel opens                      | index: index                                        |
| close       | Triggered when a panel closes                     | index: index                                        |
| child-click | Notifies the parent when a child item is clicked  | index: index                                        |

### Methods

#### FoldingPanel Expose

| Name     | Description                           | Parameters           |
| -------- | ------------------------------------- | -------------------- |
| open     | Open the panel at the specified index | index: number\|string |
| close    | Close the panel at the specified index | index: number\|string |
| toggle   | Toggle the state of the panel at the specified index | index: number\|string |
| closeAll | Close all panels                      | -                    |

#### FoldingPanelItem Expose

| Name       | Description                        | Parameters |
| ---------- | ---------------------------------- | ---------- |
| open       | Open the panel                     | -          |
| close      | Close the panel                    | -          |
| toggle     | Toggle the panel state             | -          |
| getExpanded | Get the current expanded state    | -          |

### Slots

| Slot Name | Description                      | Received Values |
| --------- | -------------------------------- | --------------- |
| default   | Content of the main body         | -               |
| header    | Panel header                     | -               |
| title     | Left content of the panel header | -               |

### CSS Variables

| Variable Name                            | Description                    | Default                             |
| ---------------------------------------- | ------------------------------ | ----------------------------------- |
| `--hy-folding-panel-value-font-size`     | Right-side value font size     | `13px`                              |
| `--hy-folding-panel-value-margin-right`  | Right-side value right margin  | `8px`                               |
| `--hy-folding-panel-font-size-large`     | large title font size          | Follows `--hy-font-size-lg` (36rpx) |
| `--hy-folding-panel-font-size-medium`    | medium title font size         | Follows `--hy-font-size-base` (28rpx) |
| `--hy-folding-panel-font-size-small`     | small title font size          | Follows `--hy-font-size-sm` (24rpx) |
| `--hy-folding-panel-border`              | Panel bottom divider line      | Follows `--hy-border-line`          |
| `--hy-folding-panel-value-color`         | Right-side value text color    | Follows `--hy-text-color--grey`     |

<demo-model url="pages-design/foldingPanel/foldingPanel"></demo-model>