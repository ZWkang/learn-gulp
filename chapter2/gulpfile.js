var gulp = require('gulp');
//获得gulp模块

var uglify = require('gulp-uglify');
//获取gulp的uglify模块用于压缩js
var babel = require('gulp-babel');
//gulp对es6不太支持吧

gulp.task('script',function(){
    gulp.src('js/*.js')
        //匹配文件
        .pipe(babel())
        .pipe(uglify())
        //压缩文件
        .pipe(gulp.dest('dist/js'))
        //另存压缩后的文件
})
// gulp.task(name, fn) - 定义任务，第一个参数是任务名，第二个参数是任务内容。
// gulp.src(path) - 选择文件，传入参数是文件路径。
// gulp.dest(path) - 输出文件
// gulp.pipe() - 管道，你可以暂时将 pipe 理解为将操作加入执行队列

gulp.watch('js/*.js',['script']);
//监听被修改的时候执行对应task

// gulp.task('auto', function () {
//     // 监听文件修改，当文件被修改则执行 script 任务
//     gulp.watch('js/*.js', ['script'])
// })
// 将watch包裹在一个auto的task下也是可以的
// 然后执行这个auto
// 注意：**使用 gulp.watch 后你的命令行会进入“运行”状态，此时你不可以在命令行进行其他操作。可通过 Ctrl + C 停止 gulp。
//在阻塞监听


// gulp.task('default', ['script', 'auto']);
//设置默认任务
//运行gulp直接会运行default的





