# Overlay 遮罩层组件
> 创建一个遮罩层，用于强调特定的页面元素，并阻止用户对遮罩下层的内容进行操作，一般用于弹窗场景

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-overlay :show="show" @click="show = false"></hy-overlay>
```
```ts
import { ref } from 'vue';

const show = ref(true);
```

### 设置透明度
- 设置`opacity`值可以设置遮罩层透明度，取值范围0~1
```html
<template>
    <hy-overlay :show="show" :opacity="0.1"></hy-overlay>
    <hy-overlay :show="show" :opacity="0.9"></hy-overlay>
</template>
```

### 自定义插槽
通过默认插槽可以在遮罩层上嵌入任意内容
::: tip 注意
如果不想让slot插槽内容的点击事件冒泡到遮罩，请给指定元素添加上@tap.stop
:::
```html
<template>
    <hy-overlay :show="show" @click="show = false">
        <view class="warp">
            <view class="rect" @tap.stop></view>
        </view>
    </-overlay>
</template>

<script setup>
    import { ref } from 'vue';

    const show = ref(true);
</script>

<style lang="sass" scoped>
    .warp {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .rect {
        width: 120px;
        height: 120px;
        background-color: #fff;
    }
</style>
```

## API
### Overlay Props

| 参数                 | 说明                 | 类型              | 默认值   |
|--------------------|--------------------|-----------------|-------|
| show               | 是否显示遮罩             | `boolean`       | false |
| zIndex             | z-index 层级         | `number`        | 10070 |
| duration           | 动画时长，单位毫秒          | `number`        | 300   |
| opacity            | 不透明度值，当做rgba的第四个参数 | `number`        | 0.5   |
| LockScroll`v0.6.4` | 是否锁住页面滚动           | `boolean`       | true  |
| customStyle        | 自定义需要用到的外部样式       | `CSSProperties` | -     |
| customClass        | 自定义外部类名            | `string`        | -     |

### Events

| 事件名   | 说明        | 回调参数 |
|-------|-----------|------|
| click | 点击遮罩发送此事件 | -    |

### Slots

| 插槽名     | 说明                | 接收值 |
|---------|-------------------|-----|
| default | 默认插槽，用于在遮罩层上方嵌入内容 | -   |

<demo-model url="pages-design/overlay/overlay"></demo-model>