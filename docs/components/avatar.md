# Avatar 头像组件
> 本组件一般用于展示头像的地方，如个人中心，或者评论列表页的用户头像展示等场所。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [avatar组件](https://uiadmin.net/uview-plus/components/avatar.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-avatar src="https://pic1.imgdb.cn/item/67628833d0e0a243d4e5d22b.webp"></hy-avatar>
<!-- 单个组件引入 -->
<HyAvatar src="https://pic1.imgdb.cn/item/67628833d0e0a243d4e5d22b.webp"></HyAvatar>
```
```ts
import { HyAvatar } from "hy-app"
```

## 头像形状
- `shape`参数指定头像的形状，取值`circle`为圆形，取值`square`为圆角方形
```html
<template>
    <hy-avatar :src="url" shape="circle"></hy-avatar>
    <hy-avatar :src="url" shape="square"></hy-avatar>
</template>

<script setup>
    import { ref } from "vue";
    const url = ref("https://pic1.imgdb.cn/item/67628833d0e0a243d4e5d22b.webp");
</script>
```

## 头像大小
- `size`参数指定头像的大小，取值可以`small`、`medium`、`large`或者数字（单位px）
::: warning 温馨提示
当size传数字的时候必须类型为number，如果为string会导致不生效
:::
```html
<template>
    <hy-avatar :src="url" size="small"></hy-avatar>
    <hy-avatar :src="url" size="medium"></hy-avatar>
    <hy-avatar :src="url" size="large"></hy-avatar>
    <hy-avatar :src="url" :size="40"></hy-avatar>
</template>

<script setup>
    import { ref } from "vue";
    const url = ref("https://pic1.imgdb.cn/item/67628833d0e0a243d4e5d22b.webp");
</script>
```

## 使用图标
```html
<template>
    <hy-avatar :icon="IconConfig.EMPTY"></hy-avatar>
</template>

<script setup>
    import { IconConfig } from "hy-app";
</script>
```

## 文字头像（自动背景色）
- `randomBgColor`参数开启头像的自动背景色
```html
<template>
    <hy-avatar text="北" fontSize="18" randomBgColor></hy-avatar>
</template>
```

## API

| 参数              | 说明                                                                          | 类型                                   | 默认值         |
|-----------------|-----------------------------------------------------------------------------|--------------------------------------|-------------|
| src             | 头像路径，如加载失败，将会显示默认头像(不能为相对路径)                                                | `string`                             | -           |
| shape           | 头像形状                                                                        | `circle`\|`square`                   | circle      |
| size            | 头像尺寸，可以为指定字符串(large, default, mini)，或者数值                                    | `small`\|`medium`\|`large`\|`number` | 40          |
| mode            | 头像图片的裁剪类型,[uniapp的image](https://uniapp.dcloud.net.cn/component/image.html) | `string`                             | scaleToFill |
| text            | 用文字替代图片，级别优先于src                                                            | `string`                             | -           |
| bg-color        | 背景颜色，一般显示文字时用                                                               | `string`                             | #c0c4cc     |
| color           | 文字颜色                                                                        | `string`                             | #ffffff     |
| font-size       | 文字大小                                                                        | `string`\|`number`                   | 18          |
| icon            | 显示的图标                                                                       | `string`                             | -           |
| mp-avatar       | 显示小程序头像，只对百度，微信，QQ小程序有效                                                     | `boolean`                            | false       |
| random-bg-color | 是否使用随机背景色                                                                   | `boolean`                            | false       |
| default-url     | 加载失败的默认头像(组件有内置默认图片)                                                        | `string`                             | -           |
| color-index     | 如果配置了randomBgColor为true，且配置了此值，则从默认的背景色数组中取出对应索引的颜色值，取值0-19之间               | `number`                             | -           |
| name            | 组件标识符                                                                       | `string`                             | level       |

## Events

| 事件名   | 说明     | 回调参数            |
|-------|--------|-----------------|
| click | 头像被点击	 | index: 用户传递的标识符 |

<demo-model url="pages/components/avatar/avatar"></demo-model>
