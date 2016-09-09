const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const livereload = require('gulp-server-livereload');

gulp
    .task('jsx', () =>
        gulp.src('src/jsx/app.jsx')
            .pipe(babel({
                presets: ['react']
            }))
            .pipe(gulp.dest('dist/js'))
    )
    .task('moveSrc', () =>
        gulp.src(['src/index.html'], { base: 'src' })
            .pipe(gulp.dest('dist'))
    )
    .task('moveBower', () =>
        gulp.src('src/libs/**/*', { base: 'src' })
            .pipe(gulp.dest('dist'))
    )
    .task('clean', () => 
        gulp.src('dist', { read: false})
            .pipe(clean())
    )
    .task('watchSrc', () => 
        gulp.watch(['src/**/*', '!src/libs/**/*'], ['build'])
    )
    .task('watchBower', () => 
        gulp.watch('src/libs/**/*', ['moveBower'])
    )
    .task('watch', ['watchSrc', 'watchBower'])
    .task('server', () =>
        gulp.src(['dist'])
            .pipe(livereload({
                livereload: true,
                defaultFile: 'index.html',
                log: 'debug'
            }))
    )
    .task('build', ['jsx', 'moveSrc', 'moveBower'])
    .task('default', ['watch', 'server']);
