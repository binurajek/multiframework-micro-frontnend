const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    devServer: {
        port: 4202,
        historyApiFallback: false,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    },
    output: {
        publicPath: "http://localhost:4202/",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            ["@babel/preset-react", { runtime: "automatic" }],
                        ],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "reactmfe",
            filename: "remoteEntry.js",
            exposes: {
                "./MyComponent": "./src/components/MyComponent",
            },
            shared: {
                react: { singleton: true, requiredVersion: "^19.0.0" },
                "react-dom": { singleton: true, requiredVersion: "^19.0.0" },
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
