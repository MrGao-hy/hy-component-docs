# List 虚拟滚动组件
> 该组件实现只展示可视内容的dom，减少dom操作，优化性能

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [button组件](https://uiadmin.net/uview-plus/components/button.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-list :list="list" container-height="100vh">
    <template #default="{ record }">
        {{record}}
    </template>
</hy-list>
<!-- 单个组件引入 -->
<HyList :list="list" container-height="100vh">
    <template #default="{ record }">
        {{record}}
    </template>
</HyList>
```
```ts
import { HyButton } from "hy-app";

const list = ref([]);
for (let i = 0; i < 2000; i++) {
    list.value.push(`列表--${i}`);
}
```

## 商品两列示例

```html
<template>
    <hy-list
        :list="list"
        container-height="100vh"
        @scrollButton="scrollButton"
        load="loading"
        :line="2"
        border
    >
        <template #content="{ record }">
            {{ record }}
        </template>
    </hy-list>
</template>

<script setup>
    const list = ref<any[]>([]);
    for (let i = 0; i < 400; i++) {
        list.value.push({
            id: i,
            name: `列表${i + 1}`
        });
    }
</script>
```

## 自定义每行

```html
<template>
    <hy-button text="月落"></hy-button>
</template>
```

## 小程序和h5不同写法
::: tip 注意
微信小程序端对 `slot` 的使用有一些限制，尤其是不能在 `v-for` 中使用具名 `slot` 多次，即便具名插槽 `name` 是不同的也会报错。
:::
::: details 点击查看完整代码
```html
<template>
  <HyList
    :list="list"
    container-height="100vh"
    @scrollButton="scrollButton"
    load="loading"
    padding="0"
    item-height="300"
    border-radius="10"
    :line="2"
    border
  >
    <!--	#ifdef H5 || APP_PLUS	-->
    <template v-slot:left="{ record }">
      <view class="container" style="width: 100%; height: 100%">
        <image
          :src="record.url"
          style="width: 100%; height: 70%"
          mode="aspectFill"
        ></image>
        <view class="container-bottom">
          <view>{{ record.name }}</view>
          <view class="container-bottom__info"
            >价格:<text style="color: red">{{ record.price }}</text></view
          >
        </view>
      </view>
    </template>
    <template #right="{ record }">
      <view class="container" style="width: 100%; height: 100%">
        <image
          :src="record.url"
          style="width: 100%; height: 70%"
          mode="aspectFill"
        ></image>
        <view class="container-bottom">
          <view>{{ record.name }}</view>
          <view class="container-bottom__info"
            >价格:<text style="color: red">{{ record.price }}</text></view
          >
        </view>
      </view>
    </template>
    <!--	#endif	-->
    <!--	#ifndef H5 || APP_PLUS	-->
      <!-- 推荐使用这个写法，通用 -->
    <template #left-list="{ record }">
      <view class="list" v-for="item in record" :key="item.id">
        <view class="list-item">
          <view class="container" style="width: 100%; height: 100%">
            <image
              :src="item.url"
              style="width: 100%; height: 70%"
              mode="aspectFill"
            ></image>
            <view class="container-bottom">
              <view>{{ item.name }}</view>
              <view class="container-bottom__info"
                >价格:<text style="color: red">{{ item.price }}</text></view
              >
            </view>
          </view>
        </view>
      </view>
    </template>
    <template #right-list="{ record }">
      <view class="list" v-for="item in record" :key="item.id">
        <view class="list-item">
          <view class="container" style="width: 100%; height: 100%">
            <image
              :src="item.url"
              style="width: 100%; height: 70%"
              mode="aspectFill"
            ></image>
            <view class="container-bottom">
              <view>{{ item.name }}</view>
              <view class="container-bottom__info"
                >价格:<text style="color: red">{{ item.price }}</text></view
              >
            </view>
          </view>
        </view>
      </view>
    </template>
    <!--	#endif	-->
  </HyList>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import HyList from "hy-app/components/hy-list/hy-list.vue";

const list = ref<AnyObject[]>([]);
const page = reactive({
  current: 1,
  pageSize: 20
});

onMounted(() => {
  queryData();
});

const scrollButton = () => {
  console.log(111);
  page.current++;
  queryData();
};

const queryData = () => {
  for (
    let i = (page.current - 1) * page.pageSize;
    i < page.current * page.pageSize;
    i++
  ) {
    list.value.push({
      id: i,
      name: `阿莫西林胶囊_${i}`,
      url: "https://img1.baidu.com/it/u=3643087685,1203558480&fm=253",
      price: "10.88"
    });
  }
};
</script>

<style scoped lang="scss">
@import "hy-app/theme.scss";
.container {
  &-bottom {
    padding: 15rpx;
    &__info {
      color: grey;
      font-size: 25rpx;
    }
  }
}
.list {
  &-item {
    height: 300px;
    box-sizing: border-box;
    border-radius: 10rpx;
    border: $hy-border-line;
    margin-bottom: 20rpx;
  }
}
</style>
```
:::


## API

| 参数              | 说明                     | 类型                              | 默认值         |
|-----------------|------------------------|---------------------------------|-------------|
| list            | 数据列表                   | `array`                         | -           |
| containerHeight | 容器高度，必须给个高度，否则加载全部数据   | `string`\|`number`              | 100%        |
| itemHeight      | 子容器的高度，必须和内容一致，否则计算有问题 | `string`\|`number`              | 50          |
| padding         | 子容器的内边距                | `string`\|`number`              | 10          |
| marginBottom    | 子容器的底部编剧，会计算到容器内       | `string`\|`number`              | 10          |
| borderRadius    | 子容器的圆角，单位px            | `string`\|`number`              | 3px         |
| background      | 容器背景色                  | `string`                        | transparent |
| border          | 是否显示边框                 | `boolean`                       | false       |
| itemHeight      | 子容器的高度，必须和内容一致，否则计算有问题 | `string`\|`number`              | 50          |
| line            | 展示几列（目前只有一列和两列）        | `number`                        | 1           |
| keyField        | 每一项的唯一标识key            | `string`                        | id          |
| load            | 加载状态                   | `loadMore`\|`loading`\|`noMore` | loadMore    |
| showDivider     | 显示底部加载状态               | `boolean`                       | true        |

## Events

| 事件名           | 说明      | 回调参数         |
|---------------|---------|--------------|
| click         | 点击行执行函数 | item: 单条数据内容 |
| scrollToLower | 滚动底部触底  | -            |

## Slots

| 插槽名        | 说明                    | 接收值             |
|------------|-----------------------|-----------------|
| default    | 自定义列表                 | record: 截取的列表数据 |
| content    | 自定义每项（一列）             | record: 单条数据    |
| left       | 左边单个容器插槽（适用h5/app，两列） | record: 单条数据    |
| left-list  | 左边列表插槽（两列）            | record: 列表数据    |
| right      | 右边单个容器插槽（适用h5/app，两列） | record: 单条数据    |
| right-list | 右边列表插槽（两列）            | record: 列表数据    |
| footer     | 底部插槽                  | -               |

<demo-model url="pages/components/list/list"></demo-model>
