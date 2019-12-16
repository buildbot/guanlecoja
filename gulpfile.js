'use strict';

var gulp = require('gulp'),
coffee = require('gulp-coffee'),
browserify = require('gulp-browserify'),
rename = require('gulp-rename'),
log = require('fancy-log'),
replace = require('gulp-replace');

gulp.task('scripts', function(){
	return gulp.src('main.coffee')
	.pipe(coffee()).on('error', log.error)
	.pipe(gulp.dest('.'));
});

gulp.task('vendors', function(){
	return gulp.src('vendors.coffee')
	.pipe(coffee()).on('error', log.error)
	.pipe(gulp.dest('.'));
});

gulp.task('watch', function()
{
	return gulp.watch('main.coffee', ['scripts']);
});
gulp.task('watch2', function()
{
	return gulp.watch('vendors.coffee', ['vendors']);
});
gulp.task('default', ['scripts', 'vendors', 'watch', 'watch2']);
