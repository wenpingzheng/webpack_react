var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  module:{
  	loaders:[
  	  {
        test:/\.css$/,
        loader:'style-loader!css-loader'
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
    
    new webpack.BannerPlugin("Copyright XXXX.")
  ],
  ],
  devServer: {
  	contentBase:"./public",
  	historyApiFallback:true,
  	inline:true,
  	port:8088
  }
}