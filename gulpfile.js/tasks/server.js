import monitor from '../utils/monitor';

const { watch, lint } = config.app.argv;
gulp.task('server', () => monitor('server', resolve.root('scripts/server.js'), {
  watch,
  args: lint ? ['--lint'] : [],
  killTree: true
}));

// 使用nodemon 启动服务
gulp.task('nodemon', () => {
  $.nodemon({
    script: resolve.root('scripts/server.js')
  });
});
gulp.task('nodemon:lint', () => {
  $.nodemon({
    script: resolve.root('scripts/server.js'),
    args: ['--lint']
  })
  .on('restart', function () {
    console.log('restarted!')
  });
});