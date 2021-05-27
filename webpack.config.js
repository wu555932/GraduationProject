/**
 * @Author: Your name
 * @Date:   2021-04-20 16:14:28
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-04-20 16:20:16
 */
'use strict';

const path = require('path')
const devserver = require('webpack-dev-server')
const webpack = require('webpack')
const Htmlwebpackplugin = require('html-webpack-plugin')
const vueloaderplugin = require('vue-loader/lib/plugin')

module.exports = {
  devserver:{
    open:true,
    port:3000,
    contentBase:'./src/dist'
  },
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'./src/dist'),
    filename:'bundle.js'
  },
  plugins:[
    new Htmlwebpackplugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new vueloaderplugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(wofff2?|eot|ttf|otf|woff)(\?.*)?$/,
        use: ['url-loader']
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.json$/,
        use: ['json-loader']
      }
    ]
  },

}