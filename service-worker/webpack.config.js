const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "service-worker.js",
    path: path.resolve(__dirname, "../dist"),
  },
  plugins: [
    new Dotenv()
  ]
};