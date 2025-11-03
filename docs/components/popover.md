# Popover 气泡组件
> 常用于展示提示信息。

::: tip 温馨提示
本项目参考了 Wot-UI 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 Wot-UI 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考Wot-UI的 [popover组件](https://wot-design-uni.cn/component/popover.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## 基本使用示例
:::warning 注意
目前气泡容器是给的固定宽度，无法自适应宽度，因为自适应宽度无法超出父容器宽度
:::
```html
<!-- 全局使用 -->
<hy-popover content="我是提示信息">
    <hy-button type="primary" :stop="false">按钮</hy-button>
</hy-popover>
<!-- 单个组件引入 -->
<HyPopover content="我是提示信息">
    <HyButton type="primary" :stop="false">按钮</HyButton>
</HyPopover>
```
```ts
import { HyButton, HyPopover } from "hy-app"
```

## popover 的出现位置
- 通过设置`placement`来实现气泡位置
  - `top`气泡在上面中间位置
  - `top-start`气泡在上面左边位置
  - `top-end`气泡在上面右边位置
  - `bottom`气泡在底部中间位置
  - `bottom-start`气泡在底部左边位置
  - `bottom-end`气泡在底部右边位置
  - `left`气泡在左边中间位置
  - `left-start`气泡在左边上面位置
  - `left-end`气泡在左边下面位置
  - `right `气泡在右边中间位置
  - `right-start`气泡在右边上面位置
  - `right-end`气泡在右边下面位置
```html
<template>
    <hy-popover content="我是提示信息" placement="top">
        <hy-button type="primary" :stop="false">上面</hy-button>
    </hy-popover>
</template>
```

## 设置模式
:::tip 提示
普通模式的时候`content`必须设置为字符串，菜单模式时候`content`必须设置为数组形式
:::
- 通过设置`mode`为`normal`：普通模式
- 通过设置`mode`为`menu`：菜单模式
```html

<template>
    <hy-popover :content="menuList" mode="menu">
        <hy-button type="primary" :stop="false">菜单</hy-button>
    </hy-popover>
</template>

<script setup lang="ts">
    import {reactive} from "vue";
    import { IconConfig } from 'hy-app';

    const menuList = reactive([
        {
            iconClass: IconConfig.REMIND,
            content: '全部标记已读',
        },
        {
            iconClass: IconConfig.DELETE,
            content: '清空最近会话',
        },
        {
            iconClass: IconConfig.SETTING,
            content: '消息订阅设置',
        },
        {
            iconClass: IconConfig.NOTICE,
            content: '消息异常检测',
        }
    ])
</script>
```

## 气泡位置
- 通过设置`offset`来控制位置
```html
<template>
    <hy-popover content="我是提示信息" placement="top">
        <hy-button type="primary" :stop="false">上面</hy-button>
    </hy-popover>
</template>
```

## 插槽
::: warn 提示
在使用自定义插槽内容时候,需要给最外层元素加上`width`和`background`和`z-index`和`position`属性，
防止有角标样式问题
:::
```html
<template>
    <hy-popover>
      <template #content>
        <view class="pop-content">这是一段自定义样式的内容。</view>
      </template>
      <hy-button type="primary" :stop="false">上面</hy-button>
    </hy-popover>
</template>
```
```scss
.pop-content {
  /* 必填 开始 */
  width: 150px;
  background: #fff;
  z-index: 999;
  position: relative;
  /* 必填 结束 */
  color: #8268de;
  font-weight: bolder;
  padding: 10px;
  border-radius: 4px;
}
```

## 页面上关闭气泡弹窗
```html
<template>
    <view style="height: 800px; width: 300px" @tap="closeOutside">
      <hy-popover content="我是提示信息" placement="top">
        <hy-button type="primary" :stop="false">上面</hy-button>
      </hy-popover>
    </view>
</template>
```
```ts
import { useQueue } from 'hy-app';

const { closeOutside } = useQueue()
```

## API

| 参数        | 说明                | 类型                                                                                                                                                                 | 默认值    |
|-----------|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| v-model   | 手动状态是否可见          | `boolean`                                                                                                                                                          | false  |
| content   | 显示的内容             | `string` \| `Array`                                                                                                                                                | -      |
| mode      | 当前显示的模式，决定内容的展现形式 | `normal` \| `menu`                                                                                                                                                 | normal |
| placement | popover 的出现位置     | `top` \| `top-start` \| `top-end` \| `bottom` \| `bottom-start` \| `bottom-end` \| `left` \| `left-start` \| `left-end` \| `right` \| `right-start` \| `right-end` | bottom |
| disabled  | popover 是否可用      | `boolean`                                                                                                                                                          | false  |
| offset    | 出现位置的偏移量          | `number`                                                                                                                                                           | 0      |

## Methods

| 事件名   | 说明         | 回调参数 |
|-------|------------|------|
| open  | 打开文字提示弹框事件 | -    |
| close | 关闭文字提示弹框事件 | -    |

## Slots

| 插槽名     | 说明        | 接收值 |
|---------|-----------|-----|
| default | 默认插槽      | -   |
| content | 自定义气泡里面内容 | -   |

<demo-model url="pages/components/popover/popover"></demo-model>