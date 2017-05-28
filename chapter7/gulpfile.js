var gulp = require('gulp');

var gutil = require('gulp-util');

var uglify = require('gulp-uglify');

var watchPath = require('gulp-watch-path')

gulp.task('default',function(){
    gutil.log('message')
    gutil.log(gutil.colors.red('error'))
    gutil.log(gutil.colors.green('message:')+"some")
})

gulp.task('uglifyjs',function(){
    gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
})
// gulp.task('default',function(){
//     gulp.watch('dist/js/**/*.js',['uglifyjs'])
// })
// watchPath(event, search, replace, distExt)




var combiner = require('stream-combiner2');

var handleError = function (err) {
    var colors = gutil.colors;
    console.log('\n')
    gutil.log(colors.red('Error!'))
    gutil.log('fileName: ' + colors.red(err.fileName))
    gutil.log('lineNumber: ' + colors.red(err.lineNumber))
    gutil.log('message: ' + err.message)
    gutil.log('plugin: ' + colors.yellow(err.plugin))
}

// 参数	说明
// event	gulp.watch 回调函数的 event
// search	需要被替换的起始字符串
// replace	第三个参数是新的的字符串
// distExt	扩展名(非必填)
// gulp.task('watchjs',function(){
//     gulp.watch('src/js/**/*.js',function(event){
//         var paths = watchPath(event, 'src/', 'dist/')
//         gutil.log(gutil.colors.green(event.type)+' '+paths.srcPath)
//         console.log(event,paths)
//         var combined = combiner.obj([
//             gulp.src(paths.srcPath),
//                 uglify(),
//                 gulp.dest(paths.distDir)
//         ])
//         combined.on('error',handleError);
//     })
// })
// gulp.task('default',['watchjs'])
//压缩前
var log = function (msg) {
    console.log('--------');
    console.log(msg)
    console.log('--------');
}
log({a:1})
log('gulp-book')

// 压缩后
var log=function(o){console.log("--------"),console.log(o),console.log("--------")};log({a:1}),log("gulp-book");



//sourcemap调试压缩后的代码

var sourcemaps = require('gulp-sourcemaps')
// ...

gulp.task('watchjs',function(){
    gulp.watch('src/js/**/*.js',function(event){
        var paths = watchPath(event, 'src/', 'dist/')
        gutil.log(gutil.colors.green(event.type)+' '+paths.srcPath)
        
        var combined = combiner.obj([
            gulp.src(paths.srcPath),
            sourcemaps.init(),
            uglify(),
            sourcemaps.write('./'),
            gulp.dest(paths.distDir)
        ])
        combined.on('error',handleError);
    })
})
gulp.task('default',['watchjs'])
var autoprefixer = require('gulp-autoprefixer')
var minifycss = require('gulp-minify-css')
gulp.task('csswatch',function(){
    gulp.watch('src/css/*.css',function(event){
        var paths = watchPath(event,'src/','dist/')
        gulp.src(paths.srcPath)
            .pipe(sourcemaps.init())
            .pipe(autoprefixer({
                browsers:'last 2 versions'
            }))
            .pipe(minifycss())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(paths.distDir))
    })
})
gulp.task('default',['csswatch'])

// gulp.task('minifycss', function () {
//     gulp.src('src/css/**/*.css')
//         .pipe(sourcemaps.init())
//         .pipe(autoprefixer({
//           browsers: 'last 2 versions'
//         }))
//         .pipe(minifycss())
//         .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest('dist/css/'))
// })
// 一次性直接编译所有的
