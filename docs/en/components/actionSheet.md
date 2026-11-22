# ActionSheet Component

> The ActionSheet component is used to pop up an action menu from the bottom of the screen, providing a clear list of options for the user to select from and return the result.

## Use Cases

- Bottom popup menu selection (e.g., sharing, deleting, action options, etc.)
- Scenarios where one of multiple options must be selected to perform a specific action
- Custom action panels (e.g., sharing to different platforms)
- Quick options for form operations (e.g., selecting a payment method, delivery method, etc.)

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :warning: Notes

::: warning Note

1. v-model Binding

The component uses `v-model` to control the show/hide state:

```html
<hy-action-sheet v-model="show" :actions="actions"></hy-action-sheet>
```

```ts
const show = ref(false);
```

2. Difference Between actions and panels

| Property | Purpose      | Display Effect                                                        |
| -------- | ------------ | --------------------------------------------------------------------- |
| actions  | Text option list | Vertically arranged text options, supporting states such as disabled, loading, and description |
| panels   | Icon panel   | Horizontally arranged icons + text, supporting multi-row display      |

**Note:** `actions` and `panels` cannot be used at the same time; `actions` takes precedence.

3. panels Data Format

`panels` supports one-dimensional arrays and two-dimensional arrays:

```ts
// One-dimensional array: single-row display
const panels1 = ref([
    { iconUrl: 'https://xxx.png', name: 'WeChat' },
    { iconUrl: 'https://xxx.png', name: 'Weibo' },
]);

// Two-dimensional array: multi-row display
const panels2 = ref([
    [
        { iconUrl: 'https://xxx.png', name: 'WeChat' },
        { iconUrl: 'https://xxx.png', name: 'Weibo' },
    ],
    [
        { iconUrl: 'https://xxx.png', name: 'QQ' },
        { iconUrl: 'https://xxx.png', name: 'Favorite' },
    ],
]);
```

4. closeOnClickAction Property

Whether to automatically close the popup after an option is clicked, default is `true`:

```html
<!-- Do not close automatically after clicking -->
<hy-action-sheet :actions="actions" :close-on-click-action="false"></hy-action-sheet>
```

5. select Event Parameters

Depending on whether `actions` or `panels` is used, the select event returns different parameters:

**actions mode:**

```ts
list = {
    item: {
        name: 'Option 1',
        sub: '',
        disabled: false,
        loading: false,
    }, // The selected option object
    index: 0, // Option index
};
```

**panels mode (one-dimensional array):**

```ts
list = {
    item: { iconUrl: 'https://xxx.png', name: 'WeChat' }, // The selected panel item
    index: 0, // Index
};
```

**panels mode (two-dimensional array):**

```ts
list = {
    item: { iconUrl: 'https://xxx.png', name: 'WeChat' }, // The selected panel item
    rowIndex: 0, // Row index
    colIndex: 0, // Column index
};
```

6. Custom Styles

The component supports custom styles via `customStyle` and `customClass`:

```html
<hy-action-sheet
    v-model="show"
    :actions="actions"
    custom-class="my-action-sheet"
    :custom-style="{ background: '#f5f5f5' }"
></hy-action-sheet>
```

:::

## :japanese_castle: Basic Usage Examples

### Basic Usage

```html
<template>
    <hy-action-sheet v-model="show" :actions="actions" @select="onSelect"></hy-action-sheet>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import type { IActionSheetAction } from 'hy-app';

    const show = ref(false);

    const actions = ref<IActionSheetAction[]>([
        { name: 'Option 1' },
        { name: 'Option 2' },
        { name: 'Option 3' },
    ]);

    const onSelect = (params) => {
        console.log('Selected:', params.item.name);
    };
</script>
```

### With Title

```html
<template>
    <hy-action-sheet
        v-model="show"
        :actions="actions"
        title="I am a title"
        @select="onSelect"
    ></hy-action-sheet>
</template>
```

### With Cancel Button

```html
<template>
    <hy-action-sheet
        v-model="show"
        :actions="actions"
        cancel-text="Cancel"
        @select="onSelect"
        @cancel="onCancel"
    ></hy-action-sheet>
</template>

<script setup lang="ts">
    const onCancel = () => {
        console.log('Cancel clicked');
    };
</script>
```

### Option States

```html
<template>
    <hy-action-sheet v-model="show" :actions="actions" @select="onSelect"></hy-action-sheet>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import type { IActionSheetAction } from '@hy-app/ui';

    const show = ref(false);

    const actions = ref<IActionSheetAction[]>([
        {
            name: 'Option 1',
            loading: true, // Loading state
            color: 'red', // Custom color
        },
        {
            name: 'Option 2',
            disabled: true, // Disabled state
        },
        {
            name: 'Option 3',
            sub: 'Description', // Description text
        },
    ]);
</script>
```

### Custom Panel (One-dimensional Array)

