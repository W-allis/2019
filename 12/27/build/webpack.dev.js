const merge = require('webpack-merge')
const base = require('./webpack.base')
const HtmlWepbackPlugin = require('html-webpack-plugin')
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin')
const Webpack = require('webpack')

const cmd = require('node-cmd')

const config = require('../config')

const _env = require('../config/dev.config')

const Foo = require('../foo')

// const ip = cmd.get('ipconfig')

// console.log(ip)

module.exports = merge(base, {
  plugins: [
    new HtmlWepbackPlugin({
      template: './index.html',
      inject: 'body'
    }),
    new Webpack.DefinePlugin({
      'process.env': _env
    }),
    new Foo(),
    ...(_env.weinre && config.weinreOpen ? [new OpenBrowserWebpackPlugin({ url: `http://localhost:${_env.weinrePort}` })] : [])
  ],
  devServer: {
    host: '192.168.30.249',
    port: 9536
  }
})

if (_env.weinre) {
  // cmd.get(`spy-debugger -p ${_env.weinrePort}`)
  // cmd.get(`spy-debugger initCA`)
  cmd.get(`weinre --httpPort ${_env.weinrePort} --boundHost -all-`)
}