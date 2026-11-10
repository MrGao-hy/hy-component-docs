# Index-Bar Component

> An index bar component for quickly locating list content, supporting both tap and swipe interactions, and compatible with Mini Program and App platforms.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

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
        { index: 'A', list: [{ name: '阿杰' }, { name: '阿明' }] },
        { index: 'B', list: [{ name: '贝贝' }, { name: '宝宝' }] },
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

### Hide the Toast Prompt

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
// Whether to show the toast prompt
const showToast = ref<boolean>(true);
// Currently active index
const currentActiveIndex = ref<string>('');
const isScroll = ref<boolean>(true);
// Mock city data
const cityData = reactive({
    A: ['安庆', '安阳', '鞍山', '安顺', '安康', '阿克苏', '阿勒泰'],
    B: [
        '北京',
        '上海',
        '广州',
        '深圳',
        '重庆',
        '成都',
        '杭州',
        '武汉',
        '西安',
        '苏州',
        '天津',
        '南京',
        '长沙',
        '郑州',
        '东莞',
        '青岛',
        '沈阳',
        '宁波',
        '昆明',
    ],
    C: ['长春', '常州', '长沙', '成都', '重庆', '福州', '长春', '长沙'],
    D: ['大连', '东莞', '德州', '大同', '大庆', '大理'],
    E: ['鄂州', '恩施', '鄂州'],
    F: ['福州', '佛山', '抚顺', '阜新', '阜阳', '抚州'],
    G: ['广州', '贵阳', '桂林', '赣州', '广元', '广安'],
    H: ['杭州', '合肥', '哈尔滨', '海口', '呼和浩特', '湖州', '邯郸', '汉中', '衡水'],
    J: ['济南', '长春', '吉林', '锦州', '荆州', '荆门', '晋江'],
    K: ['昆明', '开封', '克拉玛依', '喀什'],
    L: ['兰州', '洛阳', '临沂', '聊城', '龙岩', '丽江'],
    M: ['绵阳', '马鞍山', '茂名', '梅州', '眉山'],
    N: ['南京', '南昌', '南宁', '南通', '宁波', '南阳', '南充'],
    P: ['平顶山', '盘锦', '攀枝花', '萍乡'],
    Q: ['青岛', '泉州', '曲靖', '秦皇岛', '齐齐哈尔', '庆阳'],
    R: ['日照', '日喀则', '荣昌'],
    S: ['深圳', '苏州', '沈阳', '石家庄', '绍兴', '厦门', '商丘', '上饶', '十堰'],
    T: ['天津', '太原', '唐山', '泰州', '台州', '通辽', '吐鲁番'],
    W: ['武汉', '西安', '温州', '无锡', '潍坊', '乌鲁木齐', '威海', '渭南'],
    X: ['西安', '厦门', '徐州', '新乡', '信阳', '襄阳', '西宁'],
    Y: ['烟台', '扬州', '宜昌', '岳阳', '延安', '银川', '运城'],
    Z: ['郑州', '株洲', '珠海', '中山', '湛江', '肇庆', '张家口', '枣庄'],
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

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Currently active index value | `string` | - |
| indexList | Index list data; supports string arrays or object arrays | `string`\|`number`\|`IIndexItem[]` | - |
| position | Index bar position; optional values: 'left', 'right' | `left`\|`right` | right |
| showToast | Whether to show the index letter toast | `boolean` | true |
| indexColor | Index item color | `string` | - |
| activeIndexColor | Color of the index item in active state | `string` | - |
| indexBgColor | Index item background color | `string` | transparent |
| activeIndexBgColor | Background color of the index item in active state | `string` | - |
| indexSize | Index item size; number values default to px | `number`\|`string` | 12 |
| height | Index bar height; number values default to px | `number`\|`string` | 100% |
| width | Index bar width; number values default to px | number/string | 20 |
| customStyle | Custom external styles to apply | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description | Callback Parameters |
| ------ | ---------------- | ----------------------------------------------------------- |
| click  | Triggered when an index item is clicked | index: string - the clicked index value<br>event: Event - the event object |
| scroll | Triggered when the index bar is swiped | index: string - the index value currently swiped to |

### CSS Variables

| Variable Name                   | Description | Default |
| -------------------------------- | ---------------- | --------------------------------- |
| `--hy-index-bar-z-index`         | Stacking level | `999`                             |
| `--hy-index-bar-toast-size`      | Toast bubble size | `50px`                            |
| `--hy-index-bar-index-color`     | Index text color | Follows `--hy-text-color--3`      |
| `--hy-index-bar-index-radius`    | Index item border radius | Follows `--hy-radius-sm` (8rpx)   |
| `--hy-index-bar-toast-color`     | Toast bubble text color | `#ffffff`                         |
| `--hy-index-bar-toast-font-size` | Toast bubble font size | Follows `--hy-font-size-lg` (36rpx) |

<demo-model url="pages-design/indexBar/indexBar"></demo-model>