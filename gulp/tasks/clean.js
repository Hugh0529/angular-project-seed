module.exports = function (gulp, plugins, config, isProduction) {
    gulp.task('clean', function () {
        gulp.src([
            config.jsDestinationPath,
            config.cssDestinationPath,
            config.imgDestinationPath,
            config.htmlDestinationPath
        ], {read: false})
            .pipe(plugins.rimraf());
    });
};
