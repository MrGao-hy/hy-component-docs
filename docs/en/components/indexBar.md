# Index-Bar Component

> An index bar component for quickly locating list content, supporting both tap and slide interactions, compatible with Mini Program and App platforms.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Example

```html
<template>
    <view class="index-bar-demo">
        <view class="content-list">
            <view
                v-for="(group, index) in contactList"
                :key="index"
                :id="`section-${group.index}`"
                class="contact-group"
            >
                <view class="group-title">{{ group.index }}</view>
                <view v-for="(contact, idx) in group.list" :key="idx" class="contact-item">
                    {{ contact.name }}
                </view>
            </view>
        </view>

        <!-- Index bar -->
        <hy-index-bar v-model="activeIndex" :index-list="indexList" @scroll="handleScroll" />
    </view>
</template>

<script setup>
    import { ref, computed } from 'vue';

    // Contact data
    const contactList = ref([
        { index: 'A', list: [{ name: 'A Jie' }, { name: 'A Ming' }] },
        { index: 'B', list: [{ name: 'Bei Bei' }, { name: 'Bao Bao' }] },
        // More data...
    ]);

    // Index list
    const indexList = computed(() => contactList.value.map((item) => item.index));

    // Currently active index
    const activeIndex = ref('A');

    // Scroll event handler
    const handleScroll = (index) => {
        // Scroll to the corresponding position based on the index
        uni.createSelectorQuery()
            .select(`#section-${index}`)
            .boundingClientRect((rect) => {
                if (rect) {
                    uni.pageScrollTo({
                        scrollTop: rect.top,
                        duration: 300,
                    });
                }
            })
            .exec();
    };
</script>

<style lang="scss" scoped>
    .index-bar-demo {
        position: relative;
        height: 100vh;
    }

    .content-list {
        padding: 20rpx;
    }

    .contact-group {
        margin-bottom: 40rpx;
    }

    .group-title {
        font-size: 32rpx;
        font-weight: bold;
        padding: 10rpx 0;
        background-color: #f5f5f5;
    }

    .contact-item {
        font-size: 28rpx;
        padding: 20rpx 0;
        border-bottom: 1rpx solid #eee;
    }
</style>
```

### Hiding the Toast

```html
<hy-index-bar v-model="activeIndex" :index-list="indexList" :show-toast="false" />
```

### Custom Styling

```html
<hy-index-bar
    v-model="activeIndex"
    :index-list="indexList"
    :index-color="'#666'"
    :active-index-color="'#007AFF'"
    :index-bg-color="'#f0f0f0'"
    :active-index-bg-color="'#e0e0e0'"
    :index-size="14"
    :width="30"
    :height="'80%'"
    :customStyle="{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }"
/>
```

### Index List Data Format

Two data formats are supported:

### 1. String Array

```js
const indexList = ref(['A', 'B', 'C', 'D', 'E']);
```

### 2. Object Array

```js
const indexList = ref([
  { index: 'A', data: [...] },
  { index: 'B', data: [...] },
  { index: 'C', data: [...] }
])
```

### Complete Code

::: code-group

```vue [vue]
<template>
    <hy-config-provider>
        <scroll-view class="hy-scroll-view" scroll-y :scroll-top="scrollTop" @scroll="handleScroll">
            <view
                v-for="item in indexList"
                :key="item.index"
                class="hy-index-section"
                :id="`index-${item.index}`"
            >
                <view class="hy-index-section__title hy-title">{{ item.index }}</view>
                <view class="hy-index-section__container">
                    <view
                        v-for="(city, cityIndex) in item.data"
                        :key="cityIndex"
                        class="hy-index-section__item"
                    >
                        {{ city }}
                    </view>
                </view>
            </view>
        </scroll-view>

        <hy-index-bar
            v-model="currentActiveIndex"
            :index-list="indexs"
            :position="position"
            :show-toast="showToast"
            @click="handleIndexClick"
            @scroll="handleIndexScroll"
        />
    </hy-config-provider>
