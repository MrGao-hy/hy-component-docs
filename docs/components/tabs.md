# Tabs 标签组件
> 该组件，是一个tabs标签组件，在标签多的时候，可以配置为左右滑动，标签少的时候，可以禁止滑动。 该组件的一个特点是配置为滚动模式时，激活的tab会自动移动到组件的中间位置。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [tabs组件](https://uiadmin.net/uview-plus/components/tabs.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-tabs :list="list"></hy-tabs>
<!-- 单个组件引入 -->
<HyTabs :list="list"></HyTabs>
```
```ts
import { HyTabs } from "hy-app"

const list = [{ name: "全部" }, { name: "未核销" }, { name: "已核销" }];
```

## 自定义读取键
- 通过`keyName`自定义需要显示的值
```html
<template>
    <hy-tabs :list="list" keyName="title"></hy-tabs>
</template>
<script setup>
    const list = [{ title: "全部", content: {value: 123} }, { title: "未核销" }, { title: "已核销" }];
</script>
```

## 轮播图插槽自定义内容

```html
<template>
    <hy-tabs
        :list="statusTabs"
        @clickTabs="clickTabs"
        @change="change"
    >
        <template #default="{record}">
            {{content.content}}
        </template>
    </hy-tabs>
</template>

<script setup>
    const statusTabs = [{ name: "全部", content: {value: 123} }, { name: "未核销" }, { name: "已核销" }];
    // 点击选项卡执行回调
    const clickTabs = () => {}
    // 滑动轮播图执行回调函数
    const change = () => {}
</script>
```

## 自定义轮播图

```html
<template>
    <hy-tabs
        :list="statusTabs"
        @clickTabs="clickTabs"
        @change="change"
    >
        <template #main>
            <!--自定义内容（没有轮播图）-->
        </template>
    </hy-tabs>
</template>

<script setup>
    const statusTabs = [{ name: "全部" }, { name: "未核销" }, { name: "已核销" }];
    // 点击选项卡执行回调
    const clickTabs = () => {}
    // 滑动轮播图执行回调函数
    const change = () => {}
</script>
```

## API

| 参数            | 说明                           | 类型                   | 默认值                    |
|---------------|------------------------------|----------------------|------------------------|
| current       | 当前选中标签的索引                    | number               | 0                      |
| list          | 选项卡数组                        | `array`              | -                      |
| keyName       | 从list元素对象中读取的键名              | `string`             | name                   |
| duration      | 滑块移动一次所需的时间，单位 ms            | `number`             | 300                    |
| scrollable    | 菜单是否可滚动                      | `boolean`            | false                  |
| lineWidth     | 滑块长度                         | `string` \| `number` | 20                     |
| lineHeight    | 滑块高度                         | `string` \| `number` | 3                      |
| lineColor     | 滑块颜色                         | `string`             | #3c9cff                |
| lineBgSize    | 滑块背景显示大小，当滑块背景设置为图片时使用       | `string` \| `number` | cover                  |
| activeStyle   | 菜单选择中时的样式                    | `CSSProperties`      | \{ color: "#303133" \} |
| inactiveStyle | 菜单非选中时的样式                    | `CSSProperties`      | \{ color: "#606266" \} |
| itemStyle     | 菜单 item 的样式                  | `string`             | \{ height: "44px" \}   |
| BadgeProps    | 徽标props全局定义(list里的badge优先级高) | `BadgeProps`         | -                      |
| swiperHeight  | 轮播图高度                        | `string` \| `number` | calc(100vh - 44px)     |
| iconStyle     | 标签左侧图标样式自定义                  | `CSSProperties`      | -                      |
| customStyle   | 定义需要用到的外部样式                  | `CSSProperties`      | -                      |

## list

| 参数       | 说明                   | 类型           | 默认值 |
|----------|----------------------|--------------|-----|
| name     | tab名称,可通过keyName自定义掉 | `string`     | -   |
| badge    | 徽标接收的props           | `BadgeProps` | -   |
| disabled | 是否禁用                 | `boolean`    | -   |
| content  | swiper内容值（任意类型）      | `any`        | -   |


## Events

| 事件名       | 说明        | 回调参数                       |
|-----------|-----------|----------------------------|
| click     | 点击标签时触发   | item: 传入的其他值, index: 标签索引值 |
| longPress | 长按标签时触发   | item: 传入的其他值, index: 标签索引值 |
| change    | 标签索引改变时触发 | item: 传入的其他值, index: 标签索引值 |

## slots

| 插槽名     | 说明             | 接收值                       |
|---------|----------------|---------------------------|
| default | 轮播图自定义content值 | record: item里的content内容   |
| left    | 整体左侧插槽         | -                         |
| icon    | tabs的图标        | record: item内容, index: 索引 |
| content | tabs的内容        | record: item内容, index: 索引 |
| right   | 整体右侧插槽         | -                         |
| main    | 自定义掉底部轮播图      | -                         |