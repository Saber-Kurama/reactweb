import { reducer } from 'lib/redux';
import {
  loginStart
} from './actions'
export default reducer({
  [loginStart]: s => ({...s, error:null, loging:true})
});