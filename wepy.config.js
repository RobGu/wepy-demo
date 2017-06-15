var prod = process.env.NODE_ENV === 'production'

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  compilers: {
    less: {
      outputStyle: 'compressed'
    },
    babel: {
      sourceMap: true,
      presets: [
        'es2015',
        'stage-0'
      ],
      plugins: [
        'transform-decorators-legacy',
        'transform-export-extensions',
        'syntax-export-extensions'
      ]
    }
  },
  plugins: {
  }
}

if (prod) {
  delete module.exports.compilers.babel.sourcesMap
  // 压缩 less
  // module.exports.compilers['less'] = {outputStyle: 'compressed'}

  // less
  module.exports.compilers['less'] = { compress: true }

  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {
      }
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }
  }
}
