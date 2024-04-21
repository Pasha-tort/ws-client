import webpack from "webpack";
import restConfig from "./webpack.config";
import path from "path";
import { Configuration } from "webpack-dev-server";

const config: webpack.Configuration = {
  context: restConfig.context,
  entry: "./scripts/index.ts",
  devtool: "source-map",
  devServer: {
    open: true,
    port: 3002,
    historyApiFallback: true,
    compress: true,
    static: path.resolve(__dirname, "src"),
    watchFiles: path.resolve(__dirname, "src"),
  } as Configuration,
  resolve: restConfig.resolve,
  optimization: restConfig.optimization,
  module: restConfig.module,
  plugins: restConfig.plugins!,
};

export default config;
