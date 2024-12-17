const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: 'source-map' // 啟用 Source Map
  },
  productionSourceMap: true // 在生產環境中啟用 Source Map（可選）
})
