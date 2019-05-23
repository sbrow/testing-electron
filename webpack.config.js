const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

const packageJson = require("./package.json")

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const mode = process.env.NODE_ENV;
const outDir = "build"

const baseConfig = {
  entry: "./src/index.tsx",
  mode,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, outDir),
  },
  target: "electron-renderer",
  node: {
    __dirname: false
  }
}

module.exports = [
  {
    ...baseConfig,
    plugins: [
      new HtmlWebpackPlugin({
        templateContent: `<body><div id="root"></div></body>`,
      })
    ]
  },
  {
    ...baseConfig,
    entry: "./src/electron.ts",
    output: {
      filename: "electron.js",
      path: path.resolve(__dirname, outDir),
    },
    target: "electron-main"
  },
]