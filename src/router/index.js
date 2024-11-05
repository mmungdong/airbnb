import React from 'react';
import { Navigate } from 'react-router-dom';


const Home = React.lazy(() => import('@/views/home'))
const Entire = React.lazy(() => import('@/views/entire'))
const Detail = React.lazy(() => import('@/views/detail'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />,  // Navigate 组件用于将 / 重定向到 /home
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/entire',
    element: <Entire />,
  },
  {
    path: '/detail',
    element: <Detail />,
  }
]

export default routes;