# 选项卡组件

::: tip
是 tabs 和 swiper 结合的
:::

## 使用示例

```html
<yk-tabs
  :list="statusTabs"
  @clickTabs="clickTabs"
  @animationFinish="animationFinish">
  <view>我是内容</view>
</yk-tabs>
```

```javascript
const statusTabs = [{ name: "全部" }, { name: "未核销" }, { name: "已核销" }];

// 点击选项卡执行回调
const clickTabs = () => {}

// 滑动轮播图执行回调函数
const animationFinish = () => {}
```

## API

| 参数          | 说明                            | 类型    | 默认值                 | 可选值 |
| ------------- | ------------------------------- | ------- | ---------------------- | ------ |
| current       | 当前数值                        | number  | 0                      | -      |
| list          | 选项卡数组                      | array   | -                      | -      |
| duration      | 滑块移动一次所需的时间，单位 ms | number  | 300                    | -      |
| scrollable    | 菜单是否可滚动                  | boolean | false                  | true   |
| lineColor     | 滑块颜色                        | string  | #3c9cff                | -      |
| activeStyle   | 菜单选择中时的样式              | object  | \{ color: "#303133" \} | -      |
| inactiveStyle | 菜单非选中时的样式              | object  | \{ color: "#606266" \} | -      |
| itemStyle     | 菜单 item 的样式                | string  | \{ height: "44px" \}   | -      |
| keyName       | 从 list 元素对象中读取的键名    | string  | name                   | -      |
