var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
<<<<<<< HEAD

var ExtractTextPlugin = require('extract-text-webpack-plugin');
=======
>>>>>>> 933e3eda509ab27537b631e9a531e4af637fbe16

module.exports = {
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
<<<<<<< HEAD
    filename: "[name].[hash:5].js"//打包后输出文件的文件名
=======
    filename: "bundle.js"//打包后输出文件的文件名
>>>>>>> 933e3eda509ab27537b631e9a531e4af637fbe16
  },
  module:{
  	loaders:[
  	  {
        test:/\.css$/,
<<<<<<< HEAD
        loader: ExtractTextPlugin.extract({ 
          fallback: 'style-loader', 
          use: 'css-loader' 
        })
=======
        loader:'style-loader!css-loader'
>>>>>>> 933e3eda509ab27537b631e9a531e4af637fbe16
      },
      {
        test:/\.js$/,
        exclude:/node_modules/, //把这个文件排除在外 只遍历include
        loader:'babel-loader',
        query:{
          presets:['es2015','react']
        }
      }
  	]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:__dirname + "/app/index.tmpl.html"
    }),
<<<<<<< HEAD
    new webpack.BannerPlugin("Copyright XXXX."),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({ filename: '[name].[hash:5].css', disable: false, allChunks: true })

=======
    
    new webpack.BannerPlugin("Copyright XXXX.")
  ],
>>>>>>> 933e3eda509ab27537b631e9a531e4af637fbe16
  ],
  devServer: {
  	contentBase:"./public",
  	historyApiFallback:true,
  	inline:true,
  	port:8088
  }
}