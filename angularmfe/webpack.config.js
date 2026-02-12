const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), []);
module.exports = {
  output: {
    uniqueName: "angularmfe",
    publicPath: "http://localhost:7001/",
    scriptType: "text/javascript",
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  devServer: {
    port: 7001,
    historyApiFallback: true,
    liveReload: false,
    hot: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "angularmfe",
      filename: "remoteEntry.js",
      exposes: {
        "./Module": "./src/app/childmfe/childmfe.module.ts",
      },
      shared: share({
        "@angular/core": {
          singleton: true,
          strictVersion: false,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: false,
          requiredVersion: "auto",
        },
        "@angular/common/http": {
          singleton: true,
          strictVersion: false,
          requiredVersion: "auto",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: false,
          requiredVersion: "auto",
        },
        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
