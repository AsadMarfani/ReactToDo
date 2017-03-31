var webpack = require('webpack');
var path  = require('path');
//var HtmlWebpackPlugin = require('html-webpack-plugin');
var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development'; 

try {
	envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
}
catch(e){

}

module.exports = {
	entry: [
	'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
	'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				API_KEY: JSON.stringify(process.env.API_KEY),
				AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
				DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
				PROJECT_ID: JSON.stringify(process.env.PROJECT_ID),
				STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
				MESSAGE_SENDER_ID: JSON.stringify(process.env.MESSAGE_SENDER_ID),
			}
		})
	],
	output: {
		path: __dirname ,
		path: __dirname ,
		filename: './public/bundle.js'

	},
	resolve: {
		modules: [
			'node_modules',
			'./app/components',
			'./app/api',
			'./app/actions',
			'./app/reducers',
			'./app/store'
		],
		alias: {
			app:  __dirname + '/app',
			ApplicationStyles: __dirname + '/app/styles/app.scss'
		},
		extensions: ['.js','.jsx']
	},
	module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
		  compact: false
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};