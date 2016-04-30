var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./app/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.css?$/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss'
    },
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["react", "es2015", "stage-0" ],//, "react-hmre"],
        "plugins": [
          ["transform-decorators-legacy"]
        ]
      }
    },
    {
      test: /\.png$/,
      loader: 'url-loader?limit=8192'
    }]
  },
  postcss: [
    require('autoprefixer')
  ],
  plugins: [
    new CopyWebpackPlugin([
      { from: './index.html', to: 'index.html' }, // copies index.html to dist/index.html
    ]),
  ],
};
