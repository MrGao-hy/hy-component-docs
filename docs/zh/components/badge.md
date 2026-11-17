# Badge 徽标数组件

> 该组件一般用于图标右上角显示未读的消息数量，提示用户点击，有圆点和圆包含文字两种形式。支持**独立使用**与**默认插槽包裹内容**两种模式。

## :pushpin:平台差异说明

| APP(vue) | H5  | 微信小程序 | 支付宝小程序 |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle:基本使用示例

```html
<template>
    <hy-badge :value="8"></hy-badge>
</template>
```

### 插槽用法

传入默认插槽后，组件以包裹形态渲染，角标自动骑缝定位于内容右上角，无需再手动开启 `absolute` 定位。适合给头像、图标等内容添加角标。

::: code-group

```html [vue]
<template>
    <hy-badge :value="8" border>
        <hy-avatar size="large" shape="square" :src="config.avatar"></hy-avatar>
    </hy-badge>
    <hy-badge is-dot border>
        <hy-avatar size="large" shape="circle" :src="config.avatar"></hy-avatar>
    </hy-badge>
</template>
```

```ts [index.ts]
const config = {
    avatar: 'https://cdn.example.com/avatar.png',
};
```

:::

- 插槽模式下可通过 `offset` 微调角标位置，格式为 `[top, right]`，单位 px。
- 未传插槽时保持独立角标形态，可通过 `absolute` 配合 `offset`（此时为 `[top, left]`）自行定位。

### 设置圆点类型徽标

通过 `is-dot` 设置圆点类型徽标。

```html
<hy-badge is-dot></hy-badge>
```

### 边角形状

通过 `shape` 设置徽标形状，可选值：`circle`（圆形，默认）、`horn`（牛角形）。

```html
<hy-badge :value="123" shape="circle"></hy-badge>
<hy-badge :value="123" shape="horn"></hy-badge>
```

### 设置数字显示模式

通过 `number-type` 设置数字的显示方式，可选值：

- `overflow`：超过 `max` 显示 `{max}+`
- `ellipsis`：超过 `max` 显示 `...`
- `limit`：超过 `max` 固定显示 `max` 数字

```html
<hy-badge :value="1234" :max="99" number-type="overflow"></hy-badge>
```

### 显示主题色

通过 `type` 设置主题色，可选值：`primary`、`success`、`info`、`warning`、`error`。

```html
<hy-badge :value="8" type="primary"></hy-badge>
<hy-badge :value="8" type="success"></hy-badge>
<hy-badge :value="8" type="warning"></hy-badge>
```

### 反转颜色

通过 `inverted` 反转背景和字体颜色。

```html
<hy-badge :value="8" inverted></hy-badge>
```

### 显示白色边框

通过 `border` 显示白色边框。

```html
<hy-badge :value="8" border></hy-badge>
```

## API

### Badge Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| isDot | 是否显示圆点 | `boolean` | false |
| value | 显示的内容 | `string`\|`number` | 0 |
| show | 是否显示 | `boolean` | true |
| max | 最大值，超过最大值按 `numberType` 处理 | `number` | 999 |
| zIndex | 层级 | `number` | 999 |
| type | 主题类型，可选值：`error`、`warning`、`success`、`primary`、`info` | `string` | error |
| showZero | 当数值为 0 时是否展示徽标 | `boolean` | false |
| bgColor | 背景颜色，优先级比 `type` 高，设置后 `type` 失效 | `string` | - |
| color | 字体颜色 | `string` | - |
| shape | 徽标形状，可选值：`circle`、`horn` | `string` | circle |
| border | 是否显示白边 | `boolean` | false |
| numberType | 数字显示方式，可选值：`overflow`、`ellipsis`、`limit` | `string` | overflow |
| offset | 位置偏移 `[x, y]`，单位 px。插槽模式下为 `[top, right]`，用于微调骑缝位置；独立模式下为 `[top, left]`（`absolute` 为 true 时有效） | `array` | - |
| inverted | 是否反转背景和字体颜色 | `boolean` | false |
| absolute | 是否绝对定位，仅独立使用（未传入默认插槽）时生效；插槽模式下角标自动定位于内容右上角 | `boolean` | false |
| customStyle | 自定义外部样式 | `CSSProperties` | - |
| customClass | 自定义外部类名 | `string` | - |

### Events

| 事件名 | 说明           | 回调参数                |
| ------ | -------------- | ----------------------- |
| click  | 点击徽标时触发 | event: Event - 事件对象 |

### Slots

| 插槽名  | 说明                                                         | 接收值 |
| ------- | ------------------------------------------------------------ | ------ |
| default | 包裹内容，传入后组件以包裹形态渲染，角标骑缝定位于内容右上角 | -      |

### CSS 变量

| 变量名                          | 说明             | 默认值                        |
| ------------------------------- | ---------------- | ----------------------------- |
| `--hy-badge-dot-size`           | 圆点尺寸         | `8px`                         |
| `--hy-badge-text-font-size`     | 文字字号         | `11px`                        |
| `--hy-badge-radius`             | 徽标圆角         | 跟随 `--hy-radius-semicircle` |
| `--hy-badge-padding`            | 非圆点徽标内边距 | `2px 5px`                     |
| `--hy-badge-inverted-font-size` | 反色模式字号     | `13px`                        |
| `--hy-badge-border-width`       | 白边宽度         | `2px`                         |
| `--hy-badge-border-color`       | 白边颜色         | 跟随 `--hy-background--2`     |

<demo-model url="pages-design/badge/badge"></demo-model>
