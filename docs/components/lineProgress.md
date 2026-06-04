# LineProgress 线形进度条组件
> 展示操作或任务的当前进度，比如上传文件，是一个线形的进度条。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-line-progress :percentage="30"></hy-line-progress>
<!-- 单个组件引入 -->
<HyLineProgress :percentage="30"></HyLineProgress>
```
```ts
import { HyLineProgress } from "hy-app"
```

### 不显示百分比
- `show-text`参数配置是否显示进度条内百分值
```html
<template>
    <hy-line-progress :percentage="30" :showText="false"></hy-line-progress>
</template>
```

### 自定义高度
- `height`进度条高度
```html
<template>
    <hy-line-progress :percentage="30" height="8"></hy-line-progress>
</template>
```

### 自定义样式

```html
<template>
    <hy-line-progress :percentage="30" activeColor="red" inactiveColor="greed"></hy-line-progress>
</template>
```

### 手动加减
- 通过控制`percentage`参数数值达到增减

```html
<template>
    <view style="margin-top: 50px;">
        <hy-line-progress :percentage="percentage" />
        <view style="display: flex;margin-top: 100px;">
            <button @click="computedWidth('minus')">减少</button>
            <button @click="computedWidth('plus')">增加</button>
        </view>
    </view>
</template>

<script setup>
    import { ref } from 'vue';
    import { range } from "hyfk-app";

    const percentage = ref(30);

    const computedWidth = (type) => {
        if (type === 'plus') {
            percentage.value = range(0, 100, percentage.value + 10);
        } else {
            percentage.value = range(0, 100, percentage.value - 10);
        }
    };
</script>
```

## API
### LineProgress Props

| 参数            | 说明              | 类型                   | 默认值  |
|---------------|-----------------|----------------------|------|
| activeColor   | 进度条激活部分的颜色      | `string`             | -    |
| inactiveColor | 进度条的底色，默认为灰色    | `string`             | -    |
| percentage    | 进度百分比，数值        | `number`             | 0    |
| showText      | 是否在进度条内部显示百分比的值 | `boolean`            | true |
| height        | 进度条的高度，默认单位px	  | `number` \| `string` | 12   |
| fontSize      | 字体大小，默认单位px	    | `number` \| `string` | -    |
| customStyle   | 自定义需要用到的外部样式    | `CSSProperties`      | -    |
| customClass   | 自定义外部类名         | `string`             | -    |


### Slots

| 插槽名     | 说明                       | 接收值 |
|---------|--------------------------|-----|
| default | 传入自定义的显示内容，将会覆盖默认显示的百分比值 | -   |

<demo-model url="pages-design/lineProgress/lineProgress"></demo-model>