</template>
```

```ts [index.ts]
import { ref, reactive, computed, getCurrentInstance, nextTick, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { getRect, sleep } from '@hy-app/ui';

const instance = getCurrentInstance();
// Index bar position
const position = ref<string>('right');
const sectionRect = ref<UniNamespace.NodeInfo[]>([]);
const scrollTop = ref<number>(0);
// Whether to show the toast
const showToast = ref<boolean>(true);
// Currently active index
const currentActiveIndex = ref<string>('');
const isScroll = ref<boolean>(true);
// Mock city data
const cityData = reactive({
    A: ['Anqing', 'Anyang', 'Anshan', 'Anshun', 'Ankang', 'Aksu', 'Altay'],
    B: [
        'Beijing',
        'Shanghai',
        'Guangzhou',
        'Shenzhen',
        'Chongqing',
        'Chengdu',
        'Hangzhou',
        'Wuhan',
        "Xi'an",
        'Suzhou',
        'Tianjin',
        'Nanjing',
        'Changsha',
        'Zhengzhou',
        'Dongguan',
        'Qingdao',
        'Shenyang',
        'Ningbo',
        'Kunming',
    ],
    C: ['Changchun', 'Changzhou', 'Changsha', 'Chengdu', 'Chongqing', 'Fuzhou', 'Changchun', 'Changsha'],
    D: ['Dalian', 'Dongguan', 'Dezhou', 'Datong', 'Daqing', 'Dali'],
    E: ['Ezhou', 'Enshi', 'Ezhou'],
    F: ['Fuzhou', 'Foshan', 'Fushun', 'Fuxin', 'Fuyang', 'Fuzhou'],
    G: ['Guangzhou', 'Guiyang', 'Guilin', 'Ganzhou', 'Guangyuan', "Guang'an"],
    H: ['Hangzhou', 'Hefei', 'Harbin', 'Haikou', 'Hohhot', 'Huzhou', 'Handan', 'Hanzhong', 'Hengshui'],
    J: ['Jinan', 'Changchun', 'Jilin', 'Jinzhou', 'Jingzhou', 'Jingmen', 'Jinjiang'],
    K: ['Kunming', 'Kaifeng', 'Karamay', 'Kashgar'],
    L: ['Lanzhou', 'Luoyang', 'Linyi', 'Liaocheng', 'Longyan', 'Lijiang'],
    M: ['Mianyang', "Ma'anshan", 'Maoming', 'Meizhou', 'Meishan'],
    N: ['Nanjing', 'Nanchang', 'Nanning', 'Nantong', 'Ningbo', 'Nanyang', 'Nanchong'],
    P: ['Pingdingshan', 'Panjin', 'Panzhihua', 'Pingxiang'],
    Q: ['Qingdao', 'Quanzhou', 'Qujing', 'Qinhuangdao', 'Qiqihar', 'Qingyang'],
    R: ['Rizhao', 'Shigatse', 'Rongchang'],
    S: ['Shenzhen', 'Suzhou', 'Shenyang', 'Shijiazhuang', 'Shaoxing', 'Xiamen', 'Shangqiu', 'Shangrao', 'Shiyan'],
    T: ['Tianjin', 'Taiyuan', 'Tangshan', 'Taizhou', 'Taizhou', 'Tongliao', 'Turpan'],
    W: ['Wuhan', "Xi'an", 'Wenzhou', 'Wuxi', 'Weifang', 'Urumqi', 'Weihai', 'Weinan'],
    X: ["Xi'an", 'Xiamen', 'Xuzhou', 'Xinxiang', 'Xinyang', 'Xiangyang', 'Xining'],
    Y: ['Yantai', 'Yangzhou', 'Yichang', 'Yueyang', "Yan'an", 'Yinchuan', 'Yuncheng'],
    Z: ['Zhengzhou', 'Zhuzhou', 'Zhuhai', 'Zhongshan', 'Zhanjiang', 'Zhaoqing', 'Zhangjiakou', 'Zaozhuang'],
});

// Convert to index list format
const indexList = computed(() => {
    return Object.keys(cityData)
        .sort()
        .map((key) => ({
            index: key,
            title: key,
            data: cityData[key as keyof typeof cityData],
        }));
});
const indexs = computed(() => {
    return Object.keys(cityData).sort();
});

onMounted(() => {
    nextTick(() => {
        getRect('.hy-index-section', true).then((rect) => {
            sectionRect.value = rect;
        });
    });
});

// Handle scroll event
const handleScroll = (e: any) => {
    // Use uni.createSelectorQuery() to get the position info of all index sections
    const scrollTop = e.detail.scrollTop;
    if (isScroll.value) {
        const index = sectionRect.value.findIndex((item) => item.top - 1 > scrollTop) - 1;
        const keys = Object.keys(cityData);
        console.log(keys[index], '==');
        currentActiveIndex.value = keys[index];
    }
};

// Handle index click event
const handleIndexClick = (index: string, event: Event) => {
    scrollToSection(index);
};

// Handle index scroll event
const handleIndexScroll = (index: string) => {
    scrollToSection(index);
};

const scrollToSection = async (i: string) => {
    isScroll.value = false;
    const index = Object.keys(cityData).findIndex((item) => item === i);
    scrollTop.value = sectionRect.value[index]?.top!;
    await sleep();
    isScroll.value = true;
};
```

```scss [index.scss]
.hy-scroll-view {
    width: 100%;
    height: 100%;
}

.hy-index-section {
    padding: $hy-border-margin-padding-base;

    @include e(title) {
    }

    @include e(item) {
        font-size: 28rpx;
        padding: $hy-border-margin-padding-base;
        border-bottom: $hy-border-line;
        &:last-child {
            border: none;
        }
    }

    @include e(container) {
        padding: $hy-border-margin-padding-base 0;
        border-radius: $hy-border-radius-base;
        background: $hy-background--container;
    }
}
```

:::

## API

### IndexBar Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Currently active index value | `string` | - |
| indexList | Index list data; supports a string array or an object array | `string`\|`number`\|`IIndexItem[]` | - |
| position | Index bar position, optional values: 'left', 'right' | `left`\|`right` | right |
| showToast | Whether to show the index letter toast | `boolean` | true |
| indexColor | Index item color | `string` | - |
| activeIndexColor | Color of the index item in active state | `string` | - |
| indexBgColor | Index item background color | `string` | transparent |
| activeIndexBgColor | Background color of the index item in active state | `string` | - |
| indexSize | Index item size; numbers default to px | `number`\|`string` | 12 |
| height | Index bar height; numbers default to px | `number`\|`string` | 100% |
| width | Index bar width; numbers default to px | number/string | 20 |
| customStyle | Custom external styles to apply | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event | Description       | Callback Parameters                                          |
| ------ | ---------------- | ----------------------------------------------------------- |
| click  | Triggered when an index item is clicked | index: string - the clicked index value<br>event: Event - the event object |
| scroll | Triggered when sliding on the index bar | index: string - the index value currently slid to               |

<demo-model url="pages-design/indexBar/indexBar"></demo-model>