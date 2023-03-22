import React from 'react'
import { Navigate } from 'react-router-dom'
const Home = React.lazy(() => import('@/views/home'))
const Detail = React.lazy(() => import('@/views/detail'))
const Entrie = React.lazy(() => import('@/views/entrie'))

const routes = [
  {
    path: '/',
    // navigate 主要用于路由重定向
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: 'entrie',
    element: <Entrie />
  }
]


export default routes