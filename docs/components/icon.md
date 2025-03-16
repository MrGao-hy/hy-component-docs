# Icon 图标组件
::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [icon组件](https://uiadmin.net/uview-plus/components/icon.html) 的代码实现。
:::

## 平台差异说明

| APP | H5 | 微信小程序 |
|---|---|----|
|✔| ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局导入 -->
<hy-icon :name="IconConfig.Loading"></hy-icon>
<!-- 单个组件导入 -->
<HyIcon :name="IconConfig.Loading"></HyIcon>
```
```js
import { IconConfig, HyIcon } from "hfyk-app";
```

## 修改图标的样式
- 通过`color`参数修改图标的颜色
- 通过`size`参数修改图标的大小，单位为px
```html
<hy-icon name="photo" color="#2979ff" size="28"></hy-icon>
```

## 图片图标

## 自定义icon
```html
<hy-icon label="uview-plus" size="40" name="https://cdn.uviewui.com/uview/example/button.png"></hy-icon>
```


## API

| 参数                 | 说明                                                                                                        | 类型                               | 默认值     | 可选值            |
| -------------------- |-----------------------------------------------------------------------------------------------------------|----------------------------------|---------|----------------|
| name                 | 图标名称，见示例图标集                                                                                               | `string`                         | -       | IconConfig集合里面 |
| size            | 图标字体大小，单位默认px                                                                                             | `string` \| `number`             | 16px    | -              |
| color           | 图标颜色                                                                                                      | `string`                         | #606266 | -              |
| bold               | 是否显示粗体                                                                                                    | `boolean`                        | false   | -              |
| index            | 一个用于区分多个图标的值，点击图标时通过click事件传出                                                                             | `string` \| `number`             | -       | -              |
| hoverClass                 | 图标按下去的样式类，用法同uni的view组件的hover-class参数, 详见：[hover-class](https://uniapp.dcloud.net.cn/component/view.html) | `string`                         | -       | -              |
| customPrefix（暂不可用）      | 自定义字体图标库时，需要写上此值，详见：扩展自定义图标库                                                                              | `string`                         | hy-icon | -              |
| label       | 图标右侧/下方的label文字                                                                                           | `string`                         | -       | -              |
| labelPos  | label相对于图标的位置                                                                                             | `string`                         | right   | bottom         |
| labelSize   | label字体大小，单位默认px                                                                                          | `string` \| `number`             | 15px    | -              |
| labelColor     | label字体颜色                                                                                                 | `string`                         | -       | -              |
| space      | label与图标的距离，单位默认px                                                                                        | `string` \| `number`             | 3px     | -              |
| imgMode | 图片裁剪、缩放的模式，image组件原生属性,详见：[image](https://uniapp.dcloud.net.cn/component/image.html#image)                | `string`                         | -       | -              |
| width | name为图片路径时图片的宽度，单位默认px                                                                                    | `string` \| `number`             | -       | -              |
| height | name为图片路径时图片的高度，单位默认px                                                                                    | `string` \| `number`             | -       | -              |
| top | 图标到顶部的距离，如果某些场景，如果图标没有垂直居中，可以调整此参数，单位默认px                                                                 | `string` \| `string` \| `number` | 0       | -              |
| stop | 是否阻止事件传播                                                                                                  | `booolean`                       | false   | -              |
| isRotate | 是否自动旋转（用于loading）                                                                                         | `booolean`                       | false   | -              |
| customStyle | 自定义样式                                                                                                     | `CSSProperties`                  | -       | -              |

## Events
|事件名|说明| 回调参数                         |
|--|--|------------------------------|
|click|点击图标时触发| `index`: 通过`props`传递的`index`值 |
