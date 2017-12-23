const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync');

const BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    execMap: {
    // js: 'node --inspect-brk=0.0.0.0:9229'
     js: 'node'
    },
    script: 'app.js',
    watch: ['app.js'],
    args: ['--env=development','--command=add', '--title=first', '--body=first note'],
    ext: 'js html',
    env: { 'NODE_ENV': 'development' }
  })
  .on('start', function onStart() {
      // ensure start only got called once
      if (!called) { cb(); }
      called = true;
  })
  .on('restart', function onRestart() {
      // reload connected browsers after a slight delay
      setTimeout(function reload() {
        browserSync.reload({
          stream: false
        });
      }, BROWSER_SYNC_RELOAD_DELAY);
  });
});

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync({
    proxy: "localhost:8000",  // local node app address
    port: 5000,  // use *different* port than above
    notify: true
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('default', ['browser-sync'], function () {
  gulp.watch('public/*.js',   ['js', browserSync.reload]);
  gulp.watch('public/*.css',  ['css']);
  gulp.watch('public/*.html', ['bs-reload']);
});
