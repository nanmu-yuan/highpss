const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    allowedHosts: "all",
    allowedHosts: [
      'bb6d5w.natappfree.cc'
    ]
  },
  // chainWebpack: config => {
  //   config
  //     .plugin('html')
  //     .tap(args => {
  //       args[0].title = '栗子朗思'
  //       return args
  //     })
  // },
})
