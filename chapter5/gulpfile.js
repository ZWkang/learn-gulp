var gulp = require('gulp');

var gulpless = require('gulp-less');

gulp.task('less',function(){
    gulp.src('less/*.less')
        .pipe(gulpless())
        .pipe(gulp.dest('dist/less'))
})

gulp.task('auto',function(){
    gulp.watch('less/*.less',['less'])
})

gulp.task('default',['less','auto'])