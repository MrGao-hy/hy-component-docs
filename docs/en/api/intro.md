# Introduction

::: info Introduction

The opening remarks This component library encapsulates commonly used functions in business development, providing developers with a convenient and efficient development experience. Through highly encapsulated components and methods, developers can quickly implement complex business logic, reduce the writing of repetitive code, and thereby improve development efficiency. Whether it is data processing, form validation, or user interaction, this component library can meet a variety of development needs, helping developers to focus on the implementation of core business logic and accelerate project delivery.

:::

This method is one of the features provided by the Huayue framework and needs to be called through JavaScript rather than as a component. The calling method is as follows:

- If you are in a JavaScript file, you need to call it using the import statement, such as calling the time formatting `formatTime` method:

```ts
import { formatTime } from '@hy-app/ui';
console.log(formatTime(new Date())); // Current time
```

If you are using it within an element, as follows:

```html
<template>
    <view>Current time: {{formatTime(newDate)}} Global method mount: {{$hy.formatTime(newDate)}}</view>
</template>

<script setup lang="ts">
    import { formatTime } from '@hy-app/ui';
    const newDate = new Date();
</script>
```