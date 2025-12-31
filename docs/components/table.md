# Table 表格组件
> Table是一个基于Uniapp开发的高性能表格组件，支持固定列、排序、斑马纹、自定义插槽等功能，适用于各种数据展示场景。

## :pushpin:平台差异说明
| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## 主要特性

- 支持左右固定列
- 表头排序功能
- 斑马纹样式
- 自定义行高和表格高度
- 空状态和加载状态显示
- 丰富的插槽支持
- 响应式设计

## :japanese_castle:基本使用示例
:::code-group
```vue [模板]
<template>
  <hy-table
    :data="tableData"
    :columns="columns"
    :height="500"
    stripe
  ></hy-table>
</template>
```
```ts [脚本]
import { ref } from 'vue'

// 表格数据
const tableData = ref([
  { id: 1, name: '张三', age: 28, gender: '男', address: '北京市朝阳区' },
  { id: 2, name: '李四', age: 32, gender: '女', address: '上海市浦东新区' },
  { id: 3, name: '王五', age: 25, gender: '男', address: '广州市天河区' },
  // 更多数据...
])

// 列配置
const columns = ref([
  { title: 'ID', key: 'id', width: 80, fixed: 'left' },
  { title: '姓名', key: 'name', width: 120 },
  { title: '年龄', key: 'age', width: 100, sortable: true },
  { title: '性别', key: 'gender', width: 100 },
  { title: '地址', key: 'address', width: 300, ellipsis: true },
  { title: '操作', key: 'action', width: 150, fixed: 'right' }
])
```
:::

## 固定列/插槽
::: tip 说明
因为在微信小程序无法使用动态插槽，所以实现这种插槽方法，把所以内容都插槽一遍
:::
::: code-group
```vue [模板]
<hy-table
  :data="tableData"
  :columns="columns"
  :height="500"
>
  
  <!-- 自定义操作列 -->
  <template #right="{ row, col, index }">
    <hy-flex v-if="col.key === 'action'" gap="2">
      <hy-button text="编辑" size="mini" plain :border="false"></hy-button>
      <hy-button
          type="error"
          size="mini"
          text="删除"
          plain
          :border="false"
      ></hy-button>
    </hy-flex>
    <text v-else>{{ row[col.key] }}</text>
  </template>
</hy-table>
```
```ts
import { reactive } from 'vue'

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
    { title: '操作', key: 'action', width: 100, fixed: 'right' }
  ])

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
      position: '前端开发'
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
      position: '后端开发'
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
      position: '产品经理'
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
      position: '设计师'
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
      position: 'CEO'
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
      position: '销售经理'
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
      position: '众神之王'
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
      position: '前端开发'
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
      position: '后端开发'
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
      position: '产品经理'
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
      position: '设计师'
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
      position: 'CEO'
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
      position: '销售经理'
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
      position: '众神之王'
    }
  ])
```
:::

### 排序功能

```vue
<hy-table
  :data="tableData"
  :columns="columns"
  :height="500"
  @sort-change="handleSort"
>
</hy-table>

<script setup lang="ts">
import { ref } from 'vue'
const columns = ref([
  { title: '姓名', key: 'name', width: 120 },
  { title: '年龄', key: 'age', width: 100, sortable: true },
  { title: '入职时间', key: 'joinDate', width: 150, sortable: true }
])

const handleSort = (field: string, order: string) => {
  console.log('排序字段:', field, '排序顺序:', order)
  // 可以在这里请求后端排序数据
}
</script>
```

## 自定义空状态

```vue
<hy-table
  :data="emptyData"
  :columns="columns"
  :height="500"
>
  <template #empty>
    <view class="custom-empty">
      <image src="/static/empty.png" mode="aspectFit" style="width: 120rpx; height: 120rpx;"></image>
      <text>暂无数据，请点击添加</text>
      <button @click="addData">添加数据</button>
    </view>
  </template>
</hy-table>
```

## 加载状态

```vue
<hy-table
  :data="tableData"
  :columns="columns"
  :height="500"
  :loading="loading"
></hy-table>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const loading = ref(true)
const tableData = ref([])

onMounted(async () => {
  // 模拟异步加载
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 2000))
  tableData.value = [...]
  loading.value = false
})
</script>
```

## 样式定制

### 自定义主题

可以通过覆盖CSS变量来定制表格样式：

```scss
:root {
  --hy-table-header-bg: #f5f7fa;
  --hy-table-header-text-color: #333;
  --hy-table-stripe-bg: #fafafa;
  --hy-table-border-color: #e8e8e8;
}
```

## 注意事项

1. 表格高度(height)和行高(rowHeight)建议使用数字，组件会自动添加单位px
2. 固定列必须指定width属性，否则可能导致布局异常
3. 对于大量数据(>1000条)，建议使用虚拟滚动或分页加载以提高性能
4. formatter函数应尽量简洁，避免复杂计算影响渲染性能
5. 表格内容中的长文本建议开启ellipsis属性，避免布局错乱

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 表格数据源 | Array | [] |
| columns | 列配置信息 | Array | [] |
| height | 表格高度，支持数字或带单位字符串 | String/Number | 400 |
| rowHeight | 行高，支持数字或带单位字符串 | String/Number | 50 |
| stripe | 是否显示斑马纹 | Boolean | false |
| border | 是否显示横向边框 | Boolean | true |
| loading | 是否显示加载状态 | Boolean | false |
| rowKey | 行数据的唯一键名 | String | 'id' |
| showHeader | 是否显示表头 | Boolean | true |
| emptyUrl | 空状态的图片URL | String | '' |
| emptyDes | 空状态的描述文本 | String | '' |

### columns 列配置项

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 列标题 | String | - |
| key | 对应数据字段名 | String | - |
| width | 列宽，单位px | Number | - |
| align | 对齐方式，可选值：left, center, right | String | 'left' |
| sortable | 是否开启排序 | Boolean | false |
| ellipsis | 是否开启文本超长省略 | Boolean | false |
| tooltip | 开启省略后，是否显示完整内容的Tooltip | Boolean | false |
| fixed | 是否固定列，可选值：left, right | String | - |
| formatter | 数据格式化函数，参数：(value, row) | Function | - |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| sort-change | 排序条件变化时触发 | sortField: String, sortOrder: String |
| row-click | 点击行时触发 | row: Object, index: Number |

## Slots

### 列头插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| left-head | 左侧固定列的表头插槽 | col: 列配置对象 |
| head | 中间滚动列的表头插槽 | col: 列配置对象 |
| right-head | 右侧固定列的表头插槽 | col: 列配置对象 |

### 内容插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| left | 左侧固定列的内容插槽 | row: 行数据, col: 列配置, index: 行索引 |
| default | 中间滚动列的内容插槽 | row: 行数据, col: 列配置, index: 行索引 |
| right | 右侧固定列的内容插槽 | row: 行数据, col: 列配置, index: 行索引 |

### 其他插槽

| 插槽名 | 说明 |
| --- | --- |
| empty | 自定义空状态 |

<demo-model url="pages/components/table/table"></demo-model>