import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import './assets/css/index.less'
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*  Suspense 用于解决路由懒加载，因为该加载为异步 https://zh-hans.react.dev/reference/react/Suspense */}
    <Suspense fallback={<div>loading...</div>} >
      {/*  Provider 用于提供 store 给组件 */}
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
