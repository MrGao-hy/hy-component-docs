# getRect 节点布局信息
> 此方法封装自uni的nodesRef.boundingClientRect (opens new window)，它极大简化了 使用复杂度，内部使用Promise，可以让用户同步获取节点信息。

## getRect(selector, all = false, ins)

- `selector` \<String\> 此参数为元素节点，可以是id或者class，比如"#user-name"，".box"
- `all` \<Boolean\> 是否返回全部节点信息，当页面有多个相同selector的元素时，all为true，会以数组形式返回所有节点的信息(结果为数组，数组元素为对象)，否则只返回第一个节点的信息(结果为一个对象)
- `ins` \<String\> 节点`const instance = getCurrentInstance();`在小程序时候必须传，否则获取不到元素的信息

::: tip 建议
受限于`nodesRef.boundingClientRect`，其上结果中的`left`、`top`、`right`、`bottom`，是会随着页面滚动而变化的，因为这个查询的相对于屏幕窗口，而不是 相对于页面根元素的，但`width`、`height`，是恒定不变的，所以一般情况我们推荐您想要获取节点宽高的时候采用这个方法。
:::

::: warning 注意
由于`onLoad`生命周期元素尚未创建完成，请勿在此生命周期使用此方法，如果是页面或组件内应该在`mounted`生命周期调用。 如果要查询的目标，是通过服务端获取数据后才渲染的，那么应该在获取数据后，通过`nextTick`调用此方法。
:::

### 异步使用方法
通过`then`调用即可
```vue
<template>
  <view class="elClass"></view>
</template>

<script setup lang="ts">
  import { getRect } from "hy-app";
  const getElInfo = () => {
    getRect('.elClass').then(res => {
      console.log(res);
    })
  }
</script>
```

### 同步使用方法
该方法的使用场景为您下一步的操作需要获取元素的节点后才能进行的情况，可以通过`async/await`方式调用，注意，无论是生命周期还是`methods`中的方法，都可以在 其前面添加`async`修饰符
```vue
<template>
  <view class="elClass"></view>
</template>

<script setup lang="ts">
  import { getRect } from "hy-app";
  const getElInfo = async () => {
    const rectInfo = await getRect('.elClass');
    console.log(rectInfo);
  }
</script>
```

### 请求数据后再获取节点信息
此场景为元素内容为后端获取数据填充的，节点填充数据前后，元素的大小尺寸是不一样的，所以需要在获取后再执行此方法，这里通过`nextTick`调用， 是因为它会等待数据赋值，元素创建完成后再执行，此时才是准确的尺寸，以下演示，为华玥自带的`http`请求方法调用
```vue
<template>
	<view>
		<view class="user-name">
			{{userName}}
		</view>
	</view>
</template>

<script setup lang="ts">
	import { http, getRect } from 'hy-app';
    import { ref, nextTick } from "vue";
    const userName = ref("");
    const getElInfo = () => {
      http.post('http://www.example.com/user/info').then(res => {
        this.userName = res.name;
        nextTick(() => {
          getRect('.user-avatar').then(rect => {
            console.log(rect);
          })
        })
      })
    }
</script>
```

### 如何让让某个元素滚动到页面顶部
这里说的顶部，指的是导航栏的下方，比如我们点击某个操作，页面自动滚动，指定元素位于导航栏下方时停止。 我们需要结合`onPageScroll`生命周期，获得实时的页面滚动条位置。
```vue
<template>
	<view class="wrap">
		<view class="item">
			华玥 UI
		</view>
		<view class="item">
			华玥 UI
		</view>
		<view class="item">
			华玥 UI
		</view>
		<view class="item">
			华玥 UI
		</view>
		<view class="item object-item" @tap="scrollEl">
			点我，我就会滚动到导航栏下方
		</view>
	</view>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { onPageScroll } from "@dcloudio/uni-app";
  import { getRect } from "hy-app";

  const scrollTop = ref(0);
  
  onPageScroll((e) => {
    scrollTop.value = e.scrollTop;
  })
  
  const scrollEl = () => {
    getRect('.object-item').then(res => {
      uni.pageScrollTo({
        scrollTop: scrollTop.value + res.top,
        duration: 0
      })
    })
  }
</script>

<style lang="scss" scoped>
	.wrap {
		height: 200vh;
	}
</style>
```