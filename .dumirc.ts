import { defineConfig } from 'dumi';
import path from 'path';
import { version } from './package.json';

let base: string | undefined;
let publicPath: string | undefined;

if (process.env.PREVIEW !== '1') {
  base = '/sxf-design/'; // 后续部署到gh-pages如果不配置路径会找不到资源
  publicPath = '/sxf-design/';
}

export default defineConfig({
  base,
  publicPath,
  title: 'SXF Design', // 站点名称
  outputPath: 'docs-dist', // 输出文件夹
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      // 在这里修改components的匹配路径
      { type: 'component', dir: '/packages/sxf-design/src/components' },
    ],
    codeBlockMode: 'passive',
  },
  alias: {
    'sxf-design': path.join(__dirname, 'packages/sxf-design/src'), // 配置引入别名
  },
  themeConfig: {
    name: 'SXF',
    carrier: 'dumi', // 设备状态栏左侧的文本内容
    hd: true,
    rtl: true,
    nav: [
      // dumi的菜单路由
      {
        title: '指南',
        link: '/guide',
      },
      {
        title: '组件',
        link: '/components/Button',
      },
    ],
  },
});
