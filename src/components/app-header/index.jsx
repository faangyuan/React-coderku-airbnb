import { useSelector } from 'react-redux'
import React, { memo, useState } from 'react'
import HeaderCenter from './c-cps/header-center'
import HeaderLeft from './c-cps/header-left'
import HeaderRight from './c-cps/header-right'
import HeaderWrapper, { SearchTabWrapper } from './style'


const AppHeader = memo(() => {
  const { appheaderConfig } = useSelector((state) => ({
    appheaderConfig: state.main?.appheaderConfig
  }))

  const [isShowSearch, setShowSearch] = useState(false)

  return (
    <HeaderWrapper isFixed={appheaderConfig.isFixed}>
      <div className="header">
        <HeaderLeft />
        <HeaderCenter onSearchFn={e => setShowSearch(true)} isShowSearch={isShowSearch} />
        <HeaderRight />
      </div>
      <SearchTabWrapper isShowHeight={isShowSearch} />
      { isShowSearch && <div className="cover" onClick={e => setShowSearch(false)}></div>}
    </HeaderWrapper>
  )
})

export default AppHeader