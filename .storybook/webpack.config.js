const SourcePlugin = require('./sourceCodeUtils/webpackPlugin')
const path = require('path')

module.exports = ({ config }) => {
  // remove Storybooks default CSS rules and replace with functioning CSS modules setup
  config.module.rules.splice(2, 1, {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader',
        options: { sourceMap: true },
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: {
            mode: 'local',
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },
        },
      },
    ],
  })
  // add loader that registers raw source code in a cache
  config.module.rules.push({
    test: /\.jsx?$|\.css$/,
    use: [
      {
        loader: path.resolve(__dirname, 'sourceCodeUtils/webpackLoader.js'),
        options: { root: path.resolve(__dirname, '../src') },
      },
    ],
  })
  // add loader that registers compiled source code in a cache
  config.module.rules.unshift({
    test: /\.jsx?$|\.css$/,
    use: [
      {
        loader: path.resolve(__dirname, 'sourceCodeUtils/webpackLoader.js'),
        options: {
          root: path.resolve(__dirname, '../src'),
          compiled: true,
        },
      },
    ],
  })
  // add plugin that collects the source code
  config.plugins.push(new SourcePlugin())
  // prevent filename mangling (which b0rks source file switching)
  config.mode = 'development'
  // prevent minification
  config.optimization.minimizer = []
  return config
}
