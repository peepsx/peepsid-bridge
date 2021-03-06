const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');

const base = {
	publicPath:'',
	runtimeCompiler:true,
	css:{extract:false},
	// publicPath: process.env.NODE_ENV === 'production' ? '/static/' : '/',
	assetsDir:'static',
	filenameHashing:false,

	chainWebpack: config => {
		config.plugin('html')
			.tap(args => {
				args[0].template = path.join(__dirname, 'index.html');
				console.log(args);
				return args;
			})

		config
			.plugin('copy')
			.tap(args => {
				// Changing default copy path to dist/static
				args[0][0].to += `${path.sep}static`;
				return args;
			});
	}
}

if(process.env.NODE_ENV === 'production'){
	module.exports = Object.assign(base, {
		productionSourceMap: false,

		configureWebpack:{
			output: {
				filename: '[name].bundle.js',
				chunkFilename: '[name].bundle.js',
			},
			plugins:[
				new WebpackShellPlugin({
					// onBuildStart:['node scripts/pre-pack'],
					// onBuildEnd:['node scripts/post-pack']
				}),
			]
		},
	})
} else {
	module.exports = Object.assign(base, {

	})
}

