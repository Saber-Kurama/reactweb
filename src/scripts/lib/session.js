/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/5/16.
 */
import cookie from 'react-cookie';

export const AUTH_KEY = 'authToken';
export const LOCALE_KEY = 'locale';

export const login = (authToken) => {
  cookie.save(AUTH_KEY, authToken, {
    path: '/',
    expires: new Date(new Date().getTime() + settings.session.ttl)
  });
  return authToken;
};

export const logout = () => cookie.remove(AUTH_KEY);
export const token = () => cookie.load(AUTH_KEY) || null;
export const authenticated = () => !!token();
export const setLocale = (locale) => cookie.save(LOCALE_KEY, locale, { path: '/' });
