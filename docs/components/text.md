# Text 文本组件
> 此组件集成了文本类在项目中的常用功能，包括状态，拨打电话，格式化日期，*替换，超链接...等功能。 您大可不必在使用特殊文本时自己定义，text组件几乎涵盖您能使用的大部分场景。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [text组件](https://uiadmin.net/uview-plus/components/text.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-text text="我用十年青春,赴你最后之约"></hy-text>
<!-- 单个组件引入 -->
<HyText text="我用十年青春,赴你最后之约"></HyText>
```
```ts
import { HyText } from "hy-app"
```

## 主题色
- 通过设置`type`来设置文本主题色
  - `primary`默认
  - `error`失败
  - `success`成功
  - `warning`警告
  - `info`信息
- 通过设置`color`来设置文本颜色
```html
<template>
    <hy-text text="主色" type="primary"></hy-text>
    <hy-text text="错误" type="error"></hy-text>
    <hy-text text="成功" type="success"></hy-text>
    <hy-text text="警告" type="warning"></hy-text>
    <hy-text text="信息" type="info"></hy-text>
    <hy-text text="颜色" size="30rpx" color="#892FE8"></hy-text>
</template>
```

## 手机号
- 通过设置`mode`为`phone`设置手机号，可以点击拨打电话
- 通过设置`format`为`encrypt`中间四位设置星号
- 通过设置`call`来设置点击拨打电话号码
```html
<template>
    <hy-text mode="phone" text="19807123294" call></hy-text>
    <hy-text mode="phone" text="19807123294" format="encrypt"></hy-text>
</template>
```

## 日期格式化
- 通过设置`mode`为`date`设置日期格式化
```html
<template>
    <hy-text mode="date" :text="1746024799822"></hy-text>
</template>
```

## 姓名脱敏
- 通过设置`mode`为`name`设置名称
- 通过设置`format`为`encrypt`中间文字会变成星号
```html
<template>
    <hy-text mode="name" text="张三" format="encrypt"></hy-text>
    <hy-text mode="name" text="张益达" format="encrypt"></hy-text>
    <hy-text mode="name" text="古力娜扎" format="encrypt"></hy-text>
</template>
```

## 超链接
- 通过设置`mode`为`link`设置超链接，点击可以跳转
```html
<template>
    <hy-text mode="link" text="摸鱼日记" href="https://gxh151.top/h5"></hy-text>
</template>
```

## 显示金额
- 通过设置`mode`为`price`设置金额
```html
<template>
    <hy-text mode="price" text="728732.32"></hy-text>
</template>
```

## 显示图标
- 通过设置`prefixIcon`设置文本前缀图标
- 通过设置`suffixIcon`设置文本后缀图标
```html
<template>
    <hy-text :prefixIcon="IconConfig.MAP" text="地址"></hy-text>
    <hy-text
            :suffixIcon="IconConfig.ARROW_RIGHTWARD"
            :iconStyle="{ fontSize: '15px' }"
            text="查看更多"
    ></hy-text>
</template>
```

## 超出两行隐藏
- 通过设置`lines`为几，文本超出几行就会出现省略号
```html
<template>
    <hy-text
        :lines="2"
        text="关于uview-plus的取名来由，首字母u来自于uni-app首字母，plus参考element-plus起名让大家容易理解这是Vue3版本，uni-app是基于Vue.js，Vue和View(延伸为UI、视图之意)同音，同时view组件uni-app中 最基础，最重要的组件，故取名uview-plus，表达源于uni-app和Vue之意，同时在此也对它们表示感谢。"
    ></hy-text>
</template>
```

## 小程序开放能力
- 通过设置`openType`设置微信小程序分享功能
```html
<template>
    <hy-text
        text="分享到微信"
        openType="share"
        type="success"
        @click="clickHandler"
    ></hy-text>
</template>
```

## API

| 参数          | 说明                         | 类型                                                | 默认值                  |
|-------------|----------------------------|---------------------------------------------------|----------------------|
| text        | 显示的值                       | `string`\|`number`                                | -                    |
| type        | 主题颜色                       | `string`                                          | -                    |
| show        | 是否显示                       | `boolean`                                         | true                 |
| prefixIcon  | 前置图标                       | `string`                                          | -                    |
| suffixIcon  | 后置图标                       | `string`                                          | -                    |
| mode        | 文本处理的匹配模式[^1]              | `text`\|`price`\|`phone` \|`name`\|`date`\|`link` | text                 |
| href        | mode=link下，配置的链接           | `string`                                          | -                    |
| format      | 格式化规则[^2]                  | `string`\|`Function`                              | -                    |
| call        | mode=phone时，点击文本是否拨打电话     | `boolean`                                         | false                |
| openType    | 小程序的打开方式                   | `string`                                          | -                    |
| bold        | 是否粗体，默认normal              | `boolean`                                         | false                |
| block       | 是否块状                       | `boolean`                                         | false                |
| lines       | 文本显示的行数，如果设置，超出此行数，将会显示省略号 | `string`\|`number`                                | -                    |
| color       | 文本颜色                       | `string`                                          | -                    |
| size        | 字体大小                       | `string`\|`number`                                | 15                   |
| iconStyle   | 图标的样式                      | `CSSProperties`                                   | \{fontSize: "15px"\} |
| decoration  | 文字装饰，下划线，中划线等              | `none`\|`underline`\|`line-through`               | -                    |
| margin      | 外边距、字符串，数值形式均可             | `string`                                          | 0                    |
| lineHeight  | 文本行高                       | `string`\|`number`                                | -                    |
| align       | 文本对齐方式                     | `center`\|`left`\|`right`                         | left                 |
| wordWrap    | 文字换行                       | `normal`\|`break-word`\|`anywhere`                | normal               |
| flex        | 是否占满剩余空间                   | `boolean`                                         | true                 |
| customStyle | 定义需要用到的外部样式                | `CSSProperties`                                   | -                    |

## Events

| 事件名   | 说明     | 回调参数 |
|-------|--------|------|
| click | 点击触发事件 | -    |


[^1]: `text`-普通文本，`price`-价格，`phone`-手机号，`name`-姓名，`date`-日期，`link`-超链接
[^2]:  当`mode`等于`phone`或`name`时候`format`设置为`encrypt`表示隐藏中间内容

<demo-model url="pages-design/text/text"></demo-model>