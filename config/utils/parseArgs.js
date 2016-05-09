/*
 *  解析 argument
 */
import minimist from 'minimist';
/**
 *
 * 设置 process 可以配置 的几个参数
 */
export default () => minimist(process.argv.slice(2), {
  // these switches are always treated as booleans
  boolean: [
    'test',
    'development',
    'staging',
    'production', // 上面几个是 环境
    'lint',  // 是不是要开启校验
    'debug', // 是不是要开启 调试

    'profile', //总则,轮廓 是指webpack的消息模式 ,是否 输出性能数据，可以看到每一步的耗时.以及设置devMiddleware
    'verbose', //详细
    'quiet',
    'watch'
  ]
});
