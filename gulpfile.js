'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('sass', function() {
	return gulp.src('styles/*.sass')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(gulp.dest('./lp/css'));
});

gulp.task('minify', function() {
	gulp.src('scripts/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./lp/js'))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./lp/js'));
});

gulp.task('default', function() {
	gulp.run('sass', 'minify');

	gulp.watch("./scripts/*.js", function(event) {
		gulp.run('minify');
	});
	gulp.watch("./styles/*.sass", function(event) {
		gulp.run('sass');
	});
});