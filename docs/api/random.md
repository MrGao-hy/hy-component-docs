# random 获取随机数

## random(min, max)
该方法可以返回在"min"和"max"之间的数值，要求"min"和"max"都为数值，且"max"大于或等于"min"，否则返回0.
- `min` \<String | Number> 最小值
- `max` \<String | Number> 最大值
```javascript
import { random } from "hy-app";

const val = random(1, 10);
console.log(val) // 随机数
```