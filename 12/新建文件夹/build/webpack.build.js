const merge = require('webpack-merge')
const base = require('./webpack.base')
const HtmlWepbackPlugin = require('html-webpack-plugin')
const Webpack = require('webpack')


const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')

const config = require('../config')

const _env = require('../config/dev.config')

const buildConfig = merge(base, {
  performance: {
    hints: false
  }, 
  mode: 'production',
  plugins: [
    new HtmlWepbackPlugin({
      template: './index.html',
      inject: 'body'
    }),
    new Webpack.DefinePlugin({
      'process.env': _env
    }),
    new DllReferencePlugin({
      manifest: require('../dist/manifest.json')
    })
  ]
})

if (config.analyze) {
  const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

  buildConfig.plugins.push(new WebpackBundleAnalyzer())
}
 
module.exports = buildConfig