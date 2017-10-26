const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './front_end/index.jsx'],
  output: {
    path: `${__dirname}/src/main/resources/static/admin/`,
    filename: 'admin-bundle.js',
  },

  devServer: {
    inline: true,
    port: 7777,
    contentBase: `${__dirname}/src/main/resources/static/admin/`,
    historyApiFallback: true,
  },

  resolve: {
    modules: [
      path.resolve('./front_end'),
      path.resolve('./node_modules'),
    ],
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'stage-2'],
          plugins: ['transform-object-rest-spread'],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: ['url-loader?limit=100000'],
      },

    ],
  },


};
