/**
 *  环境配置 这个是指 是开发环境还是生产环境
 *
 *  这个配置的来源 来自 process
 *
 */
export default (argv) => {
  const nodeEnv = process.env.NODE_ENV;

  // 默认是4中环境
  const environments = {
    production: argv.production || nodeEnv === 'production',
    staging: argv.staging || nodeEnv === 'staging',
    test: argv.test || nodeEnv === 'test',
  };

  const environmentName = Array.find(Object.keys(environments), (el) => environments[el]) || 'development';
  environments.development = argv.development || environmentName === 'development';

  /*
   * {
   *  environments:{
   *    development: true,
   *    production: false,
   *    staging: false,
   *    test: fase
   *  },
   *  environmentName: 'development'
   * }
   */
  return { environments, environmentName };
};
