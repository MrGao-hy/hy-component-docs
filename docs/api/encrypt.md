# encryptData & decryptData 加密解密

::: tip 提示
改加密方式是通过base64进行简单加密，如果重要数据需要加密不能使用此方法，
该加密方式可用直接破解，加密需要md5加密，md5加密是不可逆的加密
:::

## base64加密
### encryptData(data)
- `data` \<Object | string> 加密对象或者字符串
```javascript
import { encryptData } from "hy-app";
const encryptObj = encryptData({name: "加密对象"});
const encryptStr = encryptData("加密字符串");
```

## base64解密
### decryptData(encryptedVal)
- `encryptedVal` \<String> 需要解密的加密数据
```javascript
import { decryptData } from "hy-app";
const decryptVal = decryptData("DSSFFGfh234nr");
```