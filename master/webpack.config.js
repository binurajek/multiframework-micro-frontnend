const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), []);
module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto",
    scriptType: "text/javascript",
    crossOriginLoading: "anonymous",
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
    port: 4200,
    historyApiFallback: true,
    liveReload: false,
    hot: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        angularmfe: "angularmfe@http://localhost:4201/remoteEntry.js",
        reactmfe: "reactmfe@http://localhost:4202/remoteEntry.js"
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
        "react": { singleton: true, requiredVersion: "auto" },
        "react-dom": { singleton: true, requiredVersion: "auto" },
        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
