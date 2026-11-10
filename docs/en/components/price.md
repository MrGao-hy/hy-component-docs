# Price Component

> A business component for displaying price amounts, supporting differentiated font sizes for digits before and after the decimal point, enhancing the visual effect and readability of amounts.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## Component Features

- **Differentiated Display**: Automatically distinguishes digit sizes before and after the decimal point, enhancing visual hierarchy
- **Flexible Configuration**: Supports custom color, size, weight, slant, and other style properties
- **Multi-unit Support**: Customizable currency symbol to adapt to different currency needs
- **Formatting Control**: Supports setting the number of decimal places for precise control over amount display
- **Responsive Design**: Adapts to multiple platforms while maintaining consistent visual effects

## :japanese_castle: Basic Usage Example

::: code-group

```vue [Template]
<!-- Global usage -->
<hy-price :text="price"></hy-price>
```

```ts [Script]
const price = 10;
```

:::

### Set Color

::: code-group

```vue [Template]
<hy-price :text="price" color="#9CC53D"></hy-price>
```

```ts [Script]
import { HyPrice } from '@hy-app/ui';

const price = 10;
```

:::

### Set Size

::: code-group

```vue [Template]
<hy-price :text="price" :size="20"></hy-price>
```

```ts [Script]
import { HyPrice } from '@hy-app/ui';

const price = 10;
```

:::

### Keep Decimal Places

::: code-group

```vue [Template]
<hy-price :text="price" :num="6"></hy-price>
```

```ts [Script]
import { HyPrice } from '@hy-app/ui';

const price = 10;
```

:::

### Set Prefix Symbol

::: code-group

```vue [Template]
<hy-price :text="price" symbol="$"></hy-price>
```

```ts [Script]
import { HyPrice } from '@hy-app/ui';

const price = 10;
```

:::

### Set Weight

::: code-group

```vue [Template]
<hy-price :text="price" :weight="900"></hy-price>
```

```ts [Script]
import { HyPrice } from '@hy-app/ui';

const price = 10;
```

:::

### Set Slant

::: code-group

```vue [Template]
<hy-price :text="price" :slant="true"></hy-price>
```

```ts [Script]
import { HyPrice } from '@hy-app/ui';

const price = 10;
```

:::

### Set Ratio

::: code-group

```vue [Template]
<hy-price text="10.22" :ratio="1"></hy-price>
<hy-price text="10.22" :ratio="1.2"></hy-price>
<hy-price text="10.22"></hy-price>
<hy-price text="10.22" :ratio="1.6"></hy-price>
```

```ts [Script]
import { HyPrice } from 'hy-app';
```

:::

## API

### Price Props

| Parameter   | Description                                | Type                 | Default |
| ----------- | ------------------------------------------ | -------------------- | ------- |
| text        | Amount value                               | `string` \| `number` | 0.00    |
| symbol      | Currency symbol                            | `string`             | ￥      |
| ratio       | Ratio size                                 | `number`             | 1.4     |
| num         | Number of decimal places to keep           | `number`             | 2       |
| color       | Font color                                 | `string`             | #FE3232 |
| size        | Font size, numeric values default to px    | `string` \| `number` | 12      |
| weight      | Font weight                                | `number`             | 500     |
| slant       | Whether to slant                           | `boolean`            | false   |
| customStyle | Custom external styles to be applied       | `CSSProperties`      | -       |
| customClass | Custom external class name                 | `string`             | -       |

### Events

| Event Name | Description      | Callback Parameters |
| ---------- | ---------------- | ------------------- |
| click      | Click on amount  | text: amount value  |

### CSS Variables

| Variable Name           | Description | Default |
| ----------------------- | ----------- | ------- |
| `--hy-price-font-size`  | Font size   | `32rpx` |
| `--hy-price-margin-top` | Top margin  | `5px`   |

<demo-model url="pages-design/price/price"></demo-model>