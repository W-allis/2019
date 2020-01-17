const { override, fixBabelImports, addLessLoader, useBabelRc, addBabelPlugins } = require('customize-cra')
const useGzip = true
const productionGzipExtensions = ['js', 'css']


module.exports = override(
  config => {
    // console.log(process.env.analyzer)
    if (process.env.analyzer) {
      const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
      config.plugins.push(
        new WebpackBundleAnalyzer()
      )
    }

    return config
  },
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addLessLoader({
    javascritpEnabled: true,
    modifyVars: { '@primary-color': '#1da57a' }
  }),
  ...addBabelPlugins(
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ),
  // config => {
  //   console.log(config.plugins)
  //   if (useGzip) {
  //     const CompressionWebpackPlugin = require('compress-webpack-plugin')
  //     config.plugins.push(new CompressionWebpackPlugin({
  //       asset: '[path].gz[query]',
  //       algorithm: 'gzip',
  //       test: new RegExp(
  //         '\\.(' +
  //         productionGzipExtensions.join('|') +
  //         ')$'
  //       ),
  //       threshold: 10240,
  //       minRatio: 0.8
  //     }))
  //   }
  //   console.log(config.plugins)
  //   return config
  // },
)