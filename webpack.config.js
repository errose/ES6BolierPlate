var path = require('path')
	webpack = require('webpack');

module.exports = {
	devtool: 'sourcemap',
	entry: {
		main: ['jquery','./src/index.js']
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].bundle.js'
	},
	module: {
		preLoaders: [	
			{test: /.js$/, loaders: ['jshint-loader'], exclude: [/node_modules/, /\.bundle/]}
		],
		loaders: [
			{test: /.js$/, loaders: ['babel-loader'], exclude: [/node_modules/]},
			{test: /.css$/, loaders: ['style-loader', 'css-loader']},
			{test: /waypoints\.js/, loaders: ['exports-loader']}
		]
	},
	plugins: [
		// new webpack.optimize.UglifyJsPlugin({

		// })
	]
};