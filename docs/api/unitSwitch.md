# addUnit 

## 数值转换单位（添加单位，如果有rpx，upx，%，px等单位结尾或者值为auto，直接返回，否则加上px单位结尾）
### addUnit(value, unit)
- `value` \<String> 需要添加单位的值
- `unit` \<String> 添加的单位名（默认：px）
```javascript
import { addUnit } from "hfyk-app";

// 添加单位
const unit_1 = addUnit(20); // 打印出：20px
const unit_2 = addUnit("20rpx"); // 打印出：20rpx
const unit_3 = addUnit("10", "rpx"); // 打印出：20rpx
```

## rpx或upx的数值转换px的数值
### getPx(value, unit)
- `value` \<String> 需要转换的值
- `unit` \<Boolean> 是否添加`px`单位
```javascript
import { addUnit } from "hfyk-app";

// 转换px
const unit_1 = getPx(20, true); // 打印出：20px
const unit_2 = getPx("20px"); // 打印出：20
const unit_3 = getPx("20rpx"); // 打印出：10
const unit_4 = getPx("20upx", true); // 打印出：10px
```