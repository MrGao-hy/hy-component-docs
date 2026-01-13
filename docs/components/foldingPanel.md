# FoldingPanel 折叠面板组件
> 通过折叠面板收纳内容区域。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [collapse组件](https://uiadmin.net/uview-plus/components/collapse.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例
::: tip 注意
`index`是必填的，他是索引
:::
```html
<hy-folding-panel v-model="activeIndex">
    <hy-folding-panel-item title="水果" index="fruits"></hy-folding-panel-item>
    <hy-folding-panel-item title="饮品" index="beverage"></hy-folding-panel-item>
</hy-config-provider>
```

## 禁用面板
- 通过设置`hy-folding-panel`的`disabled`禁用所以面板
- 通过设置`hy-folding-panel-item`的`disabled`禁用单个面板
```html
<hy-folding-panel v-model="activeIndex" :disabled="true">
    <hy-folding-panel-item title="水果" index="fruits"></hy-folding-panel-item>
    <hy-folding-panel-item title="饮品" index="beverage"></hy-folding-panel-item>
</hy-config-provider>
```

## 显示边框
- 通过`border`设置边框
```html
<hy-folding-panel v-model="activeIndex" :border="true">
    <hy-folding-panel-item title="水果" index="fruits"></hy-folding-panel-item>
    <hy-folding-panel-item title="饮品" index="beverage"></hy-folding-panel-item>
</hy-config-provider>
```

## 设置面板大小
- 通过设置`size`设置面板大小
  - `small`-小面板
  - `medium`-中面板（默认）
  - `large`-大面板
```html
<hy-folding-panel v-model="activeIndex" size="small">
    <hy-folding-panel-item title="水果" index="fruits"></hy-folding-panel-item>
    <hy-folding-panel-item title="饮品" index="beverage"></hy-folding-panel-item>
</hy-config-provider>
```

## 自定义面板头部

```html
<hy-folding-panel v-model="activeIndex" :disabled="true">
    <hy-folding-panel-item index="fruits">
        <template #header>
            <view class="hy-folding-panel-item__title">自定义头部</view>
        </template>
    </template>
    </hy-folding-panel-item>
    <hy-folding-panel-item index="beverage">
        <template #title>
            <view class="hy-folding-panel-item__title">自定义标题</view>
        </template>
    </hy-folding-panel-item>
</hy-config-provider>
```

## API

### FoldingPanel Props

| 参数         | 说明                  | 类型                         | 默认值    |
|------------|---------------------|----------------------------|--------|
| modelValue | 当前激活的面板索引，支持v-model | `number`\|`string`         | -1     |
| accordion  | 是否手风琴模式             | `boolean`                  | false  |
| disabled   | 是否禁用整个折叠面板组         | `boolean`                  | false  |
| border     | 是否显示边框              | `boolean`                  | true   |
| size       | 面板头部大小              | `large`\|`medium`\|`small` | medium |


### FoldingPanelItem Props
| 参数            | 说明             | 类型                 | 默认值   |
|---------------|----------------|--------------------|-------|
| index         | 面板索引（由父组件自动设置） | `number`\|`string` | -1    |
| title         | 面板标题           | `string`           | -     |
| value         | 右侧显示的值         | `string`           | -     |
| icon          | 左侧图标           | `string`           | -     |
| iconColor     | 左侧图标颜色         | `string`           | -     |
| iconSize      | 左侧图标大小         | `string`\|`numner` | -     |
| content       | 面板内容           | `string`           | -     |
| contentHeight | 内容区域最大高度       | `string`\|`numner` | 150   |
| disabled      | 是否禁用当个面板       | `boolean`          | false |
| defaultOpen   | 默认是否展开         | `boolean`          | false |
| customStyle   | 自定义需要用到的外部样式   | `CSSProperties`    | -     |

## Events

### FoldingPanel Emits

| 事件名         | 说明         | 回调参数                      |
|-------------|------------|---------------------------|
| change      | 面板状态改变时触发  | expanded：内部展开状态, index：索引 |
| open        | 面板打开时触发    | index：索引                  |
| close       | 面板关闭时触发    | index：索引                  |

### FoldingPanelItem Emits

| 事件名         | 说明         | 回调参数                      |
|-------------|------------|---------------------------|
| click       | 改成面板开关状态   | index：索引                  |
| change      | 面板状态改变时触发  | expanded：内部展开状态, index：索引 |
| open        | 面板打开时触发    | index：索引                  |
| close       | 面板关闭时触发    | index：索引                  |
| child-click | 子项点击时通知父组件 | index：索引                  |

## Methods

### FoldingPanel Expose
| 事件名      | 说明          | 参数                    |
|----------|-------------|-----------------------|
| open     | 打开指定索引的面板   | index: number\|string |
| close    | 关闭指定索引的面板   | index: number\|string |
| toggle   | 切换指定索引面板的状态 | index: number\|string |
| closeAll | 关闭所有面板      | -                     |

### FoldingPanelItem Expose
| 事件名         | 说明       | 参数 |
|-------------|----------|----|
| open        | 打开面板     | -  |
| close       | 关闭面板     | -  |
| toggle      | 切换面板状态   | -  |
| getExpanded | 获取当前展开状态 | -  |

## Slots

| 插槽名     | 说明         | 接收值 |
|---------|------------|-----|
| default | 主体部分的内容    | -   |
| header  | 面板头部       | -   |
| title   | 面板头部左边内容   | -   |

<demo-model url="pages-design/foldingPanel/foldingPanel"></demo-model>