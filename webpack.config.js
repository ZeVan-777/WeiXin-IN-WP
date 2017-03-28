var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
			{
				test: /\.less$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					'less-loader'
				]
			},
			{
				test: /muse-ui.src.*?js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /vue-scroller.src.*?js$/,
				loader: 'babel-loader'
			},
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
    ]
  },
  resolve: {
		extensions: ['.js', '.vue', '.json'],
		modules: [path.resolve(__dirname, './node_modules')],
		alias: {
			'vue$': 'vue/dist/vue.common.js',
			'muse-components': 'muse-ui/src',
			'scroller$': 'vue-scroller/src'
		}
	},
  resolveLoader: {
	  modules: [path.join(__dirname, './node_modules')]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
