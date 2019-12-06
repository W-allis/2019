const { override, fixBabelImports, addLessLoader, useBabelRc, addBabelPlugins } = require('customize-cra')

module.exports = override(
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
  )
)