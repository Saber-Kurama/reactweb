/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/5/16.
 */
import mapObj from 'map-obj';
export default (environments, environmentName, argv) => {

  const env = mapObj(
      environments,
      (key, val) => [`__${key.toUpperCase()}__`, val]
  );

  const common = {
    __QUIET__: argv.quiet,
    __VERBOSE__: argv.verbose,
    __PROFILE__: argv.profile,
    __DEBUG__: argv.debug,

    __DEVTOOLS__: environments.development && false,
  };

  const app = {
    settings:{
      authRoot: JSON.stringify(process.env.AUTH_ROOT),
      session: { ttl: 24 * 60 * 60 * 1000 }
    }
  }

  return {
    ...common,
    ...env,
    ...app
  }
}