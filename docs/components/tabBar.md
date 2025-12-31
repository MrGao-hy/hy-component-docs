# 底部导航栏组件
> 底部导航栏，用于在不同页面之间进行切换。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

::: code-group
```vue [模板]
<template>
    <hy-tabbar-group v-model="current" @change="onChange">
        <hy-tabbar-item title="首页" icon="home"></hy-tabbar-item>
        <hy-tabbar-item title="分类" icon="class"></hy-tabbar-item>
        <hy-tabbar-item title="我的" icon="mine"></hy-tabbar-item>
    </hy-tabbar-group>
</template>

<!-- 底部固定的tabbar测试 -->
<hy-tabbar v-model="fixedCurrent" :list="list" activeColor="red"></hy-tabbar>
```

```ts [脚本]
import { ref } from 'vue';

const current = ref(0)
const fixedCurrent = ref('0')
const list = [
    { name: '首页', icon: IconConfig.HOME },
    { name: '分类', icon: IconConfig.HOME },
    { name: '购物车', icon: IconConfig.HOME, badge: 10 },
    { name: '我的', icon: IconConfig.HOME }
]
```
:::

```javascript
import { IconConfig } from "hy-app";

const list = [
    { name: "首页", icon: IconConfig.HOME },
    { name: "分类", icon: IconConfig.HOME },
    { name: "购物车", icon: IconConfig.HOME, badge: 10 },
    { name: "我的", icon: IconConfig.HOME },
];
```

## 徽标提示
- `badgeProp`: 接收badge参数

::: tip 注意
`isDot`为true时候value必须要有值，没有数字时候可以填写true，否则不会显示
:::
```html
<hy-tabbar-group
    :custom-style="{ marginBottom: '20px' }"
    :badgeProps="{ isDot: true }"
    v-model="current"
    @change="onChange"
>
  <hy-tabbar-item title="首页" icon="home"></hy-tabbar-item>
  <hy-tabbar-item title="分类" icon="class"></hy-tabbar-item>
  <hy-tabbar-item title="我的" icon="mine" :value="true"></hy-tabbar-item>
</hy-tabbar-group>

<hy-tabbar-group v-model="current" @change="onChange">
  <hy-tabbar-item title="首页" icon="home" :value="10"></hy-tabbar-item>
  <hy-tabbar-item title="分类" icon="class"></hy-tabbar-item>
  <hy-tabbar-item title="我的" icon="mine"></hy-tabbar-item>
</hy-tabbar-group>
```

## 圆角导航栏
```html
<hy-tabbar-group v-model="current" @change="onChange" shape="circle">
    <hy-tabbar-item title="首页" icon="home"></hy-tabbar-item>
    <hy-tabbar-item title="分类" icon="class"></hy-tabbar-item>
    <hy-tabbar-item title="我的" icon="mine"></hy-tabbar-item>
</hy-tabbar-group>
```

## 圆角导航栏
```html
<hy-tabbar-group
        v-model="current"
        @change="onChange"
        activeColor="red"
        inactiveColor="green"
>
    <hy-tabbar-item title="首页" icon="home"></hy-tabbar-item>
    <hy-tabbar-item title="分类" icon="class"></hy-tabbar-item>
    <hy-tabbar-item title="我的" icon="mine"></hy-tabbar-item>
</hy-tabbar-group>
```

## icon插槽
```html
<hy-tabbar-group v-model="current" @change="onChange">
    <hy-tabbar-item title="首页" icon="home">
        <template #icon>
            <hy-image :src="config.avatar" width="30" height="30"></hy-image>
        </template>
    </hy-tabbar-item>
    <hy-tabbar-item title="分类" icon="class"></hy-tabbar-item>
    <hy-tabbar-item title="我的" icon="mine"></hy-tabbar-item>
</hy-tabbar-group>
```

## API

### Tabbar Props
| 参数          | 说明                     | 类型              | 默认值   |
|-------------|------------------------|-----------------|-------|
| modelValue  | 选中项的索引值                | `number`        | 0     |
| list        | 导航栏数据集合                | `array`         | []    |
| fixed       | 是否固定在底部                | `boolean`       | true  |
| placeholder | 是否显示占位元素               | `boolean`       | false |
| color       | 图标和字体颜色                | `string`        | -     |
| baseBgColor | 轨道颜色                   | `string`        | -     |
| bgColor     | 背景颜色                   | `string`        | -     |
| activeColor | 激活圆形背景颜色               | `string`        | -     |
| badgeProps  | 徽标[API属性](./badge#api) | `HyBadgeProps`  | -     |
| customStyle | 定义需要用到的外部样式            | `CSSProperties` | -     |
| customClass | 自定义外部类名                | `string`        | -     |

#### list
| 参数    | 说明         | 类型     | 默认值 |
|-------|------------|--------|-----|
| name  | tabBar名称   | string | -   |
| icon  | icon图标或者图片 | string | -   |
| badge | 徽标值        | number | -   |

### TabbarGroup Props
| 参数                  | 说明                           | 类型                 | 默认值      |
|---------------------|------------------------------|--------------------|----------|
| modelValue          | 选中项的索引值                      | `number`           | 0        |
| fixed               | 是否固定在底部                      | `boolean`          | false    |
| border              | 是否显示顶部边框                     | `boolean`          | true     |
| placeholder         | 是否显示占位元素                     | `boolean`          | true     |
| shape               | 导航栏的形状                       | `string`           | 'square' |
| bgColor             | 背景颜色                         | `string`           | -        |
| activeColor         | 激活颜色                         | `string`           | -        |
| inactiveColor       | 非激活颜色                        | `string`           | -        |
| safeAreaInsetBottom | 底部安全区域适配 - 主要用于iPhone X及以上机型 | `boolean`          | true     |
| iconSize            | 图标大小                         | `string`\|`number` | -        |
| fontSize            | 文字大小                         | `string`\|`number` | -        |
| badgeProps          | 徽标部分属性                       | `HyBadgeProps`     | -        |
| zIndex              | z-index层级                    | `number`           | 10086    |
| customStyle         | 定义需要用到的外部样式                  | `CSSProperties`    | -        |
| customClass         | 自定义外部类名                      | `string`           | -        |

### TabbarItem Props
| 参数    | 说明                                | 类型                            | 默认值 |
|-------|-----------------------------------|-------------------------------|-----|
| icon  | 图标                                | `string`                      | -   |
| title | 标题                                | `string`                      | -   |
| name  | 唯一标识                              | `string`\|`number`            | -   |
| value | 徽标显示值，当为徽标为点时候，必须要value设置true或者有值 | `string`\|`number`\|`boolean` | -   |

## Events

### Tabbar Emits
| 事件名    | 说明     | 回调参数          |
|--------|--------|---------------|
| change | 更新选中索引 | value: number |

### TabbarGroup Emits
| 事件名    | 说明     | 回调参数                        |
|--------|--------|-----------------------------|
| change | 更新选中索引 | \{value: string  \| number} |

## Slots

### Tabbar Slots
::: tip 注意
tabbar图标插槽在小程序是没有效果
:::
| 插槽名  | 说明   | 接收值 |
|------|------|-----|
| icon | 图标插槽 | -   |

### TabbarItem Slots
| 插槽名  | 说明   | 接收值 |
|------|------|-----|
| icon | 图标插槽 | -   |

<demo-model url="pages/components/tabBar/tabBar"></demo-model>
