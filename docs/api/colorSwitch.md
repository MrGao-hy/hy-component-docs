# colorSwitch 颜色转换

## RGB转十六进制Hex
#### rgbToHex(rgb)
该函数可以将一个RGB颜色值转换成一个Hex的十六进制颜色值
- `rgb` \<String\> RGB颜色值，如`rgb(230, 231, 233)`
```ts
import { rgbToHex } from "hy-app";

const rgb = 'rgb(13, 145, 20)'
console.log(rgbToHex(rgb)) // #0D9114
```

## 十六进制Hex转RGB
#### hexToRgb(hex)
该函数可以将一个Hex的十六进制颜色值转换成一个RGB颜色值
- `hex` \<String\> HEx颜色值，如`#0afdce`
```ts
import { hexToRgb } from "hy-app";

const hex = '#0afdce'
console.log(rgbToHex(hex)) // RGB(10,253,206)
```


## 颜色渐变
#### colorGradient(startColor, endColor, step)
该函数实现两个颜色值之间等分取值，返回一个数组，元素为十六进制形式的颜色值，数组长度为step值。 例如：colorGradient('rgb(250, 250, 250)', 'rgb(252, 252, 252)', 3)，得到的结果为["#fafafa", "#fafafa", "#fbfbfb"]
- `startColor` \<String\> 开始颜色值，可以是HEX或者RGB颜色值，如`#0afdce`或者`rgb(120, 130, 150)`
- `endColor` \<String\> 结束颜色值，可以是HEX或者RGB颜色值，如`#0afdce`或者`rgb(120, 130, 150)`
- `step` \<Number\> 均分值，把开始值和结束值平均分成多少份
```ts
import { colorGradient } from "hy-app";

console.log(colorGradient('rgb(250,250,250)', 'rgb(252,252,252)', 3)); // 结果为：["#fafafa", "#fafafa", "#fbfbfb"]
```


## 颜色透明度
##### colorToRgba(color, opacity = 0.3)
该函数可以接受一个十六进制或者rgb格式的颜色值(不能接受命名式颜色格式，比如white)，返回此颜色的rgba格式值，如下：
- `color` \<String\> 颜色值，只能`hex`或者`rgba`格式
- `opacity` \<Number\> 不透明度值，取值为0-1之间
```ts
import { colorToRgba } from "hy-app";

colorToRgba('#000000', 0.35);// 结果为 rgba(0, 0, 0, 0.35)
colorToRgba('rgb(255, 180, 0)', 0.4);// 结果为 rgba(255, 180, 0, 0.4)
```