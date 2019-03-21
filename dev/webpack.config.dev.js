let config = require('./webpack.config.base.js');
config.mode = 'development';
config.devtool = '#source-map';
config.devServer = {
    contentBase: './dist',
    port: 3001,
    hot: true,
    hotOnly: true,
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
};
config.output.publicPath = 'http://localhost:3001/dist/';
config.output.filename = '[name]-bundle.js?[hash:4]';

module.exports = config;
