var gulp = require('gulp');

var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src(['./node_modules/jquery/dist/jquery.js','./node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./js'));
});


var gulpCopy = require('gulp-copy');
gulp.task('copy', function() {
return gulp.src('./node_modules/bootstrap-sass/assets/fonts/bootstrap/**')
  .pipe(gulp.dest('./source/fonts'));
  });

'use strict';
 var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./source/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});


var watch = require('gulp-watch');
gulp.task('watch', function () {
 gulp.watch('./source/**/*.js');
 gulp.watch('./sass/**/*.scss', ['sass']);

});
gulp.task('default',['scripts','copy',]);