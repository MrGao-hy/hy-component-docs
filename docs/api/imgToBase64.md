# imageToBase64 本地图片转base64方法（兼容APP、H5、小程序）

## 本地图片转base64
### imageToBase64(timestamp, fmt)
- `path` \<String> 本地上传图片路径
```javascript
import { imageToBase64 } from "hy-app";

// 时间格式转换
const base64 = imageToBase64();
```