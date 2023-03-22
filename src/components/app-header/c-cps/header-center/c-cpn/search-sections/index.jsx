import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionWrapper } from './style'

const SearchSections = memo((props) => {
  const { sectionInfos = [] } = props
  return (
    <SectionWrapper >
      <div className="list">
        {
          sectionInfos?.map((item, index) => (
            <div className="item" key={index}>
              <div className="title">{ item.title }</div>
              <div className="desc">{item.desc}</div>
              { index !== sectionInfos.length - 1 && <div className='divider'></div> }
            </div>
          ))
        }
      </div>
    </SectionWrapper>
  )
})

SearchSections.propTypes = {
  sectionInfos: PropTypes.array
}

export default SearchSections