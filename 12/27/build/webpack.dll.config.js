const path = require('path')
const DllPlugin = require('webpack/lib/DllPlugin')

module.exports = {
  entry: {
    vendor: ['jquery', 'echarts']
  },
  output: {
    path: path.resolve(__dirname, '../dist/dll'),
    filename: '[name].dll.js',
    publicPath: '',

    library: '_dll_[name]'
  },
  performance: {
    hints: false
  }, 
  mode: 'production',
  plugins: [
    new DllPlugin({
      name: '_dll_[name]',
      /* 生成manifest文件输出的位置和文件名称 */
      path: path.join(__dirname, '../dist', 'manifest.json')
    })
  ]

}
