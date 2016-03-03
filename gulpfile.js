const gulp = require('gulp');
const gutil = require('gulp-util');
const Webpack = require("webpack");
const browserSync = require('browser-sync');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const WebpackDevServer = require("webpack-dev-server");
const scss = require('gulp-scss');
const concat = require('gulp-concat');

const webpackConfig = require('./webpack.config.js');
const bundler = Webpack(webpackConfig);
const host = process.env.HOST || "0.0.0.0";
const port = (process.env.PORT + 1) || 3001;
gulp.task('css', () => {
    gulp.src('src/**/*.{css,scss}')
        .pipe(scss())
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


const webpackConfig2 = require('./webpack.browser-sync.config.js');
const bundler2 = Webpack(webpackConfig2);
gulp.task('browser-sync-server', () => {
    browserSync({
        https: false,
        ws: true,
        server: {
            baseDir: './',
            middleware: [

                webpackDevMiddleware(bundler2, {
                    // IMPORTANT: dev middleware can't access config, so we should
                    // provide publicPath by ourselves
                    publicPath: webpackConfig2.output.publicPath,

                    // pretty colored output
                    stats: { colors: true }

                    // for other settings see
                    // http://webpack.github.io/docs/webpack-dev-middleware.html
                }),

                // bundler should be the same as above
                webpackHotMiddleware(bundler2),
            ],
        },
        open: "external"
    });
});

gulp.task('watch-webpack-server', ['css', 'webpack-dev-server'], function () {
    gulp.watch(['src/**/*.{css,scss}'], ['css']);
});

gulp.task('watch-browser-sync-server', ['css', 'browser-sync-server'], function () {
    gulp.watch(['src/**/*.{css,scss}'], ['css']);
});
