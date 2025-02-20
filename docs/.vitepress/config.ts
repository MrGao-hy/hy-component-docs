import { defineConfig } from 'vitepress';

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
      ]
    },
  },
});
