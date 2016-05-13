/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/5/9.
 */
import { Route } from 'react-router';
import walk from './walk';
import onEnter from './onEnter';
export default function(store, routes){
  function setup (route){
    route.onEnter = onEnter(route, store);
  }
  return walk(
      Route.createRouteFromReactElement(routes),
      route => setup(route)
  );
}