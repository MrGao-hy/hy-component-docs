# Menu 侧边导航组件
> 垂直展示的导航栏，用于在不同的内容区域之间进行切换。

::: tip 温馨提示
非常感悟为华玥组件贡献的小伙伴
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-menu :list="list"></hy-menu>
<!-- 单个组件引入 -->
<HyMenu :list="list"></HyMenu>
```
```ts
import { HyMenu } from "hy-app"

const list = [
    { title: "盖浇饭", icon: IconConfig.PHOTO },
    { title: "炒菜", value: "title", disabled: true },
    { title: "米粉面条", value: "showCancelButton" },
    { title: "汉堡披萨", value: "buttonReverse" },
    { title: "饮品甜品", value: "buttonReverse" },
    { title: "面点粥水饺混沌", value: "buttonReverse" },
    { title: "小吃麻辣烫", value: "buttonReverse" },
    { title: "中餐", value: "buttonReverse" },
    { title: "西餐", value: "buttonReverse" },
    { title: "大餐", value: "buttonReverse" },
];
```

## 设置不同宽度
- 通过设置`width`设置宽度
```html
<template>
    <hy-menu :list="list" width="150"></hy-menu>
</template>
```

## 设置选中颜色
- 通过设置`color`设置选中颜色
```html
<template>
    <hy-menu :list="list" color="red"></hy-menu>
</template>
```

## 描点模型

:::code-group
```vue [vue]
<template>
  <hy-config-provider :custom-style="themeColor" :theme="darkMode">
    <hy-menu
        v-model="current"
        :list="list"
        color="red"
        @change="onChange"
    ></hy-menu>

    <scroll-view
        class="scroll-view"
        scroll-y
        scroll-with-animation
        :scroll-top="scrollTop"
        :throttle="false"
        @scroll="onScroll"
    >
      <view
          :class="['item', `item--${item.id}`]"
          v-for="(item, index) in data"
          :key="index"
      >
        <view class="hy-title">
          <text class="text">{{ item.name }}</text>
        </view>
        <view class="hy-container">
          <hy-grid
              :list="item.children"
              :col="2"
              :custom-keys="{ icon: 'url', name: 'name' }"
              :icon-config="{ size: 50 }"
          ></hy-grid>
        </view>
      </view>
    </scroll-view>
  </hy-config-provider>
</template>
```

```ts [.ts]
import { computed, onMounted, ref } from "vue";
import { useThemeStore } from "@/store";
import { data } from "./data";
import { IconConfig } from "hy-app";

// 组件
import HyMenu from "@/package/components/hy-menu/hy-menu.vue";
import HyGrid from "@/package/components/hy-grid/hy-grid.vue";
import HyConfigProvider from "@/package/components/hy-config-provider/hy-config-provider.vue";
import type { MenusType } from "@/package/components/hy-menu/typing";
import { getRect } from "@/package";

const themeStore = useThemeStore();

interface ItemTopVo {
    id: string | number;
    top: number;
}

const { themeColor, darkMode } = themeStore;
const scrollTop = ref<number>(0);
const itemScrollTop = ref<ItemTopVo[]>([]);
const current = ref<string | number>(1);
const list = [
    { id: 1, title: "盖浇饭", icon: IconConfig.PHOTO },
    { id: 2, title: "炒菜", value: "title", disabled: true },
    { id: 3, title: "米粉面条", value: "showCancelButton", badge: 6 },
    { id: 4, title: "汉堡披萨", value: "buttonReverse" },
    { id: 5, title: "饮品甜品", value: "buttonReverse" },
    { id: 6, title: "面点粥水饺混沌", value: "buttonReverse" },
    { id: 7, title: "小吃麻辣烫", value: "buttonReverse" },
    { id: 8, title: "中餐", value: "buttonReverse" },
    { id: 9, title: "西餐", value: "buttonReverse" },
    { id: 10, title: "大餐", value: "buttonReverse" },
];

onMounted(() => {
    list.forEach((item) => {
        getRect(`.item--${item.id}`).then((rect) => {
            itemScrollTop.value.push({
                id: item.id,
                top: rect.top,
            });
        });
    });
});

function onScroll(e: any) {
    const { scrollTop } = e.detail;
    const threshold = 50; // 下一个标题与顶部的距离
    if (scrollTop < threshold) {
        // active.value = 0;
        return;
    }
    const res = itemScrollTop.value
        .sort((a, b) => b.top - a.top)
        .find((item) => scrollTop >= item.top);
    current.value = res?.id || 0;
}

