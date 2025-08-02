/*
 * @Author: TuXunJia
 * @Date: 2025-07-28 19:57:03
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-08-01 09:44:50
 */
import lib from '@yf-bigdata/vue3-ui';
import antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import DefaultTheme from 'vitepress/theme';
import { onMounted } from 'vue';
import './custom.css';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router }) => {
    // 注册组件库
    app.use(lib);
    app.use(antd);
    onMounted(() => {});
  },
};
