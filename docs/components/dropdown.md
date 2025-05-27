# Dropdown 下拉菜单组件
> 该组件内部实现以uni-app的基础button组件为基础，进行二次封装

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [dropdown组件](https://uiadmin.net/uview-plus/components/dropdown.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例
- 该组件必须结合up-dropdown和up-dropdown-item一起使用，展开的内容由up-dropdown-item通过传递参数或者slot提供
- 组件的菜单栏标题由up-dropdown-item通过title参数提供
- up-dropdown-item带有默认的单选展示功能，通过options(见下方说明)配置，传入slot则会覆盖默认功能，通过v-model双向绑定options选中项的value值
:::code-group
```html [vue]
<!-- 全局使用 -->
<hy-dropdown>
    <hy-dropdown-item
            title="全部"
            :menus="options1"
            v-model="value1"
            @change="handleChange"
    ></hy-dropdown-item>
    <hy-dropdown-item
            title="国漫"
            :menus="options_2"
            v-model="value_2"
            @change="handleChange"
    ></hy-dropdown-item>
    <hy-dropdown-item
            title="国家"
            :menus="options_3"
            v-model="value_3"
            @change="handleChange"
    ></hy-dropdown-item>
</hy-dropdown>
<!-- 单个组件引入 -->
<HyButton type="primary">按钮</HyButton>
```

```ts [.ts]
import HyDropdownItem from "hy-app/components/hy-dropdown-item/hy-dropdown-item.vue";
import HyDropdown from "hy-app/components/hy-dropdown/hy-dropdown.vue";

const options1 = ref([
    {
        label: "全部商品",
        value: 1,
    },
    {
        label: "折扣商品",
        value: 2,
    },
    {
        label: "团购商品",
        value: 3,
    },
]);
const options_2 = ref([
    {
        label: "西行记",
        value: 1,
    },
    {
        label: "斗破苍穹",
        value: 2,
    },
    {
        label: "吞噬星空",
        value: 3,
    },
    {
        label: "斗罗大陆",
        value: 4,
    },
    {
        label: "偷心九月天",
        value: 5,
    },
]);
const options_3 = ref([
    {
        label: "中国",
        value: 1,
    },
    {
        label: "日本",
        value: 2,
    },
    {
        label: "韩国",
        value: 3,
    },
    {
        label: "美国",
        value: 4,
    },
]);
```
:::

## 基本使用示例

```html
<template>
    <hy-button text="月落"></hy-button>
</template>
```

## API
#### Dropdown Props
| 参数                  | 说明                          | 类型                 | 默认值             |
|---------------------|-----------------------------|--------------------|-----------------|
| active-color        | 标题和选项卡选中的颜色                 | `string`           | -               |
| inactive-color      | 标题和选项卡未选中的颜色                | `string`           | #606266         |
| close-on-click-mask | 点击遮罩是否关闭菜单                  | `boolean`          | true            |
| height              | 标题菜单的高度，单位任意，数值默认为px单位      | `string`\|`number` | 40              |
| border-bottom       | 标题菜单是否显示下边框                 | `boolean`          | false           |
| title-size          | 标题的字体大小，单位任意，数值默认为px单位      | `string`\|`number` | 16              |
| border-radius       | 菜单展开内容下方的圆角值，单位px           | `string`\|`number` | 0               |
| menu-icon           | 标题菜单右侧的图标                   | `boolean`          | ARROW_DOWN_FILL |
| menu-icon-size      | 标题菜单右侧的图标的大小，单位任意，数值默认为px单位 | `string`\|`number` | 14              |

#### Dropdown-item Props
| 参数       | 说明         | 类型                 | 默认值   |
|----------|------------|--------------------|-------|
| v-model  | 双向绑定选项卡选择值 | `string`\|`number` | -     |
| title    | 菜单项标题      | `string`           | -     |
| menus    | 选项数据       | `array`            | -     |
| disabled | 是否显示空状态    | `boolean`          | false |

## Events

| 事件名    | 说明                                      | 回调参数                    |
|--------|-----------------------------------------|-------------------------|
| change | 每个dropdown-item组件均有此回调，点击某个options选项时触发 | value: - 点击项绑定的value属性值 |

## Slots

| 插槽名     | 说明                  | 接收值 |
|---------|---------------------|-----|
| default | Dropdown-item组件插槽内容 | -   |


<demo-model url="pages/components/dropdown/dropdown"></demo-model>