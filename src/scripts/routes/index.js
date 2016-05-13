import { Route, IndexRoute } from 'react-router';

import setup from './utils/setup';
import * as layouts from 'layouts';
import { Home, About, SignIn, NotFound} from 'pages';
//
// import adminRoutes from './admin';
// import appRoutes from './app';
const routes = (
  <Route component={layouts.base} >
    <Route path='/sign-in' component={SignIn} requireUnauth/>
    <Route path='/' component={layouts.app} requireAuth>
      <IndexRoute component={Home}  />
      <Route path='about' component={About} requireAuth />
    </Route>
    <Route path='*' component={NotFound} ></Route>
  </Route>
);

export default store => setup(store, routes);
//export default function (store) {
//  return routes;
//}
