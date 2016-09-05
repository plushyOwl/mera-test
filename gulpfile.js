var gulp = require('gulp'),
    csso = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    order = require("gulp-order");

// Build css
gulp.task('css', function () {
    gulp.src('./assets/css/**/*.css')
        .on('error', console.log)
        .pipe(concat('main.css'))
        .pipe(csso())
        .pipe(gulp.dest('./public/css/'));
});

// Build JS
gulp.task('js', function () {
    gulp.src('./assets/js/**/*.js')
        .pipe(order([
            "jquery.min.js",
            "underscore-min.js",
            "backbone-min.js",
            "backbone-tab.js",
            "PopupView.js",
            "*.js"
        ]))
        .pipe(concat('index.js'))
       // .pipe(uglify())
        .pipe(gulp.dest('./public/js'));
});

//Just start, without uploading on a server
gulp.task('start', function () {
    gulp.run('css');
    gulp.run('js');
});