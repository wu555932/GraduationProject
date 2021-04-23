/**
 * @Author: Your name
 * @Date:   2021-04-20 16:37:09
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-04-23 09:46:33
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
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test:/\.scss$/,
        use:['style-loader','css-loader','sass-loader']
      },
      {
        test:/\.(wofff2?|eot|ttf|otf|woff)(\?.*)?$/,
        use:['url-loader']
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg|svg)$/,
        use: ['file-loader']
      },
      {
        test:/\.json$/,
        use:['json-loader']
      }
    ]
  }

}