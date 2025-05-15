# Toast 消息提示组件
> Toast 组件主要用于消息通知、加载提示、操作结果提示等醒目提示效果，我们为其提供了多种丰富的API。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [toast组件](https://uiadmin.net/uview-plus/components/toast.html) 的代码实现。
:::
::: warning 注意
由于uni中无法通过js创建元素，所以需要在页面中调用toast组件，再通过ref开启
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-toast ref="hyToastRef"></hy-toast>
<!-- 单个组件引入 -->
<HyToast ref="hyToastRef"></HyToast>
```

```ts
import {HyToast} from "hy-app"
import {onMounted, ref} from "vue";

const hyToastRef = ref();

onMounted(() => {
    hyToastRef.value.show({
      message: "我是默认提示信息",
      type: "primary",
      icon: true,
      duration: 1000,
      position: "bottom",
    });
}) 
```

## API（params）{#params}

| 参数       | 说明                    | 类型                                               | 默认值    |
|----------|-----------------------|--------------------------------------------------|--------|
| message  | 显示的文本                 | `string`                                         | -      |
| type     | 主题类型                  | `error`\|`warning`\|`success`\|`primary`\|`info` | info   |
| icon     | 图标，或者绝对路径的图片          | `string` \| `boolean`                            | false  |
| loading  | 是否加载中                 | `boolean`                                        | false  |
| overlay  | 是否防止触摸穿透              | `boolean`                                        | true   |
| position | toast出现的位置            | `top`\|`center`\|`bottom`                        | center |
| params   | 跳转的参数                 | `Object`                                         | -      |
| duration | 展示时间，单位ms, 值为-1时不自动关闭 | `number`                                         | 2000   |
| complete | 执行完后的回调函数             | `Function`                                       | -      |

## Methods

| 事件名  | 说明                                      | 参数                       |
|------|-----------------------------------------|--------------------------|
| show | 显示toast，如需一进入页面就显示toast，请在onReady生命周期调用 | params: [见上方说明](#params) |



<demo-model url="pages/components/toast/toast"></demo-model>