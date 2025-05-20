# NumberBox 步进器组件
> 该组件一般用于商城购物选择物品数量的场景

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [numberBox组件](https://uiadmin.net/uview-plus/components/numberBox.html) 的代码实现。
:::

::: danger 注意
注意：该输入框只能输入大于或等于0的整数
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|-----|----|-------|
| ✔   | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-number-step  v-model="value"></hy-number-step>
<!-- 单个组件引入 -->
<HyNumberStep  v-model="value"></HyNumberStep>
```
```ts
import { HyNumberStep } from "hy-app"
import { vue } from "vue";

const value = ref(12);
```

## 步长设置
- 通过`step`属性设置每次点击增加或减少按钮时变化的值，默认为1，下面示例每次都会加2或者减2
```html
<template>
    <hy-number-step v-model="value" :step="2"></hy-number-step>
</template>
```

## 限制输入范围
- `min`-最小值
- `max`-最大值
```html
<template>
    <hy-number-step v-model="value" :min="1" :max="100"></hy-number-step>
</template>
```

## 限制只能输入整数
- 通过`integer`限制输入类型
```html
<template>
    <hy-number-step v-model="value" integer></hy-number-step>
</template>
```

## 禁用
- 通过`disabled`禁用步进器，禁用状态下无法点击加减按钮或修改输入框的值
- 通过`disabledInput`禁用输入框
- 通过`disablePlus`禁用增加按钮
- 通过`disableMinus`禁用减少按钮
- 通过`longPress`禁用长按事件
```html
<!-- 通过设置`disabled`参数来禁用输入框，禁用状态下无法点击加减按钮或修改输入框的值 -->
<hy-number-step :disabled="true"></hy-number-step>

<!-- 禁用输入框 -->
<hy-number-step :disabledInput="true"></hy-number-step>

<!-- 禁用增加按钮 -->
<hy-number-step :disablePlus="true"></hy-number-step>

<!-- 禁用减少按钮 -->
<hy-number-step :disableMinus="true"></hy-number-step>

<!-- 禁用长按 -->
<hy-number-step :longPress="false"></hy-number-step>
```

## 颜色和大小
- 通过`button-size`参数设置按钮大小
- 通过`icon-style`参数设置加减按钮图标的样式
```html
<template>
    <hy-number-step 
            v-model="value"
            button-size="36"
            color="#ffffff"
            bgColor="#2979ff"
            iconStyle="color: #fff"
    ></hy-number-step>
</template>
```

## 自定义插槽
::: code-group
```html [vue]
<template>
    <hy-number-step v-model="value">
        <template #minus>
            <view
                class="minus"
            >
                <up-icon
                    name="minus"
                    size="12"
                ></up-icon>
            </view>
        </template>
        <template #input>
            <text
                style="width: 50px;text-align: center;"
                class="input"
            >{{value}}</text>
        </template>
        <template #plus>
            <view
                class="plus"
            >
                <up-icon
                    name="plus"
                    color="#FFFFFF"
                    size="12"
                ></up-icon>
            </view>
        </template>
    </hy-number-step>
</template>
```

```ts [index.ts]
import { ref } from 'vue';

// 创建响应式数据  
const value = ref(1);

```

```scss [index.scss]
.minus {
  width: 22px;
  height: 22px;
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input {
  padding: 0 10px;
}

.plus {
  width: 22px;
  height: 22px;
  background-color: #ff0000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
```
:::

## API

| 参数            | 说明                              | 类型                 | 默认值                     |
|---------------|---------------------------------|--------------------|-------------------------|
| v-model       | 用于双向绑定的值，初始化时设置设为默认min值(最小值)    | `boolean`          | -                       |
| min           | 用户可输入的最小值                       | `number`           | 1                       |
| max           | 用户可输入的最大值                       | `number`           | Number.MAX_SAFE_INTEGER |
| step          | 步长，每次加或减的值， 支持小数值，如需小数          | `number`           | 1                       |
| integer       | 是否只能输入正整数                       | `boolean`          | false                   |
| disabled      | 是否禁用操作，包括输入框，加减按钮               | `boolean`          | false                   |
| disabledInput | 是否禁止输入框                         | `boolean`          | false                   |
| asyncChange   | 是否开启异步变更，开启后需要手动控制输入值           | `boolean`          | false                   |
| inputWidth    | 输入框宽度，单位px                      | `string`\|`number` | 35                      | -   |
| showMinus     | 是否显示减少按钮                        | `boolean`          | true                    |
| showPlus      | 是否显示增加按钮                        | `boolean`          | true                    |
| decimalLength | 显示的小数位数                         | `string`\|`number` | -                       |
| longPress     | 是否允许长按进行加减                      | `boolean`          | true                    |
| color         | 输入框文字和加减按钮图标的颜色                 | `string`           | #323233                 |
| buttonWidth   | 按钮宽度，单位px                       | `string`\|`number` | 30                      |
| buttonSize    | 按钮高度，单位px，输入框高度和此值保持一致          | `string`\|`number` | 30                      |
| buttonRadius  | 按钮圆角                            | `string`\|`number` | 2px                     |
| bgColor       | 输入框和按钮的背景颜色                     | `string`           | #EBECEE                 |
| inputBgColor  | 输入框独立背景颜色                       | `string`           | #EBECEE                 |
| cursorSpacing | 指定光标于键盘的距离，避免键盘遮挡输入框，单位px       | `string`\|`number` | 100                     |
| disablePlus   | 是否禁用增加按钮                        | `boolean`          | false                   |
| disableMinus  | 是否禁用减少按钮                        | `boolean`          | false                   |
| minusIcon     | 减号按钮图标属性集合，详见[图标Api](./icon#api) | `HyIconProps`    | -                       |
| plusIcon     | 加号按钮图标属性集合，详见[图标Api](./icon#api)                     | `HyIconProps`    | -                       |
| miniMode      | 迷你模式常用于外卖，值为0时只显示+号按钮           | `boolean`          | false                   |
| customStyle   | 定义需要用到的外部样式                     | `CSSProperties`    | -                       |

## Events

| 事件名       | 说明           | 回调参数                  |
|-----------|--------------|-----------------------|
| focus     | 输入框得到焦点触发    | value: 数值             |
| blur      | 输入框失去焦点时触发   | value: 数值             |
| change    | 输入框内容发生变化时触发 | value: 数值             |
| overLimit | 超过范围阈值时触发    | type: `minus`\|`plus` |
| plus      | 点击增加按钮       | value: 数值             |
| minus     | 点击减少按钮       | value: 数值             |

## Slots

| 插槽名   | 说明   | 接收值    |
|-------|------|--------|
| minus | 减少按钮 | -      |
| input | 输入框  | record |
| plus  | 增加按钮 | -      |

<demo-model url="pages/components/numberBox/numberBox"></demo-model>