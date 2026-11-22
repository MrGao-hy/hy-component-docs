# ConfigProvider Global Configuration

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## Dark Mode

Set the `theme` prop of the `ConfigProvider` component to `dark` to enable dark mode. Dark mode takes effect globally, switching all Hy components on the page to a dark style.

::: tip Friendly Reminder

Note that enabling dark mode for Hy components only affects the UI of Hy components; it does not affect global text color or background color. You can refer to the following CSS to set up some global styles:

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

Hy components organize their styles through a rich set of CSS variables. By overriding these CSS variables, you can achieve custom themes, dynamic theme switching, and other effects.

::: tip Friendly Reminder

`hy-config-provider` must be placed in the root directory and then imported into each page.

:::

### Configuring the Theme Color

Quickly configure the theme color using the `themeColor` and `themeLightColor` props:

```vue
<template>
    <hy-config-provider themeColor="#2979ff" themeLightColor="#ecf5ff">
        <!-- App content -->
    </hy-config-provider>
</template>
```

### Custom Style Variables

Pass custom CSS variables through the `customStyle` prop for more flexible theme customization:

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
        // Dynamically set the theme based on the business scenario
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

The default values of these variables are defined on the `page` node (on the `:root` node in the H5 environment) and can be overridden directly via CSS:

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

The `hy-config-provider` component sets a fixed height by default to accommodate the safe areas of different devices. However, this setting may cause the page scroll event `onPageScroll` to fail to trigger.

### Default Height Calculation

The component's built-in height calculation logic automatically adapts to the top status bar and the bottom safe area:

```scss
.hy-config-provider {
    /* Base height: viewport height - top status bar height */
    height: calc(100vh - var(--window-top));
    /* Compatible with older iOS safe areas (constant is gradually being deprecated) */
    height: calc(100vh - var(--window-top) - constant(safe-area-inset-bottom));
    /* Compatible with newer iOS safe areas */
    height: calc(100vh - var(--window-top) - env(safe-area-inset-bottom));
}
```

## API

| Prop        | Description                            | Type               | Default |
| ----------- | -------------------------------------- | ------------------ | ------- |
| theme       | Theme, dark or default white           | `dark`\|`light`    | -       |
| themeColor  | Theme color                            | `string`           | -       |
| padding     | Padding; number defaults to px         | `string`\|`number` | -       |
| customStyle | Custom external styles to be applied   | `CSSProperties`    | -       |
| customClass | Custom external class name             | `string`           | -       |

### ConfigProvider Slots

| Slot Name | Description                             | Accepted Value |
| --------- | --------------------------------------- | -------------- |
| default   | Default slot, used for custom content   | -              |

<demo-model url="pages-design/configProvider/configProvider"></demo-model>