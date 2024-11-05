import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './App';
import './assets/css/index.less'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*  Suspense 用于解决路由懒加载，因为该加载为异步 https://zh-hans.react.dev/reference/react/Suspense */}
    <Suspense fallback={<div>loading...</div>} >
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </React.StrictMode>
);
