/*
 * @Author: TuXunJia
 * @Date: 2025-07-25 15:35:01
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-25 15:36:24
 */
declare module "*.vue" {
	import type { DefineComponent } from "vue";
	const component: DefineComponent<{}, {}, any>;
	export default component;
}
