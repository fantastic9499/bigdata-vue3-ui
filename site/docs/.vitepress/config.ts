/*
 * @Author: TuXunJia
 * @Date: 2025-07-28 19:02:24
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-28 20:05:59
 */
import { defineConfig } from "vitepress";

export default defineConfig({
	// base: process.env.NODE_ENV === "production" ? "/vue3-ui/" : "/",
	themeConfig: {
		siteTitle: "Vue3-UI",
		nav: [
			{ text: "指南", link: "guide" },
			{ text: "组件", link: "/components" },
		],
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/fantastic9499/yf-bigdata-vue3-ui",
			},
		],
		sidebar: {
			"/guide/": [
				{
					text: "基础",
					items: [
						{
							text: "安装",
							link: "/guide/installation",
						},
					],
				},
			],
			"/components/": [{ text: "按钮", link: "/components/button" }],
		},
	},
});
