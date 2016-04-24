const path = require('path');
const webpack = require('webpack');
const objectAssign = require('object-assign');
const webpackConfig = require('./webpack.config.js');

module.exports = objectAssign({}, webpackConfig, {
    devtool: null,
    entry: [
        './src/index'
    ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
});
