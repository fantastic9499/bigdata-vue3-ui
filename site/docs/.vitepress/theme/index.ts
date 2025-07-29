/*
 * @Author: TuXunJia
 * @Date: 2025-07-28 19:46:36
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-28 19:47:38
 */
import lib from "@yf-bigdata/vue3-ui";
import DefaultTheme from "vitepress/theme";

export default {
	...DefaultTheme,
	enhanceApp: async ({ app }) => {
		// app is the Vue 3 app instance from `createApp()`. router is VitePress'
		// custom router. `siteData`` is a `ref`` of current site-level metadata.
		// 注册组件库
		app.use(lib);
	},
};
