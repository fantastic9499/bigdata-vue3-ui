/*
 * @Author: TuXunJia
 * @Date: 2025-07-28 17:25:06
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-28 17:48:41
 * @Description: 发布组件库
 */
import { series } from "gulp";
import { pkgPath } from "../utils/paths";
import run from "../utils/run";

export const publishComponent = async () => {
	run("release-it", `${pkgPath}/vue3-ui`);
};

export default series(async () => publishComponent());
