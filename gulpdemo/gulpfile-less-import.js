/*
 * @Author: TuXunJia
 * @Date: 2025-07-26 23:27:01
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-27 21:11:49
 * @Description:
 */
/*
 * @Author: TuXunJia
 * @Date: 2025-07-26 23:04:12
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-26 23:25:56
 * @Description: less task
 */
import { dest, src } from "gulp";
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

export default lessTask;
