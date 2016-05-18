/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/5/16.
 */
import { action } from 'lib/redux';
import authenticate from './authenticate';

export const loginStart = action('auth.login.start');
export const loginComplete = action('auth.login.complete');
export const loginError = action('auth.login.error');


export const login = (provider, inviteCode) =>
  async (dispath, getState) => {
    dispath(loginStart({ provider, inviteCode}));
    try{
      console.log('-------------');
      const userData = await authenticate(provider, inviteCode);
      dispatch(loginComplete(userData));
      console.log(userData);
    }catch(e){
      console.log('???zzzzzz', e);
      dispath(loginError(e));
    }
  };

