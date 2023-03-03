import path from 'path';
import { defineConfig } from 'vite';

// 简化入口文件方法
function resolve(str: string) {
  return path.resolve(__dirname, str);
}

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve('./src/index.ts'),
      name: 'SXF-Design',
      // the proper extensions will be added
      fileName: 'sxf-design',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'react',
          reactDOM: 'react-dom',
        },
      },
    },
  },
});
