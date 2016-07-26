var gulp = require('gulp');
var cp = require('child_process');
var browserSync = require('browser-sync');
var config = require('./config.json');

var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build', '--source=' + config.dev, '--dest=' + config.dev + '/_site', '--config=' + config.dev + '/_config.yml'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function (done) {
    browserSync.reload();
});
