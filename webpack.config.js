const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-redux', 'redux'],
        main: [
            'react-hot-loader/patch',
            // activate HMR for React

            'webpack-dev-server/client?http://localhost:8080',
            // bundle the client for webpack-dev-server
            // and connect to the provided endpoint

            'webpack/hot/only-dev-server',
            // bundle the client for hot reloading
            // only- means to only hot reload for successful updates


            './src/index.js'
            // the entry point of our app
        ]
    },
    output: {
        filename: '[name].js',
        // the output bundle

        path: resolve(__dirname, 'dist'),

        // publicPath: './src'
        // necessary for HMR to know where to load the hot update chunks
    },
    // resolve: {
    //     alias: {
    //         "react": "react/dist/react.min.js",
    //         "react-dom": "react-dom/dist/react-dom.min.js",
    //         "react-redux":"react-redux/dist/react-redux.min.js",
    //         "react-router":"react-router/umd/react-router.js",
    //         "react-router-redux":"react-router-redux/dist/ReactRouterRedux.min.js",
    //         "redux":"redux/dist/redux.min.js",
    //     }
    // },
    // context: resolve(__dirname, 'src'),

    devtool: 'cheap-eval-source-map',

    devServer: {
        hot: true,
        // enable HMR on the server

        contentBase: resolve(__dirname, 'dist'),
        // match the output path

        publicPath: '/'
        // match the output `publicPath`
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules',
                    // 'postcss-loader',
                ],
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'file-loader'
            }, {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor", "manifest"], // vendor libs + extracted manifest
            minChunks: Infinity,
        }),

        new HtmlWebpackPlugin({
            template: './index.html'
        }),
    ],
};