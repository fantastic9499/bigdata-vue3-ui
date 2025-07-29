/*
 * @Author: TuXunJia
 * @Date: 2025-07-25 16:14:40
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-26 17:02:05
 */
export * from "./src"; // 关键代码：导出所有组件，每个组件可以在使用时分别导入
import { App } from "vue";
import * as components from "./src";

// 通过 install 方法来注册所有组件
export default {
	install: (app: App) => {
		Object.values(components).forEach((component) => {
			if (component.install) {
				app.use(component);
			}
		});
	},
	// install: (app: App) => {
	// 	for (let c in components) {
	// 		app.use(components[c]);
	// 	}
	// },
};
