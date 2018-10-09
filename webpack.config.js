const path = require('path');
const Html = require('html-webpack-plugin');
const Clean = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  const isDev = env.dev ? true : false;
  const isProd = env.prod ? true : false;
  const browsers = { dev: ['Chrome > 60'], prod: ['> 3%', 'last 2 versions'] }

  const config = {
    entry: './js/app.js',
    output: {
      filename: isDev ? "js/[name].js" : "js/[name].js",
      path: path.resolve(__dirname, "build")
    },
    watch: true,
    mode: isProd ? "production" : "development",
    devtool: isProd ? false : "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['es2015'], 
                ['env', {targets: {browsers: isDev ? browsers.dev : browsers.prod} }],
              ],
              // plugins: ['syntax-dynamic-import'],
            }    
          }
        },
        {
          test: /\.css$/,
          use: [ 
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                minimize: isProd ? true : false,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [ 
                  new require('autoprefixer')( {browsers: isProd ? browsers.prod : browsers.dev} )
                ]
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: isProd ? false : true,
                minimize: isProd ? true : false,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [ 
                  new require('autoprefixer')( {browsers: isProd ? browsers.prod : browsers.dev} )
                ]
              }
            },
            "sass-loader",
          ]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: isProd ? '[hash].[ext]' : '[name].[ext]',
                publicPath: '../images',
                outputPath: 'images',
                bypassOnDebug: true,
                disable: true,
              }
            },
          ]
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
            use: {
            loader: 'file-loader',
            options: {
              name: isProd ? '[hash].[ext]' : '[name].[ext]',
              publicPath: '../fonts',
              outputPath: 'fonts'
            }
          }
        },
      ]
    },
    plugins: [
      new Html({
        filename: 'index.html',
        template: './index.html',
        minify: isProd ? { collapseWhitespace: true } : false,
      }),
    ]
  }

  if(isProd){
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
      }),
      new Clean(['build'])
    )
  }

  if(isDev) {
    config.devServer = {
      port: 8080,
      progress: true,
      overlay: true
    }
  }

  return config;
}