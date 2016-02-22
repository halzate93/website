require('es6-promise').polyfill();

const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant')
const jpegtran = require('imagemin-jpegtran')
const optipng = require('imagemin-optipng')
const gifsicle = require('imagemin-gifsicle')
const minifyJs = require('gulp-uglify')
const minifyCss = require('gulp-cssnano')
const useref = require('gulp-useref')
const gulpif = require('gulp-if')
// const util = require('gulp-util')

gulp.task('default', ['minify img', 'copy fonts', 'process'])

gulp.task('minify img', function () {
  gulp.src('img/**/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      optimizationLevel: 3,
      interlaced: true,
      use: [pngquant(), jpegtran(), optipng(), gifsicle()]
    }))
    .pipe(gulp.dest('dist/img/'))
})

gulp.task('process', function () {
  gulp.src('*.html')
    .pipe(useref())
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulpif('*.js', minifyJs()))
    .pipe(gulpif('*.html', htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('dist/'))
})

gulp.task('copy fonts', function () {
  gulp.src(['css/fonts/*'], {})
    .pipe(gulp.dest('dist/css/fonts/'))
})
