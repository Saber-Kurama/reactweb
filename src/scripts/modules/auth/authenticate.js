/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/5/16.
 */
import Qs from 'qs';
import jwtDecode from 'jwt-decode';

import openPopup from 'lib/utils/popup';
import * as session from 'lib/session';

export default function(provider, code, tab){
  const name = !!tab ? '_blank' : provider;
  const query = code ? '?' + Qs.stringify({invite_code: code}) : '';
  const url = `${settings.authRoot}/${provider}${query}`;
  const popup = openPopup(provider, url, name);
  return waitRedirect(provider, popup);
}

function waitRedirect(provider, popup){
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      console.log(popup.closed)
      if(!popup || popup.closed){

        clearInterval(interval);
        if (!popup) {reject({ error: 'Popup was blocked.' });}
        if (popup.closed) {console.log('???=======', reject);reject({error: 'Login has been cancelled.' });}

        reject({ error: 'Error. Please, try again.' });
      }else{
        try{
          console.log('??????-----');
          const params = Qs.parse(popup.location.search.slice(1));
          console.log(params);
          if(params.auth_token || params.error) popup.close();
          console.log('huoing');
          if(params.auth_token){
            console.log('>>>>>>>>>>>>>>>>>>>>>>>><<<<<<');
            const token = params.auth_token;
            const data = jwtDecode(token);
            console.log(data);
            session.login(token);
            console.log('??/xxxx');
            resolve({token, data});
            console.log('>>>><<<<<>>>><<<');
          }else if(params.error){
            reject( {error: params.error} );
          }
        }catch (e){

        }
      }
    }, 100);
  });
}