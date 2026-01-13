# SwipeAction 滑动单元格组件
> 该组件一般用于左滑唤出操作菜单的场景，用的最多的是左滑删除操作。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [swipeAction组件](https://uiadmin.net/uview-plus/components/swipeAction.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-swipe-action borderBottom>
    <view class="cell">
        <view class="cell-title">我是标题</view>
        <view class="cell-value">我是内容</view>
    </view>
</hy-swipe-action>
```

## 设置左边操作按钮
```vue
<template>
    <hy-swipe-action borderBottom>
        <view class="cell">
            <view class="cell-title">我是标题</view>
            <view class="cell-value">我是内容</view>
        </view>
        <template #left>
            <view class="action">
                <view class="action-btn" :style="item.style" v-for="item in options">
                    {{ item.text }}
                </view>
            </view>
        </template>
    </hy-swipe-action>
</template>

<script setup lang="ts">
    const options = [
        {
            text: '收藏',
            style: {
                backgroundColor: '#3c9cff',
            },
        },
        {
            text: '删除',
            style: {
                backgroundColor: '#f56c6c',
            },
        },
    ]
</script>
```

## API

| 参数           | 说明           | 类型                       | 默认值   |
|--------------|--------------|--------------------------|-------|
| v-model      | 滑动按钮的状态      | `left`\|`close`\|`right` | close |
| disabled     | 是否禁用滑动操作     | `boolean`                | false |
| borderBottom | 显示底部边框       | `boolean`                | false |
| options      | 是否禁用滑动操作     | `boolean`                | false |
| duration     | 动画过渡时间，单位ms  | `number`                 | 300   |
| before-close | 关闭滑动按钮前的钩子函数 | `function`               | -     |

## Events

| 事件名   | 说明                             | 回调参数                                             |
|-------|--------------------------------|--------------------------------------------------|
| click | 当滑动按钮打开时，点击整个滑动操作容器触发 click 事件 | event={value}, value 可能为 'left'、'inside'、'right' |

## Slots

| 插槽名     | 说明     | 接收值 |
|---------|--------|-----|
| left    | 自定义左按钮 | -   |
| default | 自定义内容  | -   |
| right   | 自定义右按钮 | -   |

<demo-model url="pages-design/swipeAction/swipeAction"></demo-model>