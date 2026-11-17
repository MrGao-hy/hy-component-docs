# Index-Bar 索引栏组件

> 用于快速定位列表内容的索引栏组件，支持点击和滑动两种交互方式，适配小程序和 App 平台。
>
> 组件内部接管滚动容器，内容通过默认插槽传入，分组标题使用 `hy-index-anchor` 标记，滚动时可自动同步激活索引并实现锚点吸顶。

## :pushpin:平台差异说明

| APP(vue) | H5  | 微信小程序 | 支付宝小程序 |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle:基本使用示例

将列表内容放入 `hy-index-bar` 默认插槽，每个分组的标题使用 `hy-index-anchor` 标记；索引值会自动收集，无需手动传入 `indexList`。

```html
<template>
    <hy-index-bar v-model="activeIndex">
        <view v-for="item in contactList" :key="item.index" class="contact-group">

            <hy-index-anchor :index="item.index" />
            <view v-for="(contact, idx) in item.list" :key="idx" class="contact-item">
                {{ contact.name }}
            </view>
        </view>
    </hy-index-bar>
</template>

<script setup>
    import { ref } from 'vue';

    const contactList = ref([
        { index: 'A', list: [{ name: '阿杰' }, { name: '阿明' }] },
        { index: 'B', list: [{ name: '贝贝' }, { name: '宝宝' }] }
        // 更多数据...
    ]);

    // 当前激活的索引，由索引栏在滚动/点击时自动同步
    const activeIndex = ref('');
</script>

<style lang="scss" scoped>
    .contact-group {
        margin-bottom: 40rpx;
    }

    .contact-item {
        font-size: 28rpx;
        padding: 20rpx 0;
        border-bottom: 1rpx solid #eee;
    }
</style>
```

::: tip
索引栏容器需要确定高度才能正常滚动。`height` 默认撑满父级（`100%`），若父级高度不确定，可通过 `customStyle` 指定，例如 H5 端扣除导航栏占位：`{ height: 'calc(100vh - 44px)' }`。
:::

### 关闭锚点吸顶

默认开启锚点吸顶，滚动到分组时锚点会固定于滚动容器顶部。通过 `sticky` 关闭：

```html
<hy-index-bar v-model="activeIndex" :sticky="false">
    <hy-index-anchor v-for="item in indexList" :key="item" :index="item" />
</hy-index-bar>
```

### 隐藏提示框

通过 `show-toast` 控制是否显示索引字母提示气泡。

```html
<hy-index-bar v-model="activeIndex" :show-toast="false">
    <hy-index-anchor v-for="item in indexList" :key="item" :index="item" />
</hy-index-bar>
```

### 索引栏位置

通过 `position` 设置索引栏位置，可选值 `left`、`right`，默认 `right`。

```html
<hy-index-bar v-model="activeIndex" position="left"> ... </hy-index-bar>
```

### 自定义样式

```html
<hy-index-bar
    v-model="activeIndex"
    :index-color="'#666'"
    :active-index-color="'#007AFF'"
    :index-bg-color="'transparent'"
    :active-index-bg-color="'#e0e0e0'"
    :index-size="14"
    :width="30"
    :height="'80%'"
    :custom-style="{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }"
>
    ...
</hy-index-bar>
```

### 手动指定索引列表

默认情况下索引值由插槽内的 `hy-index-anchor` 自动收集。若需自定义索引栏展示项（如与锚点顺序不同、只展示部分索引），可通过 `indexList` 手动指定，支持字符串/数字数组或对象数组。

```js
// 字符串数组
const indexList = ['A', 'B', 'C', 'D'];

// 对象数组：index 为索引值，title 为标题，data 为列表数据
const indexList = [
    { index: 'A', title: 'A', data: [...] },
    { index: 'B', title: 'B', data: [...] }
];
```

```html
<hy-index-bar v-model="activeIndex" :index-list="indexList"> ... </hy-index-bar>
```

