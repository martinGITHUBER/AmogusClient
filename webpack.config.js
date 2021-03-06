const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/main.jsx',
	mode: 'production',
	module: {
		rules: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			exclude: [/node_modules/, /app/],
		}, {
			test: /\.scss$/,
			use: [
				MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
				},
				{
					loader: 'sass-loader',
					options: {
						sourceMap: true,
					},
				},
			],
		}],
	},
	resolve: {
		extensions: ['.js', 'jsx'],
	},
	output: {
		path: path.resolve(__dirname, 'app'),
		filename: 'build.js',
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'bulma.css',
		}),
	],
	target: 'electron-main',
	optimization: {
		minimize: false,
	},
};