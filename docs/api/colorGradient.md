## colorGradient 颜色渐变工具

> `colorGradient` 提供颜色渐变计算功能，可以计算两个颜色之间的等分渐变值。

- 支持 HEX 和 RGB 颜色格式
- 支持自定义渐变步数
- 返回渐变颜色数组

### API 文档

### colorGradient(startColor?, endColor?, step?)
- `startColor` 起始颜色
- `endColor` 结束颜色
- `step` 渐变步数

### 基础用法

```typescript
import { colorGradient } from '@hy-app/ui'

// 获取 10 步渐变色
const colors = colorGradient('#000000', '#ffffff', 10)
console.log(colors)
// ['#000000', '#1c1c1c', '#383838', ..., '#ffffff']
```

### 制作渐变背景

```vue
<template>
    <view class="gradient-bg" :style="gradientStyle"></view>
</template>

<script setup lang="ts">
import { colorGradient } from '@/package/libs/utils/colorGradient'

const colors = colorGradient('#2979ff', '#5ac725', 10)

const gradientStyle = {
    background: `linear-gradient(to right, ${colors.join(', ')})`
}
</script>
```

## hexToRgb(sColor, str?)
- `sColor` 起始颜色
- `str` 是否返回字符串，默认返回字符串

将 HEX 颜色转换为 RGB 格式。

### 基本用法

```typescript
import { hexToRgb } from '@hy-app/ui'

// HEX 转 RGB
const rgb = hexToRgb('#2979ff')
console.log(rgb) // 'rgb(41, 121, 255)'

const rgbArray = hexToRgb('#2979ff', false)
console.log(rgbArray) // [41, 121, 255]
```

## rgbToHex(rgb)

> 将 RGB 颜色转换为 HEX 格式。


### 颜色格式转换

```typescript
import { rgbToHex } from '@hy-app/ui'

// RGB 转 HEX
const hex = rgbToHex('rgb(41, 121, 255)')
console.log(hex) // '#2979ff'
```