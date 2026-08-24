# FoldingPanel Component

> Use folding panels to collapse content areas.

## :pushpin:Platform Compatibility Notes

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle:Basic Usage Example

::: tip Note

`index` is required; it is the index.

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

| Parameter  | Description                                         | Type                       | Default Value |
| ---------- | --------------------------------------------------- | -------------------------- | ------ |
| modelValue | The currently active panel index, supports v-model  | `number`\|`string`         | -1     |
| accordion  | Whether accordion mode is enabled                   | `boolean`                  | false  |
| disabled   | Whether the entire folding panel group is disabled  | `boolean`                  | false  |
| border     | Whether to show the border                          | `boolean`                  | true   |
| size       | Panel header size                                   | `large`\|`medium`\|`small` | medium |

### FoldingPanelItem Props

| Parameter    | Description                                              | Type               | Default Value |
| ------------ | -------------------------------------------------------- | ------------------ | ------ |
| index        | Panel index (automatically set by the parent component)  | `number`\|`string` | -1     |
| title        | Panel title                                              | `string`           | -      |
| value        | Value displayed on the right side                        | `string`           | -      |
| icon         | Left icon                                                | `string`           | -      |
| iconColor    | Left icon color                                          | `string`           | -      |
| iconSize     | Left icon size; numeric values default to px             | `string`\|`numner` | -      |
| content      | Panel content                                            | `string`           | -      |
| contentHeight | Maximum height of the content area; numeric values default to px | `string`\|`numner` | 150 |
| disabled     | Whether this individual panel is disabled                | `boolean`          | false  |
| defaultOpen  | Whether expanded by default                              | `boolean`          | false  |
| customStyle  | Custom external styles to be applied                     | `CSSProperties`    | -      |

### Events

#### FoldingPanel Emits

| Event Name | Description                        | Callback Parameters                          |
| ---------- | ---------------------------------- | --------------------------------------------- |
| change     | Triggered when the panel state changes | expanded: internal expanded state, index: index |
| open       | Triggered when a panel opens        | index: index                                  |
| close      | Triggered when a panel closes       | index: index                                  |

#### FoldingPanelItem Emits

| Event Name  | Description                            | Callback Parameters                          |
| ----------- | -------------------------------------- | --------------------------------------------- |
| click       | Toggles the panel open/close state     | index: index                                  |
| change      | Triggered when the panel state changes | expanded: internal expanded state, index: index |
| open        | Triggered when the panel opens         | index: index                                  |
| close       | Triggered when the panel closes        | index: index                                  |
| child-click | Notifies the parent when a child item is clicked | index: index                        |

### Methods

#### FoldingPanel Expose

| Name     | Description                            | Parameters           |
| -------- | -------------------------------------- | -------------------- |
| open     | Opens the panel at the specified index | index: number\|string |
| close    | Closes the panel at the specified index | index: number\|string |
| toggle   | Toggles the state of the panel at the specified index | index: number\|string |
| closeAll | Closes all panels                      | -                    |

#### FoldingPanelItem Expose

| Name        | Description                      | Parameters |
| ----------- | -------------------------------- | ---------- |
| open        | Opens the panel                  | -          |
| close       | Closes the panel                 | -          |
| toggle      | Toggles the panel state          | -          |
| getExpanded | Gets the current expanded state  | -          |

### Slots

| Slot Name | Description                          | Received Values |
| --------- | ------------------------------------ | --------------- |
| default   | Content of the main body             | -               |
| header    | Panel header                         | -               |
| title     | Content on the left of the panel header | -            |

<demo-model url="pages-design/foldingPanel/foldingPanel"></demo-model>