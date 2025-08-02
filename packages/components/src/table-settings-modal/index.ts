/*
 * @Author: TuXunJia
 * @Date: 2025-07-30 18:14:11
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-30 18:15:15
 */
import { withInstall } from "../utils/tool";
import _TableSettingsModal from "./index.vue";
export type { ITableSettingsModalProps } from "./index.vue";
export { TableSettingsModal };

const TableSettingsModal = withInstall(_TableSettingsModal);
export default TableSettingsModal;
