/*
 * @Author: TuXunJia
 * @Date: 2025-07-26 23:04:12
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-27 00:04:31
 * @Description: 监听index.html，less样式文件，并在文件变化时自动刷新浏览器
 */
import browserSync from "browser-sync";
import { dest, series, src } from "gulp";
import autoprefixer from "gulp-autoprefixer";
import less from "gulp-less";

const lessTask = () => {
	return src("src/style/*.less")
		.pipe(less())
		.pipe(
			autoprefixer({
				overrideBrowserslist: ["> 1%", "last 2 versions"], // 小写 l
				cascade: true,
			})
		)
		.pipe(dest("dist/style"));
};

const reloadTask = () => {
	browserSync.reload();
};

const browserSyncTask = () => {
	browserSync.init({ server: { baseDir: "./" } });
	// 监听index.html文件变化并刷新浏览器
	browserSync.watch("./index.html", series(reloadTask));
	// browserSync.watch("./index.html").on("change", reloadTask);
	// browserSync.watch("./**/*.*").on("change", reloadTask);

	//监听样式更新触发两个任务
	browserSync.watch("./src/**/*.less", series(lessTask, reloadTask));
};

export default browserSyncTask;