const onChange = (temp: MenusType) => {
    const res: ItemTopVo | undefined = itemScrollTop.value.find(
        (item) => item.id === temp.id,
    );
    scrollTop.value = res?.top || 0;
};
```

```javascript [data.js]
export const data = [
  {
    id: 1,
    name: "盖浇饭",
    children: [
      {
        key: "1-1",
        name: "蘑菇盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "1-2",
        name: "牛肉香菇盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "1-3",
        name: "鱼香肉丝盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "1-4",
        name: "肉末茄子盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "1-5",
        name: "红烧肉盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "1-6",
        name: "猪脚盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
    ],
  },
  {
    id: 3,
    name: "米粉面条",
    children: [
      {
        key: "3-1",
        name: "蘑菇盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "3-2",
        name: "牛肉香菇盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "3-3",
        name: "鱼香肉丝盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "3-4",
        name: "肉末茄子盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "3-5",
        name: "红烧肉盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "3-6",
        name: "猪脚盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
    ],
  },
  {
    id: 4,
    name: "汉堡披萨",
    children: [
      {
        key: "4-1",
        name: "蘑菇盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "4-2",
        name: "牛肉香菇盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "4-3",
        name: "鱼香肉丝盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "4-4",
        name: "肉末茄子盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "4-5",
        name: "红烧肉盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "4-6",
        name: "猪脚盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
    ],
  },
  {
    id: 5,
    name: "饮品甜品",
    children: [
      {
        key: "5-1",
        name: "蘑菇盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "5-2",
        name: "牛肉香菇盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "5-3",
        name: "鱼香肉丝盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "5-4",
        name: "肉末茄子盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "5-5",
        name: "红烧肉盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "5-6",
        name: "猪脚盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
    ],
  },
  {
    id: 6,
    name: "面点粥水饺混沌",
    children: [
      {
        key: "6-1",
        name: "蘑菇盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "6-2",
        name: "牛肉香菇盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "6-3",
        name: "鱼香肉丝盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "6-4",
        name: "肉末茄子盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "6-5",
        name: "红烧肉盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "6-6",
        name: "猪脚盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
    ],
  },
  {
    id: 7,
    name: "小吃麻辣烫",
    children: [
      {
        key: "7-1",
        name: "蘑菇盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "7-2",
        name: "牛肉香菇盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "7-3",
        name: "鱼香肉丝盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "7-4",
        name: "肉末茄子盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "7-5",
        name: "红烧肉盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "7-6",
        name: "猪脚盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
    ],
  },
  {
    id: 8,
    name: "中餐",
    children: [
      {
        key: "8-1",
        name: "蘑菇盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "8-2",
        name: "牛肉香菇盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "8-3",
        name: "鱼香肉丝盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "8-4",
        name: "肉末茄子盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "8-5",
        name: "红烧肉盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "8-6",
        name: "猪脚盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
    ],
  },
  {
    id: 9,
    name: "西餐",
    children: [
      {
        key: "9-1",
        name: "蘑菇盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "9-2",
        name: "牛肉香菇盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "9-3",
        name: "鱼香肉丝盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "9-4",
        name: "肉末茄子盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "9-5",
        name: "红烧肉盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "9-6",
        name: "猪脚盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
    ],
  },
  {
    id: 10,
    name: "大餐",
    children: [
      {
        key: "10-1",
        name: "蘑菇盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "10-2",
        name: "牛肉香菇盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "10-3",
        name: "鱼香肉丝盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "10-4",
        name: "肉末茄子盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "10-5",
        name: "红烧肉盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
      {
        key: "10-6",
        name: "猪脚盖浇饭",
        url: "https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG",
      },
    ],
  },
];

```

```scss [.scss]
.hy-config-provider {
  display: flex;
}
.scroll-view {
  padding: 20rpx;
}
```
:::

## API

| 参数          | 说明                            | 类型                 | 默认值 |
|-------------|-------------------------------|--------------------|-----|
| list        | 菜单数据集                         | `array`            | -   |
| color       | 选中颜色                          | `string`           | -   |
| width       | 侧边菜单栏宽度                       | `number`\|`string` | 120 |
| icon        | 图标集合，详见[图标Api](./icon#api)    | `HyIconProps`      | -   |
| badge       | 徽标属性集合，详见[徽标Api](./badge#api) | `HyBadgeProps`     | -   |
| customStyle | 自定义需要用到的外部样式                  | `CSSProperties`    | -   |
| customClass | 自定义外部类名                       | `string`           | -   |

## list
| 参数       | 说明    | 类型        | 默认值 |
|----------|-------|-----------|-----|
| title    | 标题    | `string`  | -   |
| icon     | 图标    | `string`  | -   |
| badge    | 徽标显示值 | `number`  | -   |
| disabled | 是否禁用  | `boolean` | -   |

## Events

| 事件名    | 说明      | 回调参数         |
|--------|---------|--------------|
| change | 选项切换时触发 | temp: list的值 |

## Slots

| 插槽名     | 说明       | 接收值 |
|---------|----------|-----|
| default | 自定义title | -   |
| icon    | 图标自定义    | -   |

<demo-model url="pages/components/menu/menu"></demo-model>