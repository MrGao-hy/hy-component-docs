# ActionSheet 操作菜单组件

> ActionSheet 组件用于从屏幕底部弹出操作菜单，提供清晰的选项列表供用户选择并返回结果。

## 适用场景

- 底部弹出式菜单选择（如分享、删除、操作选项等）
- 需要从多个选项中选择一个执行特定操作的场景
- 自定义操作面板（如分享到不同平台）
- 表单操作的快捷选项（如选择支付方式、配送方式等）

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :warning: 注意事项
:::warning 注意事项
1. v-model 绑定

组件使用 `v-model` 控制显示/隐藏状态：

```html
<hy-action-sheet v-model="show" :actions="actions"></hy-action-sheet>
```

```ts
const show = ref(false)
```

2. actions 与 panels 的区别

| 属性    | 用途         | 显示效果                                       |
| ------- | ------------ | ---------------------------------------------- |
| actions | 文本选项列表 | 纵向排列的文字选项，支持禁用、加载、描述等状态 |
| panels  | 图标面板     | 横向排列的图标+文字，支持多行展示              |

**注意：** `actions` 和 `panels` 不能同时使用，优先使用 `actions`。

3. panels 数据格式

`panels` 支持一维数组和二维数组：

```ts
// 一维数组：单行展示
const panels1 = ref([
    { iconUrl: 'https://xxx.png', name: '微信' },
    { iconUrl: 'https://xxx.png', name: '微博' }
])

// 二维数组：多行展示
const panels2 = ref([
    [
        { iconUrl: 'https://xxx.png', name: '微信' },
        { iconUrl: 'https://xxx.png', name: '微博' }
    ],
    [
        { iconUrl: 'https://xxx.png', name: 'QQ' },
        { iconUrl: 'https://xxx.png', name: '收藏' }
    ]
])
```

4. closeOnClickAction 属性

点击选项后是否自动关闭弹窗，默认 `true`：

```html
<!-- 点击后不自动关闭 -->
<hy-action-sheet :actions="actions" :close-on-click-action="false"></hy-action-sheet>
```

5. select 事件参数

根据使用 `actions` 或 `panels`，select 事件返回的参数不同：

**actions 模式：**

```ts
list = {
    item: { 
        name: '选项1', 
        sub: '', 
        disabled: false, 
        loading: false 
    },  // 选中的选项对象
    index: 0  // 选项索引
}
```

**panels 模式（一维数组）：**

```ts
list = {
    item: { iconUrl: 'https://xxx.png', name: '微信' },  // 选中的面板项
    index: 0  // 索引
}
```

**panels 模式（二维数组）：**

```ts
list = {
    item: { iconUrl: 'https://xxx.png', name: '微信' },  // 选中的面板项
    rowIndex: 0,  // 行索引
    colIndex: 0   // 列索引
}
```

6. 样式自定义

组件支持通过 `customStyle` 和 `customClass` 自定义样式：

```html
<hy-action-sheet
    v-model="show"
    :actions="actions"
    custom-class="my-action-sheet"
    :custom-style="{ background: '#f5f5f5' }"
></hy-action-sheet>
```
:::

## :japanese_castle:基本使用示例

### 基础使用

```html
<template>
    <hy-action-sheet v-model="show" :actions="actions" @select="onSelect"></hy-action-sheet>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import type { IActionSheetAction } from 'hy-app'

    const show = ref(false)

    const actions = ref<IActionSheetAction[]>([
        { name: '选项1' },
        { name: '选项2' },
        { name: '选项3' }
    ])

    const onSelect = (params) => {
        console.log('选中:', params.item.name)
    }
</script>
```

### 带标题

```html
<template>
    <hy-action-sheet
        v-model="show"
        :actions="actions"
        title="我是标题"
        @select="onSelect"
    ></hy-action-sheet>
</template>
```

### 带取消按钮

```html
<template>
    <hy-action-sheet
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        @select="onSelect"
        @cancel="onCancel"
    ></hy-action-sheet>
</template>

<script setup lang="ts">
    const onCancel = () => {
        console.log('点击取消')
    }
</script>
```

### 选项状态

