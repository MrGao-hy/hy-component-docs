# Avatar 头像组件
> 本组件一般用于展示头像的地方，如个人中心，或者评论列表页的用户头像展示等场所。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :warning: 注意事项
:::warning 注意事项
1. 优先级顺序

头像内容按以下优先级显示：

```
插槽 > mpAvatar(小程序头像) > icon(图标) > text(文字) > src(图片)
```

2. size 参数

`size` 支持字符串和数字类型：

```html
<!-- 字符串预设值 -->
<hy-avatar size="small"></hy-avatar>
<hy-avatar size="medium"></hy-avatar>
<hy-avatar size="large"></hy-avatar>

<!-- 数字（单位px） -->
<hy-avatar :size="40"></hy-avatar>
<hy-avatar :size="60"></hy-avatar>
```

3. randomBgColor 使用

开启随机背景色后，头像会从预设的20种颜色中随机选择：

```html
<hy-avatar text="高" random-bg-color></hy-avatar>
```

可通过 `colorIndex` 指定具体颜色索引（0-19）：

```html
<hy-avatar text="高" random-bg-color :color-index="5"></hy-avatar>
```

4. 小程序头像

`mpAvatar` 仅对微信、QQ、百度小程序有效，会自动获取用户头像：

```html
<hy-avatar mp-avatar></hy-avatar>
```

5. 默认头像

当 `src` 加载失败时，会显示内置的默认头像（base64 格式），也可通过 `defaultUrl` 自定义：

```html
<hy-avatar src="xxx" default-url="https://xxx.png"></hy-avatar>
```
:::

## :japanese_castle:基本使用示例

```html
<template>
    <!-- 图片头像 -->
    <hy-avatar src="https://pic1.imgdb.cn/item/67628833d0e0a243d4e5d22b.webp"></hy-avatar>
    
    <!-- 文字头像 -->
    <hy-avatar text="高"></hy-avatar>
    
    <!-- 图标头像 -->
    <hy-avatar :icon="IconConfig.MINE"></hy-avatar>
</template>
```

### 头像形状

```html
<template>
    <!-- 圆形（默认） -->
    <hy-avatar :src="url" shape="circle"></hy-avatar>
    
    <!-- 圆角方形 -->
    <hy-avatar :src="url" shape="square"></hy-avatar>
</template>

<script setup>
import { ref } from "vue";
const url = ref("https://pic1.imgdb.cn/item/67628833d0e0a243d4e5d22b.webp");
</script>
```

### 头像大小

```html
<template>
    <hy-avatar :src="url" size="small"></hy-avatar>
    <hy-avatar :src="url" size="medium"></hy-avatar>
    <hy-avatar :src="url" size="large"></hy-avatar>
    <hy-avatar :src="url" :size="40"></hy-avatar>
</template>

<script setup>
import { ref } from "vue";
const url = ref("https://pic1.imgdb.cn/item/67628833d0e0a243d4e5d22b.webp");
</script>
```

### 文字头像（自动背景色）

```html
<template>
    <hy-avatar text="北" font-size="18" random-bg-color></hy-avatar>
    <hy-avatar text="京" font-size="18" random-bg-color></hy-avatar>
    <hy-avatar text="欢" font-size="18" random-bg-color></hy-avatar>
    <hy-avatar text="迎" font-size="18" random-bg-color></hy-avatar>
</template>
```

### 自定义背景色

```html
<template>
    <!-- 自定义背景色和文字颜色 -->
    <hy-avatar text="高" bg-color="#448aca" color="#ffffff"></hy-avatar>
    
    <!-- 指定颜色索引 -->
    <hy-avatar text="李" random-bg-color :color-index="5"></hy-avatar>
</template>
```

### 使用图标

```html
<template>
    <hy-avatar :icon="IconConfig.MINE_FILL" />
    <hy-avatar :icon="IconConfig.PHOTO" />
    <hy-avatar :icon="IconConfig.STAR" />
    <hy-avatar :icon="IconConfig.CUSTOMER_SERVICE" bg-color="#89c152" />
</template>

<script setup>
    import { IconConfig } from "hy-app";
</script>
```

### 小程序头像

```html
<template>
    <!-- 自动获取小程序用户头像 -->
    <hy-avatar mp-avatar size="large"></hy-avatar>
</template>
```

### 自定义内容插槽

```html
<template>
    <hy-avatar>
        <view class="custom-avatar">
            <text>自定义</text>
        </view>
    </hy-avatar>
</template>

<style lang="scss" scoped>
.custom-avatar {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    
    text {
        color: #fff;
        font-size: 24rpx;
    }
}
</style>
```

### 点击事件

```html
<template>
    <hy-avatar :src="url" name="avatar1" @click="onClick"></hy-avatar>
</template>

<script setup>
import { ref } from "vue";

const url = ref("https://pic1.imgdb.cn/item/67628833d0e0a243d4e5d22b.webp");

const onClick = ({ name, url }) => {
    // 预览大图
    uni.previewImage({
        urls: [url],
        longPressActions: {
            itemList: ['发送给朋友', '保存图片', '收藏'],
            success: function () {},
            fail: function (err) {
                console.log(err.errMsg)
            }
        }
    })
}
</script>
```

## API

### Avatar Props

| 参数              | 说明                                                                          | 类型                 | 默认值         |
|-----------------|-----------------------------------------------------------------------------|--------------------|-------------|
| src             | 头像路径，如加载失败，将会显示默认头像(不能为相对路径)                                                | `string`           | -           |
| shape           | 头像形状                                                                        | `circle`\|`square` | circle      |
| size            | 头像尺寸，可以为指定字符串(large, medium, small)，或者数值                                    | `string`\|`number` | medium      |
| mode            | 头像图片的裁剪类型,[uniapp的image](https://uniapp.dcloud.net.cn/component/image.html) | `string`           | scaleToFill |
| text            | 用文字替代图片，级别优先于src                                                            | `string`           | -           |
| bg-color        | 背景颜色，一般显示文字时用                                                               | `string`           | #c0c4cc     |
| color           | 文字颜色                                                                        | `string`           | #ffffff     |
| font-size       | 文字大小                                                                        | `number`\|`string` | 18          |
| icon            | 显示的图标                                                                       | `string`           | -           |
| mp-avatar       | 显示小程序头像，只对百度，微信，QQ小程序有效                                                     | `boolean`          | false       |
| random-bg-color | 是否使用随机背景色                                                                   | `boolean`          | false       |
| default-url     | 加载失败的默认头像(组件有内置默认图片)                                                        | `string`           | -           |
| color-index     | 如果配置了randomBgColor为true，且配置了此值，则从默认的背景色数组中取出对应索引的颜色值，取值0-19之间               | `number`           | 0           |
| name            | 组件标识符                                                                       | `string`           | -           |
| customStyle     | 自定义需要用到的外部样式                                                                | `CSSProperties`    | -           |
| customClass     | 自定义外部类名                                                                     | `string`           | -           |

### Events

| 事件名   | 说明    | 回调参数                                    |
|-------|-------|-----------------------------------------|
| click | 头像被点击 | config: IAvatarClickConfig, event: 事件对象 |

### Typings

:::details 类型说明

```ts
interface IAvatarClickConfig {
    /** 组件标识符 */
    name: string
    /** 头像图片url */
    url?: string
}
```

:::

<demo-model url="pages-design/avatar/avatar"></demo-model>
