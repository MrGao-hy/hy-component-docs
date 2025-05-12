# ScrollList 横向滚动列表组件
> 该组件一般用于同时展示多个商品、分类的场景，也可以完成左右滑动的列表。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [scrollList组件](https://uiadmin.net/uview-plus/components/scroll.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|-----|----|-------|
| ✔   | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-scroll-list>
    <view v-for="(item, index) in list" :key="index">
        <image :src="item"></image>
    </view>
</hy-scroll-list>
<!-- 单个组件引入 -->
<HyScrollList>
    <view v-for="(item, index) in list" :key="index">
        <image :src="item"></image>
    </view>
</HyScrollList>
```
```ts
import { HyScrollList } from "hy-app";

const list = ref<any[]>([
    "https://img0.baidu.com/it/u=1913990970,584854398&fm=253&id=1",
    "http://mms2.baidu.com/it/u=204741874,3444396868&fm=253&id=2",
    "https://img2.baidu.com/it/u=3042825715,659259329&fm=253&id=3",
    "https://img2.baidu.com/it/u=109690972,2214958998&fm=253&id=4",
    "http://mms0.baidu.com/it/u=2161107790,808970254&fm=253&id=5",
    "https://img2.baidu.com/it/u=4211554685,400408647&fm=253&id=6",
    "https://img2.baidu.com/it/u=2237681987,1998118702&fm=253&id=7",
    "https://img1.baidu.com/it/u=2494879897,1602792615&fm=253&id=8"
]);
```

## 业务实现代码

:::code-group
```html [vue]
    <up-scroll-list @right="right" @left="left">
        <view class="scroll-list" style="flex-direction: row;">
            <view
                    class="scroll-list__goods-item"
                    v-for="(item, index) in list"
                    :key="index"
                    :class="[(index === 9) && 'scroll-list__goods-item--no-margin-right']"
            >
                <image class="scroll-list__goods-item__image" :src="item.thumb"></image>
                <text class="scroll-list__goods-item__text">￥{{ item.price }}</text>
            </view>
            <view class="scroll-list__show-more">
                <text class="scroll-list__show-more__text">查看更多</text>
                <up-icon name="arrow-leftward" color="#f56c6c" size="12"></up-icon>
            </view>
        </view>
    </up-scroll-list>
```

```ts [index.ts]
import { ref } from 'vue';

const goodsArr = [
    {
        price: "230.5",
        thumbnail:
            "https://img11.360buyimg.com/n1/s450x450_jfs/t1/281169/10/14028/31748/67ecf51dF384c5bd6/1ec0c214ea7a914e.png",
    },
    {
        price: "74.1",
        thumbnail:
            "https://img11.360buyimg.com/n1/s450x450_jfs/t1/281169/10/14028/31748/67ecf51dF384c5bd6/1ec0c214ea7a914e.png",
    },
    {
        price: "8457",
        thumbnail:
            "https://img11.360buyimg.com/n1/s450x450_jfs/t1/281169/10/14028/31748/67ecf51dF384c5bd6/1ec0c214ea7a914e.png",
    },
    {
        price: "1442",
        thumbnail:
            "https://img11.360buyimg.com/n1/s450x450_jfs/t1/281169/10/14028/31748/67ecf51dF384c5bd6/1ec0c214ea7a914e.png",
    },
    {
        price: "541",
        thumbnail:
            "https://img11.360buyimg.com/n1/s450x450_jfs/t1/281169/10/14028/31748/67ecf51dF384c5bd6/1ec0c214ea7a914e.png",
    },
    {
        price: "234",
        thumbnail:
            "https://img11.360buyimg.com/n1/s450x450_jfs/t1/281169/10/14028/31748/67ecf51dF384c5bd6/1ec0c214ea7a914e.png",
    },
    {
        price: "562",
        thumbnail:
            "https://img11.360buyimg.com/n1/s450x450_jfs/t1/281169/10/14028/31748/67ecf51dF384c5bd6/1ec0c214ea7a914e.png",
    },
    {
        price: "251.5",
        thumbnail:
            "https://img11.360buyimg.com/n1/s450x450_jfs/t1/281169/10/14028/31748/67ecf51dF384c5bd6/1ec0c214ea7a914e.png",
    },
];

// 方法  
const left = () => {
    console.log('left');
}

const right = () => {
    console.log('right');
}

const showMore = () => {
    uni.showToast({ title: "查看更多" });
};
```

```scss [index.scss]
    .scroll-list {
        display: flex;
        flex-direction: column;

        &__goods-item {
            margin-right: 20px;

            &__image {
                width: 60px;
                height: 60px;
                border-radius: 4px;
            }

            &__text {
                color: #f56c6c;
                text-align: center;
                font-size: 12px;
                margin-top: 5px;
            }
        }

        &__show-more {
            background-color: #fff0f0;
            border-radius: 3px;
            padding: 3px 6px;
            display: flex;
            flex-direction: column;
            align-items: center;

            &__text {
                font-size: 12px;
                width: 12px;
                color: #f56c6c;
                line-height: 16px;
            }
        }
    }
```
:::

## API

| 参数                   | 说明                             | 类型              | 默认值                 |
|----------------------|--------------------------------|-----------------|---------------------|
| indicatorWidth       | 指示器的整体宽度                       | `number`        | 50                  |
| indicatorBarWidth    | 滑块的宽度                          | `number`        | 20                  |
| indicator            | 是否显示面板指示器                      | `boolean`       | true                |
| indicatorColor       | 指示器非激活颜色                       | `string`        | #f2f2f2             |
| indicatorActiveColor | 指示器滑块颜色                        | `string`        | ColorConfig.primary |
| indicatorStyle       | 指示器样式，可通过bottom，left，right进行定位 | `CSSProperties` | -                   |

## Events

| 事件名   | 说明       | 回调参数 |
|-------|----------|------|
| left  | 滑动到左边时触发 | -    |
| right | 滑动到右边时触发 | -    |

## Slots

| 插槽名     | 说明 | 接收值 |
|---------|----|-----|
| default | -  | -   |

<demo-model url="pages/components/scrollList/scrollList"></demo-model>