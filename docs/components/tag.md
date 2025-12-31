# Tag 标签组件
> tag组件一般用于标记和选择，我们提供了更加丰富的表现形式，能够较全面的涵盖您的使用场景

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [button组件](https://uiadmin.net/uview-plus/components/button.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-tag text="标签"></hy-tag>
<!-- 单个组件引入 -->
<HyTag text="标签"></HyTag>
```
```ts
import { HyTag } from "hy-app"
```

## 主题色
- 通过设置`type`配置主题色
  - `primary`：信息标签（默认）
  - `success`：主要标签
  - `info`：默认标签
  - `warning`：警告标签
  - `error`：危险标签
- `color`值设置自定义颜色，渐变色;
```html
<template>
  <hy-tag text="标签" type="primary"></hy-tag>
  <hy-tag text="标签" type="success"></hy-tag>
  <hy-tag text="标签" type="error"></hy-tag>
  <hy-tag text="标签" type="warning"></hy-tag>
  <hy-tag text="标签" type="info"></hy-tag>
  <hy-tag text="标签" color="#800080"></hy-tag>
  <hy-tag text="标签" color="#FFF420"></hy-tag>
  <hy-tag text="标签" color="#A4E82F"></hy-tag>
  <hy-tag text="标签" color="#E72F8C"></hy-tag>
</template>
```

## 镂空标签
- 通过设置`plain`设置镂空背景色
```html
<template>
  <hy-tag text="标签" type="primary" plain></hy-tag>
  <hy-tag text="标签" type="success" plain></hy-tag>
  <hy-tag text="标签" type="error" plain></hy-tag>
  <hy-tag text="标签" type="warning" plain></hy-tag>
  <hy-tag text="标签" type="info" plain></hy-tag>
  <hy-tag text="标签" color="#800080" plain></hy-tag>
  <hy-tag text="标签" color="#FFF420" plain></hy-tag>
  <hy-tag text="标签" color="#A4E82F" plain></hy-tag>
  <hy-tag text="标签" color="#E72F8C" plain></hy-tag>
</template>
```

## 镂空带背景色
- 通过设置`plainFill`给背景色半透明
```html
<template>
  <hy-tag text="标签" type="primary" plain plainFill></hy-tag>
  <hy-tag text="标签" type="success" plain plainFill></hy-tag>
  <hy-tag text="标签" type="error" plain plainFill></hy-tag>
  <hy-tag text="标签" type="warning" plain plainFill></hy-tag>
  <hy-tag text="标签" type="info" plain plainFill></hy-tag>
  <hy-tag text="标签" color="#800080" plain plainFill></hy-tag>
  <hy-tag text="标签" color="#FFF420" plain plainFill></hy-tag>
  <hy-tag text="标签" color="#A4E82F" plain plainFill></hy-tag>
  <hy-tag text="标签" color="#E72F8C" plain plainFill></hy-tag>
</template>
```

## 镂空带背景色不带边框
- 通过`borderColor`属性设置边框颜色
```html
<template>
    <hy-tag text="标签" type="primary" plain plainFill borderColor="transparent"></hy-tag>
    <hy-tag text="标签" type="success" plain plainFill borderColor="transparent"></hy-tag>
    <hy-tag text="标签" type="error" plain plainFill borderColor="transparent"></hy-tag>
    <hy-tag text="标签" type="warning" plain plainFill borderColor="transparent"></hy-tag>
    <hy-tag text="标签" type="info" plain plainFill borderColor="transparent"></hy-tag>
    <hy-tag
        text="标签"
        color="#800080"
        plain
        plainFill
        borderColor="transparent"
    ></hy-tag>
</template>
```


## 标签形状
- 通过设置`shape`设置标签形状
  - `circle`: 半圆形
  - `square`: 方块
```html
<template>
  <hy-tag text="圆形" shape="circle"></hy-tag>
  <hy-tag text="方形" shape="square"></hy-tag>
</template>
```

## 可关闭标签
- 通过配置`closable`在右上角提供了删除标签的图标
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
  - `large`: 大标签
  - `medium`: 中标签
  - `small`: 小标签
```html
<template>
  <hy-tag text="标签" size="large"></hy-tag>
  <hy-tag text="标签" size="medium"></hy-tag>
  <hy-tag text="标签" size="small"></hy-tag>
  <hy-tag text="标签" size="mini"></hy-tag>
</template>
```

## 标签前缀图标
```html
<template>
    <hy-tag text="地址" :icon="IconConfig.MAP"></hy-tag>
    <hy-tag text="帮助" :icon="IconConfig.HELP"></hy-tag>
</template>

<script setup>
    import { IconConfig } from "hy-app";
</script>
```

## API

| 参数          | 说明                          | 类型                                               | 默认值     |
|-------------|-----------------------------|--------------------------------------------------|---------|
| text        | 标签的文字内容                     | `string`                                         | -       |
| type        | 主题类型                        | `error`\|`warning`\|`success`\|`primary`\|`info` | primary |
| disabled    | 禁用                          | `boolean`                                        | false   |
| size        | 标签大小                        | `mini`\|`small`\|`medium`\|`large`               | medium  |
| shape       | 标签形状                        | `circle`\|`square`\|`opposite`                   | square  |
| bgColor     | 背景颜色，默认为空字符串，即不处理           | `string`                                         | -       |
| color       | 标签字体颜色，默认为空字符串，即不处理         | `string`                                         | -       |
| borderColor | 标签的边框颜色                     | `string`                                         | -       |
| closeColor  | 关闭按钮图标的颜色                   | `string`                                         | -       |
| name        | 点击时返回的索引值，用于区分例遍的数组哪个元素被点击了 | `string`                                         | -       |
| plainFill   | 镂空时是否填充背景色                  | `boolean`                                        | false   |
| plain       | 是否镂空                        | `boolean`                                        | false   |
| closable    | 是否可关闭，设置为true，文字右边会出现一个关闭图标 | `boolean`                                        | false   |
| show        | 标签显示                        | `boolean`                                        | true    |
| icon        | 图标，详见[图标Api](./icon#api)    | `HyIconProps`                                    | -       |
| customStyle | 定义需要用到的外部样式                 | `CSSProperties`                                  | -       |
| customClass | 自定义外部类名                     | `CSSProperties`                                  | -       |

## Events

| 事件名   | 说明                        | 回调参数                         |
|-------|---------------------------|------------------------------|
| click | 点击标签触发                    | \{value:文本text值, name:自定义值\} |
| close | closable为true时，点击标签关闭按钮触发 | text：文本内容                    |


<demo-model url="pages/components/tag/tag"></demo-model>
