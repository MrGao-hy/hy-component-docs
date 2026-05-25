# ConfigProvider 全局配置

::: tip 温馨提示
本项目参考了 Wot-UI 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。<br>
感谢 Wot-UI 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考Wot-UI的 [watermark组件](https://wot-ui.cn/component/config-provider.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## 深色模式

将 `ConfigProvider` 组件的 `theme` 属性设置为 `dark`，即可开启深色模式。深色模式会全局生效，使页面上的所有华玥组件变为深色风格。

::: tip 提示
值得注意的是，开启华玥组件的深色模式只会影响华玥组件的 UI，并不会影响全局的文字颜色或背景颜色，你可以参考以下 CSS 来设置一些全局样式：
```vue
.hy-theme--dark body {
  color: #f5f5f5;
  background-color: #000000;
}
```
:::

### 开启深色模式

```vue
<template>
  <hy-config-provider theme="dark">
    <!-- 应用内容 -->
  </hy-config-provider>
</template>
```

### 动态切换主题

```vue
<template>
  <hy-config-provider :theme="currentTheme">
    <hy-button @click="toggleTheme">
      {{ currentTheme === 'dark' ? '切换浅色模式' : '切换深色模式' }}
    </hy-button>
  </hy-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentTheme = ref<'light' | 'dark'>('light')

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
}
</script>
```

---

## 定制主题

华玥组件通过丰富的 CSS 变量来组织样式，通过覆盖这些 CSS 变量，可以实现定制主题、动态切换主题等效果。

::: tip 提示
`hy-config-provider` 必须放置在根目录下，然后每个页面导入。
:::

### 配置主题色

通过 `themeColor` 和 `themeLightColor` 属性快速配置主题色：

```vue
<template>
  <hy-config-provider themeColor="#2979ff" themeLightColor="#ecf5ff">
    <!-- 应用内容 -->
  </hy-config-provider>
</template>
```

### 自定义样式变量

通过 `customStyle` 属性传入自定义的 CSS 变量，实现更灵活的主题定制：

```vue
<template>
  <hy-config-provider :custom-style="customStyle">
    <!-- 应用内容 -->
  </hy-config-provider>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const customStyle = ref<Record<string, string>>({})

onMounted(() => {
  // 根据业务场景动态设置主题
  const theme = 'jindong' // 可从后端或本地存储获取
  
  switch (theme) {
    case 'jindong':
      customStyle.value = {
        '--hy-text-color': '#000000',
        '--hy-primary-color': '#e53935'
      }
      break
    case 'ali':
      customStyle.value = {
        '--hy-text-color': '#ff4400',
        '--hy-primary-color': '#ff4400'
      }
      break
    default:
      customStyle.value = {
        '--hy-text-color': '#1890ff',
        '--hy-primary-color': '#1890ff'
      }
  }
})
</script>
```

### 通过 CSS 覆盖变量

这些变量的默认值定义在 `page` 节点上（H5 环境定义在 `:root` 节点上），可以直接通过 CSS 进行覆盖：

```scss
/* 默认主题（未配置 theme） */
page {
  --hy-text-color: #000000;
  --hy-background: #f8f8f8;
}

/* 亮色主题 */
page .hy-theme--light {
  --hy-text-color: #000000;
  --hy-background: #f8f8f8;
}

/* 暗色主题 */
page .hy-theme--dark {
  --hy-text-color: #ffffff;
  --hy-background: #1b1b1f;
}
```

---

## 高度配置

`hy-config-provider` 组件默认会设置固定高度，以适配不同设备的安全区域。但该设置可能导致页面滚动事件 `onPageScroll` 无法触发。

### 默认高度计算

组件内置的高度计算逻辑会自动适配顶部状态栏和底部安全区域：

```scss
.hy-config-provider {
  /* 基础高度：视口高度 - 顶部状态栏高度 */
  height: calc(100vh - var(--window-top));
  /* 兼容 iOS 旧版本安全区域（constant 已逐步废弃） */
  height: calc(100vh - var(--window-top) - constant(safe-area-inset-bottom));
  /* 兼容 iOS 新版本安全区域 */
  height: calc(100vh - var(--window-top) - env(safe-area-inset-bottom));
}
```

### 自定义高度

通过 `height` 属性自定义组件高度：

```vue
<!-- 固定高度 -->
<hy-config-provider height="800px">...</hy-config-provider>

<!-- 百分比高度 -->
<hy-config-provider height="90%">...</hy-config-provider>

<!-- 自适应高度（解决 onPageScroll 不触发问题） -->
<hy-config-provider height="auto">...</hy-config-provider>
```

### 解决滚动事件问题

由于组件默认的固定高度会限制页面滚动区域，导致 `onPageScroll` 滚动事件无法触发。如需恢复滚动事件，只需将高度设置为 `auto`：

```vue
<template>
  <hy-config-provider height="auto">
    <!-- 应用内容 -->
  </hy-config-provider>
</template>
```

---

## API

| 参数          | 说明           | 类型                 | 默认值 |
|-------------|--------------|--------------------|-----|
| theme       | 主题色，暗色或者默认白色 | `dark`\|`light`    | -   |
| themeColor  | 主题颜色         | `string`           | -   |
| height      | 页面高度         | `string`\|`number` | -   |
| padding     | 内边距          | `string`\|`number` | -   |
| customStyle | 自定义需要用到的外部样式 | `CSSProperties`    | -   |
| customClass | 自定义外部类名      | `string`           | -   |

<demo-model url="pages-design/configProvider/configProvider"></demo-model>