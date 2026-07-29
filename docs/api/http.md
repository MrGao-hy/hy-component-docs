# Http 请求工具

::: tip 提示
此插件集成自优秀的开源请求库：luch-request。作者对其进行了简单封装以及说明，如有不全之处，可参考 luch-request 官方文档。
:::

该插件适用于普遍的请求场景，支持 post、get、put 和 delete，以及上传下载等请求。

**特点**
- 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
- 支持全局挂载
- 支持多个全局配置实例
- 支持自定义验证器
- 支持文件上传/下载
- 支持 task 操作
- 支持自定义参数
- 支持多拦截器

## 类型定义

### HttpRequestConfig

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| baseURL | string | 否 | 请求基础 URL |
| url | string | 是 | 请求地址 |
| method | string | 否 | 请求方法（GET/POST/PUT/DELETE） |
| data | any | 否 | 请求数据 |
| header | object | 否 | 请求头 |

### HttpResponse

| 参数名 | 类型 | 说明 |
|--------|------|------|
| statusCode | number | HTTP 状态码 |
| data | any | 响应数据 |

## 基础用法

```typescript
import Http from '@hy-app/ui';
import type { HttpRequestConfig, HttpResponse } from '@hy-app/ui';

const http = new Http();

http.config = {
    baseURL: 'http://60.168.129.9:2010',
};

http.interceptor.request((conf: HttpRequestConfig) => {
    return conf;
});

http.interceptor.response((response: HttpResponse) => {
    if (response.statusCode === 200) {
        return response.data;
    }
    return Promise.reject(response);
});
```

## 动态设置协议域名端口

```typescript
import Http from '@hy-app/ui';

const http = new Http();

http.config = {
    baseURL: '',
};

http.interceptor.request((conf: HttpRequestConfig) => {
    if (uni.getStorageSync('zcSetting')) {
        const zcParam = JSON.parse(uni.getStorageSync('zcSetting'));
        conf.baseURL = `${zcParam.scheme}://${zcParam.host}:${zcParam.port}`;
    }
    return conf;
});
```