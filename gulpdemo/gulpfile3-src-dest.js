/*
 * @Author: TuXunJia
 * @Date: 2025-07-26 22:58:25
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-26 22:59:27
 */
const { src, dest } = require("gulp");
const copy = () => {
	return src("src/**/*").pipe(dest("dist"));
};

exports.default = copy;
