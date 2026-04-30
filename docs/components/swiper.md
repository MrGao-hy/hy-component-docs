# Swiper 轮播图组件
> 该组件一般用于导航轮播，广告展示等场景,可开箱即用，具有如下特点：
> - 自定义指示器模式，可配置指示器样式 
> - 3D轮播图效果，满足不同的开发需求 
> - 可配置显示标题，涵盖不同的应用场景
> - 具有设置加载状态和嵌入视频的能力，功能齐全丰富

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [swiper组件](https://uiadmin.net/uview-plus/components/swiper.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-swiper :list="list"></hy-swiper>
<!-- 单个组件引入 -->
<HySwiper :list="list"></HySwiper>
```
```ts
import { HySwiper } from "hy-app";
import { ref } from "vue";

const list = ref([
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

## 对象使用说明
::: warning 温馨提示
- 如果是数组里包含对象，图片取键为`url`的图片地址，
- 如果数组里包含对象，对象里面的键`url`想改完`image`，则需要把`keyName`设置为`image`
- `title`轮播图展示的文字内容，必须先把轮播图属性`showTitle`设置为`true`
- `poster`地址内容为视频url时候填写
- `type`为`video`展示视频，`type`为`image`展示图片，默认展示图片
:::
```html
<template>
    <hy-swiper
        :list="list"
        showTitle
        :autoplay="false"
        circular
    ></hy-swiper>
</template>

<script setup>
    import { reactive } from 'vue';

    // 使用 reactive 创建响应式对象数组  
    const list = reactive([
        {
            url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
            title: '昨夜星辰昨夜风，画楼西畔桂堂东',
            type: "video"
        },
        {
            url: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
            title: '身无彩凤双飞翼，心有灵犀一点通',
        },
        {
            url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
            title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',
        },
    ]);
</script>
```

## 加载中
- 通过添加`loading`属性达到加载中的状态
```html
<template>
    <hy-swiper :list="list" loading></hy-swiper>
</template>
```

## 自定义指示器
- 如您需要以指示点或数字形式来自定义指示器，请参考如下案例：
::: details 点击查看完整代码
```vue
<template>
    <hy-swiper :list="list">
      <template #indicator="{ current, length }">
        <view class="indicator">
          <text>{{ current }}</text>
          <text>/</text>
          <text>{{ length }}</text>
        </view>
      </template>
    </hy-swiper>
</template>

<script setup>
    import { reactive } from 'vue';

    const list = reactive([
        'https://cdn.uviewui.com/uview/swiper/swiper3.png',
        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        'https://cdn.uviewui.com/uview/swiper/swiper1.png',
    ]);
</script>

<style lang="scss">
    .indicator {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 90rpx;
        height: 40rpx;
        background: rgba(128, 128, 128, 0.7);
        border-radius: $hy-border-radius-semicircle;
        color: #fff;
    }
</style>
```
:::


## 3D播放
- 在实际开发中，普通的轮播或许不能满足您的开发需求，swiper组件提供了卡片式轮播的api，您可以参考以下案例实现此功能
::: details 点击查看完整代码
```html
<template>
    <!-- #ifndef APP-NVUE || MP-TOUTIAO -->
    <view class="u-demo-block">
        <text class="u-demo-block__title">卡片式</text>
        <hy-swiper
                :list="list3"
                previousMargin="30"
                nextMargin="30"
                circular
                :autoplay="false"
                radius="5"
                bgColor="#ffffff"
        ></hy-swiper>
    </view>
    <!-- #endif -->
</template>

<script setup>
    import { reactive } from 'vue';

    const list3 = reactive([
        'https://cdn.uviewui.com/uview/swiper/swiper3.png',
        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        'https://cdn.uviewui.com/uview/swiper/swiper1.png',
    ]);
</script>
```
:::

## API

| 参数                     | 说明                                                                            | 类型                                                                    | 默认值                       |
|------------------------|-------------------------------------------------------------------------------|-----------------------------------------------------------------------|---------------------------|
| list                   | 可以字符串数组或者对象数组，对象见上方"[对象使用说明](#对象使用说明)"说明                                           | `array`                                                               | -                         |
| indicator              | 是否显示面板指示器                                                                     | `boolean`                                                             | false                     |
| indicatorActiveColor   | 指示器激活的颜色                                                                      | `string`                                                              | #FFFFFF                   |
| indicatorInactiveColor | 指示器非激活颜色                                                                      | `string`                                                              | rgba(255, 255, 255, 0.35) |
| indicatorStyle         | 指示器样式，可通过bottom，left，right进行定位                                                | `CSSProperties`                                                       | -                         |
| indicatorMode          | 指示器模式                                                                         | `line` \| `dot`                                                       | line                      |
| autoplay               | 是否自动切换                                                                        | `boolean`                                                             | true                      |
| current                | 当前所在滑块的 index                                                                 | `number` \| `string`                                                  | 0                         |
| currentItemId          | 当前所在滑块的 item-id ，不能与 current 被同时指定                                            | `string`                                                              | -                         |
| interval               | 滑块自动切换时间间隔（ms）                                                                | `number`                                                              | 3000                      |
| duration               | 滑块切换过程所需时间（ms），nvue不支持                                                        | `number`                                                              | 300                       |
| circular               | 播放到末尾后是否重新回到开头                                                                | `boolean`                                                             | false                     |
| previousMargin         | 前边距，可用于露出前一项的一小部分，nvue和支付宝不支持                                                 | `string` \| `number`                                                  | 0                         |
| nextMargin             | 后边距，可用于露出后一项的一小部分，nvue和支付宝不支持                                                 | `string` \| `number`                                                  | 0                         |
| acceleration           | 当开启时，会根据滑动速度，连续滑动多屏，支付宝不支持                                                    | `boolean`                                                             | false                     |
| displayMultipleItems   | 同时显示的滑块数量，nvue、支付宝小程序不支持                                                      | `number`                                                              | 1                         |
| easingFunction         | 指定swiper切换缓动动画类型， 只对微信小程序有效                                                   | `default`\|`linear`\|`easeInCubic` \|`easeOutCubic`\|`easeInOutCubic` | default                   |
| keyName                | list数组中指定url的属性键名                                                             | `string`                                                              | url                       |
| imgMode                | 图片的裁剪模式,见uniapp基础组件[image](https://uniapp.dcloud.net.cn/component/image.html) | `string`                                                              | aspectFill                |
| height                 | 组件高度                                                                          | `string` \| `number`                                                  | 130                       |
| bgColor                | 背景颜色                                                                          | `string`                                                              | -                         |
| radius                 | 组件圆角，数值或带单位的字符串                                                               | `string` \| `number`                                                  | 4                         |
| loading                | 是否加载中                                                                         | `boolean`                                                             | false                     |
| showTitle              | 是否显示标题，要求数组对象中有title属性                                                        | `boolean`                                                             | false                     |

## Events

| 事件名    | 说明                 | 回调参数                 |
|--------|--------------------|----------------------|
| click  | 点击轮播图时触发           | index：点击了第几张图片，从0开始  |
| change | 轮播图切换时触发(自动或者手动切换) | index：切换到了第几张图片，从0开始 |

## Slots

| 插槽名       | 说明 | 接收值                   |
|-----------|----|-----------------------|
| default   | -  | record:对象值, index: 索引 |
| indicator | -  | -                     |

<demo-model url="pages-design/swiper/swiper"></demo-model>