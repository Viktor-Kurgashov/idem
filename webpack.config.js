const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    // publicPath: '/idem/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(svg|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Idem Test',
      filename: 'index.html',
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
    }),
/*
    new HtmlWebpackPlugin({
      title: 'Idem Test Chat',
      filename: 'chat.html',
      template: 'src/chat.html',
      favicon: 'src/favicon.ico',
    })
*/
  ],
  resolve: {
    alias: {
      Images: path.resolve(__dirname, 'src/images/'),
    },
  },
}