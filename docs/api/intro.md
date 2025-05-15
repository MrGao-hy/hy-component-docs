# 介绍

::: tip 开场白
该组件库封装了业务开发中常用的功能，为开发者提供了便捷高效的开发体验。通过高度封装的组件和方法，开发者可以快速实现复杂的业务逻辑，减少重复代码的编写，从而提高开发效率。无论是数据处理、表单验证，还是用户交互，该组件库都能满足多种开发需求，助力开发者专注于核心业务逻辑的实现，加速项目交付。
:::

此方法是华玥框架提供的功能之一，需要通过 JavaScript 调用，而不是以组件的形式使用。调用方式如下：  
- 如果是在js中，需要通过import形式调用，如调用时间格式化的`formatTime`方法：
```ts
import { formatTime } from 'hy-app';
console.log(formatTime(new Date())); // 当前时间
```

如果是在元素中，如下：
```html
<template>
	<view>
		当前时间：{{formatTime(newDate)}}
        挂载全局方法：{{$hy.formatTime(newDate)}}
	</view>
</template>

<script setup lang="ts">
	import { formatTime } from 'hy-app';
    const newDate = new Date();
	
</script>
```