function MyExampleWebpackPlugin() {

};

// 在插件函数的 prototype 上定义一个 `apply` 方法。
MyExampleWebpackPlugin.prototype.apply = function (compiler) {
  compiler.plugin('compilation', function (compilation) {
    compilation.plugin("optimize", function () {
      console.log("这里被触发了哦")
    })
  })
}

module.exports = MyExampleWebpackPlugin
