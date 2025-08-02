/*
 * @Author: TuXunJia
 * @Date: 2025-07-28 19:02:24
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-08-01 09:45:12
 */
import { defineConfig } from 'vitepress';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/bigdata-vue3-ui-docs/' : '/',
  themeConfig: {
    siteTitle: 'Vue3-UI',
    nav: [
      { text: '指南', link: 'guide' },
      { text: '组件', link: '/components' },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/fantastic9499/yf-bigdata-vue3-ui',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '基础',
          items: [
            {
              text: '安装',
              link: '/guide/installation',
            },
          ],
        },
      ],
      '/components/': [{ text: '按钮', link: '/components/button' }],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          // ant-design-vue组件库需要启用该配置
          javascriptEnabled: true,
        },
      },
    },
  },
});