```html
<template>
    <hy-action-sheet v-model="show" :actions="actions" @select="onSelect"></hy-action-sheet>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import type { IActionSheetAction } from '@/package/components/hy-action-sheet/typing'

    const show = ref(false)

    const actions = ref<IActionSheetAction[]>([
        {
            name: '选项1',
            loading: true, // 加载中状态
            color: 'red' // 自定义颜色
        },
        {
            name: '选项2',
            disabled: true // 禁用状态
        },
        {
            name: '选项3',
            sub: '描述信息' // 描述信息
        }
    ])
</script>
```

### 自定义面板（一维数组）

```html
<template>
    <hy-action-sheet
        v-model="show"
        :panels="panels"
        title="分享给"
        title-align="left"
        @select="onSelect"
    ></hy-action-sheet>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const show = ref(false)

    const panels = ref([
        {
            iconUrl:
                'https://img12.360buyimg.com/imagetools/jfs/t1/122016/33/6657/1362/5f0692a1E8708d245/e47299e5945a6956.png',
            name: '微信'
        },
        {
            iconUrl:
                'https://img14.360buyimg.com/imagetools/jfs/t1/111572/11/11734/1245/5f0692a1E39d13d21/b35dfe9243bd6c2a.png',
            name: '微博'
        },
        {
            iconUrl:
                'https://img14.360buyimg.com/imagetools/jfs/t1/132639/25/4003/945/5f069336E18778248/fa181913030bed8a.png',
            name: 'QQ'
        }
    ])
</script>
```

### 自定义面板（二维数组-多行）

```html
<template>
    <hy-action-sheet
        v-model="show"
        :panels="panels"
        title="分享给"
        @select="onSelect"
    ></hy-action-sheet>
</template>
```
```ts
import { ref } from 'vue'

const show = ref(false)

const panels = ref([
    [
        { iconUrl: 'https://xxx.png', name: '微信' },
        { iconUrl: 'https://xxx.png', name: '微博' },
        { iconUrl: 'https://xxx.png', name: 'QQ' },
        { iconUrl: 'https://xxx.png', name: '收藏' }
    ],
    [
        { iconUrl: 'https://xxx.png', name: '微信好友' },
        { iconUrl: 'https://xxx.png', name: '朋友圈' }
    ]
])

const onSelect = (params: any) => {
    console.log('选中:', params.item.name, '行:', params.rowIndex, '列:', params.colIndex)
}
```

### 自定义内容插槽

```html
<template>
    <hy-action-sheet v-model="show" title="自定义内容">
        <view class="custom-content">
            <text>这里是自定义内容区域</text>
            <hy-button text="确认" @click="show = false"></hy-button>
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

## :test_tube:完整示例页面

:::details 打开查看示例代码
```html
<template>
    <the-root-page>
        <the-cell :list="list" @click="onChange"></the-cell>

        <!-- 基础使用 -->
        <hy-action-sheet
            v-model="list[0].value"
            :actions="actions"
            @select="onClick"
        ></hy-action-sheet>

        <!-- 带标题 -->
        <hy-action-sheet
            v-model="list[1].value"
            :actions="actions"
            title="我是标题"
            @select="onClick"
        ></hy-action-sheet>

        <!-- 带取消 -->
        <hy-action-sheet
            v-model="list[2].value"
            :actions="actions"
            cancel-text="取消"
            @select="onClick"
        ></hy-action-sheet>

        <!-- 加载状态 -->
        <hy-action-sheet
            v-model="list[3].value"
            :actions="actions2"
            @select="onClick"
        ></hy-action-sheet>

        <!-- 自定义面板 -->
        <hy-action-sheet
            v-model="list[4].value"
            :panels="panels"
            title="分享给"
            title-align="left"
            @select="onClick"
        ></hy-action-sheet>
    </the-root-page>
</template>
```
```ts
import { ref, reactive } from 'vue'
import type { IActionSheetAction } from 'hy-app'

const list = reactive([
    { title: '基础使用', value: false },
    { title: '带标题', value: false },
    { title: '带取消', value: false },
    { title: '加载', value: false },
    { title: '自定义面板', value: false }
])

