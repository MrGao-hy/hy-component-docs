# Button 按钮组件
> 该组件内部实现以uni-app的基础button组件为基础，进行二次封装

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [button组件](https://uiadmin.net/uview-plus/components/button.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-button text="月落"></hy-button>
<!-- 单个组件引入 -->
<HyButton type="primary">按钮</HyButton>
```
```ts
import { HyButton } from "hy-app"
```

## 设置按钮的颜色
- `type`值设置主题色;
  - `primary`：信息按钮（默认）
  - `success`：主要按钮
  - `info`：默认按钮
  - `warning`：警告按钮
  - `error`：危险按钮
- `color`值设置自定义颜色，渐变色;
```html
<hy-button type="info" text="默认按钮"></hy-button>
<hy-button type="success" text="主要按钮"></hy-button>
<hy-button type="primary" text="信息按钮"></hy-button>
<hy-button type="error" text="危险按钮"></hy-button>
<hy-button type="warning" text="警告按钮"></hy-button>
<hy-button
        text="渐变色"
        color="linear-gradient(to right, red, blue)"
></hy-button>
```

## 按钮镂空
- 通过`plain`值设置是否镂空。
```html
<hy-button type="info" text="默认按钮" plain></hy-button>
<hy-button type="success" text="主要按钮" plain></hy-button>
<hy-button type="primary" text="信息按钮" plain></hy-button>
<hy-button type="error" text="危险按钮" plain></hy-button>
<hy-button type="warning" text="警告按钮" plain></hy-button>
<hy-button
        text="渐变色"
        color="linear-gradient(to right, red, blue)"
        plain
></hy-button>
```

## 设置按钮图标
- 通过`icon`值设置是否显示图标。
- 通过`loading`值设置是否开启加载图标，loadingText设置加载中文字。
```html
<!-- 删除图标 -->
<hy-button type="error" text="删除" :icon="{name: IconConfig.DELETE}"></hy-button>
<!-- 自定义图标 -->
<hy-button type="error" text="删除" plain :icon="{name: 'delete', customPrefix: 'icon'}" ></hy-button>
<!-- 加载按钮 -->
<hy-button type="success" text="主要按钮" loading></hy-button>
```

## 按钮形状
- 通过`shape`值设置按钮形状;
  - `square`为方形（默认）
  - `circle`为圆角
```html
<hy-button type="success" text="方形按钮" shape="square"></hy-button>
<hy-button type="success" text="圆形按钮" shape="circle"></hy-button>
```


## 按钮大小
- 通过`size`值设置按钮的大小。
  - `large` 大的
  - `medium` 中等的
  - `small` 小的
  - `mini` 迷你的
```html
<hy-button type="success" text="大尺寸按钮" size="large" :custom-style="{ marginBottom: '20px' }"></hy-button>
<hy-button type="success" text="默认按钮" size="medium" :custom-style="{ marginBottom: '20px' }"></hy-button>
<hy-button type="success" text="小尺寸按钮" size="small" :custom-style="{ marginBottom: '20px' }"></hy-button>
<hy-button type="success" text="迷你按钮" size="mini" :custom-style="{ marginBottom: '20px' }"></hy-button>
```

## 设置按钮的多种形态
- 通过`hairline`值设置是否细边。
- 通过`disabled`值设置是否禁用。
```html
<hy-button :hairline="true" text="细边"></hy-button>
<hy-button :disabled="true" text="禁用"></hy-button>
```

## 各家小程序开放能力的对接
华玥组件库已对接uni-app档关于uni-app方[button组件](https://uniapp.dcloud.net.cn/component/button.html)的所有开放能力(截止2025-04-14)uni-app-app文档说明使用即可，如果有发现遗漏的地方，请加群反馈。

## API

| 参数                   | 说明                                                                                          | 类型                                                | 默认值     |
|----------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------|---------|
| text                 | 按钮文字                                                                                        | `string`                                          | -       |
| icon                 | 按钮图标集合，详见[图标Api](./icon#api)                                                                | `HyIconProps`                                     | -       |
| color                | 按钮颜色，支持传入linear-gradient渐变色                                                                 | `string`                                          | -       |
| stop                 | 阻止事件冒泡                                                                                      | `boolean`                                         | false   |
| customStyle          | 定义需要用到的外部样式                                                                                 | `CSSProperties`                                   | -       |
| hairline             | 是否显示按钮的细边框                                                                                  | `boolean`                                         | true    |
| type                 | 按钮的样式类型                                                                                     | `error`\|`warning`\| `success`\|`primary`\|`info` | info    |
| size                 | 按钮的大小                                                                                       | `small`\|`medium`\|`large`\|`mini`                | medium  |
| shape                | 按钮外观形状，见上方说明                                                                                | `circle`\|`square`                                | square  |
| plain                | 按钮是否镂空，背景色透明                                                                                | `boolean`                                         | false   |
| disabled             | 是否禁用                                                                                        | `boolean`                                         | false   |
| loading              | 按钮是否加载中                                                                                     | `boolean`                                         | false   |
| loadingText          | 加载中提示文字                                                                                     | `string`                                          | -       |
| loadingMode          | 加载状态图标类型                                                                                    | `string`                                          | spinner |
| loadingSize          | 加载图标大小                                                                                      | `string` \| `number`                              | 13      |
| openType             | 开放能力，具体请看uniapp稳定关于button组件部分说明                                                             | `string`                                          | -       |
| formType             | 用于 `<form>` 组件，点击分别会触发 `<form>` 组件的 submit/reset 事件                                         | `string`                                          | -       |
| appParameter         | 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 （注：只微信小程序、QQ小程序有效）                              | `string`                                          | -       |
| hoverStopPropagation | 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效（默认 true）	                                                       | `boolean`                                         | true    |
| lang                 | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文                                                     | `string`                                          | en      |
| sessionFrom          | 会话来源，openType="contact"时有效                                                                  | `string`                                          | -       |
| sendMessageTitle     | 会话内消息卡片标题，openType="contact"时有效                                                             | `string`                                          | -       |
| sendMessagePath      | 会话内消息卡片点击跳转小程序路径，openType="contact"时有效                                                      | `string`                                          | -       |
| sendMessageImg       | 会话内消息卡片图片，openType="contact"时有效                                                             | `string`                                          | -       |
| showMessageCard      | 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效 | `boolean`                                         | false   |
| dataName             | 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取                                             | `string`                                          | -       |
| throttleTime         | 节流，一定时间内只能触发一次，单位毫秒                                                                         | `number`                                          | 0       |
| hoverStartTime       | 按住后多久出现点击态，单位毫秒                                                                             | `number`                                          | 0       |
| hoverStayTime        | 手指松开后点击态保留时间，单位毫秒                                                                           | `number`                                          | 200     |


## Events

| 事件名            | 说明                                                      | 回调参数 | 平台    |
|----------------|---------------------------------------------------------|------|-------|
| click          | 按钮点击，请勿使用@tap点击事件，微信小程序无效，返回值为点击事件及参数                   | -    | -     |
| getphonenumber | open-type="getPhoneNumber"时有效                           | -    | 微信小程序 |
| getuserinfo    | 用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo | -    | 微信小程序 |
| error          | 当使用开放能力时，发生错误的回调                                        | -    | 微信小程序 |
| opensetting    | 在打开授权设置页并关闭后回调	                                         | -    | 微信小程序 |
| launchapp      | 打开 APP 成功的回调                                            | -    | 微信小程序 |

## Slots

| 插槽名     | 说明   | 接收值 |
|---------|------|----|
| default | 默认插槽 | -  |

<demo-model url="pages/components/button/button"></demo-model>