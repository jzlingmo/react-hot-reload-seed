const gulp = require('gulp');
const gutil = require('gulp-util');
const Webpack = require("webpack");
const browserSync = require('browser-sync');
const WebpackDevServer = require("webpack-dev-server")
const concat = require('gulp-concat');

const webpackConfig = require('./webpack.config.js');
const bundler = Webpack(webpackConfig);
const host = process.env.HOST || "0.0.0.0";
const port = (process.env.PORT + 1) || 8001;
gulp.task('css', () => {
    gulp.src('src/**/*.css')
        .pipe(concat('app.css'))
        .pipe(gulp.dest("dist/"));
});
gulp.task('webpack-dev-server', () => {
    new WebpackDevServer(bundler, {
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        stats: {
            colors: true
        },
        watchOptions: {
            aggregateTimeout: 100,
            poll: 300,
        },
        noInfo: true
    }).listen(port, host, () => {
        gutil.log("[Webpack development server] %s:%s", host, port);
    });
});

gulp.task('watch', ['css', 'webpack-dev-server'], function () {
    gulp.watch(['src/**/*.css'], ['css']);
});
