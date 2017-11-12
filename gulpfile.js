var gulp = require('gulp');
var ts = require('gulp-typescript');
var path = require('path');
var del = require('del');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

var TYPESCRIPT_FILES = ['./app/**/*.ts'];
var SASS_FILES = ['./public/dev/sass/**/*.scss'];

gulp.task('build:ts', function(){
    var tsProject = ts.createProject(
        path.resolve('./tsconfig')
    );
    var tsResult = gulp.src(['./app/**/*.ts'])
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));
    return tsResult.js.pipe(sourcemaps.write())
    .pipe(gulp.dest(
        path.resolve('./public/dev/js')
    ));

});

gulp.task('sass', function(){
    return gulp.src(SASS_FILES)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(
        path.resolve('./public/dev/css')
    ));
});

gulp.task('minify-css', function() {
  return gulp.src([
        "./node_modules/bootstrap/dist/css/bootstrap.css",
        "./public/dev/css/*.css"
    ])
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(concat("style.min.css"))
    .pipe(gulp.dest(
        path.resolve('./public/live/css/')    
    ));
});

gulp.task('bootstrap-font',function(){
    return gulp.src([
        "./node_modules/bootstrap/dist/fonts/*"
    ])
    .pipe(gulp.dest(
        path.resolve('./public/live/fonts/')    
    ));
});

gulp.task('compress-image', function() {
  return gulp.src(['./public/dev/image/**/*.{png,gif,jpg,jpeg}'])
    .pipe(imagemin())
    .pipe(gulp.dest(
        path.resolve('./public/live/image/')    
    ));
});

gulp.task('minify-js', function() {
  return gulp.src([
        "./node_modules/jquery/dist/jquery.js",
        "./node_modules/bootstrap/dist/js/bootstrap.js",
        "./public/dev/js/*.js"
    ])
    .pipe(concat("script.js"))
    .pipe(gulp.dest(
        path.resolve('./public/live/js/')    
    ))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(
        path.resolve('./public/live/js/')    
    ));
});

gulp.task('dev-watch',['build:ts'],function(){
    livereload.listen();
    var watcher = gulp.watch(TYPESCRIPT_FILES,['build:ts']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
    var watcher = gulp.watch(SASS_FILES,['sass']);
        watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
    gulp.watch(SASS_FILES,['minify-css']);
});

gulp.task('dev',['build:ts','sass','minify-css']);

gulp.task('watch',['dev-watch']);

gulp.task('default',['watch']);

gulp.task('live',['build:ts','minify-css','minify-js','bootstrap-font','compress-image']);