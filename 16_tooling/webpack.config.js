const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
  },
  devtool: "cheap-module-eval-source-map",
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
