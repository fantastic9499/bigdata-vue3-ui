/*
 * @Author: TuXunJia
 * @Date: 2025-07-25 14:42:00
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-31 17:29:47
 */
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 启用内联 JavaScript
        modifyVars: {
          // 如果你需要自定义主题，可以在这里添加主题变量
          // '@primary-color': '#1DA57A',
        },
      },
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: 'less',
          resolveIcons: true,
        }),
      ],
      dts: 'typings/components.d.ts',
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }) as any,
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: ['vue', 'vue-router'],
      dts: 'typings/auto-imports.d.ts',
    }),
  ],
});
