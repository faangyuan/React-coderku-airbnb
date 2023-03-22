import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import { useScrollTop } from './hooks'
import routes from './router'
import './style.css'

const App = memo(() => {
  useScrollTop()
  
  return (
    <div className='app'>
      <div className="header">
        <AppHeader />
      </div>
      <Suspense fallback={<div>loding.....</div>}>
         <div className="content">
          {
            useRoutes(routes)
          }
        </div>
     </Suspense>
      <div className="footer">
        <AppFooter />
      </div>
    </div>
  )
})

export default App