# Table Component

> Table is a high-performance table component built on Uniapp, supporting fixed columns, sorting, striped rows, custom slots, and more. It is suitable for a variety of data display scenarios.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :warning: Notes

::: warning Notes

1. It is recommended to use numbers for the table height (height) and row height (rowHeight); the component will automatically append the px unit
2. Fixed columns must specify the width property, otherwise layout issues may occur
3. For large datasets (>1000 rows), virtual scrolling or paginated loading is recommended to improve performance
4. The formatter function should be kept as simple as possible; avoid complex calculations that could affect rendering performance
5. For long text in table content, it is recommended to enable the ellipsis property to avoid layout issues

:::

## Key Features

- Supports left and right fixed columns
- Header sorting functionality
- Striped row styles
- Custom row height and table height
- Empty state and loading state display
- Rich slot support
- Responsive design

## :japanese_castle: Basic Usage Example

::: code-group

```vue [Template]
<template>
    <hy-table :data="tableData" :columns="columns" :height="500" stripe></hy-table>
</template>
```

```ts [Script]
import { ref } from 'vue';

// Table data
const tableData = ref([
    { id: 1, name: 'Zhang San', age: 28, gender: 'Male', address: 'Chaoyang District, Beijing' },
    { id: 2, name: 'Li Si', age: 32, gender: 'Female', address: 'Pudong New District, Shanghai' },
    { id: 3, name: 'Wang Wu', age: 25, gender: 'Male', address: 'Tianhe District, Guangzhou' },
    // More data...
]);

// Column configuration
const columns = ref([
    { title: 'ID', key: 'id', width: 80, fixed: 'left' },
    { title: 'Name', key: 'name', width: 120 },
    { title: 'Age', key: 'age', width: 100, sortable: true },
    { title: 'Gender', key: 'gender', width: 100 },
    { title: 'Address', key: 'address', width: 300, ellipsis: true },
    { title: 'Actions', key: 'action', width: 150, fixed: 'right' },
]);
```

:::

### Fixed Columns / Slots

::: tip Note

Since WeChat Mini Programs cannot use dynamic slots, this slot approach is implemented by passing all content through slots

:::

::: code-group

```html [Template]
<hy-table :data="tableData" :columns="columns" :height="500">
    <!-- Custom action column -->
    <template #right="{ row, col, index }">
        <hy-flex v-if="col.key === 'action'" gap="2">
            <hy-button text="Edit" size="mini" plain :border="false"></hy-button>
            <hy-button type="error" size="mini" text="Delete" plain :border="false"></hy-button>
        </hy-flex>
        <text v-else>{{ row[col.key] }}</text>
    </template>
</hy-table>
```

