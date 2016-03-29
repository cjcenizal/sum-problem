
const gulp = require('gulp');
const gulpJasmine = require('gulp-jasmine');

gulp.task('testUnit', () => (
  gulp.src(['./index.spec.js'])
  .pipe(gulpJasmine({
    verbose: true,
  }))
));

gulp.task('watch', () => {
  gulp.watch(['./*.js'], ['testUnit']);
});


gulp.task('default', () => {
  gulp.start('watch');
});
