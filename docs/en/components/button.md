# Button Component

> This component is internally implemented as a secondary wrapper based on uni-app's basic button component

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :warning: Notes

### 1. Click Event

Use the `@click` event for button clicks, **do not use `@tap`** — `@tap` does not work in the WeChat Mini Program:

```html
<!-- Correct -->
<hy-button text="Click" @click="onClick"></hy-button>

<!-- Incorrect -->
<hy-button text="Click" @tap="onClick"></hy-button>
```

### 2. icon Property

The `icon` property accepts an icon configuration object:

```html
<!-- Using a built-in icon -->
<hy-button text="Delete" :icon="{ name: IconConfig.DELETE }"></hy-button>

<!-- Using a custom icon -->
<hy-button text="Delete" :icon="{ name: 'delete', customPrefix: 'icon' }"></hy-button>
```

### 3. stop Event Bubbling

By default, `stop` is `true`, which prevents event bubbling. To allow bubbling, set `stop="false"`:

```html
<hy-button text="Allow Bubbling" :stop="false" @click="onClick"></hy-button>
```

### 4. Throttling

Use `throttleTime` to set the throttle interval for button clicks, preventing repeated clicks:

```html
<!-- Can only be clicked once within 3 seconds -->
<hy-button text="Submit" :throttle-time="3000" @click="onSubmit"></hy-button>
```

### 5. Open Capabilities

The component supports all open capabilities of the uni-app button component. Refer to the official documentation for usage:

```html
<!-- Get user info -->
<hy-button open-type="getUserInfo" @getuserinfo="onGetUserInfo">Get Info</hy-button>

<!-- Get phone number -->
<hy-button open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber">Get Phone Number</hy-button>
```

## :japanese_castle: Basic Usage Examples

```html
<template>
    <!-- Global usage -->
    <hy-button text="Basic Button"></hy-button>

    <!-- Using a slot -->
    <hy-button>Slot content</hy-button>
</template>
```

### Setting Button Colors

```html
<template>
    <hy-button type="info" text="Default Button"></hy-button>
    <hy-button type="success" text="Success Button"></hy-button>
    <hy-button type="primary" text="Primary Button"></hy-button>
    <hy-button type="error" text="Danger Button"></hy-button>
    <hy-button type="warning" text="Warning Button"></hy-button>

    <!-- Gradient button -->
    <hy-button text="Gradient" color="linear-gradient(to right, red, blue)"></hy-button>
</template>
```

### Plain Buttons

```html
<template>
    <hy-button type="info" text="Plain Default" plain></hy-button>
    <hy-button type="success" text="Plain Success" plain></hy-button>
    <hy-button type="primary" text="Plain Primary" plain></hy-button>
    <hy-button type="error" text="Plain Danger" plain></hy-button>
    <hy-button type="warning" text="Plain Warning" plain></hy-button>

    <!-- Gradient plain button -->
    <hy-button text="Gradient Plain" color="linear-gradient(to right, red, blue)" plain></hy-button>
</template>
```

### Setting Button Icons

```html
<template>
    <!-- Delete icon -->
    <hy-button type="error" text="Delete" :icon="{ name: IconConfig.DELETE }"></hy-button>

    <!-- Custom icon -->
    <hy-button
        type="error"
        text="Delete"
        plain
        :icon="{ name: 'delete', customPrefix: 'icon' }"
    ></hy-button>

    <!-- Loading button -->
    <hy-button type="success" text="Loading" loading></hy-button>

    <!-- Custom loading text -->
    <hy-button type="primary" loading loading-text="Submitting"></hy-button>
</template>

<script setup>
    import { IconConfig } from 'hy-app';
</script>
```

### Button Shapes

```html
<template>
    <hy-button type="success" text="Square Button" shape="square"></hy-button>
    <hy-button type="success" text="Rounded Button" shape="circle"></hy-button>
</template>
```

### Button Sizes

```html
<template>
    <hy-button type="success" text="Large Button" size="large"></hy-button>
    <hy-button type="success" text="Default Button" size="medium"></hy-button>
    <hy-button type="success" text="Small Button" size="small"></hy-button>
    <hy-button type="success" text="Mini Button" size="mini"></hy-button>
</template>
```

### Setting Various Button States

```html
<template>
    <!-- Hairline button -->
    <hy-button text="Hairline Button" :hairline="true"></hy-button>

    <!-- Borderless button -->
    <hy-button text="Borderless Button" :border="false"></hy-button>

    <!-- Disabled button -->
    <hy-button text="Disabled Button" :disabled="true"></hy-button>

    <!-- Disabled state (with loading) -->
    <hy-button text="Disabled" :disabled="true" loading></hy-button>
</template>
```

### Throttle Control

```html
<template>
    <!-- Can only be clicked once within 3 seconds -->
    <hy-button type="primary" text="Submit" :throttle-time="3000" @click="onSubmit"></hy-button>
</template>

<script setup>
    const onSubmit = () => {
        uni.showToast({
            title: 'Submitted successfully',
            icon: 'success',
        });
    };
</script>
```

### Custom Styles

```html
<template>
    <!-- Custom padding -->
    <hy-button text="Custom Style" :custom-style="{ padding: '20rpx 40rpx' }"></hy-button>

    <!-- Custom class name -->
    <hy-button text="Custom Class" custom-class="my-button"></hy-button>
</template>

<style lang="scss" scoped>
    :deep(.my-button) {
        border-radius: 10rpx;
        box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
    }
</style>
```

### Open Capabilities

