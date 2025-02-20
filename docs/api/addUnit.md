# addUnit 添加单位，如果有rpx，upx，%，px等单位结尾或者值为auto，直接返回，否则加上px单位结尾

## 转换px
###### addUnit(timestamp, fmt)

- `path` \<String> 本地上传图片路径

```javascript
import { addUnit } from "hfyk-app";

// 时间格式转换
const unit_1 = addUnit(20); // 打印出：20px
const unit_2 = addUnit("20rpx"); // 打印出：20rpx
const unit_3 = addUnit("10", "rpx"); // 打印出：20rpx
```