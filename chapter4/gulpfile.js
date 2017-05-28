var gulp = require('gulp')

var imagemin = require('gulp-imagemin')
// 压缩 图片文件可降低文件大小，提高图片加载速度。

// 找到规律转换为 gulp 代码
gulp.task('image',function(){
    gulp.src('image/*.*')
        .pipe(imagemin({
            progressive:true
        }))
        .pipe(gulp.dest('dist/image'))
})

gulp.task('auto',function(){
    gulp.watch('image/*.*',['image'])
})

gulp.task('default',['image','auto'])