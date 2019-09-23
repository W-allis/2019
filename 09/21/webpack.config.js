const path = require('path');
const webpack = require('webpack');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */
function join(dir) {
	return path.posix.join('./static', dir)
}

module.exports = {
	mode: 'production',

	devtool: 'source-map',

	performance: {
		hints: false
	},

	entry: {
		main: ['babel-polyfill', './src/main.ts']
		// pageTwo: './validate.ts'
	},

	output: {
		filename: join('js/[name].[chunkhash].js'),
		path: path.resolve(__dirname, 'dist')
	},

	plugins: [
		new miniCssExtractPlugin({
			filename: join('css/[name].css'),
			chunkFilename: join('css/[id].css')
		}),
		new CleanWebpackPlugin(),
		new webpack.ProgressPlugin(), 
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	],

	module: {
		rules: [
			{
				test: /.html$/,
				loader: 'raw-loader'
			},
			{
				test: /.(ts|tsx)?$/,
				loader: 'ts-loader',
				include: [path.resolve(__dirname, 'src')],
				exclude: [/node_modules/]
			},
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: [/node_modules/]
			},
			{
				test: /.css$/,
				use: [
					{
						loader: miniCssExtractPlugin.loader,
						options: {
							publicPath: '../../'
						}
					},
					// {
					// 	loader: 'style-loader'
					// },
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader'
					}
				]
			},
			{
				test: /.(woff|woff2)$/,
				use: [
					{
						loader: 'url-loader', 
						options: {
							name: join('font/[name].[ext]'),
							limit: 8192
						}
					}
				]
			},
			{
				test: /.(png|jpe?g|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: join('img/[name].[ext]'),
							limit: 8192
						}
					}
				]
			}
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	devServer: {
		open: true
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			'^mdui': 'mdui/dist'
		}
	}
};
