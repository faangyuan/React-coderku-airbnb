import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongorWrapper } from './style'
import SectionHader from '@/components/section-header'
import SectionLongfor from '@/components/section-longfor'

const HomeLongfor = memo((props) => {
  const { dataInfo = {} } = props
  return (
    <LongorWrapper>
       <SectionHader title={dataInfo.title} subheard={dataInfo.subtitle} />
       <SectionLongfor dataList={dataInfo.list} />
    </LongorWrapper>
  )
})

HomeLongfor.propTypes = {
  dataInfo: PropTypes.object
}

export default HomeLongfor