### 锚点独立使用

`hy-index-anchor` 也可脱离索引栏单独使用，此时通过 `active` 控制激活状态、`sticky` 控制吸顶。

```html
<hy-index-anchor :index="'A'" :active="true" :sticky="true" :offset-top="0" />
```

### 完整代码

::: code-group

```vue [vue]
<template>
    <hy-index-bar
        v-model="currentActiveIndex"
        :position="position"
        :show-toast="showToast"
        :custom-style="barCustomStyle"
    >
        <view v-for="item in indexList" :key="item.index" class="hy-index-section">
            <!-- 索引锚点：放入插槽后自动注册，滚动到对应分组时吸顶并高亮 -->
            <hy-index-anchor :index="item.index" />
            <view class="hy-index-section__container">
                <view
                    v-for="(city, cityIndex) in item.data"
                    :key="cityIndex"
                    class="hy-index-section__item"
                >
                    {{ city }}
                </view>
            </view>
        </view>
    </hy-index-bar>
</template>
```

```ts [index.ts]
import { ref, computed } from 'vue';
import type { CSSProperties } from 'vue';

// 索引栏位置
const position = ref<'left' | 'right'>('right');
// 是否显示提示
const showToast = ref<boolean>(true);
// 当前激活的索引，由索引栏在滚动/点击时自动同步
const currentActiveIndex = ref<string>('');
// 索引栏容器需要确定高度，H5 需扣除导航栏占位，否则滚动会落到页面级
const barCustomStyle = { height: '100vh' } as CSSProperties;
// #ifdef H5
barCustomStyle.height = 'calc(100vh - 44px)';
// #endif

const cityData = {
    A: ['安庆', '安阳', '鞍山', '安顺', '安康', '阿克苏', '阿勒泰'],
    B: ['北京', '上海', '广州', '深圳', '重庆', '成都', '杭州', '武汉', '西安'],
    C: ['长春', '常州', '长沙', '成都', '重庆', '福州'],
    D: ['大连', '东莞', '德州', '大同', '大庆', '大理']
    // 更多数据...
};

// 转换为索引列表格式，索引值由锚点自动收集，无需手动传入 index-list
const indexList = computed(() =>
    Object.keys(cityData)
        .sort()
        .map((key) => ({ index: key, title: key, data: cityData[key] }))
);
```

```scss [index.scss]
.hy-index-section {
    padding: $hy-border-margin-padding-base;

    @include e(item) {
        font-size: 28rpx;
        padding: $hy-border-margin-padding-base;
        border-bottom: $hy-border-line;
        &:last-child {
            border: none;
        }
    }

    @include e(container) {
        padding: $hy-border-margin-padding-base 0;
        border-radius: $hy-radius-base;
        background: $hy-background--container;
    }
}
```

:::

## API

### IndexBar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前激活的索引值 | `string`\|`number` | '' |
| indexList | 索引列表数据，支持字符串/数字数组或对象数组；未传时自动收集插槽内 `hy-index-anchor` 的索引值 | `IIndexItem[]` | [] |
| sticky | 锚点是否自动吸顶，吸顶时锚点固定于滚动容器顶部 | `boolean` | true |
| position | 索引栏位置，可选值：`left`、`right` | `left`\|`right` | right |
| showToast | 是否显示索引字母提示框 | `boolean` | true |
| indexColor | 索引项颜色 | `string` | - |
| activeIndexColor | 激活状态索引项颜色 | `string` | - |
| indexBgColor | 索引项背景色 | `string` | transparent |
| activeIndexBgColor | 激活状态索引项背景色 | `string` | - |
| indexSize | 索引项大小，数值默认单位 px | `number`\|`string` | 12 |
| height | 组件容器高度，数值默认单位 px，默认撑满父级 | `number`\|`string` | 100% |
| width | 索引项宽高，数值默认单位 px | `number`\|`string` | 20 |
| customStyle | 自定义外部样式 | `CSSProperties` | - |
| customClass | 自定义外部类名 | `string` | - |

