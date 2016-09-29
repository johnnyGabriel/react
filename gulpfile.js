const gulp = require('gulp');
const clean = require('gulp-clean');
const livereload = require('gulp-server-livereload');
const watchify = require('watchify');
const gutil = require('gulp-util');
const source = require('vinyl-source-stream');
const browserify = require('browserify');

var b = browserify({
    entries: ['./src/App.jsx'],
    extensions: ['.js', '.jsx', '.json'],
    cache: {},
    packageCache: {}
});

var filesWatch = ['src/*.*', '!src/*.jsx', 'src/css/*', 'src/libs/**/*'];

bundler = () =>
    b
    .transform( "babelify", { presets: ['react', 'es2015']} )
    .transform( { global: true }, "uglifyify" )
    .bundle()
    .pipe(source('App.js'))
    .pipe(gulp.dest('dist'))

watcher = () => {
    b.plugin('watchify')
        .on('update', bundler)
        .on('log', gutil.log.bind(this, 'Watchify update...'))
    bundler()
    gulp.watch(filesWatch, move)
}

move = (event) =>
    gulp.src(event.path, { base: 'src' })
        .pipe(gulp.dest('dist'))

cleaner = () =>
    gulp.src('dist', { read: false })
        .pipe(clean())

server = () =>
    gulp.src(['dist'])
        .pipe(livereload({
            livereload: true,
            defaultFile: 'index.html',
            log: 'debug'
        }))

moveAll = () =>
    gulp.src(filesWatch, { base: 'src'} )
        .pipe(gulp.dest('dist'))

gulp
    .task('watchify', watcher)
    .task('browserify', bundler)
    .task('moveFiles', moveAll)
    .task('server', server)
    .task('clean', cleaner)
    .task('build', ['browserify', 'moveFiles'])
    .task('default', ['watchify', 'server']);
