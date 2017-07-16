var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: './src/script/main.js', 
		math: './src/script/math.js'
	},
	output: {
		path: __dirname + '/dist/js',
		// filename: 'bundle.js',
		filename: '[name]-[hash].js'

	},
	plugins: [
		new htmlWebpackPlugin()
	]
}