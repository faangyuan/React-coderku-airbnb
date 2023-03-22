import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionWrapper from './style'
import SectionHader from '@/components/section-header'
import SectionShlef from '@/components/section-shlef'
import SectionFooter from '@/components/sectioon-footer'

const HomeSectionV1 = memo((props) => {
  const { homeDataInfo } = props
  return (
    <SectionWrapper>
      <SectionHader title={homeDataInfo?.title} />
      <SectionShlef ListInfo={homeDataInfo?.list} />
      <SectionFooter />
    </SectionWrapper>
  )
})

HomeSectionV1.propTypes = {
  homeDataInfo: PropTypes.object
}

export default HomeSectionV1