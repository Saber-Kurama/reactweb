/**
 *  项目的入口
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, useRouterHistory } from 'react-router';
import { createHistory } from 'history';
// import { ReduxRouter } from 'redux-router';
//import createRoutes from 'routes';
import render from 'lib/render';
// 创建数据 store
import createStore from '../store/create';
import injectTapEventPlugin from 'react-tap-event-plugin';
// 引入 antd的less样式
//import 'antd/style/index.less';
//import '../../styles/code.css';
// import './index.less';
injectTapEventPlugin();


function run() {
  // 初始化数据 ()
  const initialState = window.__INITIAL_STATE__ || {};
  const store = createStore(browserHistory, initialState);

  const history = useRouterHistory(createHistory)({ basename: '' });

  const container = window.document.getElementById('content');
  const component = render(history, store);
  //const DevTools = require('components/dev_tools');
  //ReactDOM.render(
  //    component, container);

  if (!__PRODUCTION__) {
    if (__DEVTOOLS__ && !window.devToolsExtension) {
      const DevTools = require('components/dev_tools');

      ReactDOM.render(
          <Provider store={store} key='provider'>
            <div>{component}<DevTools /></div>
          </Provider>,
          container
      );
    }
  }else{
    ReactDOM.render(
        component, container);
  }
}

// run the application when both:
// - DOM is ready
// - page content is loaded
if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}