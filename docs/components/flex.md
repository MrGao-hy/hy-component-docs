# Flex 弹性布局组件
> Flex 为块级元素提供间距，其本身不会添加包裹元素。适用于垂直或水平方向上的子元素布局，并提供了更多的灵活性和控制能力。


## 平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-flex>
    <hy-button size="small">提交</hy-button>
    <hy-button size="small" type="success">审核</hy-button>
    <hy-button size="small" type="error">删除</hy-button>
</hy-flex>
```

## 设置对齐方式
- 通过设置`justify`主轴方向上的对齐方式
- 通过设置`align`交叉轴方向上的对齐方式
```html
 <hy-flex justify="center" align="center">
    <hy-button size="small">按钮</hy-button>
</hy-flex>
```

## 设置间隙
- 通过设置`gap`控制元素之间的间距，数组第一个是横向间距，第二个是纵向间距
```html
 <hy-flex :gap="10">
    <template v-for="item in 4">
        <hy-button size="small">按钮</hy-button>
    </template>
</hy-flex>
```

## 自动换行
- 通过设置`wrap`自动换行
```html
 <hy-flex wrap="wrap" :gap="[15, 20]">
    <template v-for="item in 10">
        <hy-button size="small">按钮</hy-button>
    </template>
</hy-flex>
```

## API

| 参数          | 说明                                       | 类型                                                                                  | 默认值  |
|-------------|------------------------------------------|-------------------------------------------------------------------------------------|------|
| vertical    | flex 主轴的方向是否垂直，使用 flex-direction: column | `boolean`                                                                           | flex |
| wrap        | 设置元素单行显示还是多行显示                           | `boolean`                                                                           | -    |
| justify     | 设置元素在主轴方向上的对齐方式                          | `flex-start`\|`center`\|`flex-end`\|`space-between`\|`space-around`\|`space-evenly` | -    |
| align       | 设置元素在交叉轴方向上的对齐方式                         | `flex-start`\|`center`\|`flex-end`\|`stretch`\|`baseline`                           | -    |
| flex        | flex CSS 简写属性                            | `initial\|none\|0`                                                                  | -    |
| gap         | 设置网格之间的间隙                                | `string \| number \| (number\|string)[]`                                            | 0    |
| show        | 是否显示空状态                                  | `boolean`                                                                           | -    |
| customStyle | 自定义需要用到的外部样式                             | `CSSProperties`                                                                     | -    |
| customClass | 自定义外部类名                                  | `string`                                                                            | -    |


<demo-model url="pages/components/flex/flex"></demo-model>