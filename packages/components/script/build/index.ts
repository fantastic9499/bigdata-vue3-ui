/*
 * @Author: TuXunJia
 * @Date: 2025-07-27 15:05:38
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-31 19:54:09
 * @Description: 打包时，删除打包产物目录
 */

import { dest, parallel, series, src } from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import less from 'gulp-less';
import { delPath } from '../utils/delpath';
import { componentPath, pkgPath } from '../utils/paths';
import run from '../utils/run';

//删除dist
export const removeDist = () => {
  return delPath(`${pkgPath}/vue3-ui`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/vue3-ui/lib/src`))
    .pipe(dest(`${pkgPath}/vue3-ui/es/src`));
};

// 打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
