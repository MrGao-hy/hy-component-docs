# Index-Bar 索引栏组件
> 用于快速定位列表内容的索引栏组件，支持点击和滑动两种交互方式，适配小程序和App平台。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

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
    
    <!-- 索引栏 -->
    <hy-index-bar 
      v-model="activeIndex" 
      :index-list="indexList" 
      @scroll="handleScroll"
    />
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'

// 联系人数据
const contactList = ref([
  { index: 'A', list: [{ name: '阿杰' }, { name: '阿明' }] },
  { index: 'B', list: [{ name: '贝贝' }, { name: '宝宝' }] },
  // 更多数据...
])

// 索引列表
const indexList = computed(() => contactList.value.map(item => item.index))

// 当前激活的索引
const activeIndex = ref('A')

// 滚动事件处理
const handleScroll = (index) => {
  // 根据索引滚动到对应位置
  uni.createSelectorQuery()
    .select(`#section-${index}`)
    .boundingClientRect(rect => {
      if (rect) {
        uni.pageScrollTo({
          scrollTop: rect.top,
          duration: 300
        })
      }
    })
    .exec()
}
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

## 隐藏提示框

```html
<hy-index-bar 
  v-model="activeIndex" 
  :index-list="indexList" 
  :show-toast="false"
/>
```

## 自定义样式

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

## 索引列表数据格式

支持两种数据格式：

### 1. 字符串数组

```js
const indexList = ref(['A', 'B', 'C', 'D', 'E'])
```

### 2. 对象数组

```js
const indexList = ref([
  { index: 'A', data: [...] },
  { index: 'B', data: [...] },
  { index: 'C', data: [...] }
])
```

## 完整代码

:::code-group
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
import { ref, reactive, computed, getCurrentInstance, nextTick, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { getRect, sleep } from 'hy-app'

const instance = getCurrentInstance()
// 索引栏位置
const position = ref<string>('right')
const sectionRect = ref<UniNamespace.NodeInfo[]>([])
const scrollTop = ref<number>(0)
// 是否显示提示
const showToast = ref<boolean>(true)
// 当前激活的索引
const currentActiveIndex = ref<string>('')
const isScroll = ref<boolean>(true)
// 模拟城市数据
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
        '昆明'
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
    Z: ['郑州', '株洲', '珠海', '中山', '湛江', '肇庆', '张家口', '枣庄']
})

// 转换为索引列表格式
const indexList = computed(() => {
    return Object.keys(cityData)
        .sort()
        .map((key) => ({
            index: key,
            title: key,
            data: cityData[key as keyof typeof cityData]
        }))
})
const indexs = computed(() => {
    return Object.keys(cityData).sort()
})

onMounted(() => {
    nextTick(() => {
        getRect('.hy-index-section', true).then((rect) => {
            sectionRect.value = rect
        })
    })
})

// 处理滚动事件
const handleScroll = (e: any) => {
    // 使用uni.createSelectorQuery()获取所有索引section的位置信息
    const scrollTop = e.detail.scrollTop
    if (isScroll.value) {
        const index = sectionRect.value.findIndex((item) => item.top - 1 > scrollTop) - 1
        const keys = Object.keys(cityData)
        console.log(keys[index], '==')
        currentActiveIndex.value = keys[index]
    }
}

// 处理索引点击事件
const handleIndexClick = (index: string, event: Event) => {
    scrollToSection(index)
}

// 处理索引滚动事件
const handleIndexScroll = (index: string) => {
    scrollToSection(index)
}

const scrollToSection = async (i: string) => {
    isScroll.value = false
    const index = Object.keys(cityData).findIndex((item) => item === i)
    scrollTop.value = sectionRect.value[index]?.top!
    await sleep()
    isScroll.value = true
}
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

| 参数                 | 说明                       | 类型                                 | 默认值         |
|--------------------|--------------------------|------------------------------------|-------------|
| v-model            | 当前激活的索引值                 | `string`                           | -           |
| indexList          | 索引列表数据，支持字符串数组或对象数组      | `string`\|`number`\|`IIndexItem[]` | -           |
| position           | 索引栏位置，可选值：'left'、'right' | `left`\|`right`                    | right       |
| showToast          | 是否显示索引字母提示框              | `boolean`                          | true        |
| indexColor         | 索引项颜色                    | `string`                           | -           |
| activeIndexColor   | 激活状态索引项颜色                | `string`                           | -           |
| indexBgColor       | 索引项背景色                   | `string`                           | transparent |
| activeIndexBgColor | 激活状态索引项背景色               | `string`                           | -           |
| indexSize          | 索引项大小（像素）                | `number`\|`string`                 | 12          |
| height             | 索引栏高度                    | `number`\|`string`                 | 100%        |
| width              | 索引栏宽度（像素）                | number/string                      | 20          |
| customStyle        | 自定义需要用到的外部样式             | `CSSProperties`                    | -           |
| customClass        | 自定义外部类名                  | `string`                           | -           |

## Events

| 事件名    | 说明       | 回调参数                                            |
|--------|----------|-------------------------------------------------|
| click  | 点击索引项时触发 | index: string - 当前点击的索引值<br>event: Event - 事件对象 |
| scroll | 滑动索引栏时触发 | index: string - 当前滑动到的索引值                       |


<demo-model url="pages-design/indexBar/indexBar"></demo-model>

