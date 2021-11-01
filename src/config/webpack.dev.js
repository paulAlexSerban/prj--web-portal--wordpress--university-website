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

const PAGE_TEMPLATE_SCRIPTS = {...getEntries("./ux-ui/page-templates/*/*.page-template.js")}
const PAGE_TEMPLATE_STYLES = {...getEntries("./ux-ui/page-templates/*/*.page-template.scss")}
const VENDOR_PATHS = {...getEntries("./ux-ui/vendors/*/*.vendor.js")};

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
    exclude: /(node_modules)/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/env"],
        plugins: ["@babel/plugin-proposal-class-properties"],
      },
    },
  }

module.exports = {
  entry: {...PAGE_TEMPLATE_STYLES, ... PAGE_TEMPLATE_SCRIPTS, ...VENDOR_PATHS},
  output: {
    path: path.resolve(__dirname, "../dist/assets"),
    filename: "scripts/[name].script.js"
  },
  mode: "development",
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
