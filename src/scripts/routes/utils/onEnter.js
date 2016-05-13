/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/5/9.
 */
export default function(route, { dispatch, getState }){
  return async (nextState, repalce) => {
    let state = getState();
    //let { auth: { authenticated, currentUser} } = state;
    let { params, location } = nextState;
    console.log(route.requireAuth);
    if(route.requireAuth){
      console.log('00000');
      repalce({
        pathname: '/sign-in',
        //query: route.query || location.query,
        //state: route.state || location.state
      });
    //} else if(route.requireAuth){
    //  console.log('1111');
      //repalce('/');
    } else if(__CLIENT__){
      console.log('????');
      const components = [route.component];
      console.log(components);
    }
  }
}