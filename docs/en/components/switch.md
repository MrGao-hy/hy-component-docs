# Switch Toggle Selector Component

> The switch selector is used for toggling between the on and off states.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Examples

```html
<!-- Global usage -->
<hy-switch v-model="value" @change="change"></hy-switch>
```

```ts
import { ref } from 'vue';

const value = ref(false);
const change = (e) => {
    console.log('change', e);
};
```

### Loading

```html
<template>
    <hy-switch v-model="value" loading></hy-switch>
</template>
<script setup>
    import { ref } from 'vue';

    const value = ref(false);
</script>
```

### Loading

Set the `loading` attribute (default is `true`) to put the `switch` into a loading state; in this state the `switch` cannot be operated. You can dynamically set the loading state via `:loading='loading'`

```html
<template>
    <hy-switch v-model="value" loading></hy-switch>
</template>
<script setup>
    import { ref } from 'vue';

    const value = ref(true);
</script>
```

### Disable Switch

Set the `disabled` attribute (default is `true`) to disable the component so that users cannot click it. There are two disabled states:

- First, disabled while off: in this case only a white area is displayed.
- Second, disabled after being turned on: in this case an `opacity` transparency is applied over the original color, but the switch still cannot be operated.

```html
<template>
    <hy-switch v-model="value" disabled></hy-switch>
</template>
<script setup>
    import { ref } from 'vue';

    const value = ref(false);
</script>
```

### Custom Size

- Set the switch size by setting `size` to a number or to `small`, `medium`, or `large`
    - `small`: small switch
    - `medium`: medium switch
    - `large`: large switch
    - `number`: number

```html
<template>
    <hy-switch v-model="value" size="small"></hy-switch>
    <hy-switch v-model="value" size="medium"></hy-switch>
    <hy-switch v-model="value" size="large"></hy-switch>
    <hy-switch v-model="value" :size="28"></hy-switch>
</template>
<script setup>
    import { ref } from 'vue';

    const value = ref(true);
</script>
```

### Custom Color

```html
<template>
    <hy-switch v-model="value" activeColor="#f56c6c"></hy-switch>
    <hy-switch v-model="value" activeColor="red"></hy-switch>
    <hy-switch v-model="value" activeColor="#rgb(0,0,0)"></hy-switch>
</template>
<script setup>
    import { ref } from 'vue';

    const value = ref(true);
</script>
```

### Custom Icon

```html
<template>
    <hy-switch
        v-model="value"
        icon-color="red"
        :active-icon="IconConfig.SUCCESS"
        :inactive-icon="IconConfig.CLOSE"
    ></hy-switch>
    <!-- Use your own vector icon library -->
    <hy-switch
        v-model="value"
        icon-color="red"
        :active-icon="open"
        :inactive-icon="close"
        :icon="{ customPrefix: 'icon' }"
    ></hy-switch>
</template>
<script setup>
    import { ref } from 'vue';
    import { IconConfig } from '@hy-app/ui';

    const value = ref(true);
</script>
```

### Custom Slot

```html
<template>
    <hy-switch v-model="value">
        <view style="font-size: 16rpx">Disabled</view>
    </hy-switch>
</template>
<script setup>
    import { ref } from 'vue';

    const value = ref(true);
</script>
```

### Asynchronous Control

Asynchronous control scenarios typically occur when the user turns the selector on or off, and a local or backend request is needed to determine whether the user is allowed to turn it on or off. You can also use them in combination, for example adding the `disabled` or `loading` attributes based on the API result

::: warning Note

Please add the `asyncChange` attribute to support asynchronous control; otherwise, the value bound to `v-model` will be updated first and you will lose control

:::

```html
<template>
    <hy-switch v-model="value" asyncChange @change="asyncChange"></hy-switch>
</template>
<script setup>
    import { ref } from 'vue';

    const value = ref(false);
    const asyncChange = (e) => {
        uni.showModal({
            content: e ? 'Are you sure you want to turn it on?' : 'Are you sure you want to turn it off?',
            success: (res) => {
                if (res.confirm) {
                    value.value = e;
                }
            },
        });
    };
</script>
```

## API

### Switch Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Value bound via v-model (two-way) | `boolean`\|`string`\|`number` | false |
| loading | Whether it is in a loading state | `boolean` | false |
| disabled | Whether to disable | `boolean` | false |
| size | Switch size, in rpx | `small`\|`medium`\|`large`\| `string`\|`number` | medium |
| activeColor | Background color when on | `string` | - |
| inactiveColor | Background color when off | `string` | - |
| activeValue | Value of the switch when on | `boolean`\|`string`\|`number` | true |
| inactiveValue | Value of the switch when off | `boolean`\|`string`\|`number` | false |
| activeIcon | Icon shown when the selector is on | `string` | - |
| inactiveIcon | Icon shown when the selector is off | `string` | - |
| icon | Icon API collection, see [Icon API](./icon#api) for details | `HyIconProps` | - |
| asyncChange | Whether to enable asynchronous change; when enabled, the input value must be controlled manually | `boolean` | false |
| space | Distance between the dot and the outer border | `string`\|`number` | 0 |
| customStyle | Custom style | `CSSProperties` | - |

### Events

| Event Name | Description                     | Callback Parameters                                              |
| ------ | ------------------------ | ----------------------------------------------------- |
| change | Triggered when the switch is turned on or off | value: the activeValue when on, the inactiveValue when off |

### Slots

| Slot Name  | Description     | Accepted Value |
| ------- | -------- | ------ |
| default | Default slot | -      |

### CSS Variables

| Variable Name | Description | Default |
| --- | --- | --- |
| `--hy-switch-border-color` | Border color | `rgba(0, 0, 0, 0.12)` |
| `--hy-switch-node-box-shadow` | Dot shadow | `1px 1px 1px 0 rgba(0, 0, 0, 0.25)` |
| `--hy-switch-disabled-opacity` | Disabled opacity | `0.6` |
| `--hy-switch-radius` | Overall border radius of the switch | Follows `--hy-radius-semicircle` (100px) |

<demo-model url="pages-design/switch/switch"></demo-model>