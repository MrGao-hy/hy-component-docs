# Http Request Tool

::: tip Tips

This plugin is integrated from the excellent open-source request library: luch-request. The author has made a simple encapsulation and explanation. For any deficiencies, please refer to the official luch-request documentation.

:::

This plugin is suitable for common request scenarios and supports post, get, put, delete, as well as upload and download requests.

**Features**

- Based on Promise objects for a simpler request usage, supporting request and response interceptors
- Supports global mounting
- Supports multiple global configuration instances
- Supports custom verifiers
- Supports file upload/download
- Supports task operations
- Supports custom parameters
- Supports multiple interceptors

## Type Definitions

### HttpRequestConfig

| Parameter Name | Type   | Required | Description |
| -------------- | ------ | -------- | ----------- |
| baseURL        | string | No       | Request base URL |
| url            | string | Yes      | Request address |
| method         | string | No       | Request method (GET/POST/PUT/DELETE) |
| data           | any    | No       | Request data |
| header         | object | No       | Request headers |

### HttpResponse

| Parameter Name | Type   | Description |
| -------------- | ------ | ----------- |
| statusCode     | number | HTTP status code |
| data           | any    | Response data |

## Basic Usage

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

## Dynamic Protocol Domain Port Settings

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