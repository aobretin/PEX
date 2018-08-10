const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '', dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'node_modules': 'node_modules',
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'assets': resolve('src/assets'),
        'config': resolve('src/modules/Root/styles/_importInModules.scss'),
        // our modules
        'CONSTANTS': resolve('src/constants'),
        'helpers': resolve('src/helpers'),
        'validations': resolve('src/validations'),
        'services': resolve('src/services'),
        'modules': resolve('src/modules'),
        'reusables': resolve('src/reusable-components'),
        'router': resolve('src/router'),
        'store': resolve('src/store'),
        'translations': resolve('src/translations'),
        'pages': resolve('src/pages'),
        'filters': resolve('src/filters'),
        'overwrites': resolve('src/overwrites')
        // sub aliases
      }
    },
    module: {
      rules: [
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader'
          }
        }
      ]
    }
  }
}
