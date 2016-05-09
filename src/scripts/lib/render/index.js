/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/5/3.
 */
export default (history, store, routerProps = {}) => {
  if (__CLIENT__) {
    return require('./client')(history, store);
  } else {
    return require('./server')(store, routerProps);
  }
};