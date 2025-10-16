## 问题一 微信小程序中，在子组件修改华玥组件样式不生效
::: tip 原因
主要是由于小程序的样式隔离机制导致的
:::
```ts
export default defineComponent({
  options: {
    styleIsolation: 'shared'
  }
});
```
```vue
<script setup lang="ts">
import { defineComponent } from 'vue'

// Vue 3.3+ 使用 defineOptions
defineOptions({
  options: {
    styleIsolation: 'shared'
  }
})
</script>
```

## :cactus: 问题二、 在小程序中，组件自定义custom-class不生效
