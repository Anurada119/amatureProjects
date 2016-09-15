var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass')

gulp.task('jade', function() {
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('builds/developments'));
});

gulp.task('sass', function() {
    return gulp.src('src/sass/main.sass')
        .pipe(sass())
        .pipe(gulp.dest('builds/development/css'))
})