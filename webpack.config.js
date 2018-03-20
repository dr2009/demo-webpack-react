const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Jarvis = require('webpack-jarvis');

const TARGET = process.env.npm_lifecycle_event;

const common = {
  entry: {
    app: ['./src/index.js'],
    vendor: ['react', 'react-dom'],
  },
  resolve: {
    mainFields: ['browser', 'js:next', 'module', 'main'],
  },
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
  optimization: {
    // namedModules: true, // mode development default
    // concatenateModules: true, // mode prodcution default
    // runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [new HtmlWebpackPlugin()],
};

if (TARGET === 'start') {
  module.exports = merge(common, {
    mode: 'development',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // mode development default
      // new webpack.DefinePlugin({
      //   'process.env.NODE_ENV': JSON.stringify('development'),
      // }),
    ],
    devtool: 'inline-source-map',
    // devServer: {
    //   hot: true,
    //   // enable HMR on the server

    //   host: '0.0.0.0',

    //   contentBase: path.resolve(__dirname, './static'),
    //   // match the output path

    //   publicPath: '/',
    //   // match the output `publicPath`
    // },
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    mode: 'production', // default
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].[chunkhash:8].js',
      chunkFilename: '[name].[chunkhash:8].js',
    },
    plugins: [
      new CleanWebpackPlugin('./dist'),
      new Jarvis({ port: 9999, watchOnly: false }),
      // mode production default
      // new webpack.DefinePlugin({
      //   'process.env.NODE_ENV': JSON.stringify('production'),
      // }),
    ],
    optimization: {
      minimize: false, // mode production default
    },
    /* the rest of your webpack configs */
  });
}
