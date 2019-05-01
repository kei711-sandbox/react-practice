import * as path from 'path';
import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: [
    './src/app/index.tsx',
    'webpack-hot-middleware/client',
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'app', 'index.html') }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
    alias: {
      'react-native': 'react-native-web',
    },
  },

  module: {
    rules: [
      { test: /\.(ts|tsx)$/, loader: 'ts-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
};
