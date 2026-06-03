# Empty 内容为空组件
> 该组件用于需要加载内容，但是加载的第一页数据就为空，提示一个"没有内容"的场景， 我们精心挑选了十几个场景的图标，方便您使用。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-empty></hy-empty>
```

### 显示、配置按钮
- `btnText` 显示按钮文本
- `btnSize` 按钮大小
- `btnShape` 按钮形状
- `btnPlain` 按钮是否镂空
- `navigateUrl` 跳转页面
```html
<template>
    <hy-empty btnText="去购物" btnSize="mini" btnShape="circle" btnPlain navigateUrl="/pages/abc/Index"></hy-empty>
</template>
```

### 配置提示文字
- `desSize` 提示文本大小
- `desColor` 提示文本颜色
```html
<template>
    <hy-empty desColor="red" desSize="10px"></hy-empty>
</template>
```

### 自定义插槽

```html
<template>
    <hy-empty>
        <template #description>
            自定义描述内容
        </template>
    </hy-empty>

    <hy-empty>
        <template>
            自定义默认插槽
        </template>
    </hy-empty>
</template>
```

## API
### Empty Props

| 参数          | 说明                                        | 类型                 | 默认值     |
|-------------|-------------------------------------------|--------------------|---------|
| show        | 是否显示组件                                    | `boolean`          | true    |
| mode        | 缺省页内容                                     | `string`           | content |
| imageUrl    | 空状态icon图片                                 | `string`           | -       |
| zIndex      | 组件层级                                      | `number`           | 889     |
| width       | 图片宽度                                      | `string`\|`number` | 240px   |
| height      | 图片高度                                      | `string`\|`number` | 240px   |
| description | 提示信息                                      | `string`           | 暂无数据    |
| desSize     | 提示信息大小                                    | `string`\|`number` | 15      |
| desColor    | 提示信息颜色                                    | `string`           | -       |
| imgMargin   | icon图片margin                              | `string`           | -       |
| button      | 按钮属性集合，text有值时候显示，详见[按钮Api](./button#api) | `HyButtonProps`    | -       |
| navigateUrl | 跳转地址                                      | `string`           | -       |
| customStyle | 自定义输入框外部样式                                | `CSSProperties`    | -       |
| customClass | 自定义外部类名                                   | `string`           | -       |

### Events

| 事件名   | 说明       | 回调参数 |
|-------|----------|------|
| click | 点击按钮执行函数 | -    |

### Slots

| 插槽名         | 说明      | 接收值 |
|-------------|---------|-----|
| default     | 默认插槽    | -   |
| description | 自定义底部描述 | -   |

[^1]: `normal`：默认尺寸；`large`：大尺寸； `small`：小尺寸；`mini`：迷你尺寸
[^2]: `error`：#fa3534；`warning`：#ff9900；`success`：#19be6b；`primary`：#2979ff； `info`：#909399；
[^3]: `circle`：两边为半圆；`square`：方形带圆角

<demo-model url="pages-design/empty/empty"></demo-model>