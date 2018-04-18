/* eslint-disable */

var path = require("path");
var webpack = require("webpack");
const log = require('npmlog');
log.level = 'silly';

module.exports = {
  devtool: "source-map",
  entry: [
    "webpack-hot-middleware/client",
    "babel-polyfill",
    "./index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/" // ./dist/ in production
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production"),
        'GH_PAGES_URL': (url => {
          if (url) {
            log.info('webpack', `GH_PAGES_URL overridden with "${url}"`);
            return JSON.stringify(url);
          }
          return JSON.stringify(null);
        })(process.env.GH_PAGES_URL)
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        plugins: [
          [
            "react-transform", {
              transforms: [{
                transform: "react-transform-hmr",
                imports: ["react"],
                locals: ["module"]
              }, {
                transform: "react-transform-catch-errors",
                imports: ["react", "redbox-react"]
              }]
            }
          ]
        ]
      },
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.css$/,
      rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      ],
      include: __dirname
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml",
      include: path.join(__dirname, "assets")
    }, {
      test: /\.png$/,
      loader: "url-loader?mimetype=image/png",
      include: path.join(__dirname, "assets")
    }, {
      test: /\.gif$/,
      loader: "url-loader?mimetype=image/gif",
      include: path.join(__dirname, "assets")
    }, {
      test: /\.jpg$/,
      loader: "url-loader?mimetype=image/jpg",
      include: path.join(__dirname, "assets")
    }]
  }
};
