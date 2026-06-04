# List 虚拟滚动组件

> 该组件实现只展示可视内容的DOM，减少DOM操作，优化性能，适用于大数据量列表展示场景。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :warning:注意事项

- `containerHeight` 必须设置，否则会加载全部数据，无法实现虚拟滚动优化
- `itemHeight` 必须与实际内容高度一致，否则虚拟滚动计算会出现问题
- 微信小程序端对 `slot` 的使用有一些限制，不能在 `v-for` 中使用具名 `slot` 多次
- 大数据量场景（如1000+条）建议使用虚拟滚动以获得更好的性能

## :japanese_castle:基本使用示例

### 基础列表

```html
<template>
    <hy-list :list="list" container-height="100vh">
        <template #content="{ record }">
            <view class="list-item">
                <text>{{ record }}</text>
            </view>
        </template>
    </hy-list>
</template>

<script setup>
import { ref } from 'vue'

const list = ref<string[]>([])
for (let i = 0; i < 2000; i++) {
    list.value.push(`列表项--${i}`)
}
</script>

<style scoped>
.list-item {
    padding: 20rpx;
    font-size: 28rpx;
}
</style>
```

### 单列数据列表

```html
<template>
    <hy-list 
        :list="userList" 
        container-height="600rpx"
        item-height="120rpx"
        border
        @click="handleClick"
    >
        <template #content="{ record }">
            <view class="user-item">
                <view class="avatar" :style="{ backgroundColor: record.color }">
                    <text>{{ record.name.charAt(0) }}</text>
                </view>
                <view class="user-info">
                    <text class="user-name">{{ record.name }}</text>
                    <text class="user-desc">{{ record.desc }}</text>
                </view>
            </view>
        </template>
    </hy-list>
</template>

<script setup>
import { ref } from 'vue'

const userList = ref([
    { id: 1, name: '张三', desc: '前端工程师', color: '#4F8EF7' },
    { id: 2, name: '李四', desc: 'UI设计师', color: '#F74F8E' },
    { id: 3, name: '王五', desc: '产品经理', color: '#8EF74F' },
    { id: 4, name: '赵六', desc: '后端开发', color: '#F7C54F' }
])

const handleClick = (item) => {
    uni.showToast({
        title: `点击了 ${item.name}`,
        icon: 'none'
    })
}
</script>

<style scoped>
.user-item {
    display: flex;
    align-items: center;
    padding: 20rpx;
}

.avatar {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 32rpx;
    font-weight: 600;
}

.user-info {
    margin-left: 20rpx;
    flex: 1;
}

.user-name {
    font-size: 30rpx;
    font-weight: 600;
    display: block;
}

.user-desc {
    font-size: 24rpx;
    color: #999;
    margin-top: 8rpx;
}
</style>
```

### 两列商品列表

```html
<template>
    <hy-list
        :list="goodsList"
        container-height="100vh"
        item-height="400rpx"
        :line="2"
        border
        :load="loadStatus"
        @scrollToLower="loadMore"
    >
        <!-- #ifdef H5 || APP_PLUS -->
        <template #left="{ record }">
            <view class="goods-card">
                <image :src="record.image" mode="aspectFill" class="goods-image"></image>
                <view class="goods-info">
                    <text class="goods-name">{{ record.name }}</text>
                    <text class="goods-price">¥{{ record.price }}</text>
                </view>
            </view>
        </template>
        <template #right="{ record }">
            <view class="goods-card">
                <image :src="record.image" mode="aspectFill" class="goods-image"></image>
                <view class="goods-info">
                    <text class="goods-name">{{ record.name }}</text>
                    <text class="goods-price">¥{{ record.price }}</text>
                </view>
            </view>
        </template>
        <!-- #endif -->
        
        <!-- #ifndef H5 || APP_PLUS -->
        <template #left-list="{ record }">
            <view class="goods-card" v-for="item in record" :key="item.id">
                <image :src="item.image" mode="aspectFill" class="goods-image"></image>
                <view class="goods-info">
                    <text class="goods-name">{{ item.name }}</text>
                    <text class="goods-price">¥{{ item.price }}</text>
                </view>
            </view>
        </template>
        <template #right-list="{ record }">
            <view class="goods-card" v-for="item in record" :key="item.id">
                <image :src="item.image" mode="aspectFill" class="goods-image"></image>
                <view class="goods-info">
                    <text class="goods-name">{{ item.name }}</text>
                    <text class="goods-price">¥{{ item.price }}</text>
                </view>
            </view>
        </template>
        <!-- #endif -->
    </hy-list>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const goodsList = ref([])
const loadStatus = ref('loadMore')
const page = ref(1)

onMounted(() => {
    fetchData()
})

const fetchData = () => {
    for (let i = 0; i < 20; i++) {
        goodsList.value.push({
            id: (page.value - 1) * 20 + i,
            name: `商品${(page.value - 1) * 20 + i + 1}`,
            price: (Math.random() * 100).toFixed(2),
            image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=product%20image%20e-commerce%20item&image_size=square'
        })
    }
}

const loadMore = () => {
    if (loadStatus.value === 'loading') return
    loadStatus.value = 'loading'
    
    setTimeout(() => {
        if (page.value >= 5) {
            loadStatus.value = 'noMore'
            return
        }
        page.value++
        fetchData()
        loadStatus.value = 'loadMore'
    }, 1000)
}
</script>

<style scoped>
.goods-card {
    height: 100%;
    border-radius: 10rpx;
    overflow: hidden;
    background: white;
}

.goods-image {
    width: 100%;
    height: 280rpx;
}

.goods-info {
    padding: 15rpx;
}

.goods-name {
    font-size: 26rpx;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.goods-price {
    font-size: 30rpx;
    color: #f44336;
    font-weight: 600;
    margin-top: 10rpx;
    display: block;
}
</style>
```

