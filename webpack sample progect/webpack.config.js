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
	puglins: [
		new webpack.LoaderOptionsPlugin({
			options: {
			postcss: function () {
				return [autoprefixer];
			}

			}
		})
	]
}