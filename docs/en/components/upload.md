# Upload Component

> This component is used for file upload scenarios, supporting uploads of various file types such as images and videos.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Examples

```html
<!-- Global usage -->
<hy-upload :fileList="list"></hy-upload>
```

### Basic Upload

::: code-group

```html [vue]
<template>
    <hy-upload :fileList="list" @afterRead="afterRead"></hy-upload>
</template>
```

```ts [index.ts]
import { ref } from 'vue';
import type { FileVo } from '@hy-app/ui';

const list = ref<FileVo[]>([]);

const afterRead = (event: any) => {
    const file = event.file;
    list.value.push({
        status: 'loading',
        message: 'Uploading',
        url: file.url,
        schedule: 0,
    });
    // Simulate upload progress
    let progress = 0;
    const timer = setInterval(() => {
        progress += 10;
        list.value[0].schedule = progress;
        if (progress >= 100) {
            clearInterval(timer);
            list.value[0].status = 'success';
            list.value[0].message = 'Upload successful';
        }
    }, 200);
};
```

:::

### Limiting Upload Count

Set the maximum upload count via `maxCount`. The default is 52 files.

```html
<hy-upload :fileList="list" :maxCount="3" @afterRead="afterRead"></hy-upload>
```

### Multiple Image Upload

Set `multiple` to enable multi-selection mode. Note that some Android devices do not support this.

::: code-group

```html [vue]
<hy-upload :fileList="list" multiple @afterRead="afterRead"></hy-upload>
```

```ts [index.ts]
import { ref } from 'vue';
import { isArray, type FileVo } from '@hy-app/ui';

const list = ref<FileVo[]>([]);

const afterRead = (event: any) => {
    const files = event.file;
    if (isArray(files)) {
        files.forEach((item) => {
            list.value.push({
                status: 'loading',
                message: 'Uploading',
                url: item.url,
                schedule: 0,
            });
            // Simulate a single file upload
            const index = list.value.findIndex((v) => v.url === item.url);
            let progress = 0;
            const timer = setInterval(() => {
                progress += 10;
                list.value[index].schedule = progress;
                if (progress >= 100) {
                    clearInterval(timer);
                    list.value[index].status = 'success';
                    list.value[index].message = 'Upload successful';
                }
            }, 200);
        });
    }
};
```

:::

### Limiting File Size

Set the maximum size of a single file via `maxSize`, in bytes.

```html
<template>
    <hy-upload
        :fileList="list"
        :maxSize="500000"
        @afterRead="afterRead"
        @oversize="onOversize"
    ></hy-upload>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import type { FileVo } from '@hy-app/ui';

    const list = ref<FileVo[]>([]);

    const afterRead = (event) => {
        // Handle upload logic
    };

    const onOversize = () => {
        uni.showToast({
            title: 'Image exceeds the 500KB limit',
            icon: 'none',
        });
    };
</script>
```

### Uploading Videos

Set `accept="video"` to restrict uploads to video files only.

```html
<template>
    <hy-upload :fileList="list" accept="video" :maxDuration="30" @afterRead="afterRead"></hy-upload>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import type { FileVo } from '@hy-app/ui';

    const list = ref<FileVo[]>([]);

    const afterRead = (event) => {
        const file = event.file as FileVo;
        list.value.push({
            type: 'video',
            status: 'success',
            message: 'Upload successful',
            url: file.url,
        });
    };
</script>
```

### Custom Upload Button

Use the default slot to customize the upload button style.

```html
<template>
    <hy-upload :fileList="list" @afterRead="afterRead">
        <view class="custom-upload-btn">
            <hy-icon name="plus" color="#999" size="32"></hy-icon>
            <text class="custom-upload-text">Tap to upload</text>
        </view>
    </hy-upload>
</template>

<style scoped lang="scss">
    .custom-upload-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 160rpx;
        height: 160rpx;
        border: 2rpx dashed #d9d9d9;
        border-radius: 12rpx;

        .custom-upload-text {
            font-size: 24rpx;
            color: #999;
            margin-top: 8rpx;
        }
    }
</style>
```

### Custom Trigger Area

Use the `trigger` slot to customize the area that triggers the upload.

