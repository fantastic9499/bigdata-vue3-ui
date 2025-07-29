/*
 * @Author: TuXunJia
 * @Date: 2025-07-25 16:43:28
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-25 16:48:38
 */
import type { App, Plugin } from "vue";
type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T>(comp: T) => {
	(comp as SFCWithInstall<T>).install = (app: App) => {
		const name = (comp as any).name;
		//注册组件
		app.component(name, comp as SFCWithInstall<T>);
	};
	return comp as SFCWithInstall<T>;
};
