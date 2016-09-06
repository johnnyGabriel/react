const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');

gulp
	.task('jsx', ['clean'], () =>
		gulp.src('src/jsx/app.jsx')
			.pipe(babel({
				presets: ['react']
			}))
			.pipe(gulp.dest('dist/js'))
	)
	.task('move', ['clean'], () => 
		gulp.src(['src/index.html', 'src/libs/**/*'], { base: 'src'})
			.pipe(gulp.dest('dist'))
	)
	.task('clean', () => 
		gulp.src('dist', { read: false})
			.pipe(clean())
	)
	.task('default', ['move', 'jsx']);
