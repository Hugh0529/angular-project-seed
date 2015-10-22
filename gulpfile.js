var gulp = require('gulp'),
    config = require('./gulp/config')(),
    plugins = require('gulp-load-plugins')({
        rename: {
            'gulp-minify-css': 'minifyCss'
        }
    }),
    gulpTaskList = require('fs').readdirSync('./gulp/tasks/'),
    argv = require('yargs').argv;

plugins.pngquant = require('imagemin-pngquant');
plugins.autoprefixer = require('autoprefixer');
plugins.rimraf = require('rimraf');

var isProduction = argv.env === 'production',
    js = argv.js;

gulpTaskList.forEach(function (taskfile) {
    require('./gulp/tasks/' + taskfile)(gulp, plugins, config, isProduction, js);
});
