# Table Component

> Table is a high-performance table component developed with Uniapp. It supports fixed columns, sorting, striped rows, custom slots, and other features, making it suitable for a wide range of data display scenarios.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :warning: Notes

::: warning Notes

1. It is recommended to use numbers for the table height (height) and row height (rowHeight); the component will automatically append the px unit
2. Fixed columns must specify the width property, otherwise layout issues may occur
3. For large datasets (>1000 rows), it is recommended to use virtual scrolling or paginated loading to improve performance
4. The formatter function should be kept as simple as possible to avoid complex calculations affecting rendering performance
5. For long text in table content, it is recommended to enable the ellipsis property to avoid layout breakage

:::

## Main Features

- Support for left and right fixed columns
- Header sorting functionality
- Striped row style
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
    { id: 1, name: '张三', age: 28, gender: '男', address: '北京市朝阳区' },
    { id: 2, name: '李四', age: 32, gender: '女', address: '上海市浦东新区' },
    { id: 3, name: '王五', age: 25, gender: '男', address: '广州市天河区' },
    // More data...
]);

// Column configuration
const columns = ref([
    { title: 'ID', key: 'id', width: 80, fixed: 'left' },
    { title: '姓名', key: 'name', width: 120 },
    { title: '年龄', key: 'age', width: 100, sortable: true },
    { title: '性别', key: 'gender', width: 100 },
    { title: '地址', key: 'address', width: 300, ellipsis: true },
    { title: '操作', key: 'action', width: 150, fixed: 'right' },
]);
```

:::

### Fixed Columns / Slots

::: tip Note

Because dynamic slots cannot be used in WeChat Mini Programs, this slot approach is implemented, passing all content through slots

:::

::: code-group

```html [Template]
<hy-table :data="tableData" :columns="columns" :height="500">
    <!-- Custom action column -->
    <template #right="{ row, col, index }">
        <hy-flex v-if="col.key === 'action'" gap="2">
            <hy-button text="编辑" size="mini" plain :border="false"></hy-button>
            <hy-button type="error" size="mini" text="删除" plain :border="false"></hy-button>
        </hy-flex>
        <text v-else>{{ row[col.key] }}</text>
    </template>
</hy-table>
```

```ts
import { reactive } from 'vue';

const columns2 = reactive([
    { title: 'ID', key: 'id', width: 40, fixed: 'left', align: 'center' },
    { title: '姓名', key: 'name', width: 80, fixed: 'left' },
    { title: '性别', key: 'sex', width: 80 },
    { title: '年龄', key: 'age', width: 80, sortable: true },
    { title: '邮箱', key: 'email', width: 200, ellipsis: true },
    { title: '地址', key: 'address', width: 300, ellipsis: true },
    { title: '电话', key: 'phone', width: 150, ellipsis: true },
    { title: '公司', key: 'company', width: 150, ellipsis: true },
    { title: '职位', key: 'position', width: 150, ellipsis: true },
    { title: '操作', key: 'action', width: 100, fixed: 'right' },
]);

