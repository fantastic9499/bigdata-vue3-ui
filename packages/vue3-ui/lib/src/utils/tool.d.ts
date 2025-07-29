import { Plugin } from 'vue';
type SFCWithInstall<T> = T & Plugin;
export declare const withInstall: <T>(comp: T) => SFCWithInstall<T>;
export {};
