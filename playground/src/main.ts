/*
 * @Author: TuXunJia
 * @Date: 2025-07-25 15:08:41
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-27 14:04:45
 */
import bdUI from "@yf-bigdata/vue3-ui";
import { createApp } from "vue";
import app from "./app.vue";

const appInstance = createApp(app);
appInstance.use(bdUI);
appInstance.mount("#app");
