import { defineConfig } from "vitepress";
import footnote from "markdown-it-footnote";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import llmstxt from "vitepress-plugin-llms";

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: "zh-CN",
  title: "华玥组件库",
  description:
    "华玥UI-是作者打造的开发者全成长周期开源平台，围绕效率、成就、变现三大用户价值布局平台能力，全力服务开发者，旨在成为开发者的好朋友。华玥历经多轮打磨雕刻，集海量高品质华玥模板、实时在线预览、多元化场景模板、轻便好学、易上手等多重优势于一身的开发神器，更自带免费开源可商用属性，为企业集团、公司团队、前端后端开发者、运营大佬、社交达人、学生小白提供了一个零成本的在线开发平台和资源库。",
  ignoreDeadLinks: true,
  locales: {
    root: {
      label: "中文",
      lang: "zh-CN",
      title: "华玥组件库",
      description: "这是一个 VitePress 中文文档示例",
    },
    en: {
      label: "English",
      lang: "en-US",
      title: "My Documentation",
      description: "This is a VitePress documentation example",
    },
  },
  themeConfig: {
    logo: {
      light: "/images/hy_logo_light.png",
      dark: "/images/hy_logo_dark.png",
    },
    nav: [
      {
        text: "组件库",
        link: "/components/intro",
        items: [
          { text: "空状态", link: "/start" },
          { text: "空状态", link: "/empty" },
        ],
      },
      {
        text: "api",
        link: "/api/intro",
      },
      {
        text: "学习文档",
        link: "/download/web",
      },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],
    sidebar: {
      "/components/": [
        {
          text: "开发指南",
          items: [
            { text: "介绍", link: "/components/intro" },
            { text: "快速开始", link: "/components/start" },
            { text: "配置主题", link: "/components/theme" },
            { text: "内置样式", link: "/components/style" },
          ],
        },
        {
          text: "基础组件",
          items: [
            { text: "Badge 徽标", link: "/components/badge" },
            { text: "Button 按钮", link: "/components/button" },
            { text: "Cell 单元格", link: "/components/cell" },
            { text: "Color 颜色", link: "/components/color" },
            {
              text: "ConfigProvider 全局配置",
              link: "/components/configProvider",
            },
            { text: "Icon 图标", link: "/components/icon" },
            { text: "Image 图片", link: "/components/image" },
            { text: "Loading 加载动画", link: "/components/loading" },
            { text: "Swiper 轮播图", link: "/components/swiper" },
            { text: "Tag 标签", link: "/components/tag" },
            { text: "Text 文本", link: "/components/text" },
          ],
        },
        {
          text: "表单组件",
          items: [
            {
              text: "AddressPicker 地址选择器",
              link: "/components/addressPicker",
            },
            { text: "Calendar 日历", link: "/components/calendar" },
            { text: "Checkbox 复选框", link: "/components/checkbox" },
            { text: "CheckButton 复选框按钮", link: "/components/checkButton" },
            {
              text: "DatetimePicker 时间选择器",
              link: "/components/datetimePicker",
            },
            { text: "Form 表单", link: "/components/form" },
            { text: "FormGroup 表单组", link: "/components/formGroup" },
            { text: "Input 输入框", link: "/components/input" },
            { text: "NumberBox 步进器", link: "/components/numberBox" },
            { text: "Picker 选择器", link: "/components/picker" },
            { text: "Radio 单选框", link: "/components/radio" },
            { text: "Rate 评分", link: "/components/rate" },
            { text: "Search 搜索", link: "/components/search" },
            { text: "Slider 滑块", link: "/components/slider" },
            { text: "Switch 开关", link: "/components/switch" },
            { text: "Textarea 文本域", link: "/components/textarea" },
            { text: "Upload 上传", link: "/components/upload" },
          ],
        },
        {
          text: "布局组件",
          items: [
            { text: "Card 卡片", link: "/components/card" },
            { text: "Divider 分割线", link: "/components/divider" },
            { text: "FloatButton 悬浮按钮", link: "/components/floatButton" },
            { text: "Grid 宫格布局", link: "/components/grid" },
            { text: "List 虚拟列表", link: "/components/list" },
            {
              text: "LineProgress 线形进度条",
              link: "/components/lineProgress",
            },
            { text: "Line 线条", link: "/components/line" },
            { text: "Overlay 遮罩层", link: "/components/overlay" },
            { text: "ScrollList 横向滚动列表", link: "/components/scrollList" },
            { text: "Waterfall 瀑布流", link: "/components/waterfall" },
            { text: "Watermark 水印", link: "/components/watermark" },
          ],
        },
        {
          text: "反馈组件",
          items: [
            { text: "ActionSheet 操作菜单", link: "/components/actionSheet" },
            { text: "FoldingPanel 折叠面板", link: "/components/foldingPanel" },
            { text: "Modal 模态框", link: "/components/modal" },
            { text: "NoticeBar 滚动通知", link: "/components/noticeBar" },
            { text: "Notify 消息提示", link: "/components/notify" },
            { text: "Popover 气泡", link: "/components/popover" },
            { text: "Popup 弹出层", link: "/components/popup" },
            { text: "SwipeAction 滑动单元格", link: "/components/swipeAction" },
            { text: "Toast 提示信息", link: "/components/toast" },
            { text: "Tooltip 长按提示", link: "/components/tooltip" },
            { text: "Warn 警告提示", link: "/components/warn" },
          ],
        },
        {
          text: "导航组件",
          items: [
            { text: "BackTop 返回顶部", link: "/components/backTop" },
            { text: "Dropdown 下拉菜单", link: "/components/dropdown" },
            { text: "Empty 空状态", link: "/components/empty" },
            { text: "Menu 侧边菜单栏", link: "/components/menu" },
            { text: "Navbar 自定义导航栏", link: "/components/navbar" },
            { text: "Pagination 分页", link: "/components/pagination" },
            { text: "Subsection 分段器", link: "/components/subsection" },
            { text: "Steps 步骤条", link: "/components/steps" },
            { text: "Tabs 标签", link: "/components/tabs" },
            { text: "TabBar 底部导航栏", link: "/components/tabBar" },
          ],
        },
        {
          text: "其他组件",
          items: [
            { text: "Avatar 头像", link: "/components/avatar" },
            { text: "CodeInput 验证码输入", link: "/components/codeInput" },
            { text: "CountTo 数字滚动", link: "/components/countTo" },
            { text: "CountDown 倒计时", link: "/components/countDown" },
            { text: "Parse 富文本", link: "/components/parse" },
            { text: "Qrcode 二维码", link: "/components/qrcode" },
            { text: "ReadMore 展开阅读更多", link: "/components/readMore" },
            { text: "Signature 签名", link: "/components/signature" },
            { text: "Transition 动画", link: "/components/transition" },
          ],
        },
        {
          text: "业务组件",
          items: [
            { text: "Login 登录", link: "/components/login" },
            { text: "Price 金额", link: "/components/price" },
            { text: "SubmitBar 提交订单", link: "/components/submitBar" },
          ],
        },
      ],
      "/api/": [
        {
          text: "开发指南",
          items: [
            { text: "介绍", link: "/api/intro" },
            { text: "便捷工具", link: "/api/fastTools" },
          ],
        },

        {
          text: "网络",
          items: [{ text: "http请求封装", link: "/api/http" }],
        },
        {
          text: "工具库",
          items: [
            { text: "节流防抖", link: "/api/throttle" },
            { text: "base64加密解密", link: "/api/encrypt" },
            { text: "递归", link: "/api/deepClone" },
            { text: "清空数据", link: "/api/clear" },
            { text: "字节转换大小", link: "/api/bytesToSize" },
            { text: "时间格式化", link: "/api/formatTime" },
            { text: "本地图片转换base64", link: "/api/imgToBase64" },
            { text: "全局唯一标识符", link: "/api/guid" },
            { text: "颜色转换", link: "/api/colorSwitch" },
            { text: "获取元素节点信息", link: "/api/getRect" },
            { text: "对象参数转换地址栏参数", link: "/api/objectToParams" },
            { text: "数组互相转换单位", link: "/api/unitSwitch" },
            { text: "随机数值", link: "/api/random" },
            { text: "校验判断", link: "/api/estimate" },
            { text: "小程序分享", link: "/api/share" },
            { text: "校验规则", link: "/api/inspect" },
          ],
        },
      ],
      "/download": [
        {
          text: "文档集合",
          items: [
            { text: "前端软件集合", link: "/download/web" },
            { text: "服务软件集合", link: "/download/service" },
            { text: "后端软件集合", link: "/download/java" },
          ],
        },
      ],
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索",
          },
          modal: {
            resetButtonTitle: "清除查询条件",
            noResultsText: "没有找到结果",
            footer: {
              selectText: "选择",
              closeText: "关闭",
              navigateText: "导航到结果",
            },
          },
        },
      },
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    // aside: false,
    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/MrGao-hy/" },
      { icon: "gitee", link: "https://gitee.com/MrGao-hy" },
      { icon: "csdn", link: "https://blog.csdn.net/weixin_68340504?type=blog" },
      { icon: "qq", link: "https://d.4rxb.com/s/0zydgj" },
    ],
  },
  head: [["link", { rel: "icon", href: "/images/hy_logo_light.png" }]],
  markdown: {
    config: (md) => {
      md.use(footnote);
      md.use(groupIconMdPlugin);
    },
  },
  vite: {
    server: {
      host: "0.0.0.0",
      port: 6699,
    },
    plugins: [
      groupIconVitePlugin(),
      llmstxt(), // ai理解文档
    ],
  },
});
