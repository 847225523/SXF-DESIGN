const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    hot: true,
    port: 8068,
    // host: 'sub.zqk8s-baas.uban360.net',
    open: false,
    proxy: {
      // 配置代理
      '/blog': {
        target: 'http://localhost:8081/',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    // new ReactRefreshWebpackPlugin(),
    // new webpack.DefinePlugin({
    //     PRODUCTION: JSON.stringify(true),
    //   })
  ],
});
