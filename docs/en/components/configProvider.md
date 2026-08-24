# ConfigProvider Global Configuration

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## Dark Mode

Set the `theme` attribute of the `ConfigProvider` component to `dark` to enable dark mode. Dark mode takes effect globally, turning all Huayue components on the page to a dark style.

::: tip Tip

Note that enabling dark mode for Huayue components only affects the UI of Huayue components, and does not affect the global text color or background color. You can refer to the following CSS to set some global styles:

```vue
.hy-theme--dark body { color: #f5f5f5; background-color: #000000; }
```

:::

### Enabling Dark Mode

```vue
<template>
    <hy-config-provider theme="dark">
        <!-- App content -->
    </hy-config-provider>
</template>
```

### Dynamically Switching Themes

```vue
<template>
    <hy-config-provider :theme="currentTheme">
        <hy-button @click="toggleTheme">
            {{ currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}
        </hy-button>
    </hy-config-provider>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const currentTheme = ref<'light' | 'dark'>('light');

    const toggleTheme = () => {
        currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
    };
</script>
```

---

## Theme Customization

Huayue components organize styles through a rich set of CSS variables. By overriding these CSS variables, you can achieve effects such as theme customization and dynamic theme switching.

::: tip Tip

`hy-config-provider` must be placed in the root directory and then imported into each page.

:::

### Configuring Theme Colors

Quickly configure theme colors via the `themeColor` and `themeLightColor` attributes:

```vue
<template>
    <hy-config-provider themeColor="#2979ff" themeLightColor="#ecf5ff">
        <!-- App content -->
    </hy-config-provider>
</template>
```

### Custom Style Variables

Pass custom CSS variables via the `customStyle` attribute for more flexible theme customization:

```vue
<template>
    <hy-config-provider :custom-style="customStyle">
        <!-- App content -->
    </hy-config-provider>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';

    const customStyle = ref<Record<string, string>>({});

    onMounted(() => {
        // Dynamically set the theme based on business scenarios
        const theme = 'jindong'; // Can be fetched from the backend or local storage

        switch (theme) {
            case 'jindong':
                customStyle.value = {
                    '--hy-text-color': '#000000',
                    '--hy-primary-color': '#e53935',
                };
                break;
            case 'ali':
                customStyle.value = {
                    '--hy-text-color': '#ff4400',
                    '--hy-primary-color': '#ff4400',
                };
                break;
            default:
                customStyle.value = {
                    '--hy-text-color': '#1890ff',
                    '--hy-primary-color': '#1890ff',
                };
        }
    });
</script>
```

### Overriding Variables via CSS

The default values of these variables are defined on the `page` node (in the H5 environment, they are defined on the `:root` node), and can be overridden directly via CSS:

```scss
/* Default theme (theme not configured) */
page {
    --hy-text-color: #000000;
    --hy-background: #f8f8f8;
}

/* Light theme */
page .hy-theme--light {
    --hy-text-color: #000000;
    --hy-background: #f8f8f8;
}

/* Dark theme */
page .hy-theme--dark {
    --hy-text-color: #ffffff;
    --hy-background: #1b1b1f;
}
```

---

## Height Configuration

The `hy-config-provider` component sets a fixed height by default to adapt to the safe areas of different devices. However, this setting may prevent the page scroll event `onPageScroll` from triggering.

### Default Height Calculation

The component's built-in height calculation logic automatically adapts to the top status bar and bottom safe area:

```scss
.hy-config-provider {
    /* Base height: viewport height - top status bar height */
    height: calc(100vh - var(--window-top));
    /* Compatible with safe areas on older iOS versions (constant is being deprecated) */
    height: calc(100vh - var(--window-top) - constant(safe-area-inset-bottom));
    /* Compatible with safe areas on newer iOS versions */
    height: calc(100vh - var(--window-top) - env(safe-area-inset-bottom));
}
```

### Custom Height

Customize the component height via the `height` attribute:

```vue
<!-- Fixed height -->
<hy-config-provider height="800px">...</hy-config-provider>

<!-- Percentage height -->
<hy-config-provider height="90%">...</hy-config-provider>

<!-- Auto height (fixes the onPageScroll not triggering issue) -->
<hy-config-provider height="auto">...</hy-config-provider>
```

### Solving Scroll Event Issues

Since the component's default fixed height restricts the page scroll area, the `onPageScroll` scroll event cannot be triggered. To restore the scroll event, simply set the height to `auto`:

```vue
<template>
    <hy-config-provider height="auto">
        <!-- App content -->
    </hy-config-provider>
</template>
```

---

## API

| Parameter   | Description                                    | Type               | Default |
| ----------- | ---------------------------------------------- | ------------------ | ------- |
| theme       | Theme, dark or default light                   | `dark`\|`light`    | -       |
| themeColor  | Theme color                                    | `string`           | -       |
| height      | Page height, default unit is px for numbers    | `string`\|`number` | -       |
| padding     | Inner padding, default unit is px for numbers  | `string`\|`number` | -       |
| customStyle | Custom external styles to be used              | `CSSProperties`    | -       |
| customClass | Custom external class name                     | `string`           | -       |

<demo-model url="pages-design/configProvider/configProvider"></demo-model>