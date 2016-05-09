/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/5/3.
 */
import { Provider } from 'react-redux';
//import { IntlProvider } from 'react-intl';
import { Router } from 'react-router';
import createRoutes from 'routes';
//import ReduxIntlContainer from 'components/redux_intl_container';

export default (history, store) => (
    <Provider store={store}>
      <Router history={history}>
        {createRoutes(store)}
      </Router>
    </Provider>
);