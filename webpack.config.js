const path = require('path');
const webpack = require('webpack');

const host = process.env.HOST || "0.0.0.0";
const port = (process.env.PORT + 1) || 8001;

module.exports = {
    devtool: 'eval',
    entry: [
        "webpack-dev-server/client?http://" + host + ":" + port,
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolveLoader: {
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: [
                    'react-hot',
                    // babel 6 need these queries
                    // https://medium.com/@malyw/how-to-update-babel-5-x-6-x-d828c230ec53#.jvxlzskds
                    'babel?presets[]=react,presets[]=es2015,presets[]=stage-2'
                ],
                include: path.join(__dirname, 'src'),
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            }
        ]
    }
};
