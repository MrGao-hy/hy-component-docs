# Http请求

::: tip 提示
此插件集成自优秀的开源请求库：luch-request (opens new window)。作者对其对其进行了简单封装以及说明，如有不全之处， 可参考luch-request (opens new window)官方文档。
:::

该插件适用于普遍的请求场景，支持post、get、put和delete，以及上传下载等请求，有如下特点：
- 基于Promise对象实现更简单的request使用方式，支持请求和响应拦截
- 支持全局挂载
- 支持多个全局配置实例
- 支持自定义验证器
- 支持文件上传/下载
- 支持task 操作
- 支持自定义参数
- 支持多拦截器
- 对参数的处理比uni.request更强

## 基本使用

```ts
import Http from 'hy-app';
import type { HttpRequestConfig } from 'hy-app';
import type {HttpResponse} from "hy-app/typing";

const http = new Http();

http.config = {
    baseURL: 'http://60.168.129.9:2010',
};

// 请求拦截
http.interceptor.request((conf: HttpRequestConfig) => {
    return conf;
});

// 响应拦截
http.interceptor.response((response: HttpResponse) => {
    if (response.statusCode === 200) {
        return response.data;
    }
    // 错误走
    return Promise.reject(response);
});

```