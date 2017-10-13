const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

const common = {
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{ loader: 'url-loader', options: { limit: 4096 } }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'], // vendor libs + extracted manifest
      minChunks: Infinity,
    }),
  ],
};

if (TARGET === 'start') {
  module.exports = merge(common, {
    entry: {
      vendor: ['react', 'react-dom'],
      main: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://0.0.0.0:3000',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        './src/index.js',
        // the entry point of our app
      ],
    },
    output: {
      filename: '[name].js',
      // the output bundle

      path: path.resolve(__dirname, 'dist'),

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
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // enable HMR globally

      new webpack.NamedModulesPlugin(),
      // prints more readable module names in the browser console on HMR updates

      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
    devServer: {
      hot: true,
      // enable HMR on the server

      host: '0.0.0.0',

      contentBase: path.resolve(__dirname, './static'),
      // match the output path

      publicPath: '/',
      // match the output `publicPath`
    },
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    entry: {
      vendor: [
        'react',
        'react-dom',
        // 'react-redux',
        // 'react-router',
        // 'react-router-redux',
        // 'redux',
        // 'redux-actions',
      ],
      main: ['./src/index.js'],
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].[chunkhash:8].js',
      chunkFilename: '[id].[chunkhash:8].js',
      // process.env.NODE_ENV === 'production' ? '[name].[hash].bundle.js' : '[name].bundle.js'
    },
    plugins: [
      new CleanWebpackPlugin('./dist'),
      new webpack.HashedModuleIdsPlugin(), // 使hash与ID相关，顺序无关

      // new WebpackChunkHash(),// 替换默认的hash算法

      // 只是用于迁移
      // new webpack.LoaderOptionsPlugin({
      //   minimize: true,
      //   debug: false,
      //   options: {
      //     context: __dirname,
      //   },
      // }),

      // 压缩
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: true,
        },
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    ],
  });
}