const tableData = reactive([
    {
        id: 1,
        name: '张三',
        age: 12,
        sex: '男',
        address: '安徽省合肥市肥西县',
        status: 1,
        email: 'zhangsan@example.com',
        phone: '13800138001',
        company: '科技有限公司',
        position: '前端开发',
    },
    {
        id: 2,
        name: '李四',
        age: 18,
        sex: '男',
        address: '安徽省合肥市肥西县',
        status: 1,
        email: 'lisi@example.com',
        phone: '13800138002',
        company: '互联网公司',
        position: '后端开发',
    },
    {
        id: 3,
        name: '王二',
        age: 28,
        sex: '男',
        address: '安徽省合肥市肥西县',
        status: 1,
        email: 'wangwu@example.com',
        phone: '13800138003',
        company: '金融科技',
        position: '产品经理',
    },
    {
        id: 4,
        name: '麻子',
        age: 17,
        sex: '男',
        address: '内蒙古自治区呼伦贝尔市莫力达瓦达幹尔自治旗',
        status: 0,
        email: 'mazi@example.com',
        phone: '13800138004',
        company: '电子商务',
        position: '设计师',
    },
    {
        id: 5,
        name: '丧彪',
        age: 80,
        sex: '男',
        address: '地府',
        status: 0,
        email: 'sangbiao@example.com',
        phone: '13800138005',
        company: '冥界科技',
        position: 'CEO',
    },
    {
        id: 6,
        name: '奥德彪',
        age: 23,
        sex: '男',
        address: '非洲',
        status: 0,
        email: 'aodebiao@example.com',
        phone: '13800138006',
        company: '国际贸易',
        position: '销售经理',
    },
    {
        id: 7,
        name: '宙斯',
        age: 33,
        sex: '男',
        address: '宇宙太阳系',
        status: 0,
        email: 'zeus@example.com',
        phone: '13800138007',
        company: '奥林匹斯集团',
        position: '众神之王',
    },
    {
        id: 8,
        name: '张三',
        age: 12,
        sex: '男',
        address: '安徽省合肥市肥西县',
        status: 1,
        email: 'zhangsan@example.com',
        phone: '13800138001',
        company: '科技有限公司',
        position: '前端开发',
    },
    {
        id: 9,
        name: '李四',
        age: 18,
        sex: '男',
        address: '安徽省合肥市肥西县',
        status: 1,
        email: 'lisi@example.com',
        phone: '13800138002',
        company: '互联网公司',
        position: '后端开发',
    },
    {
        id: 10,
        name: '王二',
        age: 28,
        sex: '男',
        address: '安徽省合肥市肥西县',
        status: 1,
        email: 'wangwu@example.com',
        phone: '13800138003',
        company: '金融科技',
        position: '产品经理',
    },
    {
        id: 11,
        name: '麻子',
        age: 17,
        sex: '男',
        address: '内蒙古自治区呼伦贝尔市莫力达瓦达幹尔自治旗',
        status: 0,
        email: 'mazi@example.com',
        phone: '13800138004',
        company: '电子商务',
        position: '设计师',
    },
    {
        id: 12,
        name: '丧彪',
        age: 80,
        sex: '男',
        address: '地府',
        status: 0,
        email: 'sangbiao@example.com',
        phone: '13800138005',
        company: '冥界科技',
        position: 'CEO',
    },
    {
        id: 13,
        name: '奥德彪',
        age: 23,
        sex: '男',
        address: '非洲',
        status: 0,
        email: 'aodebiao@example.com',
        phone: '13800138006',
        company: '国际贸易',
        position: '销售经理',
    },
    {
        id: 14,
        name: '宙斯',
        age: 33,
        sex: '男',
        address: '宇宙太阳系',
        status: 0,
        email: 'zeus@example.com',
        phone: '13800138007',
        company: '奥林匹斯集团',
        position: '众神之王',
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
        { title: '姓名', key: 'name', width: 120 },
        { title: '年龄', key: 'age', width: 100, sortable: true },
        { title: '入职时间', key: 'joinDate', width: 150, sortable: true },
    ]);

    const handleSort = (field: string, order: string) => {
        console.log('排序字段:', field, '排序顺序:', order);
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
            <text>暂无数据，请点击添加</text>
            <button @click="addData">添加数据</button>
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

| Prop       | Description                                                       | Type               | Default Value |
| ---------- | ----------------------------------------------------------------- | ------------------ | ------ |
| data       | Table data source                                                 | `Array`            | -      |
| columns    | Column configuration                                              | `ITableColumn[]`   | -      |
| height     | Table height; supports a number or a string with a unit, numbers default to px | `string`\|`number` | 400    |
| rowHeight  | Row height; supports a number or a string with a unit, numbers default to px   | `string`\|`number` | 50     |
| stripe     | Whether to show striped rows                                      | `boolean`          | false  |
| border     | Whether to show horizontal borders                                | `boolean`          | true   |
| loading    | Whether to show the loading state                                 | `boolean`          | false  |
| rowKey     | Unique key field of row data                                      | `string`           | id     |
| showHeader | Whether to show the table header                                  | `boolean`          | true   |
| emptyUrl   | Image URL for the empty state                                     | `string`           | -      |
| emptyDes   | Description text for the empty state                              | `string`           | -      |

### Events

| Event Name  | Description                            | Callback Parameters                    |
| ----------- | -------------------------------------- | -------------------------------------- |
| sort-change | Triggered when the sort condition changes | sortField: String, sortOrder: SortType |
| row-click   | Triggered when a row is clicked        | row: Object, index: Number             |

### Slots

#### Column Header Slots

| Slot Name  | Description                                  | Parameters                 |
| ---------- | -------------------------------------------- | -------------------------- |
| left-head  | Header slot for the left fixed columns       | col: column configuration object |
| head       | Header slot for the middle scrollable columns | col: column configuration object |
| right-head | Header slot for the right fixed columns      | col: column configuration object |

#### Content Slots

| Slot Name | Description                                   | Parameters                                                    |
| --------- | --------------------------------------------- | ------------------------------------------------------------- |
| left      | Content slot for the left fixed columns       | row: row data, col: column configuration, index: row index    |
| default   | Content slot for the middle scrollable columns | row: row data, col: column configuration, index: row index   |
| right     | Content slot for the right fixed columns      | row: row data, col: column configuration, index: row index    |

### Other Slots

| Slot Name | Description          |
| --------- | -------------------- |
| empty     | Custom empty state   |

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
    /** Whether to enable ellipsis for overly long text */
    ellipsis?: boolean;
    /** When ellipsis is enabled, whether to show the full content on tap (Tooltip) */
    tooltip?: boolean;
    /** Whether the column is fixed ('left' | 'right') */
    fixed?: 'left' | 'right';
    /** Data processing function */
    formatter?: (value: any, row: any) => string;
}

export type SortType = 'asc' | 'desc' | 'normal';
```

:::

### CSS Variables

| Variable Name | Description | Default Value |
| --- | --- | --- |
| `--hy-table-header-text-color` | Header text color | `#909399` |
| `--hy-table-stripe-bg` | Striped row background color | Follows `--hy-background--table-header` |
| `--hy-table-header-height` | Header height | `50px` |
| `--hy-table-header-cell-padding` | Header cell padding | `0 20rpx` |
| `--hy-table-header-cell-font-size` | Header cell font size | `28rpx` |
| `--hy-table-cell-padding` | Content cell padding | `0 8px` |
| `--hy-table-cell-font-size` | Content cell font size | `14px` |
| `--hy-table-fixed-left-shadow` | Fixed column shadow (left side) | `4px 0 10px rgba(0, 0, 0, 0.1)` |
| `--hy-table-fixed-right-shadow` | Fixed column shadow (right side) | `-4px 0 10px rgba(0, 0, 0, 0.1)` |
| `--hy-table-border` | Table border (including cell dividers, synchronized in 8 places) | Follows `--hy-border-line` |

<demo-model url="pages-design/table/table"></demo-model>