const { resolve } = require('path');
const webpack = require('webpack');

var path = require('path');
module.exports = {
    entry: [
      'react-hot-loader/patch',
      // activate HMR for React

      'webpack-dev-server/client?http://localhost:3020',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates


      './index.js'
      // the entry point of our app
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'static'),
    publicPath: '/'
  },

  devServer: {
    hot: true,
    // activate hot reloading

    contentBase: resolve(__dirname, 'static'),
    // match the output path

    publicPath: '/'
    // match the output `publicPath`
  },

  context: resolve(__dirname, 'client'),
  devtool: 'inline-source-map',

  module: {
    loaders: [
    {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
        ],
    },
    {
      test: /\.(png|woff2|svg|ttf|woff|eot)(\?.*)?$/, loader: 'url'
    },
    {
      test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.md$/,
      loader: 'raw-loader'
    } ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // activates HMR

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
};
