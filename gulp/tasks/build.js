module.exports = function (gulp, plugins, config, isProduction) {
    gulp.task('sass', function () {
        gulp.src(config.scssPath)
            .pipe(plugins.sass(config.sassOption).on('error', plugins.sass.logError))
            .pipe(plugins.postcss([plugins.autoprefixer(config.autoprefixerOption)]))
            .pipe(plugins.if(isProduction, plugins.minifyCss()))
            .pipe(plugins.if(isProduction, plugins.rename({
                suffix: '.min'
            })))

            .pipe(plugins.if(!isProduction, gulp.dest(config.cssDevelopmentPath)))
            .pipe(plugins.if(isProduction, gulp.dest(config.cssDestinationPath)));
    });

    gulp.task('html', function () {
        gulp.src(config.htmlFiles)
            .pipe(plugins.concat('index.html'))
            .pipe(plugins.if(isProduction, plugins.htmlmin(config.htmlMinOption)))
            .pipe(plugins.if(isProduction, plugins.replace('main.css', 'main.min.css')))
            .pipe(plugins.if(isProduction, plugins.replace('main.js', 'main.min.js')))

            .pipe(plugins.if(!isProduction, gulp.dest(config.htmlDevelopmentPath)))
            .pipe(plugins.if(isProduction, gulp.dest(config.htmlDestinationPath)));
    });

    gulp.task('js', function () {
        gulp.src(config.jsFiles)
            .pipe(plugins.if(isProduction, plugins.jscs(config.jscsOption)))
            .pipe(plugins.concat('main.js'))
            .pipe(plugins.if(isProduction, plugins.uglify()))
            .pipe(plugins.if(isProduction, plugins.rename({
                suffix: '.min'
            })))

            .pipe(plugins.if(!isProduction, gulp.dest(config.jsDevelopmentPath)))
            .pipe(plugins.if(isProduction, gulp.dest(config.jsDestinationPath)));
    });

    gulp.task('image', function () {
        if(isProduction === true) {
            gulp.src(config.imgPath)
                .pipe(plugins.cache(plugins.imagemin({
                    progressive: true,
                    use: [plugins.pngquant()]
                })))
                .pipe(gulp.dest(config.imgDestinationPath));
        }
    });

    gulp.task('copy', function () {
        if(isProduction === true) {
            gulp.src(config.icoPath)
                .pipe(gulp.dest(config.htmlDestinationPath));
        }
    });

    function getVendorPath(dir, fn) {
        return 'bower_components/' + dir + '/' + fn;
    }

    gulp.task('vendor', function () {
        var env = isProduction ? 'production' : 'development';
        for (var key in config.components) {
            if (config.vendor.hasOwnProperty(key)) {
                var vendor = config.vendor[key];
                for (var item in vendor[env]) {
                    var fn = vendor[env][item];
                    gulp.src(getVendorPath(key, fn))

                        .pipe(plugins.if(!isProduction, gulp.dest(config.vendorDevelopmentPath)))
                        .pipe(plugins.if(isProduction, gulp.dest(config.vendorDestinationPath)));
                }
            }
        }
    });

    gulp.task('bower', function () {
        plugins.bower(config.bowerOption);
    });

    gulp.task('default', ['bower'], function () {
        gulp.start('html', 'sass', 'js', 'image', 'copy', 'vendor');
    });

};
