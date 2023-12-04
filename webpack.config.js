const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './html/index.html',
    services: './html/services.html',
    contact: './html/contact.html',
    mainlogic: './js/mainlogic.js', 
    menulogic: './js/menulogic.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './html/index.html',
      filename: 'index.html',
      chunks: ['index', 'mainlogic'],
    }),
    new HtmlWebpackPlugin({
      template: './html/services.html',
      filename: 'services.html',
      chunks: ['services', 'menulogic'],
    }),
    new HtmlWebpackPlugin({
      template: './html/contact.html',
      filename: 'contact.html',
      chunks: ['contact', 'mainlogic'],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.css',
    }),
  ],
};
