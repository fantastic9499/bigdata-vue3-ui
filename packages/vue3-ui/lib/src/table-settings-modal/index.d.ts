export type { ITableSettingsModalProps } from './index.vue';
export { TableSettingsModal };
declare const TableSettingsModal: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./index.vue').ITableSettingsModalProps> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
    }>, {
        showModal: (cols: Array<{
            title: string;
            isShow: boolean;
        }>) => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        change: (...args: any[]) => void;
    }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./index.vue').ITableSettingsModalProps> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
    }>, {
        showModal: (cols: Array<{
            title: string;
            isShow: boolean;
        }>) => void;
    }, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./index.vue').ITableSettingsModalProps> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
}>, {
    showModal: (cols: Array<{
        title: string;
        isShow: boolean;
    }>) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (...args: any[]) => void;
}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & import('vue').Plugin;
export default TableSettingsModal;
