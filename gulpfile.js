var gulp = require('gulp');
var riot = require('gulp-riot');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var concat = require('gulp-concat');

var components =
    "components/*.html";

function dist() {
    gulp.src(components)
        .pipe(riot())
        .pipe(uglify())
        .pipe(concat('dist.js'))
        .pipe(gulp.dest('dist'));
    console.log("success!")
}

gulp.task('dist', dist);

gulp.task('dev', function () {
    return watch(components, function () {
        dist()
    })
});

// gulp.task('dev', function () {
//     return gulp.watch(components)
//         .pipe(riot())
//         .pipe(uglify)
//         .pipe(gulp.dest('dist/riot_components.js')
// });
