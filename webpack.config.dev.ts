import webpack from "webpack";
import restConfig from "./webpack.config";
import path from "path";
import {Configuration} from "webpack-dev-server";
import { cssLoaders } from "./webpack.config";

const config: webpack.Configuration = {
  context: restConfig.context,
  entry: "./scripts/index.ts",
  devtool: "source-map",
  devServer: {
    open: true,
    port: 3000,
    historyApiFallback: true,
    compress: true,
    static: path.resolve(__dirname, "src"),
    watchFiles: path.resolve(__dirname, "src"),
  } as Configuration,
  resolve: restConfig.resolve,
  optimization: restConfig.optimization,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssLoaders(
          "sass-loader"
        ),
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      }
    ],
  },
  plugins: restConfig.plugins!
}

export default config;