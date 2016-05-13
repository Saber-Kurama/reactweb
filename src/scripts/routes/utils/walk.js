/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/5/9.
 */
export default function walk(routes, cb){
  cb(routes);
  if(routes.indexRoute){
    cb(routes.indexRoute);
  }

  if(routes.childRoutes){
    routes.childRoutes.forEach( route => walk(route, cb));
  }
  return routes;
}
