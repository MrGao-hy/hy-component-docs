# Button 按钮组件
> 该组件内部实现以uni-app的基础button组件为基础，进行二次封装


## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :warning: 注意事项

### 1. 点击事件

按钮点击请使用 `@click` 事件，**请勿使用 `@tap`**，微信小程序中 `@tap` 无效：

```html
<!-- 正确 -->
<hy-button text="点击" @click="onClick"></hy-button>

<!-- 错误 -->
<hy-button text="点击" @tap="onClick"></hy-button>
```

### 2. icon 属性

`icon` 属性支持传入图标配置对象：

```html
<!-- 使用内置图标 -->
<hy-button text="删除" :icon="{ name: IconConfig.DELETE }"></hy-button>

<!-- 使用自定义图标 -->
<hy-button text="删除" :icon="{ name: 'delete', customPrefix: 'icon' }"></hy-button>
```

### 3. stop 事件冒泡

默认 `stop` 为 `true`，会阻止事件冒泡。如需允许冒泡，设置 `stop="false"`：

```html
<hy-button text="允许冒泡" :stop="false" @click="onClick"></hy-button>
```

### 4. 节流功能

通过 `throttleTime` 可以设置按钮点击节流时间，避免重复点击：

```html
<!-- 3秒内只能点击一次 -->
<hy-button text="提交" :throttle-time="3000" @click="onSubmit"></hy-button>
```

### 5. 开放能力

组件已对接 uni-app button 组件的所有开放能力，使用方式参考官方文档：

```html
<!-- 获取用户信息 -->
<hy-button open-type="getUserInfo" @getuserinfo="onGetUserInfo">获取信息</hy-button>

<!-- 获取手机号 -->
<hy-button open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber">获取手机号</hy-button>
```

## :japanese_castle:基本使用示例

```html
<template>
    <!-- 全局使用 -->
    <hy-button text="基础按钮"></hy-button>
    
    <!-- 使用插槽 -->
    <hy-button>插槽内容</hy-button>
    
</template>
```

### 设置按钮的颜色

```html
<template>
    <hy-button type="info" text="默认按钮"></hy-button>
    <hy-button type="success" text="成功按钮"></hy-button>
    <hy-button type="primary" text="主要按钮"></hy-button>
    <hy-button type="error" text="危险按钮"></hy-button>
    <hy-button type="warning" text="警告按钮"></hy-button>
    
    <!-- 渐变色按钮 -->
    <hy-button
        text="渐变色"
        color="linear-gradient(to right, red, blue)"
    ></hy-button>
</template>
```

### 按钮镂空

```html
<template>
    <hy-button type="info" text="镂空按钮" plain></hy-button>
    <hy-button type="success" text="镂空成功" plain></hy-button>
    <hy-button type="primary" text="镂空主要" plain></hy-button>
    <hy-button type="error" text="镂空危险" plain></hy-button>
    <hy-button type="warning" text="镂空警告" plain></hy-button>
    
    <!-- 渐变镂空按钮 -->
    <hy-button
        text="渐变镂空"
        color="linear-gradient(to right, red, blue)"
        plain
    ></hy-button>
</template>
```

### 设置按钮图标

```html
<template>
    <!-- 删除图标 -->
    <hy-button type="error" text="删除" :icon="{ name: IconConfig.DELETE }"></hy-button>
    
    <!-- 自定义图标 -->
    <hy-button type="error" text="删除" plain :icon="{ name: 'delete', customPrefix: 'icon' }"></hy-button>
    
    <!-- 加载按钮 -->
    <hy-button type="success" text="加载中" loading></hy-button>
    
    <!-- 自定义加载文字 -->
    <hy-button type="primary" loading loading-text="提交中"></hy-button>
</template>

<script setup>
import { IconConfig } from "hy-app";
</script>
```

### 按钮形状

```html
<template>
    <hy-button type="success" text="方形按钮" shape="square"></hy-button>
    <hy-button type="success" text="圆角按钮" shape="circle"></hy-button>
</template>
```

