import { reducer } from 'lib/redux';
import * as session from 'lib/session';
import {
  loginStart,
  loginError
} from './actions';

const initialState = {
  token: session.token(),
  error: null,
  data: null,
  currentUser: null,
  currentUserId: null,
  authenticated: false,
  loading: false
};
export default reducer({
  [loginStart]: s => ({...s, error:null, loading:true}),
  [loginError]: (s, {error}) => ({...s, error, losading: false})
}, initialState);