```html
<template>
    <hy-action-sheet
        v-model="show"
        :panels="panels"
        title="Share to"
        title-align="left"
        @select="onSelect"
    ></hy-action-sheet>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const show = ref(false);

    const panels = ref([
        {
            iconUrl:
                'https://img12.360buyimg.com/imagetools/jfs/t1/122016/33/6657/1362/5f0692a1E8708d245/e47299e5945a6956.png',
            name: 'WeChat',
        },
        {
            iconUrl:
                'https://img14.360buyimg.com/imagetools/jfs/t1/111572/11/11734/1245/5f0692a1E39d13d21/b35dfe9243bd6c2a.png',
            name: 'Weibo',
        },
        {
            iconUrl:
                'https://img14.360buyimg.com/imagetools/jfs/t1/132639/25/4003/945/5f069336E18778248/fa181913030bed8a.png',
            name: 'QQ',
        },
    ]);
</script>
```

### Custom Panel (Two-dimensional Array - Multi-row)

```html
<template>
    <hy-action-sheet
        v-model="show"
        :panels="panels"
        title="Share to"
        @select="onSelect"
    ></hy-action-sheet>
</template>
```

```ts
import { ref } from 'vue';

const show = ref(false);

const panels = ref([
    [
        { iconUrl: 'https://xxx.png', name: 'WeChat' },
        { iconUrl: 'https://xxx.png', name: 'Weibo' },
        { iconUrl: 'https://xxx.png', name: 'QQ' },
        { iconUrl: 'https://xxx.png', name: 'Favorite' },
    ],
    [
        { iconUrl: 'https://xxx.png', name: 'WeChat Friends' },
        { iconUrl: 'https://xxx.png', name: 'Moments' },
    ],
]);

const onSelect = (params: any) => {
    console.log('Selected:', params.item.name, 'Row:', params.rowIndex, 'Column:', params.colIndex);
};
```

### Custom Content Slot

```html
<template>
    <hy-action-sheet v-model="show" title="Custom Content">
        <view class="custom-content">
            <text>This is the custom content area</text>
            <hy-button text="Confirm" @click="show = false"></hy-button>
        </view>
    </hy-action-sheet>
</template>

<style lang="scss" scoped>
    .custom-content {
        padding: 30rpx;
        text-align: center;
    }
</style>
```

## :test_tube: Complete Example Page

::: details Open to view the example code

```html
<template>
    <the-root-page>
        <the-cell :list="list" @click="onChange"></the-cell>

        <!-- Basic usage -->
        <hy-action-sheet
            v-model="list[0].value"
            :actions="actions"
            @select="onClick"
        ></hy-action-sheet>

        <!-- With title -->
        <hy-action-sheet
            v-model="list[1].value"
            :actions="actions"
            title="I am a title"
            @select="onClick"
        ></hy-action-sheet>

        <!-- With cancel -->
        <hy-action-sheet
            v-model="list[2].value"
            :actions="actions"
            cancel-text="Cancel"
            @select="onClick"
        ></hy-action-sheet>

        <!-- Loading state -->
        <hy-action-sheet
            v-model="list[3].value"
            :actions="actions2"
            @select="onClick"
        ></hy-action-sheet>

        <!-- Custom panel -->
        <hy-action-sheet
            v-model="list[4].value"
            :panels="panels"
            title="Share to"
            title-align="left"
            @select="onClick"
        ></hy-action-sheet>
    </the-root-page>
</template>
```

```ts
import { ref, reactive } from 'vue';
import type { IActionSheetAction } from 'hy-app';

const list = reactive([
    { title: 'Basic Usage', value: false },
    { title: 'With Title', value: false },
    { title: 'With Cancel', value: false },
    { title: 'Loading', value: false },
    { title: 'Custom Panel', value: false },
]);

const actions = ref<IActionSheetAction[]>([
    { name: 'Option 1' },
    { name: 'Option 2', disabled: true },
    { name: 'Option 3', sub: 'Description' },
]);

const actions2 = ref<IActionSheetAction[]>([
    { name: 'Option 1' },
    { name: 'Option 2', loading: true },
    { name: 'Option 3' },
]);

const panels = ref([
    [
        { iconUrl: 'https://xxx.png', name: 'WeChat' },
        { iconUrl: 'https://xxx.png', name: 'Weibo' },
        { iconUrl: 'https://xxx.png', name: 'QQ' },
    ],
    [
        { iconUrl: 'https://xxx.png', name: 'WeChat Friends' },
        { iconUrl: 'https://xxx.png', name: 'Moments' },
    ],
]);

const onChange = (temp: any, index: number) => {
    list[index].value = true;
};

const onClick = (temp: any) => {
    uni.showToast({ title: `Clicked ${temp.item.name}`, icon: 'none' });
};
```

:::

## API

