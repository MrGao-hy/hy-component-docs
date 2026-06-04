# Rate 评分组件
> 该组件一般用于满意度调查，星型评分的场景。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-rate v-model="value"></hy-rate>
```
```ts
import { ref } from "vue";

const value = ref(2);
```

### 自定义样式
- 通过`active-color`设置选中的星星的颜色
- 通过`inactive-color`设置未选中时星星的颜色
- 通过`gutter`设置星星的间距，左右内边距各占gutter的一半
```html
<hy-rate active-color="#FA3534" inactive-color="#b2b2b2" gutter="20"></hy-rate>
```

### 自定义图标
- 通过`active-icon`设置激活的图标
- 通过`inactive-icon`设置未激活的图标
```html
<!-- icon自定义 -->
<hy-rate :activeIcon="IconConfig.CHECK_MASK" :inactiveIcon="IconConfig.CHECK_MASK"></hy-rate>
<!-- 图片地址 -->
<hy-rate activeIcon="https://pic1.imgdb.cn/item/67d6820788c538a9b5bf333a.png" inactiveIcon="https://pic1.imgdb.cn/item/67d6820788c538a9b5bf333b.png"></hy-rate>
```
```javascript
import { IconConfig } from "hy-app";
```

### 最多评分数
```html
<hy-rate :count="10"></hy-rate>
```

### 最少可以选中的数量
```html
<hy-rate :minCount="5"></hy-rate>
```

### 允许半星
```html
<hy-rate :value="2.5" allowHalf></hy-rate>
```

### 禁用状态
```html
<hy-rate :value="2" disabled></hy-rate>
```

### 只读状态
```html
<hy-rate :value="2" readonly></hy-rate>
```

## API
### Rate Props

| 参数            | 说明             | 类型                 | 默认值       |
|---------------|----------------|--------------------|-----------|
| v-model       | 双向绑定选择星星的数量    | `number`           | 1         |
| count         | 最多可选的星星数量      | `number`           | 5         |
| disabled      | 是否禁止用户操作       | `boolean`          | false     |
| readonly      | 是否只读           | `boolean`          | false     |
| size          | 星星的大小，单位rpx    | `number`\|`string` | 18        |
| inactiveColor | 未选中星星的颜色       | `string`           | #b2b2b2   |
| activeColor   | 选中的星星颜色        | `string`           | #FFF00D   |
| gutter        | 星星之间的距离        | `number`           | 4         |
| minCount      | 最少选中星星的个数      | `number`           | 1         |
| allowHalf     | 是否允许半星选择       | `boolean`          | false     |
| activeIcon    | 选中时的图标名        | `string`           | STAR_FILL |
| inactiveIcon  | 未选中时的图标名       | `string`           | STAR      |
| touchable     | 是否可以通过滑动手势选择评分 | `boolean`          | true      |
| customStyle   | 自定义样式          | `CSSProperties`    | -         |

### Events

| 事件名    | 说明           | 回调参数                                       |
|--------|--------------|--------------------------------------------|
| change | 选中的星星发生变化时触发 | value：当前选中的星星的数量，如果使用v-model双向绑定方式，无需监听此事件 |


<demo-model url="pages-design/rate/rate"></demo-model>