### 按钮大小

```html
<template>
    <hy-button type="success" text="大尺寸按钮" size="large"></hy-button>
    <hy-button type="success" text="默认按钮" size="medium"></hy-button>
    <hy-button type="success" text="小尺寸按钮" size="small"></hy-button>
    <hy-button type="success" text="迷你按钮" size="mini"></hy-button>
</template>
```

### 设置按钮的多种形态

```html
<template>
    <!-- 细边按钮 -->
    <hy-button text="细边按钮" :hairline="true"></hy-button>
    
    <!-- 无边框按钮 -->
    <hy-button text="无边框按钮" :border="false"></hy-button>
    
    <!-- 禁用按钮 -->
    <hy-button text="禁用按钮" :disabled="true"></hy-button>
    
    <!-- 禁用状态（带加载） -->
    <hy-button text="禁用" :disabled="true" loading></hy-button>
</template>
```

### 节流控制

```html
<template>
    <!-- 3秒内只能点击一次 -->
    <hy-button
        type="primary"
        text="提交"
        :throttle-time="3000"
        @click="onSubmit"
    ></hy-button>
</template>

<script setup>
const onSubmit = () => {
    uni.showToast({
        title: '提交成功',
        icon: 'success'
    })
}
</script>
```

### 自定义样式

```html
<template>
    <!-- 自定义内边距 -->
    <hy-button
        text="自定义样式"
        :custom-style="{ padding: '20rpx 40rpx' }"
    ></hy-button>
    
    <!-- 自定义类名 -->
    <hy-button text="自定义类名" custom-class="my-button"></hy-button>
</template>

<style lang="scss" scoped>
:deep(.my-button) {
    border-radius: 10rpx;
    box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
}
</style>
```

### 开放能力

```html
<template>
    <!-- 获取用户信息 -->
    <hy-button
        open-type="getUserInfo"
        type="primary"
        text="获取用户信息"
        @getuserinfo="onGetUserInfo"
    ></hy-button>
    
    <!-- 获取手机号 -->
    <hy-button
        open-type="getPhoneNumber"
        type="primary"
        text="获取手机号"
        @getphonenumber="onGetPhoneNumber"
    ></hy-button>
    
    <!-- 打开客服 -->
    <hy-button
        open-type="contact"
        text="联系客服"
        @contact="onContact"
    ></hy-button>
    
    <!-- 打开设置 -->
    <hy-button
        open-type="openSetting"
        text="打开设置"
        @opensetting="onOpenSetting"
    ></hy-button>
</template>

<script setup>
const onGetUserInfo = (e) => {
    console.log('用户信息:', e)
}

const onGetPhoneNumber = (e) => {
    console.log('手机号:', e)
}

const onContact = () => {
    console.log('打开客服')
}

const onOpenSetting = () => {
    console.log('打开设置')
}
</script>
```

