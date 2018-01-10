const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
let path = require('path')

let BUILD_DIR = path.resolve(__dirname, 'src/frontend/public')
let APP_DIR = path.resolve(__dirname, 'src/frontend/app')

let config = {
	context: APP_DIR,
	entry: './app.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new UglifyJSPlugin()
	]
}

module.exports = config