```html
<template>
    <!-- Get user info -->
    <hy-button
        open-type="getUserInfo"
        type="primary"
        text="Get User Info"
        @getuserinfo="onGetUserInfo"
    ></hy-button>

    <!-- Get phone number -->
    <hy-button
        open-type="getPhoneNumber"
        type="primary"
        text="Get Phone Number"
        @getphonenumber="onGetPhoneNumber"
    ></hy-button>

    <!-- Open customer service -->
    <hy-button open-type="contact" text="Contact Support" @contact="onContact"></hy-button>

    <!-- Open settings -->
    <hy-button open-type="openSetting" text="Open Settings" @opensetting="onOpenSetting"></hy-button>
</template>

<script setup>
    const onGetUserInfo = (e) => {
        console.log('User info:', e);
    };

    const onGetPhoneNumber = (e) => {
        console.log('Phone number:', e);
    };

    const onContact = () => {
        console.log('Open customer service');
    };

    const onOpenSetting = () => {
        console.log('Open settings');
    };
</script>
```

### Integration of Mini Program Open Capabilities

The Huayue component library has integrated all open capabilities of the uni-app [button component](https://uniapp.dcloud.net.cn/component/button.html) (as of 2025-04-14). Simply use it as described in the uni-app documentation. If you find anything missing, please join our community group to provide feedback.

## API

### Button Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| text | Button text | `string` | - |
| icon | Button icon collection; see [Icon API](./icon#api) for details | `HyIconProps` | - |
| color | Button color; supports linear-gradient values | `string` | - |
| stop | Whether to stop event bubbling | `boolean` | true |
| border | Whether to show the button border | `boolean` | true |
| hairline | Whether to show the button's hairline border | `boolean` | true |
| type | Button style type | `error`\|`warning`\|`success`\|`primary`\|`info` | primary |
| size | Button size | `small`\|`medium`\|`large`\|`mini` | medium |
| shape | Button shape; see above for details | `circle`\|`square` | square |
| plain | Whether the button is plain (transparent background) | `boolean` | false |
| disabled | Whether to disable the button | `boolean` | false |
| loading | Whether the button is loading | `boolean` | false |
| loadingText | Loading prompt text | `string` | - |
| loadingMode | Loading icon type | `spinner`\|`circle`\|`semicircle` | spinner |
| loadingSize | Loading icon size | `string` \| `number` | 13 |
| openType | Open capability; see the uni-app documentation on the button component for details | `string` | - |
| scope | Used by the Alipay Mini Program; valid when open-type is getAuthorize | `phoneNumber`\|`userInfo` | - |
| formType | Used with the `<form>` component; clicking triggers the `<form>` component's submit/reset events respectively | `string` | - |
| appParameter | Parameters passed to the APP when opening it; valid when open-type=launchApp (Note: only works in WeChat Mini Program and QQ Mini Program) | `string` | - |
| hoverStopPropagation | Specifies whether to prevent this node's ancestor nodes from showing the pressed state; valid in WeChat Mini Program (default true) | `boolean` | true |
| lang | Language of the returned user info: zh_CN Simplified Chinese, zh_TW Traditional Chinese, en English | `string` | en |
| sessionFrom | Session source; valid when openType="contact" | `string` | - |
| sendMessageTitle | In-session message card title; valid when openType="contact" | `string` | - |
| sendMessagePath | Mini program path that the in-session message card navigates to when tapped; valid when openType="contact" | `string` | - |
| sendMessageImg | In-session message card image; valid when openType="contact" | `string` | - |
| showMessageCard | Whether to show the in-session message card. When set to true, after the user enters a customer service session, a "mini programs you may want to send" prompt appears in the bottom-right corner; tapping it allows the user to quickly send mini program messages; valid when openType="contact" | `boolean` | false |
| dataName | Extra parameter used for the mini program's data-xxx attribute, retrieved via target.dataset.name | `string` | - |
| throttleTime | Throttle: can only be triggered once within a given period, in milliseconds | `number` | 0 |
| hoverStartTime | How long after pressing before the pressed state appears, in milliseconds | `number` | 0 |
| hoverStayTime | How long the pressed state remains after the finger is released, in milliseconds | `number` | 200 |
| customStyle | Custom external styles to apply | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event | Description | Callback Parameters | Platform |
| --- | --- | --- | --- |
| click | Button click. Do not use the @tap event, as it does not work in the WeChat Mini Program; the return value is the click event and its parameters | event | - |
| getphonenumber | Valid when open-type="getPhoneNumber" | event | WeChat Mini Program, Alipay Mini Program |
| getuserinfo | Returns the retrieved user info when the user taps the button; values obtained from the detail of the returned parameters are the same as uni.getUserInfo | event | WeChat Mini Program, Alipay Mini Program |
| error | Callback fired when an error occurs while using open capabilities | event | WeChat Mini Program |
| opensetting | Callback fired after the authorization settings page is opened and closed | event | WeChat Mini Program |
| launchapp | Callback fired when opening an APP succeeds | event | WeChat Mini Program |
| agreeprivacyauthorization | Callback for the event of the user agreeing to the privacy policy; valid when open-type="agreePrivacyAuthorization" | event | WeChat Mini Program |
| chooseavatar | Callback for retrieving the user's avatar | event | WeChat Mini Program |
| contact | Customer service message callback | event | WeChat Mini Program |

### Slots

| Slot    | Description   | Accepted Value |
| ------- | ------------- | -------------- |
| default | Default slot  | -              |

<demo-model url="pages-design/button/button"></demo-model>