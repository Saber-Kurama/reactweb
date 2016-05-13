/**
 *
 * 客户端
 */
import merge from 'webpack-merge';

import appConfig from '../../config';

import base from '../base/client';
import common from './common';

import plugins from './plugins/client';
import loaders from './loaders/client';

import preLoaders from './preLoaders';
export default merge(base, common, {
  entry: ['webpack-hot-middleware/client'],
  //是否修改修改静态资源
  output: {
    //publicPath: `${appConfig.server.url}/`
    publicPath: '/'
  },
  module: { preLoaders, loaders },
  plugins,
  devtool: 'cheap-module-inline-source-map'
});
