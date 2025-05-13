# guid 全局唯一标识符

## 唯一标识符

##### guid(length = 32, firstU = true, radix = 62)
> 该函数可以生产一个全局唯一、随机的guid，默认首字母为hy，可以用于当做元素的id或者class名等需要唯一，随机字符串的地方，因为id或者class不能以数字开头。
- `length` \<Number | null\> guid的长度，默认为32，如果取值null，则按rfc4122标准生成对应格式的随机数
- `firstU` \<Boolean\> 首字母是否为"u"，如果首字母为数字情况下，不能用作元素的id或者class，默认为true
- `radix` \<Number\> 生成的基数，默认为62，用于生成随机数字符串为"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"， 如果取2，那么返回的结果就是前两位0和1(可以理解为二进制)的随机结果，如果为7，返回的字符串就是0-7(理解为八进制)之间， 10为十进制，以此类推。
:::info 建议
这个方法三个参数都有默认的值，所以您调用的时候，可以无需传递任何参数也是可以的，并且建议您这样做。
:::
```vue
<template>
	<view :id="elId" :class="elClass">
		
	</view>
</template>

<script setup lang="ts">
	import { guid } from 'hy-app';
    const elId = guid(20);
    const elClass = guid();
</script>
```