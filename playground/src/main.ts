/*
 * @Author: TuXunJia
 * @Date: 2025-07-25 15:08:41
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-08-01 08:41:05
 */
import bdUI from '@yf-bigdata/vue3-ui';
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.less';
import { createApp } from 'vue';
import app from './app.vue';

const appInstance = createApp(app);
// appInstance.use(Antd);
appInstance.use(bdUI);
appInstance.mount('#app');
