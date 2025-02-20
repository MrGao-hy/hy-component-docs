# bytesToSize 字节转化（b/KB/MB/GB）单位

## 字节转换单位
###### bytesToSize(bytes)

- `bytes` \<Number> 字节大小

```javascript
import { bytesToSize } from "hfyk-app";

const num = bytesToSize(1024);
console.log(num); // 打印出：1MB
```