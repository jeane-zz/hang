var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: './src/script/main.js', 
		math: './src/script/math.js'
	},
	output: {
		path: __dirname + '/dist/',
		// filename: 'bundle.js',
		filename: 'js/[name].js',
		publicPath: 'http://cdn.com/' // 提交上线后地址

	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html', // 设置文件的名字
			template: 'index.html',
			inject: 'head',    // js文件嵌入在html文件中的位置
			title: '向文件传参',
			date: new Date() ,
			minify: { // 压缩
				removeComment: true,
				// collapseWhitespace: true
			}
		})
	]
}