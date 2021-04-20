/**
 * @Author: Your name
 * @Date:   2021-04-20 16:14:28
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-04-20 16:20:16
 */
'use strict';

const path = require('path')
const devserver = require('webpack-dev-server')

module.exports = {
  devserver:{
    open:true,
    port:3000,
    contentBase:'./src/dist'
  },
  entry:'./src/dist/index.js',
  output:{
    path:path.resolve(__dirname,'./src/dist'),
    filename:'index.js'
  }

}