import React, { memo, useState  } from 'react'
import SearchTabs from './c-cpn/search-tabs'
import CenterWrapper from './style'
import searchTitles from "@/assets/data/search-title.json"
import Searchframe from './c-cpn/search-frame'
import SearchSections from './c-cpn/search-sections'
import { CSSTransition } from 'react-transition-group'

const HeaderCenter = memo((props) => {
  const { onSearchFn, isShowSearch } = props
  const titles = searchTitles.map(item => item.title)
  const [currIndex, setCurrIndex] = useState(0)

  const tabClickFn = (index) => {
    setCurrIndex(index)
  }

  const clickFn = () => {
    if (onSearchFn) onSearchFn()
    console.log(isShowSearch);
  }

  return (
    <CenterWrapper onClick={clickFn}>
      <CSSTransition in={!isShowSearch} classNames={'bar'} timeout={250} unmountOnExit={true}>
        <Searchframe />
      </CSSTransition>
      <CSSTransition in={isShowSearch} classNames={'intor'}  timeout={250} unmountOnExit={true}>
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={tabClickFn} />
          <div className="infos">
            <SearchSections sectionInfos={ searchTitles[currIndex].searchInfos } />
          </div>
        </div>
      </CSSTransition>
          
    </CenterWrapper>
  )
})

export default HeaderCenter