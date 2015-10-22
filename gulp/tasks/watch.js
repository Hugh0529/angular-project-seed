module.exports = function (gulp, plugins, config, isProduction) {
    gulp.task('watch', function () {
        gulp.watch(config.scssPath, ['sass']);
        gulp.watch(config.htmlFiles, ['html']);
        gulp.watch(config.jsFiles, ['js']);
        gulp.watch(config.imgPath, ['images']);
    });
};
