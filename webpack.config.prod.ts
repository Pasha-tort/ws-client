import webpack from "webpack";
import restConfig from "./webpack.config";

const config: webpack.Configuration = {
  ...restConfig,
  entry: "./scripts/index.ts",
  output: {
    ...restConfig.output,
    ignoreBrowserWarnings: true,
  },
  mode: "production",
  optimization: {
    ...restConfig.optimization,
    minimize: true,
    mangleWasmImports: true,
  },
  module: restConfig.module,
  plugins: restConfig.plugins!
}

export default config;