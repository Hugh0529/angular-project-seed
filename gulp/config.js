module.exports = function () {

  return {
    jsPath: 'dev/js/*.js',
    cssPath: 'dev/css/*.css',
    scssPath: 'dev/scss/*.scss',
    imgPath: 'dev/images/**/*',
    htmlPath: 'dev/*.html',
    icoPath: 'dev/*.ico',
    vendorPath: 'dev/vendor/*.{js,css}',
    vendorDevelopmentPath: 'dev/vendor/',
    vendorDestinationPath: 'dist/vendor/',
    jsDevelopmentPath: 'dev/js/',
    jsDestinationPath: 'dist/js',
    cssDestinationPath: 'dist/css',
    cssDevelopmentPath: 'dev/css/',
    imgDestinationPath: 'dist/images',
    imgDevelopmentPath: 'dev/images/',
    htmlDestinationPath: 'dist/',
    htmlDevelopmentPath: 'dev/',

    htmlFiles: [
      'dev/index.html',
      'dev/partials/*.html'
    ],
    jsFiles: [
      'dev/**/*'
    ],


    autoprefixerOption: {
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'], // default:; detail: https://github.com/ai/browserslist#queries
      cascade: true,  // should Autoprefixer uses Visual Cascade, if CSS is uncompressed.
      add: true,  // should Autoprefixer add prefixes.
      remove: true  // should Autoprefixer [remove outdated] prefixes.
    },

    sassOption: {
      outputStyle: 'expanded'
    },

    htmlMinOption: {
      collapseWhitespace: true
    },

    jscsOption: {
      fix: true
    },

    vendor: {
      'angular': {
        development: ['angular.js'],
        production: ['angular.min.js']
      }
    },

    bowerOption: {
      directory: 'dev/bower_components'
    }

  };
};
