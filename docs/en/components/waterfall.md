# Waterfall Component

> This is a waterfall-style component with content divided into left and right columns. It works even better when combined with uView's lazy-load component. Compared to some approaches that merely split items into left and right columns by odd/even index, or that fail to make use of Vue scoped slots, uView's waterfall component achieves true componentization. Paired with the LazyLoad and loadMore components, it works out of the box and will surely impress you.

::: warning Note

Since the demo on the right is embedded via an iframe tag, it lacks the APIs required to run on mobile devices. Additionally, due to the small demo area or insufficient screen resolution, the demo may have issues. These problems do not occur on mobile. Please scan the QR code in the "Demo" section in the upper right corner with your phone to view the corresponding effect.

:::

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-waterfall v-model="flowList"></hy-waterfall>
```

```ts
const flowList = [...]
```

### Complete Application Example

::: code-group

```html
<template>
    <view class="waterfall">
        <hy-waterfall v-model="flowList" ref="waterfallRef">
            <template v-slot:left="{ leftList }">
                <view class="demo-water" v-for="(item, index) in leftList" :key="index">
                    <!-- WeChat Mini Program requires HX 2.8.11 or later to support importing other components within a template, such as the u-lazy-load component below -->
                    <hy-image width="100%" mode="widthFix" radius="5" :src="item.image"></hy-image>
                    <view class="demo-title">{{ item.title }}</view>
                    <view class="demo-price">{{ item.price }} yuan</view>
                    <view class="demo-tag">
                        <view class="demo-tag-owner">
                            <text class="text">Self-operated</text>
                        </view>
                        <view class="demo-tag-text">
                            <text class="text">Worry-free Purchase</text>
                        </view>
                    </view>
                    <view class="demo-shop">{{ item.shop }}</view>
                    <view class="u-close">
                        <up-icon
                            name="close-circle-fill"
                            color="#fa3534"
                            size="16"
                            @click="remove(item.id)"
                        ></up-icon>
                    </view>
                </view>
            </template>
            <template v-slot:right="{ rightList }">
                <view class="demo-water" v-for="(item, index) in rightList" :key="index">
                    <hy-image width="100%" mode="widthFix" radius="5" :src="item.image"></hy-image>
                    <view class="demo-title">{{ item.title }}</view>
                    <view class="demo-price">{{ item.price }} yuan</view>
                    <view class="demo-tag">
                        <view class="demo-tag-owner">
                            <text class="text">Self-operated</text>
                        </view>
                        <view class="demo-tag-text">
                            <text class="text">Worry-free Purchase</text>
                        </view>
                    </view>
                    <view class="demo-shop">{{ item.shop }}</view>
                    <view class="u-close">
                        <up-icon
                            name="close-circle-fill"
                            color="#fa3534"
                            size="34"
                            @click="remove(item.id)"
                        ></up-icon>
                    </view>
                </view>
            </template>
        </hy-waterfall>
    </view>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { guid, random } from 'hy-app';
    import list from './index';
    import { onReachBottom } from '@dcloudio/uni-app';

    const flowList = ref<Record<string, any>[]>([]);
    const waterfallRef = ref();
    const loadStatus = ref('loadmore');

    onMounted(() => {
        addRandomData();
    });
    onReachBottom(() => {
        loadStatus.value = 'loading';
        // Simulate data loading
        setTimeout(() => {
            addRandomData();
            loadStatus.value = 'loadmore';
        }, 1000);
    });

    const addRandomData = () => {
        for (let i = 0; i < 20; i++) {
            let index = random(0, list.length - 1);
            // Convert to a string first and then back to an object, to avoid data confusion caused by array object references
            let item = JSON.parse(JSON.stringify(list[index]));
            item.id = guid();
            flowList.value.push(item);
        }
    };
    const remove = (id: string) => {
        waterfallRef.value.remove(id);
    };
    const clear = () => {
        waterfallRef.value.clear();
    };
</script>

<style scoped lang="scss">
    @import './index.scss';
