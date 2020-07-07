const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  publicPath:'./',
  productionSourceMap:false
  // configureWebpack: {
  //   plugins: [
  //     new UglifyJsPlugin({
  //       uglifyOptions: {
  //         compress: {
  //           drop_console: true
  //         }
  //       }
  //     })
  //   ]
  // }
}