# Cell 单元格组件
> cell单元格一般用于一组列表的情况，比如个人中心页，设置页等。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [cell组件](https://uiadmin.net/uview-plus/components/cell.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例
::: tip 注意
如何你想在`hy-cell`上使用点击事件，必须给每个`hy-cell-item`设置`name`唯一值，用来区分哪个子元素点击
:::
```html
<!-- 全局使用 -->
<hy-cell
        @click="onClick"
>
    <hy-cell-item
            title="工具箱"
            name="tools"
            :icon="{ name: IconConfig.SETTING, color: 'red' }"
    ></hy-cell-item>
    <hy-cell-item
            title="我的"
            name="my"
            sub="我是一个神奇的小箱子"
            value="返回"
    ></hy-cell-item>
    <hy-cell-item title="禁用" name="disabled" disabled></hy-cell-item>
</hy-cell>
```
```ts
const onClick = (name: string | number) => {
    uni.showToast({ title: `点击执行了：${name}`, icon: 'none' })
}
```

## 设置icon内容
```vue
<template>
  <hy-cell >
    <hy-cell-item
        title="工具箱"
        :icon="{ name: IconConfig.SETTING, color: 'red' }"
    ></hy-cell-item>
  </hy-cell>

  <!-- 自定义图标 -->
  <hy-cell >
    <hy-cell-item
        title="工具箱"
    >
      <template #icon>
        <hy-icon name="tools" />
      </template>
    </hy-cell-item>
  </hy-cell>
</template>
```

## 右侧内容定位
- 通过设置`arrange`设置改变value的位置
  - `left`：左边
  - `center`：中间
  - `right`：右边
```html
<template>
    <hy-cell arrange="left"></hy-cell>
    <hy-cell arrange="center"></hy-cell>
    <hy-cell arrange="right"></hy-cell>
</template>
```

## cell大小
- 通过设置`size`设置单元格大小
    - `small`：小
    - `medium`：默认
    - `large`：大
```html
<template>
    <hy-cell size="small"></hy-cell>
    <hy-cell size="medium"></hy-cell>
    <hy-cell size="large"></hy-cell>
</template>
```

## 右侧箭头上下左转动
- 通过设置`arrow-direction`设置单元格大小
    - `up`：向上
    - `right`：向右
    - `down`：向下
    - `left`：向左
```html
<template>
    <hy-cell arrow-direction="up"></hy-cell>
    <hy-cell arrow-direction="right"></hy-cell>
    <hy-cell arrow-direction="down"></hy-cell>
    <hy-cell arrow-direction="left"></hy-cell>
</template>
```

## 跳转页面
```html
<template>
    <hy-cell>
        <hy-cell-item url="/page/index/tools"></hy-cell-item>
    </hy-cell>
</template>
```

## API

### Cell Props
| 参数             | 说明                        | 类型                 | 默认值    |
|----------------|---------------------------|--------------------|--------|
| border         | 是否显示cell下边框               | `boolean`          | true   |
| disabled       | 是否禁用cell                  | `boolean`          | false  |
| clickable      | 是否开启点击反馈(表现为点击时加上灰色背景)    | `boolean`          | false  |
| size           | 单元的大小                     | `string`\|`number` | medium |
| arrange        | 内容是否垂直居中(主要是针对右侧的value部分) | `string`           | right  |
| isRightIcon    | 是否展示右侧图标                  | `boolean`          | true   |
| arrowDirection | 右侧箭头的方向                   | `string`           | right  |
| customStyle    | 定义需要用到的外部样式               | `CSSProperties`    | -      |
| customClass    | 自定义外部类名                   | `string`           | -      |

### CellItem Props
| 参数             | 说明                     | 类型                 | 默认值        |
|----------------|------------------------|--------------------|------------|
| title          | 头部标题                   | `string`           | -          |
| sub            | 标题下面小提示                | `string`           | -          |
| disabled       | 是否禁用cell               | `boolean`          | false      |
| value          | 右侧的内容                  | `string`           | -          |
| icon           | 左边图标，[图标Api](icon#api) | `HyIconProps`      | -          |
| rightIcon      | 右边图标，[图标Api](icon#api) | `HyIconProps`      | -          |
| arrowDirection | 右侧箭头的方向                | `string`           | right      |
| url            | 点击后跳转的URL地址            | `string`           | -          |
| stop           | 点击cell是否阻止事件传播         | `boolean`          | true       |
| name           | 标识符，用于在click事件中进行返回    | `string`\|`number` | -          |
| customStyle    | 定义需要用到的外部样式            | `CSSProperties`    | -          |
| customClass    | 自定义外部类名                | `string`           | -          |


## Events

### Cell Emits

| 事件名   | 说明          | 回调参数       |
|-------|-------------|------------|
| click | 点击cell列表时触发 | name: 唯一标识 |

### CellItem Emits

| 事件名   | 说明          | 回调参数       |
|-------|-------------|------------|
| click | 点击cell列表时触发 | name: 唯一标识 |


## Slots

### CellItem Slots

| 插槽名        | 说明           | 接收值    |
|------------|--------------|--------|
| title      | 自定义cell标题的内容 | title  |
| icon       | 自定义左侧的图标     | icon   |
| sub        | 自定义小标题内容     | sub    |
| value      | 自定义右侧值的内容    | record |
| right-icon | 自定义右侧图标内容    | icon   |

<demo-model url="pages/components/cell/cell"></demo-model>
