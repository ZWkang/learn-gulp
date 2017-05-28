var gulp = require('gulp');

var cleancss = require('gulp-clean-css');



gulp.task('css',()=>{
    gulp.src('css/*.css')
        .pipe(cleancss())
        .pipe(gulp.dest('dist/css'))
})

gulp.task('auto',function(){
    gulp.watch('css/*.css',['css']);
})

gulp.task('default',['css','auto']);
