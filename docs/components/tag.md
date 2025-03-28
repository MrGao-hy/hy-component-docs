# Tag 标签组件
> tag组件一般用于标记和选择，我们提供了更加丰富的表现形式，能够较全面的涵盖您的使用场景

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [button组件](https://uiadmin.net/uview-plus/components/button.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|-----|----|-------|
| ✔   | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-tag text="标签"></hy-tag>
<!-- 单个组件引入 -->
<HyTag text="标签"></HyTag>
```
```ts
import { HyTag } from "hfyk-app"
```

## 主题色
```html
<template>
    <hy-cell :type="warning" text="标签"></hy-cell>
    <hy-cell :type="success" text="标签"></hy-cell>
    <hy-cell :type="error" text="标签"></hy-cell>
    <hy-cell :type="primary" text="标签"></hy-cell>
    <hy-cell :type="info" text="标签"></hy-cell>
</template>
```

## 圆形标签
```html
<template>
    <hy-cell shape="circle" text="标签"></hy-cell>
    <hy-cell shape="square" text="标签"></hy-cell>
</template>
```

## 镂空标签
```html
<template>
    <hy-cell :type="warning" text="标签" plain></hy-cell>
    <hy-cell :type="success" text="标签" plain></hy-cell>
    <hy-cell :type="error" text="标签" plain></hy-cell>
    <hy-cell :type="primary" text="标签" plain></hy-cell>
    <hy-cell :type="info" text="标签" plain></hy-cell>
</template>
```

## 镂空带背景色
```html
<template>
    <hy-cell :type="warning" text="标签" plain plainFill></hy-cell>
    <hy-cell :type="success" text="标签" plain plainFill></hy-cell>
    <hy-cell :type="error" text="标签" plain plainFill></hy-cell>
    <hy-cell :type="primary" text="标签" plain plainFill></hy-cell>
    <hy-cell :type="info" text="标签" plain plainFill></hy-cell>
</template>
```

## 镂空带背景色不带边框
- 添加`plainFill`属性镂空带背景色
```html
<template>
    <hy-cell :type="warning" text="标签" plain plainFill borderColor="transparent"></hy-cell>
    <hy-cell :type="success" text="标签" plain plainFill borderColor="transparent"></hy-cell>
    <hy-cell :type="error" text="标签" plain plainFill borderColor="transparent"></hy-cell>
    <hy-cell :type="primary" text="标签" plain plainFill borderColor="transparent"></hy-cell>
    <hy-cell :type="info" text="标签" plain plainFill borderColor="transparent"></hy-cell>
</template>
```

## 可关闭标签
- `tag`在右上角提供了删除标签的样式
```html
<template>
    <up-tag text="标签" closable :show="show" @close="show = false"></up-tag>
</template>

<script setup>
    import { ref } from 'vue';

    const show = ref(true);
</script>
```

## 标签大小设置
- `size`属性为您提供了三种规格的标签大小，默认中等。
```html
<template>
    <hy-cell text="标签" size="small"></hy-cell>
    <hy-cell text="标签" size="medium"></hy-cell>
    <hy-cell text="标签" size="large"></hy-cell>
</template>
```

## 标签前缀图标
```html
<template>
    <hy-cell text="标签" :icon="IconConfig.HELP"></hy-cell>
</template>

<script setup>
    import { IconConfig } from "hfyk-app";
</script>
```

## API

| 参数           | 说明                          | 类型                                               | 默认值     |
|--------------|-----------------------------|--------------------------------------------------|---------|
| text         | 标签的文字内容                     | `string`                                         | -       |
| type         | 主题类型                        | `error`\|`warning`\|`success`\|`primary`\|`info` | primary |
| disabled     | 禁用                          | `boolean`                                        | false   |
| size         | 标签大小                        | `small`\|`medium`\|`large`                       | medium  |
| shape        | 标签形状                        | ``                                               | square  |
| bgColor      | 背景颜色，默认为空字符串，即不处理           | `string`                                         | #C6C7CB |
| color        | 标签字体颜色，默认为空字符串，即不处理         | `string`                                         | -       |
| borderColor  | 标签的边框颜色                     | `string`                                         | -       |
| closeColor   | 关闭按钮图标的颜色                   | `string`                                         | -       |
| name         | 点击时返回的索引值，用于区分例遍的数组哪个元素被点击了 | `string`                                         | -       |
| plainFill    | 镂空时是否填充背景色                  | `boolean`                                        | false   |
| plain        | 是否镂空                        | `boolean`                                        | false   |
| closable     | 是否可关闭，设置为true，文字右边会出现一个关闭图标 | `boolean`                                        | false   |
| show         | 标签显示                        | `boolean`                                        | true    |
| icon         | 内置图标，或绝对路径的图片               | `string`                                         | -       |
| iconColor    | 图标颜色                        | `string`                                         | -       |
| textSize     | 文字大小                        | `string` \| `number`                             | -       |
| height       | 自定义高度                       | `string` \| `number`                             | -       |
| padding      | 自定义内间距                      | `string` \| `number`                             | -       |
| borderRadius | 自定义圆角                       | `string` \| `number`                             | -       |
| autoBgColor  | 自动根据color计算浅色背景色            | `number`                                         | 85      |
| customStyle  | 是否显示空状态                     | `CSSProperties`                                  | -       |

## Events

| 事件名   | 说明                        | 回调参数                         |
|-------|---------------------------|------------------------------|
| click | 点击标签触发                    | \{value:文本text值, name:自定义值\} |
| close | closable为true时，点击标签关闭按钮触发 | text：文本内容                    |
