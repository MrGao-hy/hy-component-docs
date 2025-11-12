# Signature 签名组件
> 用于签名场景，基于 Canvas 实现的签名组件。提供了基础签名、历史记录、笔锋效果等功能。

::: tip 温馨提示
本项目参考了 Wot-UI 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 Wot-UI 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考Wot-UI的 [signature组件](https://wot-design-uni.cn/component/signature.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## 基本使用示例
::: tip 提示
如果遇到导出图片不清晰，可以将 exportScale 设置为 2 以上。
:::
```html
<!-- 全局使用 -->
<hy-signature></hy-signature>
<!-- 单个组件引入 -->
<HySignature></HySignature>
```
```ts
import { HySignature } from "hy-app"
```

## 自定义画笔
- 通过设置`lineWidth`，设置字体宽度
- 通过设置`pen-color`，设置字体颜色
```html
<template>
    <hy-signature pen-color="red" :lineWidth="5"></hy-signature>
</template>
```

## 历史记录操作
- 通过设置`enableHistory`，是否可以操作历史记录
```html
<template>
    <hy-signature enableHistory></hy-signature>
</template>
```

## 自定义笔锋参数
- 通过`pressure`开启笔锋模式，模拟真实书写效果。笔锋模式下笔画粗细会随书写速度变化。
- `min-width`：最小笔画宽度，快速书写时的线条粗细
- `max-width`：最大笔画宽度，慢速书写时的线条粗细
- `min-speed`：速度阈值，用于调整压感灵敏度
```html
<template>
    <hy-signature pressure :min-width="1" :max-width="6" :min-speed="1.5"></hy-signature>
</template>
```

## 自定义按钮
- 通过`footer`插槽自定义底部按钮。
```html
<template>
    <hy-signature enableHistory>
        <template #footer="{ clear, confirm, currentStep, restore, revoke, historyList }">
            <hy-button block @click="changeDisabled" v-if="disabled">开始签名</hy-button>
            <block v-if="!disabled">
                <hy-button size="small" plain @click="revoke" :disabled="currentStep <= 0">撤回</hy-button>
                <hy-button size="small" plain @click="restore" :disabled="currentStep >= historyList.length">恢复</hy-button>
                <hy-button size="small" plain @click="clear">清除</hy-button>
                <hy-button size="small" @click="confirm">确定</hy-button>
            </block>
        </template>
    </hy-signature>
</template>
```

## 横屏签名页面
可以通过配置页面的 `pageOrientation` 来实现横屏签名页面
:::code-group
```vue [vue]
<template>
  <view class="landscape-signature">
    <hy-signature
      v-if="inited"
      :height="height"
      :width="width"
      enable-history
      pressure
      background-color="#f5f5f5"
      @confirm="handleConfirm"
    >
      <template #footer="{ clear, confirm, restore, revoke, canUndo, canRedo }">
        <view class="custom-actions">
          <view class="button-group">
            <hy-button size="small" plain @click="revoke" :disabled="!canUndo">撤回</hy-button>
            <hy-button size="small" plain @click="restore" :disabled="!canRedo">恢复</hy-button>
            <hy-button size="small" plain @click="clear">清除</hy-button>
            <hy-button size="small" type="primary" @click="confirm">完成</hy-button>
          </view>
        </view>
      </template>
    </hy-signature>
  </view>
</template>
```

```ts [.ts]
import { sleep } from 'hy-app'

const height = ref(0)
const width = ref(0)
const inited = ref(false)

onMounted(() => {
  const { windowWidth, windowHeight } = uni.getSystemInfoSync();
  width.value = windowWidth - 48;
  height.value = windowHeight - 48;
  sleep(100).then(() => {
    inited.value = true
  })
})
```

```scss [.scss]
.landscape-signature {
  height: 100vh;
  // #ifdef H5
  height: calc(100vh - 44px);
  // #endif
  background: #fff;
  position: relative;
  padding: 24px 0;
  padding-left: 48px;
  box-sizing: border-box;

  .custom-actions {
    position: fixed;
    left: 0;
    top: 50%;
    width: 48px;
    transform: translateY(-50%) rotate(90deg);
    transform-origin: center;
    z-index: 10;

    .button-group {
      display: flex;
      flex-direction: row;
      gap: 12px;
      white-space: nowrap;
      width: max-content;
      transform: translateX(-50%);
    }
  }
}
```
:::

## API

| 参数               | 说明          | 类型        | 默认值     |
|------------------|-------------|-----------|---------|
| pen-color        | 签名笔颜色       | `string`  | #000000 |
| line-width       | 签名笔宽度       | `number`  | 3       |
| height           | 画布的高度       | `number`  | 200     |
| width            | 画布的宽度       | `number`  | 300     |
| clear-text       | 清空按钮的文本     | `string`  | -       |
| confirm-text     | 确认按钮的文本     | `string`  | -       |
| file-type        | 导出图片类型      | `string`  | png     |
| quality          | 导出图片质量(0-1) | `number`  | 1       |
| export-scale     | 导出图片的缩放比例   | `number`  | 1       |
| disabled         | 是否禁用签名板     | `boolean` | false   |
| background-color | 画板的背景色      | `string`  | -       |
| disable-scroll   | 是否禁用画布滚动    | `boolean` | true    |
| enable-history   | 是否开启历史记录    | `boolean` | false   |
| step             | 历史记录步长      | `number`  | 1       |
| pressure         | 是否启用笔锋模式    | `boolean` | false   |
| min-width        | 笔锋模式最小宽度    | `number`  | 2       |
| max-width        | 笔锋模式最大宽度    | `number`  | 6       |
| min-speed        | 笔锋模式速度阈值    | `number`  | 1.5     |

## Events

| 事件名     | 说明      | 回调参数                    |
|---------|---------|-------------------------|
| start   | 开始签名时触发 | event: TouchEvent       |
| end     | 结束签名时触发 | event: TouchEvent       |
| signing | 签名过程中触发 | event: TouchEvent       |
| confirm | 确认签名时触发 | result: SignatureResult |
| clear   | 清空签名时触发 | -                       |

## Methods
| 事件名     | 说明     | 参数                    |
|---------|--------|-----------------------|
| init    | 初始化签名板 | forceUpdate?: boolean |
| confirm | 确认签名   | -                     |
| clear   | 清空签名   | -                     |
| restore | 恢复上一步  | -                     |
| revoke  | 撤销上一步  | -                     |

## Slots

| 插槽名    | 说明      | 接收值                                                       |
|--------|---------|-----------------------------------------------------------|
| footer | 自定义底部按钮 | clear, confirm, restore, revoke, currentStep, historyList |

<demo-model url="pages/components/signature/signature"></demo-model>