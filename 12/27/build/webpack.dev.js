const merge = require('webpack-merge')
const base = require('./webpack.base')
const HtmlWepbackPlugin = require('html-webpack-plugin')
const Foo = require('../foo')

module.exports = merge(base, {
  plugins: [
    new HtmlWepbackPlugin({
      template: './01.html',
      inject: 'body'
    }),
    new Foo()
  ],
  devServer: {
    port: 9536
  }
})