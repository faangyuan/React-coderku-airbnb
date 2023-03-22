import PropTypes from 'prop-types'
import React, { memo } from 'react'
import ShlefWrapper from './style'
import HouseItem from '@/components/house-item'


const SectionShlef = memo((props) => {
  const { ListInfo = [], layoutSize } = props
  return (
    <ShlefWrapper>
          {
            ListInfo.slice(0, 8).map(item => (
              <HouseItem key={item.id} itemData={item} layoutSize={ layoutSize } />
            ))
          }
    </ShlefWrapper>
  )
})

SectionShlef.propTypes = {
  ListInfo: PropTypes.array
}

export default SectionShlef