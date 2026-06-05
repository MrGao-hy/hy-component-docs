# Qrcode 二维码组件

> 根据提供的字符串前端JS生成二维码展示

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :warning:注意事项

:::warning 注意事项
- 二维码使用前端 JS 计算生成，因此会有一个计算时间
- 如果页面中有多个二维码组件，必须设置不同的 `cid` 属性
- `icon` 属性支持图片地址，但建议使用较小尺寸的图片以保证二维码可扫描性
- 容错级别 `lv` 取值范围为 1-4，数字越大容错能力越强
:::

## :japanese_castle:基本使用示例

### 基础用法

```html
<template>
    <hy-qrcode text="https://gxh151.top"></hy-qrcode>
</template>
```

### 自定义大小

```html
<template>
    <hy-qrcode text="https://gxh151.top" :size="300"></hy-qrcode>
</template>
```

### 自定义颜色

```html
<template>
    <hy-qrcode 
        text="https://gxh151.top" 
        background="#f5f5f5" 
        foreground="#214283"
        pdGround="#214283"
    ></hy-qrcode>
</template>
```

### 添加中间图标

```html
<template>
    <hy-qrcode 
        text="https://gxh151.top" 
        icon="https://pic1.imgdb.cn/item/67628833d0e0a243d4e5d22b.webp"
        :iconSize="50"
    ></hy-qrcode>
</template>
```

### 自定义加载状态

```html
<template>
    <hy-qrcode 
        text="https://gxh151.top" 
        :showLoading="true" 
        loadingText="正在生成..."
    ></hy-qrcode>
</template>
```

### 禁用加载状态

```html
<template>
    <hy-qrcode 
        text="https://gxh151.top" 
        :showLoading="false"
    ></hy-qrcode>
</template>
```

### 多个二维码

```html
<template>
    <view class="qrcode-list">
        <hy-qrcode cid="qrcode1" text="https://example.com/1"></hy-qrcode>
        <hy-qrcode cid="qrcode2" text="https://example.com/2"></hy-qrcode>
        <hy-qrcode cid="qrcode3" text="https://example.com/3"></hy-qrcode>
    </view>
</template>

<style lang="scss" scoped>
.qrcode-list {
    display: flex;
    flex-direction: column;
    gap: 20rpx;
}
</style>
```

### 开启预览功能

```html
<template>
    <hy-qrcode 
        text="https://gxh151.top" 
        :allowPreview="true"
        @preview="onPreview"
    ></hy-qrcode>
</template>

<script setup>
const onPreview = (url, event) => {
    console.log('预览图片:', url)
}
</script>
```

### 监听生成事件

```html
<template>
    <hy-qrcode 
        text="https://gxh151.top" 
        @result="onResult"
        @longPress="onLongPress"
    ></hy-qrcode>
</template>

<script setup>
const onResult = (res) => {
    console.log('二维码生成成功:', res)
}

const onLongPress = () => {
    console.log('长按二维码')
}
</script>
```

## API

### Qrcode Props

| 参数              | 说明                             | 类型        | 默认值                                     |
|-----------------|--------------------------------|-----------|-----------------------------------------|
| cid             | 实例ID字符串（如果有多个二维码组件必须设置不一样的cid） | `string`  | `'hy-qrcode-canvas_' + random(1, 1000)` |
| size            | 二维码大小（px）                      | `number`  | 200                                     |
| text            | 二维码内容                          | `string`  | -                                       |
| show            | 是否显示二维码                        | `boolean` | true                                    |
| background      | 二维码背景色                         | `string`  | #ffffff                                 |
| foreground      | 二维码颜色                          | `string`  | #000000                                 |
| pdGround        | 定位角点颜色                         | `string`  | #000000                                 |
| lv              | 容错级别（1-4）                      | `number`  | 3                                       |
| usingComponents | 是否是自定义组件                       | `boolean` | true                                    |
| icon            | 二维码中间图标（图片地址）                  | `string`  | -                                       |
| iconSize        | 二维码中间图标大小（px）                  | `number`  | 40                                      |
| showLoading     | 是否显示加载状态                       | `boolean` | true                                    |
| loadingText     | 加载中提示语                         | `string`  | 二维码生成中                                  |
| allowPreview    | 是否允许预览图片                       | `boolean` | false                                   |

### Events

| 事件名       | 说明      | 回调参数                                    |
|-----------|---------|-----------------------------------------|
| result    | 二维码生成成功 | `res: any` 生成成功返回的数据                    |
| preview   | 打开图片事件  | `url: string` 图片地址, `event: Event` 事件对象 |
| longPress | 长按二维码事件 | -                                       |


<demo-model url="pages-design/qrcode/qrcode"></demo-model>