### ActionSheet Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Whether to show | `boolean` | false |
| title | Title | `string` | - |
| titleAlign | Title text alignment | `center`\|`left`\|`right` | center |
| actions | Menu options | `IActionSheetAction[]` | [] |
| panels | Custom panel items; can be an array of strings or an array of objects; if it is a two-dimensional array, it will be displayed in multiple rows | `Array<IActionSheetPanel \| IActionSheetPanel[]>` | [] |
| cancelText | Text of the cancel button; the button is displayed when this is not empty | `string` | - |
| closeOnClickAction | Whether to close the popup when a menu item is clicked | `boolean` | true |
| closeOnClickOverlay | Whether clicking the overlay is allowed to close the popup; see the example above | `boolean` | true |
| duration | Popup animation duration | `number` | 200 |
| zIndex | Menu z-index | `number` | 100 |
| round | Border radius value | `string` \| `number` | 20 |
| safeAreaInsetBottom | Whether to enable bottom safe area adaptation | `boolean` | true |
| customStyle | External styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |
| customHeaderClass | Custom title class name | `string` | - |

### Typings

::: details Type Description

```ts
interface IActionSheetAction {
    /**
     * Option name
     */
    name: string;
    /**
     * Description text
     */
    sub?: string;
    /**
     * Font color
     */
    color?: string;
    /**
     * Whether disabled
     */
    disabled?: boolean;
    /**
     * Whether loading
     */
    loading?: boolean;
}

interface IActionSheetPanel {
    /**
     * Image URL
     */
    iconUrl: string;
    /**
     * Name
     */
    name: string;
}

interface SelectEventParams {
    /**
     * The selected content
     */
    item: any;
    /**
     * The selected horizontal index
     */
    rowIndex?: number;
    /**
     * The selected vertical index
     */
    colIndex?: number;
    /**
     * The selected index
     */
    index?: number;
}
```

:::

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| select | Triggered when an option is clicked | Menu options or one-dimensional array of custom panels (item: option object, index: option index); two-dimensional array of custom panels (item: option object, rowIndex: option row index, colIndex: option column index) |
| open | Triggered when the popup opens | - |
| close | Triggered when the popup closes | - |
| cancel | Triggered when the cancel button is clicked | - |

### Slots

| Slot Name | Description      | Received Value |
| --------- | ---------------- | -------------- |
| default   | Default panel slot | -            |

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-action-sheet-width` | Panel width | `calc(100vw - 20px)` |
| `--hy-action-sheet-item-height` | Option height | `48px` |
| `--hy-action-sheet-header-line-height` | Header line height | `44px` |
| `--hy-action-sheet-cancel-width` | Cancel button width | `calc(100% - 48px)` |
| `--hy-action-sheet-cancel-margin` | Cancel button outer margin | `0 auto 24px` |
| `--hy-action-sheet-close-top` | Close button top margin | `20px` |
| `--hy-action-sheet-close-right` | Close button right margin | `15px` |
| `--hy-action-sheet-panel-height` | Share panel item height | `160rpx` |
| `--hy-action-sheet-panel-width` | Share panel item width | `140rpx` |
| `--hy-action-sheet-font-size` | Option font size | Follows `--hy-font-size-base` (28rpx) |
| `--hy-action-sheet-item-color` | Option color | Follows `--hy-text-color` |
| `--hy-action-sheet-disabled-color` | Disabled option color | Follows `--hy-text-color--disabled` |
| `--hy-action-sheet-subname-font-size` | Secondary description font size | Follows `--hy-font-size-sm` (24rpx) |
| `--hy-action-sheet-subname-color` | Secondary description color | Follows `--hy-text-color--grey` |
| `--hy-action-sheet-cancel-color` | Cancel button color | Follows `--hy-text-color` |
| `--hy-action-sheet-close-radius` | Close button border radius | Follows `--hy-radius-circle` (50%) |
| `--hy-action-sheet-panel-img-radius` | Share panel icon border radius | Follows `--hy-radius-base` (20rpx) |
| `--hy-action-sheet-panel-title-font-size` | Share panel title font size | Follows `--hy-font-size-sm` (24rpx) |
| `--hy-action-sheet-actions-padding-y` | Vertical padding of the options area | Follows `--hy-border-margin-padding-base` |
| `--hy-action-sheet-cancel-background` | Cancel button background color | Follows `--hy-background--track` |
| `--hy-action-sheet-header-padding` | Header horizontal and top padding | Follows `--hy-border-margin-padding-base` |
| `--hy-action-sheet-panel-img-size` | Panel image size | Follows `--hy-img-size-base` |
| `--hy-action-sheet-panel-padding-x` | Panel item horizontal padding | Follows `--hy-border-margin-padding-base` |
| `--hy-action-sheet-panel-padding-y` | Panel item vertical padding | Follows `--hy-border-margin-padding-sm` |

<demo-model url="pages-design/actionSheet/actionSheet"></demo-model>