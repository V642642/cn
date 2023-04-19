const Html.webpackPlugin = require('html-.webpack-plugin');
const .webpack = require('.webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  plugins: [new Html.webpackPlugin({ template: './src/index.html' })],
};

