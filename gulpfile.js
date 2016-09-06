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
    .task('move', () =>
        gulp.src(['src/index.html', 'src/libs/**/*'], { base: 'src'})
            .pipe(gulp.dest('dist'))
    )
    .task('clean', () => 
        gulp.src('dist', { read: false})
            .pipe(clean())
    )
    .task('watch', () => 
        gulp.watch('src/**/*', ['build'])
    )
    .task('server', () =>
        gulp.src('dist')
            .pipe(livereload({
                livereload: true,
                defaultFile: 'index.html',
                log: 'debug'
            }))
    )
    .task('build', ['jsx', 'move'])
    .task('default', ['watch', 'server']);
