const gulp = require('gulp');
const concat = require('gulp-concat');
const watch = require('gulp-watch');
const sass = require('gulp-sass')(require('sass'));

function concatJS() {
  return gulp.src('./js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./main/js'));
}

function compileSass() {
  return gulp.src('./styles/sass/*.+(sass|css)') // Исправленный путь
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./main/css'));
}

function watcher() {
  gulp.watch('./js/*.js', concatJS);
  gulp.watch('./styles/sass/*.sass', compileSass);
}

exports.concatJS = concatJS;
exports.watcher = watcher;