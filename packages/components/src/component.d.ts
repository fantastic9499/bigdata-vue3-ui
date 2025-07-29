/*
 * @Author: TuXunJia
 * @Date: 2025-07-25 17:51:50
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-25 17:53:12
 */
import * as components from "./index";

declare module "@vue/runtime-core" {
	export interface GlobalComponents {
		YfButton: typeof components.Button;
	}
}
export {};
