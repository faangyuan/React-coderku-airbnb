import PropTypes from 'prop-types'
import React, { memo } from 'react'
import LongForItem from '../longfor-item'
import ScrollView from '../scroll-view'
import LongforWarpper from './style'

const SectionLongfor = memo((props) => {
  const { dataList = [] } = props
  return (
    <LongforWarpper>
      <ScrollView>
         {
        dataList.map(item => (
          <LongForItem key={item.city} itemData={item} />
        ))
        }
     </ScrollView>
    </LongforWarpper>
  )
})

SectionLongfor.propTypes = {
  dataList: PropTypes.array
}

export default SectionLongfor