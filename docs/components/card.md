# Card 卡片组件
> 卡片组件一般用于多个列表条目，且风格统一的场景。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [card组件](https://uiadmin.net/uview-plus/components/card.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|-----|----|-------|
| ✔   | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-card title="标题"></hy-card>
<!-- 单个组件引入 -->
<HyCard title="标题"></HyCard>
```
```ts
import { HyCard } from "hy-app"
```

## 卡片阴影

```html
<template>
    <hy-card box-shadow="0 0 10rpx 10rpx rgba(0, 0, 0, 0.5)"></hy-card>
</template>
```


## 使用自定义插槽

```html
<template>
    <hy-card :title="title" :sub-title="subTitle" :thumb="thumb">
        <template #body>
            <view class="" slot="body">
                <view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
                    <view class="u-body-item-title u-line-2">瓶身描绘的牡丹一如你初妆，冉冉檀香透过窗心事我了然，宣纸上走笔至此搁一半</view>
                    <image src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg" mode="aspectFill"></image>
                </view>
                <view class="u-body-item u-flex u-row-between u-p-b-0">
                    <view class="u-body-item-title u-line-2">釉色渲染仕女图韵味被私藏，而你嫣然的一笑如含苞待放</view>
                    <image src="https://img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg" mode="aspectFill"></image>
                </view>
            </view>
        </template>
        <template #footer>
            <view>
                <hy-icon name="chat-fill" size="34" color="" label="30评论"></hy-icon>
            </view>
        </template>
    </-card>
</template>

<script>
    export default {
        data() {
            return {
                title: '素胚勾勒出青花，笔锋浓转淡',
                subTitle: '2020-05-15',
                thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
            };
        }
    };
</script>

<style scoped lang="scss">
    .u-card-wrap {
        background-color: #F8F8F8;
        padding: 1px;
    }

    .u-body-item {
        font-size: 32rpx;
        color: #333;
        padding: 20rpx 10rpx;
    }

    .u-body-item image {
        width: 120rpx;
        flex: 0 0 120rpx;
        height: 120rpx;
        border-radius: 8rpx;
        margin-left: 12rpx;
    }
</style>
```

## API

| 参数                 | 说明                                        | 类型                    | 默认值     |
|--------------------|-------------------------------------------|-----------------------|---------|
| full               | 卡片与屏幕两侧是否留空隙                              | `boolean`             | false   |
| title              | 头部左边的标题                                   | `string`              | -       |
| title-color        | 标题颜色                                      | `string`              | #303133 |
| title-size         | 标题字体大小，单位px                               | `string` \| `number`  | 15      |
| sub-title          | 头部右边的副标题                                  | `boolean`             | -       |
| sub-title-color    | 副标题颜色                                     | `string`              | #909399 |
| sub-title-size     | 副标题字体大小                                   | `string` \| `number`  | 13      |
| border             | 是否显示边框                                    | `boolean`             | true    |
| index              | 用于标识点击了第几个卡片                              | `string` \| `number`  | -       |
| margin             | 卡片与屏幕两边和上下元素的间距，需带单位，如"30rpx 20rpx"，见上方说明 | `string`              | 15px    |
| border-radius      | 卡片整体的圆角值，单位px                             | `string` \| `number`  | 8px     |
| head-style         | 头部自定义样式，对象形式                              | `CSSProperties`       | -       |
| body-style         | 主体自定义样式，对象形式                              | `CSSProperties`       | -       |
| foot-style         | 底部自定义样式，对象形式                              | `CSSProperties`       | -       |
| head-border-bottom | 是否显示头部的下边框                                | `boolean`             | true    |
| foot-border-top    | 是否显示底部的上边框                                | `boolean`             | true    |
| thumb              | 缩略图路径，如设置将显示在标题的左边，不建议使用相对路径              | `string`              | -       |
| thumb-width        | 缩略图的宽度，高等于宽，单位px                          | `string` \| `number`  | 30px    |
| thumb-circle       | 缩略图是否为圆形                                  | `string`              | false   |
| padding            | 给head，body，foot部的内边距，见上方说明，单位rpx          | `string` \| `number`  | 15px    |
| paddingHead        | 头部内边距                                     | `string` \| `number`  | -       |
| paddingBody        | 中部内边距                                     | `string` \| `number`  | -       |
| paddingFoot        | 尾部内边距                                     | `string` \| `number`  | -       |
| show-head          | 是否显示头部                                    | `boolean`             | true    |
| show-foot          | 是否显示尾部                                    | `boolean`             | true    |
| box-shadow         | 卡片外围阴影，字符串形式                              | `string` \| `boolean` | true    |
| customStyle        | 定义需要用到的外部样式                               | `CSSProperties`       | -       |

## Events

| 事件名        | 说明             | 回调参数            |
|------------|----------------|-----------------|
| click      | 整个卡片任意位置被点击时触发 | index: 用户传递的标识符 |
| head-click | 卡片头部被点击时触发     | index: 用户传递的标识符 |
| body-click | 卡片主体部分被点击时触发   | index: 用户传递的标识符 |
| foot-click | 卡片底部部分被点击时触发   | index: 用户传递的标识符 |

## slots

| 插槽名    | 说明          | 接收值 |
|--------|-------------|-----|
| header | 自定义卡片头部内容   | -   |
| body   | 自定义卡片主体部分内容 | -   |
| footer | 自定义卡片底部部分内容 | -   |

<demo-model url="pages/components/card/card"></demo-model>