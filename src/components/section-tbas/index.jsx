import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import TbasWrapper from './styled'
import classNames from "classnames"
import ScrollView from '../scroll-view'

const SectionTabs = memo((props) => {
  const [currIndex, setCurrIndex] = useState(0)
  const { tabList = [], ClickTabs } = props
  function tabClickFn(tabIndex, tabName) {
    ClickTabs(tabIndex, tabName)
    setCurrIndex(tabIndex)
  }
  return (
    <TbasWrapper>
      <ScrollView>
        {
        tabList.map((item, index) => (
          <div
            className={classNames('tab', { active: currIndex === index })}
            key={item} onClick={e => tabClickFn(index, item)}
          >
            {item}
          </div>
        ))
       }
      </ScrollView>
    </TbasWrapper>
  )
})

SectionTabs.propTypes = {
  tabList: PropTypes.array
}

export default SectionTabs