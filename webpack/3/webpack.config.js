var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name].bundle.js'
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body'
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['latest']
				},
				exclude: /node_modules/,
				include: './src'
			}
		]
	}

}