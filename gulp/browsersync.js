var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('./config.json');

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function(done) {
    return browserSync({
        server: {
            baseDir: config.dev + '/' + config.site
        }
    });
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function (done) {
    gulp.watch(['dev/css/**'], ['sass']);
    gulp.watch([ config.dev + '/*.md', config.dev +'/*.html', config.dev + '/_includes/**', config.dev + '/_layouts/*.html'], ['jekyll-rebuild']);
});
