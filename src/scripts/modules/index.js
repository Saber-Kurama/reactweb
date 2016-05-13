import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import global from './global/reducer';

export default combineReducers({
  global,
  form,
  router: routeReducer
});
