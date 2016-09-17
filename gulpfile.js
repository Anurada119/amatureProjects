var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('jade', function() {
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('builds/developments'));
});

gulp.task('sass', function() {
    return gulp.src('src/sass/main.sass')
        .pipe(sass())
        .pipe(gulp.dest('builds/developments/css'))
})

gulp.task('js', function() {
    return gulp.src('src/js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('builds/developments/js'))
});