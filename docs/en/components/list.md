# List Virtual Scrolling Component

> This component renders only the DOM for visible content, reducing DOM operations and optimizing performance. It is ideal for scenarios involving large lists of data.

## :pushpin:Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | -------------------- | ------------------- |
| ✔        | ✔   | ✔                    | ✔                   |

## :warning:Notes

::: warning Notes

- `containerHeight` must be set; otherwise, all data will be loaded and virtual scrolling optimization will not take effect
- `itemHeight` must match the actual content height; otherwise, the virtual scrolling calculation will be incorrect
- The WeChat Mini Program has some restrictions on the use of `slot` — named `slot` cannot be used multiple times within a `v-for`
- For large data scenarios (e.g., 1000+ items), virtual scrolling is recommended for better performance

:::

## :japanese_castle:Basic Usage Examples

### Basic List

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
        list.value.push(`List item--${i}`)
    }
</script>

<style scoped>
    .list-item {
        padding: 20rpx;
        font-size: 28rpx;
    }
</style>
```

### Single-Column Data List

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
    import { ref } from 'vue';

    const userList = ref([
        { id: 1, name: 'Zhang San', desc: 'Frontend Engineer', color: '#4F8EF7' },
        { id: 2, name: 'Li Si', desc: 'UI Designer', color: '#F74F8E' },
        { id: 3, name: 'Wang Wu', desc: 'Product Manager', color: '#8EF74F' },
        { id: 4, name: 'Zhao Liu', desc: 'Backend Developer', color: '#F7C54F' },
    ]);

    const handleClick = (item) => {
        uni.showToast({
            title: `Clicked ${item.name}`,
            icon: 'none',
        });
    };
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

### Two-Column Product List

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
    import { ref, onMounted } from 'vue';

    const goodsList = ref([]);
    const loadStatus = ref('loadMore');
    const page = ref(1);

    onMounted(() => {
        fetchData();
    });

    const fetchData = () => {
        for (let i = 0; i < 20; i++) {
            goodsList.value.push({
                id: (page.value - 1) * 20 + i,
                name: `Product ${(page.value - 1) * 20 + i + 1}`,
                price: (Math.random() * 100).toFixed(2),
                image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=product%20image%20e-commerce%20item&image_size=square',
            });
        }
    };

    const loadMore = () => {
        if (loadStatus.value === 'loading') return;
        loadStatus.value = 'loading';

        setTimeout(() => {
            if (page.value >= 5) {
                loadStatus.value = 'noMore';
                return;
            }
            page.value++;
            fetchData();
            loadStatus.value = 'loadMore';
        }, 1000);
    };
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

### Custom Footer Slot

```html
<template>
    <hy-list :list="list" container-height="80vh" item-height="60rpx" :show-divider="false">
        <template #content="{ record }">
            <text>{{ record }}</text>
        </template>
        <template #footer>
            <view class="custom-footer">
                <hy-button type="primary" text="Load More" @click="loadMore"></hy-button>
            </view>
        </template>
    </hy-list>
</template>

<script setup>
    import { ref } from 'vue'

    const list = ref<string[]>([])
    for (let i = 0; i < 50; i++) {
        list.value.push(`List item--${i}`)
    }

    const loadMore = () => {
        uni.showToast({
            title: 'Load more',
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

### Styled List Items

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
        list.value.push(`Custom style item--${i}`)
    }
</script>
```

## API

### List Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| list | Data list | `array` | [] |
| containerHeight | Container height; must be set, otherwise all data will be loaded. Numeric values default to px units | `string` \| `number` | 100% |
| itemHeight | Item container height; must match the content height, otherwise the calculation will be incorrect. Numeric values default to px units | `string` \| `number` | 40px |
| padding | Item container padding. Numeric values default to px units | `string` \| `number` | 10 |
| marginBottom | Item container bottom margin, included in the container calculation. Numeric values default to px units | `string` \| `number` | 0 |
| borderRadius | Item container border radius. Numeric values default to px units | `string` \| `number` | 3px |
| background | Container background color | `string` | transparent |
| border | Whether to show the border | `boolean` | false |
| line | Number of columns to display (currently supports 1 and 2 columns) | `number` | 1 |
| keyField | Unique identifier key for each item | `string` | id |
| load | Loading status | `loadMore` \| `loading` \| `noMore` | loadMore |
| showDivider | Whether to show the bottom loading status indicator | `boolean` | true |

### Events

| Event Name    | Description                       | Callback Parameters       |
| ------------- | --------------------------------- | ------------------------- |
| click         | Triggered when a list item is clicked | item: single data item |
| scrollToLower | Triggered when scrolled to the bottom | -                      |

### Slots

| Slot Name  | Description                                              | Received Values                       |
| ---------- | -------------------------------------------------------- | ------------------------------------- |
| default    | Custom overall list content                              | record: data in the current visible area |
| content    | Custom content for each item in single-column mode       | record: single data item              |
| left       | Single container on the left in two-column mode (H5/APP) | record: single data item              |
| left-list  | Left list slot in two-column mode (Mini Program)         | record: left list data                |
| right      | Single container on the right in two-column mode (H5/APP) | record: single data item            |
| right-list | Right list slot in two-column mode (Mini Program)        | record: right list data               |
| footer     | Footer slot for customizing the load-more area           | -                                     |

<demo-model url="pages-design/list/list"></demo-model>