### 各家小程序开放能力的对接
华玥组件库已对接uni-app档关于uni-app方[button组件](https://uniapp.dcloud.net.cn/component/button.html)的所有开放能力(截止2025-04-14)uni-app文档说明使用即可，如果有发现遗漏的地方，请加群反馈。

## API
### Button Props

| 参数                   | 说明                                                                                          | 类型                                               | 默认值     |
|----------------------|---------------------------------------------------------------------------------------------|--------------------------------------------------|---------|
| text                 | 按钮文字                                                                                        | `string`                                         | -       |
| icon                 | 按钮图标集合，详见[图标Api](./icon#api)                                                                | `HyIconProps`                                    | -       |
| color                | 按钮颜色，支持传入linear-gradient渐变色                                                                 | `string`                                         | -       |
| stop                 | 阻止事件冒泡                                                                                      | `boolean`                                        | true    |
| border               | 是否显示按钮边框                                                                                    | `boolean`                                        | true    |
| hairline             | 是否显示按钮的细边框                                                                                  | `boolean`                                        | true    |
| type                 | 按钮的样式类型                                                                                     | `error`\|`warning`\|`success`\|`primary`\|`info` | primary |
| size                 | 按钮的大小                                                                                       | `small`\|`medium`\|`large`\|`mini`               | medium  |
| shape                | 按钮外观形状，见上方说明                                                                                | `circle`\|`square`                               | square  |
| plain                | 按钮是否镂空，背景色透明                                                                                | `boolean`                                        | false   |
| disabled             | 是否禁用                                                                                        | `boolean`                                        | false   |
| loading              | 按钮是否加载中                                                                                     | `boolean`                                        | false   |
| loadingText          | 加载中提示文字                                                                                     | `string`                                         | -       |
| loadingMode          | 加载状态图标类型                                                                                    | `spinner`\|`circle`\|`semicircle`                | spinner |
| loadingSize          | 加载图标大小                                                                                      | `string` \| `number`                             | 13      |
| openType             | 开放能力，具体请看uniapp稳定关于button组件部分说明                                                             | `string`                                         | -       |
| scope                | 支付宝小程序使用，当 open-type 为 getAuthorize 时有效。                                                    | `phoneNumber`\|`userInfo`                        | -       |
| formType             | 用于 `<form>` 组件，点击分别会触发 `<form>` 组件的 submit/reset 事件                                         | `string`                                         | -       |
| appParameter         | 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 （注：只微信小程序、QQ小程序有效）                              | `string`                                         | -       |
| hoverStopPropagation | 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效（默认 true）                                                        | `boolean`                                        | true    |
| lang                 | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文                                                     | `string`                                         | en      |
| sessionFrom          | 会话来源，openType="contact"时有效                                                                  | `string`                                         | -       |
| sendMessageTitle     | 会话内消息卡片标题，openType="contact"时有效                                                             | `string`                                         | -       |
| sendMessagePath      | 会话内消息卡片点击跳转小程序路径，openType="contact"时有效                                                      | `string`                                         | -       |
| sendMessageImg       | 会话内消息卡片图片，openType="contact"时有效                                                             | `string`                                         | -       |
| showMessageCard      | 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效 | `boolean`                                        | false   |
| dataName             | 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取                                             | `string`                                         | -       |
| throttleTime         | 节流，一定时间内只能触发一次，单位毫秒                                                                         | `number`                                         | 0       |
| hoverStartTime       | 按住后多久出现点击态，单位毫秒                                                                             | `number`                                         | 0       |
| hoverStayTime        | 手指松开后点击态保留时间，单位毫秒                                                                           | `number`                                         | 200     |
| customStyle          | 自定义需要用到的外部样式                                                                                | `CSSProperties`                                  | -       |
| customClass          | 自定义外部类名                                                                                     | `string`                                         | -       |

### Events

| 事件名                       | 说明                                                      | 回调参数  | 平台           |
|---------------------------|---------------------------------------------------------|-------|--------------|
| click                     | 按钮点击，请勿使用@tap点击事件，微信小程序无效，返回值为点击事件及参数                   | event | -            |
| getphonenumber            | open-type="getPhoneNumber"时有效                           | event | 微信小程序，支付宝小程序 |
| getuserinfo               | 用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo | event | 微信小程序，支付宝小程序 |
| error                     | 当使用开放能力时，发生错误的回调                                        | event | 微信小程序        |
| opensetting               | 在打开授权设置页并关闭后回调                                          | event | 微信小程序        |
| launchapp                 | 打开 APP 成功的回调                                            | event | 微信小程序        |
| agreeprivacyauthorization | 用户同意隐私协议事件回调，open-type="agreePrivacyAuthorization"时有效   | event | 微信小程序        |
| chooseavatar              | 获取用户头像回调                                                | event | 微信小程序        |
| contact                   | 客服消息回调                                                  | event | 微信小程序        |

### Slots

| 插槽名     | 说明   | 接收值 |
|---------|------|-----|
| default | 默认插槽 | -   |

<demo-model url="pages-design/button/button"></demo-model>