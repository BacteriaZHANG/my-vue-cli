'use strict'
const path = require('path')
const webpack = require('webpack')
const Package = require('../package.json')

module.exports = {
  entry: {
    vendor: Object.keys(Package.dependencies).filter((item) => {
      return item !== 'vue'
    })
  },
  output: {
    path: path.join(__dirname, '../static/js'),
    filename: 'dll.[name].js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../manifest/', '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