```ts
import { reactive } from 'vue';

const columns2 = reactive([
    { title: 'ID', key: 'id', width: 40, fixed: 'left', align: 'center' },
    { title: 'Name', key: 'name', width: 80, fixed: 'left' },
    { title: 'Gender', key: 'sex', width: 80 },
    { title: 'Age', key: 'age', width: 80, sortable: true },
    { title: 'Email', key: 'email', width: 200, ellipsis: true },
    { title: 'Address', key: 'address', width: 300, ellipsis: true },
    { title: 'Phone', key: 'phone', width: 150, ellipsis: true },
    { title: 'Company', key: 'company', width: 150, ellipsis: true },
    { title: 'Position', key: 'position', width: 150, ellipsis: true },
    { title: 'Actions', key: 'action', width: 100, fixed: 'right' },
]);

const tableData = reactive([
    {
        id: 1,
        name: 'Zhang San',
        age: 12,
        sex: 'Male',
        address: 'Feixi County, Hefei City, Anhui Province',
        status: 1,
        email: 'zhangsan@example.com',
        phone: '13800138001',
        company: 'Tech Co., Ltd.',
        position: 'Frontend Developer',
    },
    {
        id: 2,
        name: 'Li Si',
        age: 18,
        sex: 'Male',
        address: 'Feixi County, Hefei City, Anhui Province',
        status: 1,
        email: 'lisi@example.com',
        phone: '13800138002',
        company: 'Internet Company',
        position: 'Backend Developer',
    },
    {
        id: 3,
        name: 'Wang Er',
        age: 28,
        sex: 'Male',
        address: 'Feixi County, Hefei City, Anhui Province',
        status: 1,
        email: 'wangwu@example.com',
        phone: '13800138003',
        company: 'FinTech',
        position: 'Product Manager',
    },
    {
        id: 4,
        name: 'Ma Zi',
        age: 17,
        sex: 'Male',
        address: 'Morin Dawa Daur Autonomous Banner, Hulunbuir, Inner Mongolia',
        status: 0,
        email: 'mazi@example.com',
        phone: '13800138004',
        company: 'E-commerce',
        position: 'Designer',
    },
    {
        id: 5,
        name: 'Sang Biao',
        age: 80,
        sex: 'Male',
        address: 'The Underworld',
        status: 0,
        email: 'sangbiao@example.com',
        phone: '13800138005',
        company: 'Underworld Tech',
        position: 'CEO',
    },
    {
        id: 6,
        name: 'Aode Biao',
        age: 23,
        sex: 'Male',
        address: 'Africa',
        status: 0,
        email: 'aodebiao@example.com',
        phone: '13800138006',
        company: 'International Trade',
        position: 'Sales Manager',
    },
    {
        id: 7,
        name: 'Zeus',
        age: 33,
        sex: 'Male',
        address: 'The Solar System, Universe',
        status: 0,
        email: 'zeus@example.com',
        phone: '13800138007',
        company: 'Olympus Group',
        position: 'King of the Gods',
    },
    {
        id: 8,
        name: 'Zhang San',
        age: 12,
        sex: 'Male',
        address: 'Feixi County, Hefei City, Anhui Province',
        status: 1,
        email: 'zhangsan@example.com',
        phone: '13800138001',
        company: 'Tech Co., Ltd.',
        position: 'Frontend Developer',
    },
    {
        id: 9,
        name: 'Li Si',
        age: 18,
        sex: 'Male',
        address: 'Feixi County, Hefei City, Anhui Province',
        status: 1,
        email: 'lisi@example.com',
        phone: '13800138002',
        company: 'Internet Company',
        position: 'Backend Developer',
    },
    {
        id: 10,
        name: 'Wang Er',
        age: 28,
        sex: 'Male',
        address: 'Feixi County, Hefei City, Anhui Province',
        status: 1,
        email: 'wangwu@example.com',
        phone: '13800138003',
        company: 'FinTech',
        position: 'Product Manager',
    },
    {
        id: 11,
        name: 'Ma Zi',
        age: 17,
        sex: 'Male',
        address: 'Morin Dawa Daur Autonomous Banner, Hulunbuir, Inner Mongolia',
        status: 0,
        email: 'mazi@example.com',
        phone: '13800138004',
        company: 'E-commerce',
        position: 'Designer',
    },
    {
        id: 12,
        name: 'Sang Biao',
        age: 80,
        sex: 'Male',
        address: 'The Underworld',
        status: 0,
        email: 'sangbiao@example.com',
        phone: '13800138005',
        company: 'Underworld Tech',
        position: 'CEO',
    },
    {
        id: 13,
        name: 'Aode Biao',
        age: 23,
        sex: 'Male',
        address: 'Africa',
        status: 0,
        email: 'aodebiao@example.com',
        phone: '13800138006',
        company: 'International Trade',
        position: 'Sales Manager',
    },
    {
        id: 14,
        name: 'Zeus',
        age: 33,
        sex: 'Male',
        address: 'The Solar System, Universe',
        status: 0,
        email: 'zeus@example.com',
        phone: '13800138007',
        company: 'Olympus Group',
        position: 'King of the Gods',
    },
]);
```

:::

### Sorting

```html
<hy-table :data="tableData" :columns="columns" :height="500" @sort-change="handleSort"></hy-table>

<script setup lang="ts">
    import { ref } from 'vue';
    const columns = ref([
        { title: 'Name', key: 'name', width: 120 },
        { title: 'Age', key: 'age', width: 100, sortable: true },
        { title: 'Join Date', key: 'joinDate', width: 150, sortable: true },
    ]);

    const handleSort = (field: string, order: string) => {
        console.log('Sort field:', field, 'Sort order:', order);
        // You can request sorted data from the backend here
    };
</script>
```

