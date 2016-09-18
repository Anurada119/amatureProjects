var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var connect = require('gulp-connect');

var env = process.env.NODE_ENV || 'development';

gulp.task('jade', function() {
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('builds/developments'))
        .pipe(connect.reload());
});

gulp.task('sass', function() {
    var config = {};
    if (env === 'develpment') {
        config.sourceComments = 'map';
    }

    if (env === 'producttion') {
        config.outputStyle = 'compressed';
    }

    return gulp.src('src/sass/main.sass')
        .pipe(sass())
        .pipe(gulp.dest('builds/developments/css'))
        .pipe(connect.reload());
})

gulp.task('js', function() {
    return gulp.src('src/js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('builds/developments/js'))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('src/templates/**/*.jade', ['jade'])
    gulp.watch('src/sass/**/*.sass', ['sass'])
    gulp.watch('src/js/**/*.js', ['js'])
})

gulp.task('connect', function() {
    connect.server({
        root: 'builds/developments',
        livereload: true
    })
})

gulp.task('default', ['jade', 'sass', 'js', 'watch', 'connect']);