/*
 * @Author: TuXunJia
 * @Date: 2025-07-25 18:44:53
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-08-01 09:00:09
 */
import vue from '@vitejs/plugin-vue';
// import AutoImport from 'unplugin-auto-import/vite';
// import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    //打包后文件目录
    // outDir: "es",
    //压缩
    minify: true,
    //css分离
    cssCodeSplit: true,
    rollupOptions: {
      input: ['index.ts'],
      //忽略打包vue，less文件
      // external: ['vue', 'ant-design-vue', /\.less$/],
      external: ['vue', 'ant-design-vue', /^ant-design-vue/, /\.less$/],
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          // preserveModules: true,
          // preserveModulesRoot: 'src',
          exports: 'named',
          // 打包目录
          dir: '../vue3-ui/es',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          // preserveModules: true,
          // preserveModulesRoot: 'src',
          exports: 'named',
          dir: '../vue3-ui/lib',
        },
      ],
    },
    lib: {
      entry: './index.ts',
      // name: "vue3-ui",
      fileName: 'vue3-ui',
      // formats: ["es", "umd", "cjs"],
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: './src',
      outDir: ['../vue3-ui/es/src', '../vue3-ui/lib/src'],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsconfigPath: '../../tsconfig.json',
      // cleanVueFileName: true,
    }) as any,
    {
      name: 'replace-less-with-css',
      // 将vue文件中引入的less文件改为css文件
      generateBundle(config, bundle) {
        for (const key in bundle) {
          const bundler = bundle[key];
          if (bundler.type === 'chunk' && typeof bundler.code === 'string') {
            bundler.code = bundler.code.replace(/\.less/g, '.css');
          }
        }
      },
      // generateBundle(config, bundle) {
      // 	console.log("config:", config);
      // 	console.log("bundle:", bundle);
      // 	//这里可以获取打包后的文件目录以及代码code
      // 	const keys = Object.keys(bundle);
      // 	for (const key of keys) {
      // 		const bundler: any = bundle[key as any];
      // 		// rollup内置方法,将所有输出文件code中的.less换成.css,因为我们没有打包less文件
      // 		this.emitFile({
      // 			type: "asset",
      // 			fileName: key, //文件名名不变
      // 			source: bundler.code.replace(/\.less/g, ".css"),
      // 		});
      // 	}
      // },
    },
    // Components({
    //   resolvers: [
    //     AntDesignVueResolver({
    //       importStyle: 'less',
    //       resolveIcons: true,
    //     }),
    //   ],
    //   dts: 'typings/components.d.ts',
    //   include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    // }) as any,
    // AutoImport({
    //   include: [
    //     /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    //     /\.vue$/,
    //     /\.vue\?vue/, // .vue
    //   ],
    //   imports: ['vue', 'vue-router'],
    //   dts: 'typings/auto-imports.d.ts',
    // }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
