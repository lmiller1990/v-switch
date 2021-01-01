const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './example/webpack-entry.ts',
  output: {
    path: path.resolve(__dirname, './example')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue/]
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devServer: {
    overlay: true,
    historyApiFallback: true
  }
}
