const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        publicPath: 'auto',
        uniqueName: 'reactmfe',
        crossOriginLoading: 'anonymous',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 4202,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'reactmfe',
            filename: 'remoteEntry.js',
            exposes: {
                './Component': './src/App',
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: deps['react-dom'],
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
