const { webpackConfig: baseClientWebpackConfig, merge } = require('@rails/webpacker');
// const  path = require('path');
const customConfig = require("./custom");

const commonOptions = {
  resolve: {
    extensions: ['.css', '.ts', '.tsx', '.scss']
  }
};

const moduleOptions = {
  module: {
    rules: [
      {
        test: /\.(sass|css|scss)$/,
        use: [
          'sass-loader',
        ]
      }
    ]
  }
};

// Copy the object using merge b/c the baseClientWebpackConfig and commonOptions are mutable globals
const commonWebpackConfig = () => (merge(
  {}, baseClientWebpackConfig, commonOptions, moduleOptions, customConfig));

module.exports = commonWebpackConfig;