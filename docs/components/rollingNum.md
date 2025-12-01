# RollingNum 滚动数字组件
> 滚动数字组件，用于实现数字从初始值（全0）平滑滚动到目标值的动画效果。当数字变化时，会先显示与目标值长度相同的全0字符串，然后通过平滑的滚动动画过渡到目标值。

## 平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## 特性

- ✅ 支持自定义数字大小、颜色、字体粗细
- ✅ 支持设置滚动方向（向上、向下、交替）
- ✅ 支持设置动画持续时间和延迟步进
- ✅ 自动根据目标值长度生成对应长度的初始值（全0）
- ✅ 支持特殊字符（非数字字符会直接显示，不会参与滚动）

## 基本使用示例

```vue
<template>
  <view class="demo">
    <hy-rolling-num :value="num" :size="'48rpx'" :color="'#1989fa'" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 初始值为0，当更新为234564时，会先显示000000然后滚动到234564
const num = ref(234564);
</script>
```

## 自定义配置

```vue
<hy-rolling-num 
  :value="num" 
  :size="'36rpx'" 
  :color="'#ff6b6b'"
  :font-weight="'bold'"
  :duration="2"
  :scroll-direction="'down'"
  :stop-order="'right-to-left'"
  :delay-step="0.15"
/>
```

## 自定义样式
:::code-group
```vue [模板]
<template>
  <hy-rolling-num
      :value="val5"
      size="60rpx"
      height="120rpx"
      color="#fff"
      custom-class="myClass"
  />
</template>
```

```scss [样式]
:deep(.myClass) {
  display: grid;
  gap: 10px;
  .hy-rolling-num__column {
    background: #007aff;
    width: 90rpx;
    border-radius: 10rpx;
  }
}
```
:::

## 改变数字长度

```vue
<template>
  <view>
    <button @click="changeValue(234)">显示 234</button>
    <button @click="changeValue(987654321)">显示 987654321</button>
    <hy-rolling-num :value="displayValue" />
    <!-- 点击第一个按钮：显示 000 -> 234 -->
    <!-- 点击第二个按钮：显示 000000000 -> 987654321 -->
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const displayValue = ref(0);

const changeValue = (val: number) => {
  displayValue.value = val;
};
</script>
```

## 常见问题

### Q: 为什么数字变化时会先显示全0？
A: 这是组件的设计特性，用于实现从初始状态到目标状态的滚动动画效果，增强视觉体验。

### Q: 如何调整滚动速度？
A: 通过调整 `duration` 属性可以控制整个滚动动画的持续时间，数值越小，滚动越快。

### Q: 特殊字符会如何显示？
A: 非数字字符（如小数点、货币符号等）会直接显示，不会参与滚动动画。

## Props

| 参数              | 说明               | 类型                 | 默认值      |
|-----------------|------------------|--------------------|----------|
| value           | 要显示的数字或字符串值      | `string`\|`number` | 0        |
| size            | 数字字体大小           | `string`\|`number` | '32rpx'  |
| color           | 数字颜色             | `string`           | '#333'   |
| fontWeight      | 字体粗细             | `string`\|`number` | 'normal' |
| height          | 单个数字的高度          | `string`\|`number` | '40rpx'  |
| duration        | 滚动动画持续时间（秒）      | `number`           | 1.5      |
| letterSpacing   | 数字间距             | `string`\|`number` | 0        |
| scrollDirection | 滚动方向：向上、向下或交替    | `string`           | 'up'     |
| stopOrder       | 滚动停止顺序：从左到右或从右到左 | `string`           | 'ltr'    |
| delayStep       | 每个数字滚动的延迟时间间隔（秒） | `number`           | 0.1      |
| customStyle     | 定义需要用到的外部样式      | `CSSProperties`    | -        |
| customClass     | 自定义外部类名          | `string`           | -        |

<demo-model url="pages/components/rollingNum/rollingNum"></demo-model>