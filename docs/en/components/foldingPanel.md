# FoldingPanel

> Use folding panels to collapse and organize content areas.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage

::: tip Note

`index` is required; it serves as the identifier.

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

### Setting Panel Size

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

| Prop       | Description                                    | Type                       | Default |
| ---------- | ---------------------------------------------- | -------------------------- | ------- |
| modelValue | Currently active panel index, supports v-model | `number`\|`string`         | -1      |
| accordion  | Whether accordion mode is enabled              | `boolean`                  | false   |
| disabled   | Whether the entire folding panel group is disabled | `boolean`               | false   |
| border     | Whether to show the border                     | `boolean`                  | true    |
| size       | Panel header size                              | `large`\|`medium`\|`small` | medium  |

### FoldingPanelItem Props

| Prop         | Description                                        | Type               | Default |
| ------------ | -------------------------------------------------- | ------------------ | ------- |
| index        | Panel index (set automatically by parent component) | `number`\|`string` | -1      |
| title        | Panel title                                        | `string`           | -       |
| value        | Value displayed on the right                       | `string`           | -       |
| icon         | Left icon                                          | `string`           | -       |
| iconColor    | Left icon color                                    | `string`           | -       |
| iconSize     | Left icon size, numbers default to px              | `string`\|`numner` | -       |
| content      | Panel content                                      | `string`           | -       |
| contentHeight | Maximum height of the content area, numbers default to px | `string`\|`numner` | 150 |
| disabled     | Whether this panel is disabled                     | `boolean`          | false   |
| defaultOpen  | Whether expanded by default                        | `boolean`          | false   |
| customStyle  | Custom external styles to apply                    | `CSSProperties`    | -       |
| customClass  | Custom external class name                         | `string`           | -       |

### Events

#### FoldingPanel Emits

| Event  | Description                        | Callback Parameters                             |
| ------ | ---------------------------------- | ----------------------------------------------- |
| change | Triggered when panel state changes | expanded: internal expanded state, index: index |
| open   | Triggered when a panel opens       | index: index                                    |
| close  | Triggered when a panel closes      | index: index                                    |

#### FoldingPanelItem Emits

| Event       | Description                                        | Callback Parameters                             |
| ----------- | -------------------------------------------------- | ----------------------------------------------- |
| click       | Toggle the panel's open/close state                | index: index                                    |
| change      | Triggered when panel state changes                 | expanded: internal expanded state, index: index |
| open        | Triggered when the panel opens                     | index: index                                    |
| close       | Triggered when the panel closes                    | index: index                                    |
| child-click | Notifies the parent when a child item is clicked   | index: index                                    |

### Methods

#### FoldingPanel Expose

| Name     | Description                            | Parameters           |
| -------- | -------------------------------------- | -------------------- |
| open     | Open the panel at the specified index  | index: number\|string |
| close    | Close the panel at the specified index | index: number\|string |
| toggle   | Toggle the state of the panel at the specified index | index: number\|string |
| closeAll | Close all panels                       | -                    |

#### FoldingPanelItem Expose

| Name       | Description                                                                          | Parameters |
| ---------- | ------------------------------------------------------------------------------------ | ---------- |
| open       | Open the panel                                                                       | -          |
| close      | Close the panel                                                                      | -          |
| toggle     | Toggle the panel state                                                               | -          |
| getExpanded | Get the current expanded state                                                      | -          |
| resize     | Re-measure the content height (call when slot content changes dynamically, causing height changes) | - |

### Slots

| Slot    | Description                        | Accepted Values |
| ------- | ---------------------------------- | --------------- |
| default | Content of the main body           | -               |
| header  | Panel header                       | -               |
| title   | Content on the left of the header  | -               |

### CSS Variables

| Variable                                | Description                         | Default                              |
| --------------------------------------- | ----------------------------------- | ------------------------------------ |
| `--hy-folding-panel-value-font-size`    | Font size of the right-side value   | `13px`                               |
| `--hy-folding-panel-value-margin-right` | Right margin of the right-side value | `8px`                                |
| `--hy-folding-panel-font-size-large`    | large title font size               | Follows `--hy-font-size-lg` (36rpx)  |
| `--hy-folding-panel-font-size-medium`   | medium title font size              | Follows `--hy-font-size-base` (28rpx) |
| `--hy-folding-panel-font-size-small`    | small title font size               | Follows `--hy-font-size-sm` (24rpx)  |
| `--hy-folding-panel-border`             | Bottom divider of the panel         | Follows `--hy-border-line`           |
| `--hy-folding-panel-value-color`        | Text color of the right-side value  | Follows `--hy-text-color--grey`      |
| `--hy-folding-panel-padding-lg`         | Large padding                       | Follows `--hy-border-margin-padding-lg` |
| `--hy-folding-panel-padding-base`       | Base padding                        | Follows `hy-border-margin-padding-lg` |
| `--hy-folding-panel-padding-sm`         | Small padding                       | Follows `--hy-border-margin-padding-sm` |
| `--hy-folding-panel-header-background`  | Container header background color   | Follows `--hy-background--container` |
| `--hy-folding-panel-active`             | Background color for pressed state  | Follows `--hy-background--hover`     |

<demo-model url="pages-design/foldingPanel/foldingPanel"></demo-model>