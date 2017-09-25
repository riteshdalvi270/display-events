module.exports = {
    entry: './src/js/pages/DisplayComponents.js',
    output: {
      path: __dirname,
      filename: './src/js/DisplayComponents.min.js'
    },
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          query: {
            presets: ['stage-0', 'es2015', 'react'],
            plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
          },
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/
        }
      ]
    }
  };