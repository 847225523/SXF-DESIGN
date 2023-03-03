const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'], // 自动给文件加后缀，主要是方便开发速度
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      // 处理js和jsx文件
      {
        test: /\.(jsx|js|ts|tsx)?$/,
        include: resolve(__dirname, './src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true, // 开启babel编译缓存
              cacheCompression: false, // 缓存文件不要压缩
            },
          },
          'ts-loader',
        ],
      },
      //   {
      //     test: /\.css$/,
      //     use: [
      //       "style-loader",
      //       "css-loader",
      //       "postcss-loader",
      //     ],
      //   },
      //   {
      //     test: /\.less$/,
      //     use: [
      //       "style-loader",
      //       "css-loader",
      //       "postcss-loader",
      //       {
      //         loader: "less-loader",
      //         options: {
      //           lessOptions: {
      //             javascriptEnabled: true, // 这个主要是后期引入antd时候需要开启
      //           },
      //         },
      //       },
      //     ],
      //   },
      //   {
      //     test: /\.scss$/,
      //     use: [
      //       "style-loader",
      //       "css-loader",
      //       "postcss-loader",
      //       "sass-loader", // 注意使用scss语法时，需要安装 node-sass模块来处理，否则会报错
      //     ],
      //   },
      //   {
      //     test: /\.html$/,
      //     loader: "html-loader",
      //     options: {
      //       // 需要配置这块儿就可以了
      //       esModule: false,
      //     },
      //     exclude: /index.html/,
      //   },
      //   // 处理各种图片
      //   {
      //     test: /\.(png|svg|gif|jpe?g)$/,
      //     type: "asset",
      //     generator: {
      //       filename: "img/[name].[hash:4][ext]",
      //     },
      //     parser: {
      //       dataUrlCondition: {
      //         maxSize: 4 * 1024,
      //       },
      //     },
      //   },
      //   // 处理字体
      //   {
      //     test: /\.(ttf|woff|woff2)$/,
      //     type: "asset/resource",
      //     generator: {
      //       filename: "font/[name].[hash:6][ext]",
      //     },
      //   },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-template-pro',
      template: 'public/index.html',
      inject: true,
    }),
  ],
};
