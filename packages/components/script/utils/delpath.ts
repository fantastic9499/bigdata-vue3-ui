/*
 * @Author: TuXunJia
 * @Date: 2025-07-27 14:43:40
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-28 16:43:42
 * @Description: 删除指定目录下的文件
 */
import fs from "fs";
import { resolve } from "path";

// 需要保留的文件
const keepFiles = ["package.json", "README.md", "CHANGELOG.md", "LICENSE"];

export const delPath = async (path: string) => {
	if (!fs.existsSync(path)) return;

	fs.readdirSync(path).forEach((file) => {
		const curPath = resolve(path, file);

		if (fs.statSync(curPath).isDirectory()) {
			if (file !== "node_modules") {
				// 递归删除子目录
				fs.rmSync(curPath, { recursive: true, force: true });
			}
		} else {
			// 删除非保留文件
			if (!keepFiles.includes(file)) {
				fs.unlinkSync(curPath);
			}
		}
	});
};
