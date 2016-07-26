var gulp = require('gulp');

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */

gulp.task('default', ['browser-sync', 'watch']);
