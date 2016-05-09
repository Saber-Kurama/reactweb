import debug from 'debug';
import { render as prettyjson } from 'prettyjson';

import config from '../../config';
// import toolbox from './toolbox';
import postcss from './postcss';
import eslint from './eslint';

// debug('app:webpack:dependencies')(prettyjson(config.dependencies));
// debug('app:webpack:aliases')(prettyjson(config.aliases));
// debug('app:webpack:globals')(prettyjson(config.globals));

const noParse = [
];

export default {
  // 名字
  name: config.name,
  // 当前路径
  context: config.paths.scripts,
  // 转换
  resolve: {
    root: config.paths.root,
    alias: config.aliases, // 使用别名
    modulesDirectories: ['node_modules'],
    extensions: [
      '',
      '.jsx',
      '.js',
      '.css',
      '.scss',
      '.less',
      '.svg',
      '.json'
    ],
  },

  // 转换加载器
  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*']
  },

  output: {
    publicPath: ''
  },

  // 忽略对已知文件的解析
  module: { noParse },

  // toolbox,
  postcss,
  eslint,

  profile: config.argv.profile  //输出性能数据，可以看到每一步的耗时
}