```html
<template>
    <hy-upload :fileList="list" @afterRead="afterRead">
        <template #trigger>
            <view class="custom-trigger">
                <hy-icon name="upload" color="#2979ff" size="48"></hy-icon>
                <text class="custom-trigger-text">Drag or click to upload</text>
            </view>
        </template>
    </hy-upload>
</template>

<style scoped lang="scss">
    .custom-trigger {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 200rpx;
        border: 2rpx dashed #2979ff;
        border-radius: 12rpx;
        background: rgba(41, 121, 255, 0.05);

        .custom-trigger-text {
            font-size: 28rpx;
            color: #2979ff;
            margin-top: 12rpx;
        }
    }
</style>
```

### Disabled State

Set `disabled` to disable the upload functionality.

```html
<template>
    <hy-upload :fileList="list" disabled>
        <view class="disabled-btn">
            <hy-icon name="lock" color="#ccc" size="24"></hy-icon>
            <text class="disabled-text">Upload disabled</text>
        </view>
    </hy-upload>
</template>
```

### Hiding the Delete Button

Set `deletable="false"` to hide the delete button.

```html
<hy-upload :fileList="list" :deletable="false" @afterRead="afterRead"></hy-upload>
```

### Custom Size

Customize the size of the upload area via `width` and `height`.

```html
<hy-upload
    :fileList="list"
    :width="120"
    :height="120"
    upload-text="Large"
    @afterRead="afterRead"
></hy-upload>
```

### Upload Failed State

Set `status="failed"` to display the upload failed state.

```html
<template>
    <hy-upload :fileList="list"></hy-upload>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import type { FileVo } from '@hy-app/ui';

    const list = ref<FileVo[]>([
        {
            status: 'failed',
            message: 'Upload failed',
            url: '',
        },
    ]);
</script>
```

### Image Crop Mode

Set the crop mode of the preview image via `imageMode`, consistent with the `mode` attribute of the image component.

```html
<hy-upload :fileList="list" imageMode="aspectFit"></hy-upload>
```

### Controlling Preview

Use `previewFullImage` to control whether the full-screen preview is displayed.

```html
<hy-upload :fileList="list" :previewFullImage="false"></hy-upload>
```

### Capture Mode

Set the capture mode for images or videos via `capture`.

```html
<!-- Select from album only -->
<hy-upload :fileList="list" :capture="['album']"></hy-upload>

<!-- Capture with camera only -->
<hy-upload :fileList="list" :capture="['camera']"></hy-upload>

<!-- Support both album and camera -->
<hy-upload :fileList="list" :capture="['album', 'camera']"></hy-upload>
```

### Original/Compressed Images

Use `sizeType` to control the size type of the selected images.

```html
<!-- Select original images only -->
<hy-upload :fileList="list" :sizeType="['original']"></hy-upload>

<!-- Select compressed images only -->
<hy-upload :fileList="list" :sizeType="['compressed']"></hy-upload>

<!-- Support both original and compressed images -->
<hy-upload :fileList="list" :sizeType="['original', 'compressed']"></hy-upload>
```

## API

### Upload Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| accept | Accepted file types. `file` is only supported on H5 (only the WeChat Mini Program supports setting accept to all or media) | `string` | image |
| extension | Filter by file extension; each item cannot be an empty string. No filtering by default. | `string[]` | [] |
| capture | Image or video capture mode. When accept is image, setting capture to camera can directly invoke the camera | `('album' \| 'camera')[]` | ['album', 'camera'] |
| compressed | Takes effect when accept is video. Whether to compress the video | `boolean` | true |
| camera | Takes effect when accept is video. Optional values are back or front | `'back' \| 'front'` | back |
| maxDuration | Takes effect when accept is video. Maximum video recording duration, in seconds | `number` | 60 |
| uploadIcon | Icon of the upload area; only built-in icons are supported | `string` | IconConfig.UPLOAD |
| uploadIconColor | Color of the icon in the upload area | `string` | #D3D4D6 |
| useBeforeRead | Whether to enable the before-read event | `boolean` | false |
| previewFullImage | Whether to show the component's built-in image preview feature | `boolean` | true |
| maxCount | Maximum number of uploads | `number` | 52 |
| disabled | Whether to disable the component | `boolean` | false |
| imageMode | Crop mode when previewing uploaded images, same as the image component's mode attribute | `string` | aspectFill |
| name | Identifier, which can be retrieved from the second parameter of the callback function | `string` | '' |
| sizeType | original for original image, compressed for compressed image; both are enabled by default. Not effective on H5 | `('original' \| 'compressed')[]` | ['original', 'compressed'] |
| multiple | Whether to enable multi-selection of images; not supported on some Android devices | `boolean` | false |
| deletable | Whether to show the delete button for images | `boolean` | true |
| maxSize | Maximum size of a single selected file, in bytes (B); unlimited by default | `number` | Number.MAX_VALUE |
| fileList | List of uploaded files to display | `FileVo[]` | [] |
| uploadText | Hint text for the upload area | `string` | '' |
| width | Width of the internal preview image area and the image selection button area; default unit for numbers is rpx | `string \| number` | 80 |
| height | Height of the internal preview image area and the image selection button area; default unit for numbers is rpx | `string \| number` | 80 |
| beforeRead | Handler function before reading | `(file, detail) => void` | - |
| afterRead | Handler function after reading | `(file, detail) => void` | - |
| customStyle | External styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

