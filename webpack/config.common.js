const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: {
        app: './index.jsx'
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../', 'build'),
        filename: '[name].min.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, /build/, /lib/],
                use: ['babel-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: '../src/index.ejs',
            favicon: '../src/favicon.ico',
            filename: 'index.html',
            title: 'UI Application Template'
        }),
        new CopyWebpackPlugin([
            { from: 'server.js', to: 'server.js' },
            { from: 'images', to: 'images' }
        ])
    ]
};
