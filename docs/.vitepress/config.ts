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
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
        ],
      },

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
    },
  },
});