#### IIndexItem

| 字段 | 说明 | 类型 |
| --- | --- | --- |
| index | 索引值 | `string`\|`number` |
| title | 索引对应的标题 | `string` |
| data | 索引对应的列表数据（可选） | `any[]` |

`indexList` 也可直接传入 `string[]` 或 `number[]`。

### IndexAnchor Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| index | 索引值，同时作为锚点 id 与默认标题内容（必填） | `string`\|`number` | - |
| active | 当前索引是否激活，仅独立使用（未放入 `hy-index-bar` 插槽）时生效；配合索引栏时激活状态由 v-model 驱动 | `boolean` | false |
| sticky | 是否开启吸顶，仅独立使用时生效，且仅在激活状态下生效；配合索引栏时以索引栏的 `sticky` 为准 | `boolean` | true |
| offsetTop | 吸顶时距离滚动容器顶部的偏移量，单位 px | `number`\|`string` | 0 |
| zIndex | 吸顶时的层级 | `number`\|`string` | 1 |
| customStyle | 自定义外部样式 | `CSSProperties` | - |
| customClass | 自定义外部类名 | `string` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击索引项时触发 | index: `string`\|`number` - 当前点击的索引值；event: Event - 事件对象 |
| scroll | 滑动索引栏时触发 | index: `string`\|`number` - 当前滑动到的索引值 |
| update:modelValue | 索引值改变时触发 | index: `string`\|`number` - 当前索引值 |

### Slots

| 插槽名 | 说明 | 接收值 |
| --- | --- | --- |
| default | 索引栏列表内容，分组标题使用 `hy-index-anchor` 标记 | - |

### CSS 变量

#### hy-index-bar

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| `--hy-index-bar-z-index` | 层级 | `999` |
| `--hy-index-bar-toast-size` | 提示气泡尺寸 | `50px` |
| `--hy-index-bar-index-color` | 索引文字颜色 | 跟随 `--hy-text-color--3` |
| `--hy-index-bar-index-radius` | 索引项圆角 | 跟随 `--hy-radius-sm`（8rpx） |
| `--hy-index-bar-toast-color` | 提示气泡文字颜色 | `#ffffff` |
| `--hy-index-bar-toast-font-size` | 提示气泡字号 | 跟随 `--hy-font-size-lg`（36rpx） |
| `--hy-index-bar-primary` | 激活索引主题色 | 跟随 `--hy-primary` |
| `--hy-index-bar-index-active-background` | 索引项选中态背景色 | 跟随 `--hy-background--hover` |
| `--hy-index-bar-list-margin` | 索引列表右外边距 | 跟随 `--hy-border-margin-padding-base` |
| `--hy-index-bar-toast-background` | 提示气泡背景色 | 跟随 `--hy-background--empty` |

#### hy-index-anchor

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| `--hy-index-anchor-text-color` | 索引标题文字颜色 | 跟随 `--hy-text-color` |
| `--hy-index-anchor-background` | 索引标题背景色 | 跟随 `--hy-background--container` |
| `--hy-index-anchor-primary` | 激活索引标题文字颜色 | 跟随 `--hy-primary` |
| `--hy-index-anchor-font-size` | 索引标题字号 | 跟随 `--hy-font-size-sm` |
| `--hy-index-anchor-font-weight` | 索引标题字重 | 跟随 `--hy-font-weight-medium` |
| `--hy-index-anchor-padding-y` | 索引标题纵向内边距 | 跟随 `--hy-border-margin-padding-sm` |
| `--hy-index-anchor-padding-x` | 索引标题横向内边距 | 跟随 `--hy-border-margin-padding-base` |
| `--hy-index-anchor-z-index` | 吸顶层级 | `1` |

<demo-model url="pages-design/indexBar/indexBar"></demo-model>