#### fileList Data Structure

| Parameter | Description           | Type                                 | Default |
| --------- | --------------------- | ------------------------------------ | ------- |
| url       | Local URL of the uploaded file | `string`                             | -       |
| type      | Uploaded file type    | `'image' \| 'video' \| 'file'`       | -       |
| thumb     | Thumbnail URL         | `string`                             | -       |
| size      | File size             | `number`                             | -       |
| isVideo   | Whether it is a video | `boolean`                            | -       |
| isImage   | Whether it is an image | `boolean`                           | -       |
| deletable | Whether to show the delete button | `boolean`                 | -       |
| status    | Upload status         | `'loading' \| 'failed' \| 'success'` | -       |
| message   | Message               | `string`                             | -       |
| schedule  | Upload progress       | `string \| number`                   | -       |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| afterRead | Handler function after the file is read | `{ file: FileVo \| FileVo[], name: string, index: number }` |
| beforeRead | Handler function before the file is read | `{ file: FileVo \| FileVo[], name: string, index: number, callback: (ok) => void }` |
| oversize | File size exceeds the maximum allowed size | `{ file: FileVo \| FileVo[], name: string, index: number }` |
| clickPreview | Triggered when an image is previewed in full screen | `{ file: FileVo, name: string, index: number }` |
| delete | Triggered when an image is deleted | `{ file: FileVo, name: string, index: number }` |
| error | Triggered on upload error | `error: any` |

### Slots

| Slot Name | Description                          |
| --------- | ------------------------------------ |
| default   | Custom upload button content         |
| trigger   | Custom upload trigger area           |

### Typings

::: details Type Description

```ts
export interface FileVo {
    /** Local URL of the uploaded file */
    url?: string;
    /** Uploaded file type */
    type?: 'image' | 'video' | 'file';
    /** Thumbnail URL */
    thumb?: string;
    /** File size */
    size?: number;
    /** Whether it is a video */
    isVideo?: boolean;
    /** Whether it is an image */
    isImage?: boolean;
    /** Whether to show the delete button */
    deletable?: boolean;
    /** Upload status */
    status?: 'loading' | 'failed' | 'success';
    /** Message */
    message?: string;
    /** Upload progress */
    schedule?: string | number;
}

export type ReadFunctionVo = (file: FileVo, detail: { name: string; index: number }) => void;

export interface UploadFileParams {
    file: FileVo | FileVo[];
    name: string;
    index: number;
}
```

:::

### CSS Variables

| Variable                              | Description                          | Default                       |
| ------------------------------------- | ------------------------------------ | ----------------------------- |
| `--hy-upload-image-width`             | Preview image size                   | `80px`                        |
| `--hy-upload-text-font-size`          | Hint text font size                  | `11px`                        |
| `--hy-upload-radius`                  | Upload item border radius            | `2px`                         |
| `--hy-upload-item-margin`             | Upload item outer margin             | `0 8px 8px 0`                 |
| `--hy-upload-deletable-size`          | Delete button size                   | `14px`                        |
| `--hy-upload-other-bg`                | File type background color           | `rgb(242, 242, 242)`          |
| `--hy-upload-text-color`              | Hint text color                      | Follows `--hy-text-color--grey`  |
| `--hy-upload-button-background`       | Upload button background color       | Follows `--hy-background--empty` |
| `--hy-upload-button-hover-background` | Upload button pressed-state background color | Follows `--hy-background--hover` |
| `--hy-upload-error`                   | Danger color                         | Follows `--hy-error`             |
| `--hy-upload-primary`                 | Primary theme color                  | Follows `--hy-primary`           |
| `--hy-upload-success`                 | Success color                        | Follows `--hy-success`           |

<demo-model url="pages-design/upload/upload"></demo-model>

[^1]: all: all types; media: media; image: image type; file: file type; video: video type;