</style>
```

```javascript [index.js]
export default [
    {
        price: '13 million',
        title: 'Ferrari LaFerrari',
        shop: 'Outstanding performance, leading the supercar world',
        image: 'https://pic.rmb.bdstatic.com/bjh/news/68eb7f6d762684a7f81d91edd1190cde.jpeg',
    },
    {
        price: '33 million',
        title: 'Bugatti Chiron',
        shop: 'Outstanding performance, leading the supercar world',
        image: 'https://img1.baidu.com/it/u=710933577,1433411533&fm=253',
    },
    {
        price: '20 million',
        title: 'Ferrari 296 GTS',
        shop: 'A new-era hybrid Ferrari convertible sports car',
        image: 'https://pic.rmb.bdstatic.com/bjh/240514/news/3ed50c020490bdf65832b56bfdec9edf6399.jpeg',
    },
    {
        price: '7.84 million',
        title: 'Koenigsegg Jesko',
        shop: 'A "beast" with immense horsepower and extreme speed',
        image: 'https://img2.baidu.com/it/u=2465835289,2125464963&fm=253',
    },
    {
        price: '90 million',
        title: 'Lamborghini Temerario',
        shop: 'Li Bai Du Fu Bai Juyi Flagship Store',
        image: 'https://pic.rmb.bdstatic.com/da708645a2bce38179625e8364c05a76.jpg@h_1280',
    },
    {
        price: '4 million',
        shop: 'Porsche 963',
        title: 'Porsche 963',
        image: 'https://img0.baidu.com/it/u=3402753783,3081776286&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    },
    {
        price: '2.33 million',
        shop: 'Maserati Gran Turismo',
        title: 'Maserati Gran Turismo',
        image: 'https://img1.baidu.com/it/u=1729207840,2645487814&fm=253&fmt=auto?w=800&h=1002',
    },
    {
        price: '16.54 million',
        title: 'Aston Martin',
        shop: 'Li Bai Du Fu Bai Juyi Flagship Store',
        image: 'https://img1.baidu.com/it/u=3621246908,3142164736&fm=253',
    },
    {
        price: '16.78 million',
        title: 'McLaren',
        shop: 'Li Bai Du Fu Bai Juyi Flagship Store',
        image: 'https://img0.baidu.com/it/u=2821221440,1024182410&fm=253',
    },
    {
        price: '9.24 million',
        title: 'Lamborghini Electric Eel',
        shop: 'Li Bai Du Fu Bai Juyi Flagship Store',
        image: 'https://inews.gtimg.com/om_bt/Opd--mKoy4ZOIDzMAOz2bsY6i1cxTSHtREhKoNX2CaBY4AA/641',
    },
    {
        price: '82.43 million',
        title: 'Corvette',
        shop: 'Corvette',
        image: 'https://b0.bdstatic.com/b72b6ed36682acf2aad6f0fa853111c5.jpeg',
    },
];
```

```scss [index.scss]
.waterfall {
    background-color: #f0e6ef;
}
.demo-water {
    border-radius: 8px;
    margin: 5px;
    background-color: #ffffff;
    padding: 8px;
    position: relative;
    /* #ifdef H5 */
    cursor: pointer;
    /* #endif */
    .u-close {
        position: absolute;
        top: -7px;
        right: 3px;
        opacity: 0;
    }
    /* #ifdef H5 */
    &:hover {
        .u-close {
            opacity: 1;
        }
    }
    /* #endif */
}

.demo-img-wrap {
}

.demo-image {
    width: 100%;
    border-radius: 4px;
}

.demo-title {
    font-size: 30rpx;
    margin-top: 5px;
    color: $u-main-color;
    /* #ifndef APP-NVUE */
    word-break: break-all;
    /* #endif */
}

.demo-tag {
    display: flex;
    flex-direction: row;
    margin-top: 5px;
}

.demo-tag-owner {
    background-color: $u-error;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 7px;
    border-radius: 20px;
    line-height: 1;
    .text {
        font-size: 12px;
        color: #ffffff;
    }
}

.demo-tag-text {
    border: 1px solid $u-primary;
    margin-left: 10px;
    border-radius: 50rpx;
    line-height: 1;
    padding: 2px 7px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    border-radius: 20px;
    .text {
        font-size: 12px;
        color: $u-primary;
    }
}

.demo-price {
    font-size: 30rpx;
    color: $u-error;
    margin-top: 5px;
}

.demo-shop {
    font-size: 22rpx;
    color: $u-tips-color;
    margin-top: 5px;
}
```

:::

::: warning Precautions

The component has an add-time parameter, which defines the time interval for adding individual items to the queue. Since image loading takes time, the heights of the left and right waterfall columns will change at unpredictable moments. The larger the add-time value, the better the effect for the program; however, for users, a larger value may mean items being added one by one to the end of the queue at a perceptible speed. Therefore, this is a double-edged result.

:::

## API

### Waterfall Props

| Parameter | Description                                                         | Type     | Default Value |
| --------- | ------------------------------------------------------------------- | -------- | ------------- |
| v-modal   | Receives the list value                                             | `array`  | -             |
| addTime   | Time interval for adding individual items to the queue, in ms       | `number` | 200           |
| idKey     | Key name of the unique value of the data                            | `string` | id            |

### Methods

| Event Name | Description          | Parameters                                      |
| ---------- | -------------------- | ----------------------------------------------- |
| clear      | Clears the list data | -                                               |
| remove     | Removes an item      | id: the unique value, must be consistent with idKey |

### Slots

| Slot Name | Description          | Received Value |
| --------- | -------------------- | -------------- |
| left      | Left content slot    | -              |
| right     | Right content slot   | -              |

<demo-model url="pages-design/waterfall/waterfall"></demo-model>