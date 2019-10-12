module.exports = {
    // parser: 'sugarss',
    plugins: [
      require('postcss-import')({
      }),
      require('autoprefixer')({
        overrideBrowserslist: ['last 2 versions']      //必须设置支持的浏览器才会自动添加添加浏览器兼容
      })
    ]
  }