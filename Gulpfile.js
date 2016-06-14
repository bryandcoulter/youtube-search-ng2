const gulp = require('gulp');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const shell = require('gulp-shell');

//build production dist tasks
gulp.task('dist:bundle', shell.task('jspm bundle-sfx app/**/*.ts app.js --minify --inject'));

gulp.task('dist:clean', function () {
  return gulp.src('dist', {read: false})
		.pipe(clean());
});
gulp.task('dist:html', function () {
  gulp.src("index-dist.html")
    .pipe(rename("index.html"))
    .pipe(gulp.dest("dist"));
});
gulp.task('dist:generate',['dist:clean','dist:bundle','dist:html'], function() {
  return gulp.src(['app/**/*', 'app.js', 'fonts/*', 'css/*', '!app/**/*.ts'], { base : './' })
    .pipe(gulp.dest('dist'))
});

gulp.task('dev:bundle', shell.task('jspm bundle app/**/* - [app/**/*] vendor-bundle.js --minify --inject'));

gulp.task('default');

gulp.task('bryan');
