/**
 * @Author: Your name
 * @Date:   2021-04-20 16:37:09
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-04-20 19:07:40
 */
'use strict';

const path = require('path');
const webpack = require('webpack');
const devserver = require('webpack-dev-server')
const Htmlwebpackplugin = require('html-webpack-plugin')
const vueloaderplugin = require('vue-loader/lib/plugin')

module.exports = {

  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './src/dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        devserver: {
          open: true,
          port: 3000,
          contentBase: './src/dist'
        },
      }
    }),
    new Htmlwebpackplugin({
      template:path.join(__dirname,'./src/index.html'),
      filename:'index.html'
    }),
    new vueloaderplugin()
  ],

  module: {
    rules: [
      {
        test:/\.vue$/,
        use:['vue-loader']
      }
    ]
  }

}