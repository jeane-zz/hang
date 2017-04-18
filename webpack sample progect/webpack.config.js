// webpack的配置文件，
// 对打包前后的文件及路径进行说明
var webpack = require('webpack')
module.exports = {
	devtool: 'eval-source-map', //生成source maps 更方便调试
	
	entry: __dirname + '/app/main.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './public',
		colors: true,
		historyApiFallback: true,
		inline: true
	},
	module: {
		loaders:[
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}	
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?module'
			}
		]
	},
	postcss: [
	    require('autoprefixer')
	],

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    })
  ],
}