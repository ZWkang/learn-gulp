var gulp = require('gulp');
// Sass 是一种 CSS 的开发工具，提供了许多便利的写法，大大节省了开发者的时间，使得 CSS 的开发，变得简单和可维护。
var sass  = require('gulp-ruby-sass');

gulp.task('sass',function(){
    return sass('sass/*.scss')
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(gulp.dest('dist/css'))
})

gulp.task('auto',function(){
    gulp.watch('sass/**/*.scss', ['sass'])
})

gulp.task('default', ['sass', 'auto'])
