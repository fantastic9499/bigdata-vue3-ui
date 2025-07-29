/*
 * @Author: TuXunJia
 * @Date: 2025-07-26 23:04:12
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-27 21:12:10
 * @Description: less task
 */
const { src, dest } = require("gulp");
const less = require("gulp-less");
const autoprefixer = require("gulp-autoprefixer");
// import autoprefixer from "gulp-autoprefixer";

const lessTask = () => {
	return src("src/style/*.less")
		.pipe(less())
		.pipe(
			autoprefixer.default({
				overrideBrowserslist: ["> 1%", "last 2 versions"], // 小写 l
				cascade: true,
			})
		)
		.pipe(dest("dist/style"));
};

exports.default = lessTask;
