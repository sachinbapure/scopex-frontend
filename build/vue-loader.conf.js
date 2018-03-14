'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    extract: isProduction,
    'scss': 'vue-style-loader!css-loader!sass-loader',
    'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
  }),
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
