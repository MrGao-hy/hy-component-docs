# Rate Component

> This component is generally used for satisfaction surveys and star rating scenarios.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-rate v-model="value"></hy-rate>
```

```ts
import { ref } from 'vue';

const value = ref(2);
```

### Custom Styles

- Use `active-color` to set the color of the selected stars
- Use `inactive-color` to set the color of the unselected stars
- Use `gutter` to set the spacing between stars; the left and right padding each take up half of the gutter

```html
<hy-rate active-color="#FA3534" inactive-color="#b2b2b2" gutter="20"></hy-rate>
```

### Custom Icons

- Use `active-icon` to set the active icon
- Use `inactive-icon` to set the inactive icon

```html
<!-- Custom icon -->
<hy-rate :activeIcon="IconConfig.CHECK_MASK" :inactiveIcon="IconConfig.CHECK_MASK"></hy-rate>
<!-- Image URL -->
<hy-rate
    activeIcon="https://pic1.imgdb.cn/item/67d6820788c538a9b5bf333a.png"
    inactiveIcon="https://pic1.imgdb.cn/item/67d6820788c538a9b5bf333b.png"
></hy-rate>
```

```javascript
import { IconConfig } from '@hy-app/ui';
```

### Maximum Rating

```html
<hy-rate :count="10"></hy-rate>
```

### Minimum Selectable Count

```html
<hy-rate :minCount="5"></hy-rate>
```

### Allow Half Stars

```html
<hy-rate :value="2.5" allowHalf></hy-rate>
```

### Disabled State

```html
<hy-rate :value="2" disabled></hy-rate>
```

### Readonly State

```html
<hy-rate :value="2" readonly></hy-rate>
```

## API

### Rate Props

| Parameter     | Description                                  | Type               | Default   |
| ------------- | -------------------------------------------- | ------------------ | --------- |
| v-model       | Two-way binding for the number of selected stars | `number`           | 1         |
| count         | Maximum number of selectable stars           | `number`           | 5         |
| disabled      | Whether user interaction is disabled         | `boolean`          | false     |
| readonly      | Whether it is readonly                       | `boolean`          | false     |
| size          | Size of the stars, in rpx                    | `number`\|`string` | 18        |
| inactiveColor | Color of unselected stars                    | `string`           | #b2b2b2   |
| activeColor   | Color of selected stars                      | `string`           | #FFF00D   |
| gutter        | Distance between stars                       | `number`           | 4         |
| minCount      | Minimum number of selected stars             | `number`           | 1         |
| allowHalf     | Whether half-star selection is allowed       | `boolean`          | false     |
| activeIcon    | Icon name when selected                      | `string`           | STAR_FILL |
| inactiveIcon  | Icon name when unselected                    | `string`           | STAR      |
| touchable     | Whether the rating can be selected via swipe gesture | `boolean`    | true      |
| customStyle   | Custom style                                 | `CSSProperties`    | -         |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| change | Triggered when the selected star changes | value: the current number of selected stars. If using v-model for two-way binding, there is no need to listen to this event |

<demo-model url="pages-design/rate/rate"></demo-model>