import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV3Wrapper } from './style'
import SectionHader from '@/components/section-header'
import SectionPlus from '@/components/section-plus'

const HomeSectionV3 = memo((props) => {
  const { dataInfo = {} } = props
  return (
    <SectionV3Wrapper>
       <SectionHader title={dataInfo.title} subheard={dataInfo.subtitle} />
       <SectionPlus listInfo={dataInfo.list} />
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  dataInfo: PropTypes.object
}

export default HomeSectionV3