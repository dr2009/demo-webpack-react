/**
 * Created by dr2009 on 2017/1/24.
 */

const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
const WebpackChunkHash = require("webpack-chunk-hash");

module.exports = {
    entry: {
        vendor: ['react', 'react-redux', 'react-router', 'react-router-redux', 'redux'],
        main: './src/index.js'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: '[name].[chunkhash].js',
        chunkFilename: "[id].[chunkhash].js"
        // process.env.NODE_ENV === 'production' ? '[name].[hash].bundle.js' : '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: "babel-loader",
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: [
                    path.resolve(__dirname, "src/demo-files")
                ],
            },
            {
                test: /\.css/,
                use: [
                    "style-loader",
                    "css-loader?modules"
                ]
            }
        ]
    },
    devtool: "cheap-module-source-map",
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor", "manifest"], // vendor libs + extracted manifest
            minChunks: Infinity,
        }),
        new webpack.HashedModuleIdsPlugin(),
        new WebpackChunkHash(),
        new ChunkManifestPlugin({
            filename: "chunk-manifest.json",
            manifestVariable: "webpackManifest"
        }),
        new HtmlWebpackPlugin({
            template: './static/index.html'
        }),
        // 作用不知道
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        // 压缩
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    /* Advanced configuration */
    watch: true,
};