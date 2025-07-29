/*
 * @Author: TuXunJia
 * @Date: 2025-07-25 16:16:52
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-29 17:43:07
 */
import { withInstall } from "../utils/tool";
import _Button from "./index.vue";
export type { IButtonProps } from "./index.vue";
export { Button };

const Button = withInstall(_Button);
export default Button;
