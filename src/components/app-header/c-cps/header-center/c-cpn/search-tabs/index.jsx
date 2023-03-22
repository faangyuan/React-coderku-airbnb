import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const SearchTabs = memo((props) => {
  const { titles, tabClick } = props
  const [currIndex, setCurrIndex] = useState(0)
  
  const itemClickFn = (index) => {
    setCurrIndex(index)
    if(tabClick) tabClick(index)
  }
  
  return (
    <TabsWrapper>
      <div className="title-list">
        {
          titles.map((item, index) => (
            <div className={classNames('title-item', {active: currIndex === index})} key={item} onClick={e => itemClickFn(index)} >
              <span className='text'>{item}</span>
              <div className="bottom"></div>
            </div>
          ))
        }
      </div>
    </TabsWrapper>
  )
})

SearchTabs.propTypes = {
  titles: PropTypes.array
}

export default SearchTabs