### Custom Empty State

```html
<hy-table :data="emptyData" :columns="columns" :height="500">
    <template #empty>
        <view class="custom-empty">
            <image
                src="/static/empty.png"
                mode="aspectFit"
                style="width: 120rpx; height: 120rpx;"
            ></image>
            <text>No data yet, click to add</text>
            <button @click="addData">Add Data</button>
        </view>
    </template>
</hy-table>
```

### Loading State

```html
<hy-table :data="tableData" :columns="columns" :height="500" :loading="loading"></hy-table>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'

    const loading = ref(true)
    const tableData = ref([])

    onMounted(async () => {
      // Simulate asynchronous loading
      loading.value = true
      await new Promise(resolve => setTimeout(resolve, 2000))
      tableData.value = [...]
      loading.value = false
    })
</script>
```

### Style Customization

#### Custom Theme

You can customize the table style by overriding CSS variables:

```scss
:root {
    --hy-table-header-bg: #f5f7fa;
    --hy-table-header-text-color: #333;
    --hy-table-stripe-bg: #fafafa;
    --hy-table-border-color: #e8e8e8;
}
```

## API

### Table Props

| Parameter  | Description                                                       | Type               | Default |
| ---------- | ----------------------------------------------------------------- | ------------------ | ------- |
| data       | Table data source                                                 | `Array`            | -       |
| columns    | Column configuration                                              | `ITableColumn[]`   | -       |
| height     | Table height, supports a number or a string with a unit; numbers default to px | `string`\|`number` | 400     |
| rowHeight  | Row height, supports a number or a string with a unit; numbers default to px   | `string`\|`number` | 50      |
| stripe     | Whether to display striped rows                                   | `boolean`          | false   |
| border     | Whether to display horizontal borders                             | `boolean`          | true    |
| loading    | Whether to display the loading state                              | `boolean`          | false   |
| rowKey     | Unique key name for row data                                      | `string`           | id      |
| showHeader | Whether to display the header                                     | `boolean`          | true    |
| emptyUrl   | Image URL for the empty state                                     | `string`           | -       |
| emptyDes   | Description text for the empty state                              | `string`           | -       |

### Events

| Event Name  | Description                           | Callback Parameters                     |
| ----------- | ------------------------------------- | --------------------------------------- |
| sort-change | Triggered when the sort condition changes | sortField: String, sortOrder: SortType |
| row-click   | Triggered when a row is clicked       | row: Object, index: Number              |

### Slots

#### Header Slots

| Slot Name  | Description                                    | Parameters                 |
| ---------- | ---------------------------------------------- | -------------------------- |
| left-head  | Header slot for left fixed columns             | col: column config object  |
| head       | Header slot for middle scrollable columns      | col: column config object  |
| right-head | Header slot for right fixed columns            | col: column config object  |

#### Content Slots

| Slot Name | Description                               | Parameters                                                |
| --------- | ----------------------------------------- | --------------------------------------------------------- |
| left      | Content slot for left fixed columns       | row: row data, col: column config, index: row index       |
| default   | Content slot for middle scrollable columns | row: row data, col: column config, index: row index       |
| right     | Content slot for right fixed columns      | row: row data, col: column config, index: row index       |

### Other Slots

| Slot Name | Description        |
| --------- | ------------------ |
| empty     | Custom empty state |

### Typings

::: details Type Definitions

```ts
export interface ITableColumn {
    /** Column title */
    title: string;
    /** Corresponding data field name */
    key: string;
    /** Column width (numbers default to px) */
    width: number;
    /** Alignment */
    align?: HyApp.RowCenterType;
    /** Whether sorting is enabled */
    sortable?: boolean;
    /** Whether to ellipsize overflowing text */
    ellipsis?: boolean;
    /** Whether clicking shows the full content (Tooltip) when ellipsis is enabled */
    tooltip?: boolean;
    /** Whether fixed ('left' | 'right') */
    fixed?: 'left' | 'right';
    /** Data processing function */
    formatter?: (value: any, row: any) => string;
}

export type SortType = 'asc' | 'desc' | 'normal';
```

:::

<demo-model url="pages-design/table/table"></demo-model>