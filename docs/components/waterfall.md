# Waterfall 瀑布流组件
> 这是一个瀑布流形式的组件，内容分为左右两列，结合uview的懒加载组件效果更佳。
> 相较于某些只是奇偶数左右分别，或者没有利用vue作用域插槽的做法，uView的瀑布流实现了真正的 组件化，搭配LazyLoad 懒加载和loadMore 加载更多组件，让您开箱即用，眼前一亮。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [waterfall组件](https://uiadmin.net/uview-plus/components/waterfall.html) 的代码实现。
:::
::: warning 提示
由于右侧的演示是通过iframe标签引入的，缺少了手机端运行的相关API，或者因为演示区域太小，或者电脑分别率不够高 ，导致演示可能会有问题，手机端有不会这些问题，请在右上角的"演示"中用手机扫码查看对应的效果。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-waterfall v-model="flowList"></hy-waterfall>
<!-- 单个组件引入 -->
<HyWaterfall v-model="flowList"></HyWaterfall>
```
```ts
import { HyWaterfall } from "hy-app"
```

## 完整应用示例
:::code-group
```vue
<template>
  <view class="waterfall">
    <hy-waterfall v-model="flowList" ref="waterfallRef">
      <template v-slot:left="{ leftList }">
        <view
            class="demo-water"
            v-for="(item, index) in leftList"
            :key="index"
        >
          <!-- 微信小程序需要hx2.8.11版本才支持在template中引入其他组件，比如下方的u-lazy-load组件 -->
          <hy-image
              width="100%"
              mode="widthFix"
              radius="5"
              :src="item.image"
          ></hy-image>
          <view class="demo-title">{{ item.title }}</view>
          <view class="demo-price">{{ item.price }}元</view>
          <view class="demo-tag">
            <view class="demo-tag-owner">
              <text class="text">自营</text>
            </view>
            <view class="demo-tag-text">
              <text class="text">放心购</text>
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
        <view
            class="demo-water"
            v-for="(item, index) in rightList"
            :key="index"
        >
          <hy-image
              width="100%"
              mode="widthFix"
              radius="5"
              :src="item.image"
          ></hy-image>
          <view class="demo-title">{{ item.title }}</view>
          <view class="demo-price">{{ item.price }}元</view>
          <view class="demo-tag">
            <view class="demo-tag-owner">
              <text class="text">自营</text>
            </view>
            <view class="demo-tag-text">
              <text class="text">放心购</text>
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
  import { onMounted, ref } from "vue";
  import { guid, random } from "hy-app";
  import list from "./index";
  import { onReachBottom } from "@dcloudio/uni-app";
  

  const flowList = ref<Record<string, any>[]>([]);
  const waterfallRef = ref();
  const loadStatus = ref("loadmore");

  onMounted(() => {
    addRandomData();
  });
  onReachBottom(() => {
    loadStatus.value = "loading";
    // 模拟数据加载
    setTimeout(() => {
      addRandomData();
      loadStatus.value = "loadmore";
    }, 1000);
  });

  const addRandomData = () => {
    for (let i = 0; i < 20; i++) {
      let index = random(0, list.length - 1);
      // 先转成字符串再转成对象，避免数组对象引用导致数据混乱
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
  @import "./index.scss";
</style>
```
```javascript [index.js]
export default [
  {
    price: "1300万",
    title: "法拉利LaFerrari",
    shop: "性能超群，领跑超级跑车界",
    image:
      "https://pic.rmb.bdstatic.com/bjh/news/68eb7f6d762684a7f81d91edd1190cde.jpeg",
  },
  {
    price: "3300万",
    title: "布加迪 Chiron",
    shop: "性能超群，领跑超级跑车界",
    image: "https://img1.baidu.com/it/u=710933577,1433411533&fm=253",
  },
  {
    price: "2000万",
    title: "法拉利296 GTS",
    shop: "新时代混动法拉利敞篷跑车",
    image:
      "https://pic.rmb.bdstatic.com/bjh/240514/news/3ed50c020490bdf65832b56bfdec9edf6399.jpeg",
  },
  {
    price: "784万",
    title: "柯尼塞格Jesko",
    shop: "一头拥有超强马力和极致速度的“猛兽”",
    image: "https://img2.baidu.com/it/u=2465835289,2125464963&fm=253",
  },
  {
    price: "9000万",
    title: "兰博基尼Temerario",
    shop: "李白杜甫白居易旗舰店",
    image:
      "https://pic.rmb.bdstatic.com/da708645a2bce38179625e8364c05a76.jpg@h_1280",
  },
  {
    price: "400万",
    shop: "保时捷963",
    title: "保时捷963",
    image:
      "https://img0.baidu.com/it/u=3402753783,3081776286&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  },
  {
    price: "233万",
    shop: "玛莎拉蒂Gran Turismo",
    title: "玛莎拉蒂Gran Turismo",
    image:
      "https://img1.baidu.com/it/u=1729207840,2645487814&fm=253&fmt=auto?w=800&h=1002",
  },
  {
    price: "1654万",
    title: "阿斯顿马丁",
    shop: "李白杜甫白居易旗舰店",
    image: "https://img1.baidu.com/it/u=3621246908,3142164736&fm=253",
  },
  {
    price: "1678万",
    title: "迈凯伦",
    shop: "李白杜甫白居易旗舰店",
    image: "https://img0.baidu.com/it/u=2821221440,1024182410&fm=253",
  },
  {
    price: "924万",
    title: "兰博基尼 电鳗",
    shop: "李白杜甫白居易旗舰店",
    image:
      "https://inews.gtimg.com/om_bt/Opd--mKoy4ZOIDzMAOz2bsY6i1cxTSHtREhKoNX2CaBY4AA/641",
  },
  {
    price: "8243万",
    title: "克尔维特",
    shop: "克尔维特",
    image: "https://b0.bdstatic.com/b72b6ed36682acf2aad6f0fa853111c5.jpeg",
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


::: warning 注意事项
组件有一个add-time参数，用于将单条数据添加到队列的时间间隔，因为图片加载是需要时间的，所以瀑布流左右列 的高度会不定时改变，add-time值越大，对程序效果越好，但是对用户来说，越大值可能就是以能感受的速度一个一个添加 到队列尾部的，所以这是一个双面性的结果。
:::


## API

| 参数      | 说明                  | 类型       | 默认值 |
|---------|---------------------|----------|-----|
| v-modal | 接收列表值               | `array`  | -   |
| addTime | 单条数据添加到队列的时间间隔，单位ms | `number` | 200 |
| idKey   | 数据的唯一值的键名           | `string` | id  |

## Methods

| 事件名    | 说明     | 传参                |
|--------|--------|-------------------|
| clear  | 清空列表数据 | -                 |
| remove | 删除某条数据 | id:唯一值，需要和idKey一致 |

## Slots

| 插槽名   | 说明     | 接收值 |
|-------|--------|-----|
| left  | 左边内容插槽 | -   |
| right | 右边内容插槽 | -   |

<demo-model url="pages-design/waterfall/waterfall"></demo-model>