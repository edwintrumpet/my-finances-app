/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((accumulator, current) => ({ ...accumulator, [`process.env.${current}`]: JSON.stringify(env[current]) }), {});

  return {
    entry: {
      home: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
    },
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/,

        },
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({
        title: 'My Finances',
        hash: true,
        template: path.resolve(__dirname, 'public/index.html'),
      }),
      new webpack.DllReferencePlugin({
        manifest: require('./modules-manifest.json'),
        context: path.resolve(__dirname, 'src'),
      }),
      new webpack.DefinePlugin(envKeys),
    ],
  };
};
