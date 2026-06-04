# NoticeBar 滚动通知组件

> 该组件用于滚动通告场景，支持横向滚动、纵向滚动、步进滚动等多种模式。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :warning:注意事项

- `text` 参数支持字符串或数组形式，轮播滚动时建议使用数组
- `url` 和 `mode="link"` 必须同时设置才能实现页面跳转
- `step` 属性仅在 `direction="row"` 时生效，启用步进形式滚动
- `disableTouch` 属性目前仅支持 App 2.5.5+、H5 2.5.5+、支付宝小程序、字节跳动小程序

## :japanese_castle:基本使用示例

### 基础使用

```html
<template>
    <hy-notice-bar text="欢迎使用华悦组件库"></hy-notice-bar>
</template>
```

### 数组内容

```html
<template>
    <hy-notice-bar :text="textList"></hy-notice-bar>
</template>

<script setup>
import { reactive } from 'vue'

const textList = reactive([
    '唧唧复唧唧，',
    '木兰当户织。',
    '不闻机杼声，',
    '唯闻女叹息。'
])
</script>
```

### 可关闭模式

```html
<template>
    <hy-notice-bar :text="textList" mode="closable"></hy-notice-bar>
</template>

<script setup>
import { reactive } from 'vue'

const textList = reactive([
    '这是一条可关闭的通知',
    '点击右侧关闭按钮可隐藏通知'
])
</script>
```

### 自定义滚动速度

```html
<template>
    <hy-notice-bar :text="textList" :speed="150"></hy-notice-bar>
</template>

<script setup>
import { reactive } from 'vue'

const textList = reactive([
    '滚动速度为 150px/s',
    '速度值越大滚动越快'
])
</script>
```

### 跳转页面

```html
<template>
    <hy-notice-bar 
        text="点击查看详情" 
        mode="link"
        url="/pages/detail/index"
    ></hy-notice-bar>
</template>
```

### 自定义跳转类型

```html
<template>
    <hy-notice-bar 
        text="跳转首页" 
        mode="link"
        url="/pages/index/index"
        link-type="switchTab"
    ></hy-notice-bar>
</template>
```

### 横向步进滚动

```html
<template>
    <hy-notice-bar :text="textList" step></hy-notice-bar>
</template>

<script setup>
import { reactive } from 'vue'

const textList = reactive([
    '第一条通知',
    '第二条通知',
    '第三条通知'
])
</script>
```

### 纵向滚动

```html
<template>
    <hy-notice-bar :text="textList" direction="column"></hy-notice-bar>
</template>

<script setup>
import { reactive } from 'vue'

const textList = reactive([
    '第一条纵向滚动通知',
    '第二条纵向滚动通知',
    '第三条纵向滚动通知'
])
</script>
```

### 自定义样式

```html
<template>
    <hy-notice-bar 
        text="自定义颜色的通知" 
        color="#ff5722"
        bg-color="#fff3e0"
        :font-size="16"
    ></hy-notice-bar>
</template>
```

### 自定义图标

```html
<template>
    <hy-notice-bar
        text="使用自定义图标"
        :icon="{
            name: IconConfig.SCAN,
            color: 'red'
        }"
    ></hy-notice-bar>

    <hy-notice-bar
        text="使用自定义图标"
        :icon="IconConfig.SCAN"
    ></hy-notice-bar>
</template>
```

### 文字对齐方式

```html
<template>
    <!-- 左对齐 -->
    <hy-notice-bar text="左对齐" justify-content="flex-start"></hy-notice-bar>
    
    <!-- 居中对齐 -->
    <hy-notice-bar text="居中对齐" justify-content="center"></hy-notice-bar>
    
    <!-- 右对齐 -->
    <hy-notice-bar text="右对齐" justify-content="flex-end"></hy-notice-bar>
</template>
```

### 禁用触摸滑动

```html
<template>
    <hy-notice-bar 
        :text="textList" 
        direction="column"
        :disable-touch="false"
    ></hy-notice-bar>
</template>

<script setup>
import { reactive } from 'vue'

const textList = reactive([
    '支持手势滑动切换',
    '上下滑动可切换通知'
])
</script>
```

### 监听事件

```html
<template>
    <hy-notice-bar 
        :text="textList" 
        mode="closable"
        @click="handleClick"
        @close="handleClose"
    ></hy-notice-bar>
</template>

<script setup>
import { reactive } from 'vue'

const textList = reactive([
    '点击通知可触发事件',
    '关闭通知也会触发事件'
])

const handleClick = (index) => {
    uni.showToast({
        title: `点击了第${index + 1}条通知`,
        icon: 'none'
    })
}

const handleClose = () => {
    uni.showToast({
        title: '通知已关闭',
        icon: 'none'
    })
}
</script>
```

## API

### NoticeBar Props

| 参数             | 说明                                                  | 类型                      | 默认值               |
|----------------|-----------------------------------------------------|-------------------------|-------------------|
| text           | 显示的内容，支持字符串或数组                                      | `string`\|`string[]`    | -                 |
| direction      | 通告滚动模式，row-横向滚动，column-竖向滚动                         | `row` \| `column`       | row               |
| step           | direction = row时，是否使用步进形式滚动                         | `boolean`               | false             |
| icon           | 是否显示左侧图标，接受图标名称或图标配置对象                              | `string`\|`HyIconProps` | NOTIFICATION_FILL |
| mode           | 通告模式，link-显示右箭头，closable-显示右侧关闭图标                   | `link` \| `closable`    | -                 |
| color          | 文字颜色，图标也会使用此颜色                                      | `string`                | #ff9900           |
| bgColor        | 背景颜色                                                | `string`                | -                 |
| speed          | 水平滚动时的滚动速度，即每秒滚动多少px，速度越大滚动越快                       | `number`                | 80                |
| fontSize       | 字体大小，单位px                                           | `string` \| `number`    | 14                |
| duration       | 滚动一个周期的时间，单位ms                                      | `number`                | 2000              |
| disableTouch   | 是否禁止用手滑动切换，仅支持 App 2.5.5+、H5 2.5.5+、支付宝小程序、字节跳动小程序  | `boolean`               | true              |
| url            | 跳转的页面路径                                             | `string`                | -                 |
| linkType       | 页面跳转类型，可选值：navigateTo、redirectTo、switchTab、reLaunch | `string`                | navigateTo        |
| justifyContent | 文字水平布局类型，可选值：flex-start、center、flex-end             | `string`                | flex-start        |
| customStyle    | 自定义外部样式                                             | `CSSProperties`         | -                 |
| customClass    | 自定义外部类名                                             | `string`                | -                 |

### Events

| 事件名   | 说明         | 回调参数               |
|-------|------------|--------------------|
| click | 点击通告文字触发   | index: 当前显示的text索引 |
| close | 点击右侧关闭图标触发 | -                  |

<demo-model url="pages-design/noticeBar/noticeBar"></demo-model>
