var gulp = require('gulp'),
    // gutil = require('gulp-util'),
    shell = require('gulp-shell');

gulp.task('default', shell.task([
    'npm test'
]));

gulp.task('ysteps', shell.task([
    'gherkin-yadda ./test -c -d',
]));

gulp.task('init', shell.task([
    'gherkin-yadda ./test -c -d',
    'npm test'
]));