### 自定义底部插槽

```html
<template>
    <hy-list
        :list="list"
        container-height="80vh"
        item-height="60rpx"
        :show-divider="false"
    >
        <template #content="{ record }">
            <text>{{ record }}</text>
        </template>
        <template #footer>
            <view class="custom-footer">
                <hy-button type="primary" text="加载更多" @click="loadMore"></hy-button>
            </view>
        </template>
    </hy-list>
</template>

<script setup>
import { ref } from 'vue'

const list = ref<string[]>([])
for (let i = 0; i < 50; i++) {
    list.value.push(`列表项--${i}`)
}

const loadMore = () => {
    uni.showToast({
        title: '加载更多',
        icon: 'none'
    })
}
</script>

<style scoped>
.custom-footer {
    padding: 20rpx;
    text-align: center;
}
</style>
```

### 带样式的列表项

```html
<template>
    <hy-list
        :list="list"
        container-height="500rpx"
        item-height="80rpx"
        padding="20rpx"
        margin-bottom="10rpx"
        border-radius="10rpx"
        background="#f5f5f5"
        border
    >
        <template #content="{ record }">
            <text>{{ record }}</text>
        </template>
    </hy-list>
</template>

<script setup>
import { ref } from 'vue'

const list = ref<string[]>([])
for (let i = 0; i < 20; i++) {
    list.value.push(`自定义样式项--${i}`)
}
</script>
```

## API

### List Props

| 参数              | 说明                    | 类型                                  | 默认值         |
|-----------------|-----------------------|-------------------------------------|-------------|
| list            | 数据列表                  | `array`                             | []          |
| containerHeight | 容器高度，必须设置，否则加载全部数据    | `string` \| `number`                | 100%        |
| itemHeight      | 子容器高度，必须和内容一致，否则计算有问题 | `string` \| `number`                | 40px        |
| padding         | 子容器内边距                | `string` \| `number`                | 10          |
| marginBottom    | 子容器底部外边距，会计算到容器内      | `string` \| `number`                | 10          |
| borderRadius    | 子容器圆角，单位px            | `string` \| `number`                | 3px         |
| background      | 容器背景色                 | `string`                            | transparent |
| border          | 是否显示边框                | `boolean`                           | false       |
| line            | 展示列数（目前支持1列和2列）       | `number`                            | 1           |
| keyField        | 每一项的唯一标识key           | `string`                            | id          |
| load            | 加载状态                  | `loadMore` \| `loading` \| `noMore` | loadMore    |
| showDivider     | 是否显示底部加载状态提示          | `boolean`                           | true        |

### Events

| 事件名           | 说明       | 回调参数         |
|---------------|----------|--------------|
| click         | 点击列表项时触发 | item: 单条数据内容 |
| scrollToLower | 滚动到底部时触发 | -            |

### Slots

| 插槽名        | 说明                  | 接收值               |
|------------|---------------------|-------------------|
| default    | 自定义列表整体内容           | record: 当前可视区域的数据 |
| content    | 自定义单列模式下的每项内容       | record: 单条数据      |
| left       | 两列模式下左边单个容器（H5/APP） | record: 单条数据      |
| left-list  | 两列模式下左边列表插槽（小程序）    | record: 左边列表数据    |
| right      | 两列模式下右边单个容器（H5/APP） | record: 单条数据      |
| right-list | 两列模式下右边列表插槽（小程序）    | record: 右边列表数据    |
| footer     | 底部插槽，自定义加载更多区域      | -                 |

<demo-model url="pages-design/list/list"></demo-model>
