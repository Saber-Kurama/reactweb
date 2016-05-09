'use strict';

// 引入全局配置
const app = require('../../config');
// 根据当前环境变量 获得需要加载的 webpack
const client = require(`../../webpack/${app.environment}/client`);
// const server = require(`../../webpack/${app.environment}/server`);
// const devMiddleware = require('../../webpack/development/devMiddleware');
global.paths = app.paths;
global.resolve = app.resolve;

// global.config = { app, webpack: { client, server, devMiddleware } };
global.config = { app, webpack: { client } } ;

global.gulp = require('gulp');
global.sequence = require('run-sequence');
global.$ = require('gulp-load-plugins')();

global.logger = require('debug-dude');
global.prettyjson = require('prettyjson').render;
