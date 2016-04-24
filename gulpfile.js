const gulp = require('gulp');
const webpack = require("webpack");
const browserSync = require('browser-sync');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.dev.js');
const bundle = webpack(webpackConfig);

gulp.task('browser-sync-server', () => {
    browserSync({
        https: false,
        ws: true,
        server: {
            baseDir: './',
            middleware: [
                webpackDevMiddleware(bundle, {
                    // IMPORTANT: dev middleware can't access config, so we should
                    // provide publicPath by ourselves
                    publicPath: webpackConfig.output.publicPath,

                    // pretty colored output
                    stats: {colors: true}

                    // for other settings see
                    // http://webpack.github.io/docs/webpack-dev-middleware.html
                }),
                webpackHotMiddleware(bundle),
            ],
        },
        open: "external"
    });
});

gulp.task('dev', ['browser-sync-server'], function () {
});
