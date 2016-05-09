// package 的一些配置
import { name, description } from '../package';
// 服务的一些配置
import server from './server';
// 所有的路径
import paths from './paths';
// 路径转换
import resolve from './resolve';
// 别名
import aliases from './aliases';

// postcss的配置
import postcss from './postcss';
// 当前环境
import env from './env';
// 指令参数
import parseArgs from './utils/parseArgs';

// 指令的输入参数 结果
const argv = parseArgs();
const { environments, environmentName } = env(argv);

export default {
  argv,
  name,
  description,
  server,
  //
  paths,
  resolve,
  aliases,

  postcss,
  // browsersync: browsersync(argv),

  // 当前NODE_ENV的环境变量
  env: environments,
  environment: environmentName,

};
