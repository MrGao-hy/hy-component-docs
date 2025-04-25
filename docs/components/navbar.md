# Navbar 自定义导航栏组件
> 此组件一般用于在特殊情况下，需要自定义导航栏的时候用到，一般建议使用uni-app带的导航栏。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [navbar组件](https://uiadmin.net/uview-plus/components/navbar.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-navbar title="个人中心"></hy-navbar>
<!-- 单个组件引入 -->
<HyNavbar title="个人中心"></HyNavbar>
```
```ts
import { HyNavbar } from "hy-app"
```

## 防止塌陷
- 通过配置`placeholder`在固定在顶部时生成一个等高元素，以防止塌陷
```html
<template>
    <hy-navbar title="个人中心" placeholder></hy-navbar>
</template>
```

## 背景色
```html
<template>
    <hy-navbar title="个人中心" bgColor="#001f3f"></hy-navbar>
</template>
```

## 固定在顶部
- 通过配置`field`导航栏在固定在顶部时
```html
<template>
    <hy-navbar title="个人中心" fixed></hy-navbar>
</template>
```

## 基本使用示例
- 通过配置`title`定义导航栏标题
- 通过配置`leftIcon`定义导航栏左边图标
- 通过配置`leftText`定义导航栏左边文字
- 通过配置`rightText`定义导航栏右边文字
- 通过配置`rightIcon`定义导航栏右边图标
```html
<template>
    <hy-navbar 
        title="文档"
        :leftIcon="IconConfig.LEFT"
        leftText="返回"
        rightText="地址"
        :rightIcon="IconConfig.MAP"
    ></hy-navbar>
</template>

<script setup>
    import { IconConfig } from "hy-app";
</script>
```

## 自定义左边插槽
```html
<template>
    <hy-navbar title="自定义插槽" :fixed="false" bg-color="#F8F8F8">
        <template #left>
            <view class="u-nav-slot">
                <hy-icon :name="IconConfig.LEFT" size="16"></hy-icon>
                <hy-line
                        direction="column"
                        :hairline="false"
                        length="16"
                        margin="0 8px"
                ></hy-line>
                <hy-icon name="home" size="15"></hy-icon>
            </view>
        </template>
    </hy-navbar>
</template>

<style lang="scss">
    .u-nav-slot {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-radius: 100px;
        border: 1rpx solid gainsboro;
        padding: 3px 7px;
        opacity: 0.8;
    }
</style>
```

## API

| 参数               | 说明                            | 类型                   | 默认值             |
|------------------|-------------------------------|----------------------|-----------------|
| safeAreaInsetTop | 是否开启顶部安全区适配                   | `boolean`            | true            |
| placeholder      | 固定在顶部时，是否生成一个等高元素，以防止塌陷       | `boolean`            | false           |
| fixed            | 导航栏是否固定在顶部                    | `boolean`            | true            |
| border           | 导航栏底部是否显示下边框                  | `boolean`            | false           |
| leftIcon         | 左边返回图标的名称                     | `string`             | IconConfig.LEFT |
| leftText         | 左边的提示文字                       | `string`             | -               |
| rightText        | 右边的提示文字                       | `string`             | -               |
| rightIcon        | 右边返回图标的名称                     | `string`             | -               |
| title            | 导航栏标题，如设置为空字符，将会隐藏标题占位区域      | `string`             | -               |
| bgColor          | 导航栏背景设置                       | `string`             | #ffffff         |
| titleWidth       | 导航栏标题的最大宽度，内容超出会以省略号隐藏，单位rpx  | `string` \| `number` | 400rpx          |
| height           | 导航栏高度(不包括状态栏高度在内，内部自动加上)，单位px | `string` \| `number` | 44px            |
| leftIconSize     | 左侧返回图标的大小                     | `string` \| `number` | 20              |
| leftIconColor    | 左侧返回图标的颜色                     | `string`             | -               |
| autoBack         | 点击左侧区域(返回图标)，是否自动返回上一页        | `boolean`            | false           |
| titleStyle       | 标题的样式，对象或字符串形式	               | `CSSProperties`      | -               |
| customStyle      | 定义需要用到的外部样式                   | `CSSProperties`      | -               |

## Events

| 事件名        | 说明     | 回调参数 |
|------------|--------|------|
| leftClick  | 点击左侧区域 | -    |
| rightClick | 点击右侧区域 | -    |

## slots

| 插槽名    | 说明        | 接收值 |
|--------|-----------|-----|
| left   | 自定义左侧部分内容 | -   |
| right  | 自定义右侧部分内容 | -   |
| center | 自定义中部内容   | -   |

<demo-model url="pages/components/navbar/navbar"></demo-model>