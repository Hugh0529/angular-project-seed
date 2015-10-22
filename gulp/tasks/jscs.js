module.exports = function (gulp, plugins, config, isProduction) {
    gulp.task('jscs', function () {
        return gulp.src(config.jsFiles)
            .pipe(plugins.jscs(config.jscsOption))
            .pipe(plugins.jscs.reporter())
            .pipe(plugins.jscs.reporter('fail'))
    })
};
