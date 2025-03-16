import { defineConfig } from 'vitepress';
import gitalkPlugin from 'vuepress-plugin-gitalk';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: '华玥组件库',
  description: 'Vite & Vue powered static site generator.',
  themeConfig: {
    logo: '',
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
            { text: 'Badge 徽标', link: '/components/badge' },
            { text: 'Tag 标签', link: '/components/tag' },
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'Form 表单', link: '/components/form' },
            { text: '日历', link: '/components/calendar' },
            { text: 'Select 下拉框', link: '/components/select' },
            { text: 'Picker 选择器', link: '/components/picker' },
            { text: 'DatetimePicker 时间选择器', link: '/components/datetimePicker' },
            { text: 'Search 评分', link: '/components/search' },
            { text: 'NumberBox 步进器', link: '/components/numberBox' },
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Textarea 文本域', link: '/components/textarea' },
            { text: 'Checkbox 复选框', link: '/components/checkbox' },
            { text: 'Radio 单选框', link: '/components/radio' },
            { text: 'Slider 滑块', link: '/components/slider' },
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
