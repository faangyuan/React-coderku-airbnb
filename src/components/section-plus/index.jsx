import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { PlusWrapper } from './style'
import HouseItem from '@/components/house-item'
import ScrollView from '../scroll-view'

const SectionPlus = memo((props) => {
  const { listInfo = [] } = props
  return (
    <PlusWrapper>
      <div className="plus-list">
        <ScrollView>
           {
            listInfo.map(item => (
              <HouseItem key={item.id} itemData={item} layoutSize="20%" />
            ))
          }
       </ScrollView>
      </div>
    </PlusWrapper>
  )
})

SectionPlus.propTypes = {
  listInfo: PropTypes.array
}

export default SectionPlus