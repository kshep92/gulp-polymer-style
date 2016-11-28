var gulp = require('gulp');
var less = require('gulp-less');
var compact = require('./gulp-polymer-style');

gulp.task('default', function() {
    gulp.src('*.less')
        .pipe(less())
        .pipe(compact())
        .pipe(gulp.dest('./build'));
});