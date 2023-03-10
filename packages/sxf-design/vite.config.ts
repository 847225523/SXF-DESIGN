import path from 'path';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
// 简化入口文件方法
function resolve(str: string) {
  return path.resolve(__dirname, str);
}

export default (props: any) => {
  const { mode } = props;
  // 配置开发环境
  if (mode === 'development') {
    return defineConfig({
      server: {
        hmr: true, //开启热更新
        port: 7000,
        open: true,
      },
      resolve: {
        alias: {
          '@': resolve('./src'),
        },
      },
      plugins: [react()],
    });
  } else {
    // 配置生产环境打包
    return defineConfig({
      build: {
        minify: 'terser', // boolean | 'terser' | 'esbuild'
        sourcemap: true, // 输出单独 source文件
        cssCodeSplit: true,
        lib: {
          // Could also be a dictionary or array of multiple entry points
          entry: resolve('./src/index.ts'),
          name: 'sxf-design',
          // // the proper extensions will be added
          fileName: 'sxf-design',
          formats: ['es', 'umd', 'cjs'],
        },
        rollupOptions: {
          // 确保外部化处理那些你不想打包进库的依赖
          external: ['react', 'react-dom', /node_modules/, 'antd', 'react/jsx-runtime'],
          output: [
            {
              //打包格式
              format: 'es',
              //打包后文件名
              entryFileNames: '[name].mjs',
              //让打包目录和我们目录对应
              preserveModules: true,
              preserveModulesRoot: 'src/components',
              exports: 'named',
              //配置打包根目录
              dir: './dist/es',
            },
            {
              //打包格式
              format: 'umd',
              //打包后文件名
              entryFileNames: '[name].js',
              //配置打包根目录
              dir: './dist/umd',
              name: 'sxf-design',
              globals: {
                react: 'React',
                'react-dom': 'ReactDom',
                antd: 'antd',
              },
            },
            {
              //打包格式
              format: 'cjs',
              //打包后文件名
              entryFileNames: '[name].cjs',
              //让打包目录和我们目录对应
              preserveModules: true,
              preserveModulesRoot: 'src/components',
              exports: 'named',
              //配置打包根目录
              dir: './dist/lib',
            },
          ],
        },
      },
      plugins: [react(), visualizer({ open: true, brotliSize: true, filename: 'report.html' })],
    });
  }
};
