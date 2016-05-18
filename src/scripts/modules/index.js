import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import global from './global/reducer';
import auth from './auth/index';

export default combineReducers({
  global,
  auth,
  form,
  routing: routerReducer
});
