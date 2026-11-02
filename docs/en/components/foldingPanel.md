# FoldingPanel Collapse Panel Component

> Use collapse panels to organize content areas.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Example

::: tip Note

`index` is required; it is the index

:::

```html
<hy-folding-panel v-model="activeIndex">
    <hy-folding-panel-item title="水果" index="fruits"></hy-folding-panel-item>
    <hy-folding-panel-item title="饮品" index="beverage"></hy-folding-panel-item>
</hy-folding-panel>
```

### Disabling Panels

- Disable all panels by setting `disabled` on `hy-folding-panel`
- Disable a single panel by setting `disabled` on `hy-folding-panel-item`

```html
<hy-folding-panel v-model="activeIndex" :disabled="true">
    <hy-folding-panel-item title="水果" index="fruits"></hy-folding-panel-item>
    <hy-folding-panel-item title="饮品" index="beverage"></hy-folding-panel-item>
</hy-folding-panel>
```

### Showing Borders

- Set the border via `border`

```html
<hy-folding-panel v-model="activeIndex" :border="true">
    <hy-folding-panel-item title="水果" index="fruits"></hy-folding-panel-item>
    <hy-folding-panel-item title="饮品" index="beverage"></hy-folding-panel-item>
</hy-folding-panel>
```

### Setting Panel Size

- Set the panel size via `size`
    - `small` - small panel
    - `medium` - medium panel (default)
    - `large` - large panel

```html
<hy-folding-panel v-model="activeIndex" size="small">
    <hy-folding-panel-item title="水果" index="fruits"></hy-folding-panel-item>
    <hy-folding-panel-item title="饮品" index="beverage"></hy-folding-panel-item>
</hy-folding-panel>
```

### Custom Panel Header

```html
<hy-folding-panel v-model="activeIndex" :disabled="true">
    <hy-folding-panel-item index="fruits">
        <template #header>
            <view class="hy-folding-panel-item__title">自定义头部</view>
        </template>
    </hy-folding-panel-item>
    <hy-folding-panel-item index="beverage">
        <template #title>
            <view class="hy-folding-panel-item__title">自定义标题</view>
        </template>
    </hy-folding-panel-item>
</hy-folding-panel>
```

## API

### FoldingPanel Props

| Parameter  | Description                                        | Type                       | Default Value |
| ---------- | -------------------------------------------------- | -------------------------- | ------------- |
| modelValue | Currently active panel index, supports v-model     | `number`\|`string`         | -1            |
| accordion  | Whether accordion mode is enabled                  | `boolean`                  | false         |
| disabled   | Whether the entire collapse panel group is disabled | `boolean`                  | false         |
| border     | Whether to show the border                         | `boolean`                  | true          |
| size       | Panel header size                                  | `large`\|`medium`\|`small` | medium        |

### FoldingPanelItem Props

| Parameter    | Description                                         | Type               | Default Value |
| ------------ | --------------------------------------------------- | ------------------ | ------------- |
| index        | Panel index (automatically set by parent component) | `number`\|`string` | -1            |
| title        | Panel title                                         | `string`           | -             |
| value        | Value displayed on the right                        | `string`           | -             |
| icon         | Left icon                                           | `string`           | -             |
| iconColor    | Left icon color                                     | `string`           | -             |
| iconSize     | Left icon size, numbers default to px unit          | `string`\|`numner` | -             |
| content      | Panel content                                       | `string`           | -             |
| contentHeight | Maximum height of the content area, numbers default to px unit | `string`\|`numner` | 150  |
| disabled     | Whether a single panel is disabled                  | `boolean`          | false         |
| defaultOpen  | Whether expanded by default                         | `boolean`          | false         |
| customStyle  | Custom external styles to be applied                | `CSSProperties`    | -             |

### Events

#### FoldingPanel Emits

| Event Name | Description                        | Callback Parameters                             |
| ---------- | ---------------------------------- | ----------------------------------------------- |
| change     | Triggered when panel state changes | expanded: internal expanded state, index: index |
| open       | Triggered when a panel opens       | index: index                                    |
| close      | Triggered when a panel closes      | index: index                                    |

#### FoldingPanelItem Emits

| Event Name  | Description                                | Callback Parameters                             |
| ----------- | ------------------------------------------ | ----------------------------------------------- |
| click       | Changes the panel open/close state         | index: index                                    |
| change      | Triggered when panel state changes         | expanded: internal expanded state, index: index |
| open        | Triggered when a panel opens               | index: index                                    |
| close       | Triggered when a panel closes              | index: index                                    |
| child-click | Notifies parent when a child item is clicked | index: index                                 |

### Methods

#### FoldingPanel Expose

| Name     | Description                             | Parameters           |
| -------- | --------------------------------------- | -------------------- |
| open     | Opens the panel at the specified index  | index: number\|string |
| close    | Closes the panel at the specified index | index: number\|string |
| toggle   | Toggles the state of the panel at the specified index | index: number\|string |
| closeAll | Closes all panels                       | -                    |

#### FoldingPanelItem Expose

| Name       | Description                     | Parameters |
| ---------- | ------------------------------- | ---------- |
| open       | Opens the panel                 | -          |
| close      | Closes the panel                | -          |
| toggle     | Toggles the panel state         | -          |
| getExpanded | Gets the current expanded state | -         |

### Slots

| Slot Name | Description                    | Received Values |
| --------- | ------------------------------ | --------------- |
| default   | Content of the main body       | -               |
| header    | Panel header                   | -               |
| title     | Left content of the panel header | -             |

### CSS Variables

| Variable Name | Description | Default Value |
| --- | --- | --- |
| `--hy-folding-panel-value-font-size` | Right value font size | `13px` |
| `--hy-folding-panel-value-margin-right` | Right value right margin | `8px` |
| `--hy-folding-panel-font-size-large` | large title font size | Follows `--hy-font-size-lg` (36rpx) |
| `--hy-folding-panel-font-size-medium` | medium title font size | Follows `--hy-font-size-base` (28rpx) |
| `--hy-folding-panel-font-size-small` | small title font size | Follows `--hy-font-size-sm` (24rpx) |
| `--hy-folding-panel-border` | Panel bottom divider line | Follows `--hy-border-line` |
| `--hy-folding-panel-value-color` | Right value text color | Follows `--hy-text-color--grey` |

<demo-model url="pages-design/foldingPanel/foldingPanel"></demo-model>