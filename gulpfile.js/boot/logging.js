'use strict';
// 日志的打印
const debug = require('debug');
const app = require('../../config');

// 生成 环境 日志级别
const levels = {
  test: ['log', 'info', 'warn', 'error'],
  development: ['log', 'info', 'warn', 'error'],
  staging: ['info', 'warn', 'error'],
  production: ['warn', 'error']
};

// 如果 当前 设置了 开启调试模式 添加 调试 级别的日志
if (app.argv.debug) {
  levels[app.environment].push('debug');
}

// 任务下
const loggers = [
  'app:bundle',
  'app:webpack',
  'app:server'
];

const envLevels = levels[app.environment];
/*
 * 在 开发环境下会生成 下面几种日志
 *
 *  app:bundle:log
 *  app:bundle:info
 *  app:bundle:warn
 *  app:bundle:error
 *
 *  app:webpack:log
 *   ...
 *
 *  app:server:log
 *   ...
 *
 */
envLevels.forEach(level =>
  loggers.forEach(logger =>
    debug.enable(`${logger}:${level}`)));
