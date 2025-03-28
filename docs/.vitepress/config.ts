import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  appearance: 'dark',
  lang: 'zh-CN',
  title: '华玥组件库',
  description: '自定义移动端vue3组件',
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      title: '我的文档',
      description: '这是一个 VitePress 中文文档示例'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'My Documentation',
      description: 'This is a VitePress documentation example'
    }
  },
  themeConfig: {
    logo: 'https://pic1.imgdb.cn/item/67d7edcc88c538a9b5bfec44.png',
    search: {
      provider: 'local'
    },
    // aside: false,
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    nav: [
      {
        text: '组件库',
        link: '/components/start',
        items: [
          { text: '空状态', link: '/start' },
          { text: '空状态', link: '/empty' },
        ],
      },
      {
        text: 'api',
        link: '/api/index'
      },
      {
        text: '下载软件',
        link: '/download/service'
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
      '/components/': [
        {
          text: '组件库',
          items: [
            {
              text: '快速开始',
              link: '/components/start',
            },
            { text: '登录组件', link: '/components/login' },
            { text: '表单组件', link: '/components/form' },
            { text: '空状态组件', link: '/components/empty' },
            { text: '底部导航栏组件', link: '/components/tabbar' },
            { text: '金额组件', link: '/components/price' },
            { text: '选项卡组件', link: '/components/tabs' },
            { text: '上传组件', link: '/components/upload' },
            // ...
          ],
        },
        {
          text: '基础组件',
          items: [
            { text: 'Icon 图标', link: '/components/icon' },
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Cell 单元格', link: '/components/cell' },
            { text: 'Badge 徽标', link: '/components/badge' },
            { text: 'Tag 标签', link: '/components/tag' },
            { text: 'Swiper 轮播图', link: '/components/swiper' }
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'Form 表单', link: '/components/form' },
            { text: 'Calendar 日历', link: '/components/calendar' },
            { text: 'Select 下拉框', link: '/components/select' },
            { text: 'Picker 选择器', link: '/components/picker' },
            { text: 'DatetimePicker 时间选择器', link: '/components/datetimePicker' },
            { text: 'Search 搜索', link: '/components/search' },
            { text: 'rate 评分', link: '/components/rate' },
            { text: 'NumberBox 步进器', link: '/components/numberBox' },
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Textarea 文本域', link: '/components/textarea' },
            { text: 'CheckButton 复选框按钮', link: '/components/checkButton' },
            { text: 'Checkbox 复选框', link: '/components/checkbox' },
            { text: 'Radio 单选框', link: '/components/radio' },
            { text: 'Slider 滑块', link: '/components/slider' },
            { text: 'Switch 开关', link: '/components/switch' },
            { text: 'Upload 上传', link: '/components/upload' },
          ]
        },
        {
          text: "布局组件",
          items: [
            {text: 'List 虚拟列表', link: '/components/list'},
            {text: 'LineProgress 线形进度条', link: '/components/lineProgress'},
            {text: 'ScrollList 横向滚动列表', link: '/components/scrollList'},
            {text: 'Line 线条', link: '/components/line'},
            {text: 'Card 卡片', link: '/components/card'},
            {text: 'Overlay 遮罩层', link: '/components/overlay'},
            {text: 'Grid 宫格布局', link: '/components/grid'},
            {text: 'Waterfall 瀑布流', link: '/components/waterfall'},
            {text: 'Divider 分割线', link: '/components/divider'}
          ]
        },
        {
          text: "反馈组件",
          items: [
            { text: 'Tooltip 长按提示', link: '/components/tooltip' },
            { text: 'ActionSheet 操作菜单', link: '/components/actionSheet' },
            { text: 'Warn 警告提示', link: '/components/warn' },
            { text: 'NoticeBar 滚动通知', link: '/components/noticeBar' },
            { text: 'SwipeAction 滑动单元格', link: '/components/swipeAction' },
            { text: 'FoldingPanel 折叠面板', link: '/components/foldingPanel' },
            { text: 'Popup 弹出层', link: '/components/popup' },
            { text: 'Modal 模态框', link: '/components/modal' }
          ]
        }
      ],
      '/api/': [
        {
          text: '开发指南',
          items: [
            {
              text: '介绍',
              link: '/api/index',
            },
            {
              text: '便捷工具',
              link: '/api/index',
            },
          ]
        },

        {
          text: '网络',
          items: [
            {
              text: 'http请求封装',
              link: '/api/http',
            },
          ]
        },
        {
          text: '工具库',
          items: [
            {
              text: '节流防抖',
              link: '/api/throttle'
            },
            {
              text: 'base64加密解密',
              link: '/api/encrypt'
            },
            {
              text: '递归',
              link: '/api/deepClone'
            },
            {
              text: '清空数据',
              link: '/api/clear'
            },
            {
              text: '字节转换大小',
              link: '/api/bytesToSize'
            },
            {
              text: '时间格式化',
              link: '/api/formatTime'
            },
            {
              text: '本地图片转换base64',
              link: '/api/imgToBase64'
            },
            {
              text: '对象参数转换地址栏参数',
              link: '/api/objectToParams'
            },
            {
              text: '数值转换px单位',
              link: '/api/addUnit'
            }
          ]
        }
      ],
      '/download': [
        {
          text: '免费下载软件',
          items: [
            {
              text: '前端下载软件',
              link: '/download/web',
            },
            {
              text: '服务器下载软件',
              link: '/download/service',
            },
            {
              text: '后端下载软件',
              link: '/download/java',
            }
          ]
        },
      ]
    },
  },
});
