# Icon 图标组件
> 基于字体的图标集，包含了大多数常见场景的图标，使用简单，开箱即用，无需自己再写每个图标的样式，直接简单配置即可。支持自定义图标。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [icon组件](https://uiadmin.net/uview-plus/components/icon.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例
:::tip 提示
图标采用的是阿里图标库线上链接，如软件在仓库网络差的情况下图片无法加载属于正常情况，可以下载图标到本地，自行导入图标
如需下载图标到本地请联系作者：华玥作者
:::
```html
<!-- 全局导入 -->
<hy-icon :name="IconConfig.Loading"></hy-icon>
<!-- 单个组件导入 -->
<HyIcon :name="IconConfig.Loading"></HyIcon>
```
```js
import { IconConfig, HyIcon } from "hy-app";
```

## 修改图标的样式
- 通过`color`参数修改图标的颜色
- 通过`size`参数修改图标的大小，单位为px
```html
<hy-icon name="photo" color="#2979ff" size="28"></hy-icon>
```

## 图片图标(带圆角)
```html
<view class="hy-flex">
  <hy-icon
          name="https://q9.itc.cn/q_70/images03/20250211/6ee1b8e0f4704083ba715986c8c3795f.jpeg"
          size="80"
          round="5px"
  />
</view>
```

## 图标文字位置
```html
<view class="hy-flex">
  <hy-icon :name="IconConfig.LOCK" label="横向" label-pos="right" />
  <hy-icon :name="IconConfig.LOCK" label="纵向" label-pos="bottom" />
</view>
```

## 图标旋转
```html
<view class="hy-flex">
  <hy-icon :name="IconConfig.LOCK" is-rotate />
</view>
```


## 自定义icon
- 直接在阿里矢量图标库下载, 
  - `name`为图标名称, 
  - `customPrefix`为你项目设置中的FontClass/Symbol前缀
```html
<hy-icon label="uview-plus" size="40" name="search" customPrefix="custom-icon"></hy-icon>
```


## API

| 参数           | 说明                                                                                                        | 类型                               | 默认值     |
|--------------|-----------------------------------------------------------------------------------------------------------|----------------------------------|---------|
| name         | 图标名称，见示例图标集                                                                                               | `string` \| `IconConfig`         | -       |
| size         | 图标字体大小，单位默认px                                                                                             | `string` \| `number`             | 16px    |
| color        | 图标颜色                                                                                                      | `string`                         | -       |
| bold         | 是否显示粗体                                                                                                    | `boolean`                        | false   |
| index        | 一个用于区分多个图标的值，点击图标时通过click事件传出                                                                             | `string` \| `number`             | -       |
| hoverClass   | 图标按下去的样式类，用法同uni的view组件的hover-class参数, 详见：[hover-class](https://uniapp.dcloud.net.cn/component/view.html) | `string`                         | -       |
| customPrefix | 自定义字体图标库时，需要写上此值，详见：扩展自定义图标库                                                                              | `string`                         | hy-icon |
| label        | 图标右侧/下方的label文字                                                                                           | `string`                         | -       |
| labelPos     | label相对于图标的位置                                                                                             | `string`                         | right   |
| labelSize    | label字体大小，单位默认px                                                                                          | `string` \| `number`             | -       |
| labelColor   | label字体颜色                                                                                                 | `string`                         | -       |
| space        | label与图标的距离，单位默认px                                                                                        | `string` \| `number`             | 3px     |
| imgMode      | 图片裁剪、缩放的模式，image组件原生属性,详见：[image](https://uniapp.dcloud.net.cn/component/image.html#image)                | `string`                         | -       |
| width        | name为图片路径时图片的宽度，单位默认px                                                                                    | `string` \| `number`             | -       |
| height       | name为图片路径时图片的高度，单位默认px                                                                                    | `string` \| `number`             | -       |
| top          | 图标到顶部的距离，如果某些场景，如果图标没有垂直居中，可以调整此参数，单位默认px                                                                 | `string` \| `string` \| `number` | 0       |
| stop         | 是否阻止事件传播                                                                                                  | `booolean`                       | false   |
| isRotate     | 是否自动旋转（用于loading）                                                                                         | `booolean`                       | false   |
| round        | 图标圆角                                                                                                      | `string` \| `number`             | -       |
| customStyle  | 自定义需要用到的外部样式                                                                                              | `CSSProperties`                  | -       |
| customClass  | 自定义外部类名                                                                                                   | `string`                         | -       |

## Events
| 事件名   | 说明      | 回调参数                          |
|-------|---------|-------------------------------|
| click | 点击图标时触发 | `index`: 通过`props`传递的`index`值 |


## 图标集
<TheIconList />

<demo-model url="pages-design/icon/icon"></demo-model>
