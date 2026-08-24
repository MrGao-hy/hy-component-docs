# ScrollList Horizontal Scroll List Component

> This component is generally used for scenarios where multiple products or categories are displayed at the same time, and it can also be used to create lists that can be swiped left and right.

## :pushpin: Platform Difference Notes

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-scroll-list>
    <view v-for="(item, index) in list" :key="index">
        <image :src="item"></image>
    </view>
</hy-scroll-list>
```

```ts
const list = ref<any[]>([
    'https://img0.baidu.com/it/u=1913990970,584854398&fm=253&id=1',
    'http://mms2.baidu.com/it/u=204741874,3444396868&fm=253&id=2',
    'https://img2.baidu.com/it/u=3042825715,659259329&fm=253&id=3',
    'https://img2.baidu.com/it/u=109690972,2214958998&fm=253&id=4',
    'http://mms0.baidu.com/it/u=2161107790,808970254&fm=253&id=5',
    'https://img2.baidu.com/it/u=4211554685,400408647&fm=253&id=6',
    'https://img2.baidu.com/it/u=2237681987,1998118702&fm=253&id=7',
    'https://img1.baidu.com/it/u=2494879897,1602792615&fm=253&id=8',
]);
```

### Business Implementation Code

::: code-group

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
            <text class="scroll-list__show-more__text">View More</text>
            <up-icon name="arrow-leftward" color="#f56c6c" size="12"></up-icon>
        </view>
    </view>
</up-scroll-list>
```

```ts [index.ts]
import { ref } from 'vue';

const goodsArr = [
    {
        price: '230.5',
        thumbnail:
            'https://img11.360buyimg.com/n1/s450x450_jfs/t1/281169/10/14028/31748/67ecf51dF384c5bd6/1ec0c214ea7a914e.png',
    },
    {
        price: '74.1',
        thumbnail:
            'https://img11.360buyimg.com/n1/s450x450_jfs/t1/281169/10/14028/31748/67ecf51dF384c5bd6/1ec0c214ea7a914e.png',
    },
    {
        price: '8457',
        thumbnail:
            'https://img11.360buyimg.com/n1/s450x450_jfs/t1/281169/10/14028/31748/67ecf51dF384c5bd6/1ec0c214ea7a914e.png',
    },
    {
        price: '1442',
        thumbnail:
            'https://img11.360buyimg.com/n1/s450x450_jfs/t1/281169/10/14028/31748/67ecf51dF384c5bd6/1ec0c214ea7a914e.png',
    },
    {
        price: '541',
        thumbnail:
            'https://img11.360buyimg.com/n1/s450x450_jfs/t1/281169/10/14028/31748/67ecf51dF384c5bd6/1ec0c214ea7a914e.png',
    },
    {
        price: '234',
        thumbnail:
            'https://img11.360buyimg.com/n1/s450x450_jfs/t1/281169/10/14028/31748/67ecf51dF384c5bd6/1ec0c214ea7a914e.png',
    },
    {
        price: '562',
        thumbnail:
            'https://img11.360buyimg.com/n1/s450x450_jfs/t1/281169/10/14028/31748/67ecf51dF384c5bd6/1ec0c214ea7a914e.png',
    },
    {
        price: '251.5',
        thumbnail:
            'https://img11.360buyimg.com/n1/s450x450_jfs/t1/281169/10/14028/31748/67ecf51dF384c5bd6/1ec0c214ea7a914e.png',
    },
];

// Methods
const left = () => {
    console.log('left');
};

const right = () => {
    console.log('right');
};

const showMore = () => {
    uni.showToast({ title: 'View More' });
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

### ScrollList Props

| Parameter             | Description                                                        | Type            | Default |
| --------------------- | ------------------------------------------------------------------ | --------------- | ------- |
| indicatorWidth        | Overall width of the indicator, default unit is px                 | `number`        | 50      |
| indicatorBarWidth     | Width of the slider bar, default unit is px                        | `number`        | 20      |
| indicator             | Whether to show the panel indicator                                | `boolean`       | true    |
| indicatorColor        | Inactive color of the indicator                                    | `string`        | -       |
| indicatorActiveColor  | Color of the indicator slider bar                                  | `string`        | -       |
| indicatorStyle        | Indicator style, can be positioned via bottom, left, and right     | `CSSProperties` | -       |

### Events

| Event Name  | Description                          | Callback Parameters |
| ----------- | ------------------------------------ | ------------------- |
| scrollLeft  | Triggered when scrolled to the left  | -                   |
| scrollRight | Triggered when scrolled to the right | -                   |

### Slots

| Slot Name | Description | Received Value |
| --------- | ----------- | -------------- |
| default   | -           | -              |

<demo-model url="pages-design/scrollList/scrollList"></demo-model>