const path = require('path')

module.exports = {
  entry: {
    main: [
      './src/pageOne',
      './src/pageTwo'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]_[hash:8].js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'babel-loader'
      }
    ]
  }
}