const actions = ref<IActionSheetAction[]>([
    { name: '选项1' },
    { name: '选项2', disabled: true },
    { name: '选项3', sub: '描述信息' }
])

const actions2 = ref<IActionSheetAction[]>([
    { name: '选项1' },
    { name: '选项2', loading: true },
    { name: '选项3' }
])

const panels = ref([
    [
        { iconUrl: 'https://xxx.png', name: '微信' },
        { iconUrl: 'https://xxx.png', name: '微博' },
        { iconUrl: 'https://xxx.png', name: 'QQ' }
    ],
    [
        { iconUrl: 'https://xxx.png', name: '微信好友' },
        { iconUrl: 'https://xxx.png', name: '朋友圈' }
    ]
])

const onChange = (temp: any, index: number) => {
    list[index].value = true
}

const onClick = (temp: any) => {
    uni.showToast({ title: `点击了${temp.item.name}`, icon: 'none' })
}
```
:::

## API

### ActionSheet Props

| 参数                  | 说明                                      | 类型                                                | 默认值    |
|---------------------|-----------------------------------------|---------------------------------------------------|--------|
| modelValue          | 是否展示                                    | `boolean`                                         | false  |
| title               | 标题                                      | `string`                                          | -      |
| titleAlign          | 标题文字位置                                  | `center`\|`left`\|`right`                         | center |
| actions             | 菜单选项                                    | `IActionSheetAction[]`                            | []     |
| panels              | 自定义面板项,可以为字符串数组，也可以为对象数组，如果为二维数组，则为多行展示 | `Array<IActionSheetPanel \| IActionSheetPanel[]>` | []     |
| cancelText          | 取消按钮的文字，不为空时显示按钮                        | `string`                                          | -      |
| closeOnClickAction  | 点击某个菜单项时是否关闭弹窗                          | `boolean`                                         | true   |
| closeOnClickOverlay | 点击遮罩是否允许关闭，见上方文档示例                      | `boolean`                                         | true   |
| duration            | 弹框动画持续时间                                | `number`                                          | 200    |
| zIndex              | 菜单层级                                    | `number`                                          | 100    |
| round               | 圆角值                                     | `string` \| `number`                              | 20     |
| safeAreaInsetBottom | 是否开启底部安全区适配                             | `boolean`                                         | true   |
| customStyle         | 自定义外部样式                                 | `CSSProperties`                                   | -      |
| customClass         | 自定义外部类名                                 | `string`                                          | -      |
| customHeaderClass   | 自定义标题类名                                 | `string`                                          | -      |

### Typings

:::details 类型说明

```ts
interface IActionSheetAction {
    /**
     * 选项名称
     */
    name: string
    /**
     * 描述信息
     */
    sub?: string
    /**
     * 字体颜色
     */
    color?: string
    /**
     * 是否禁用
     */
    disabled?: boolean
    /**
     * 是否加载中
     */
    loading?: boolean
}

interface IActionSheetPanel {
    /**
     * 图片地址
     */
    iconUrl: string
    /**
     * 名称
     */
    name: string
}

interface SelectEventParams {
    /**
     * 选中的内容
     */
    item: any
    /**
     * 选中的横向索引
     */
    rowIndex?: number
    /**
     * 选中的竖列索引
     */
    colIndex?: number
    /**
     * 选中的索引
     */
    index?: number
}
```

:::

### Events

| 事件名 | 说明               | 回调参数                                                                                                                                          |
| ------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| select | 点击选项时触发     | 菜单选项或自定义面板一维数组 （item: 选项对象, index: 选项下标），自定义面板二维数组（item: 选项对象, rowIndex: 选项行下标, colIndex 选项列下标） |
| open   | 弹出层打开时触发   | -                                                                                                                                                 |
| close  | 弹出层关闭时触发   | -                                                                                                                                                 |
| cancel | 点击取消按钮时触发 | -                                                                                                                                                 |

### Slots

| 插槽名  | 说明         | 接收值 |
| ------- | ------------ | ------ |
| default | 面板默认插槽 | -      |

<demo-model url="pages-design/actionSheet/actionSheet"></demo-model>
