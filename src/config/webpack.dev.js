const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const getEntries = (path) =>
  glob.sync(path).reduce((acc, item) => {
    const path = item.split("/");
    path.pop();
    const name = path.pop();
    acc[name] = item;
    return acc;
  }, {});

let moleculesPaths = {...getEntries("./ux-ui/components/*/*/*.molecule.js")}
let organismPaths = {...getEntries("./ux-ui/components/*/*/*.organisms.js")}

const cssRules = {
  test: /\.(css|sass|scss)$/,
  use: [
    MiniCssExtractPlugin.loader,
    { 
      loader: "css-loader",
      options: {
        importLoaders: 2,
        sourceMap: true,
        url: false,
      },
    },
    {
      loader: "sass-loader",
      options: {
        sourceMap: true,
      },
    },
  ]
}

const jsRules = {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  }

module.exports = {
  entry: {...moleculesPaths, ...organismPaths},
  output: {
    path: path.resolve(__dirname, "../dist/assets"),
    filename: "scripts/[name].script.js",
  },
  mode: "development",
  optimization: {
    minimizer: [
      (compiler) => {
        const TerserPlugin = require('terser-webpack-plugin');
        new TerserPlugin({
          parallel: 4,
          extractComments: true,
        }).apply(compiler);
      },
    ],
  },
  module: {
    rules: [
      jsRules,
      cssRules
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].style.css",
    })
  ]
};
