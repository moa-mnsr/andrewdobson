var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task("sass", function () {
 // we want to run "sass css/app.scss app.css --watch"
 return gulp.src("css/app.scss")
 .pipe(sass())
 .pipe(gulp.dest("."))
})

gulp.task('default', ["sass"]);


gulp.task("watch", function() {
    gulp.watch("css/app.scss", ["sass", "watch"])
})
