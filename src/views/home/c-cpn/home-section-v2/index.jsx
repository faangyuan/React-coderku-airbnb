import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import SectionWrapper from './style'
import SectionHader from '@/components/section-header'
import SectionShlef from '@/components/section-shlef'
import SectionTabs from '@/components/section-tbas'
import SectionFooter from '@/components/sectioon-footer'

const HomeSectionV2 = memo((props) => {
  const { homeDataInfo = {} } = props
  const initiaName = Object.keys(homeDataInfo.dest_list)?.[0]
  const [tabName, setTabName] = useState(initiaName)
  const tabNames = homeDataInfo.dest_address?.map(item => item.name)
  
  const TabsFn = useCallback(function (index, name) {
    setTabName(name)
  }, [])

  return (
    <SectionWrapper>
      <SectionHader title={ homeDataInfo.title} subheard={homeDataInfo.subtitle} />
      <SectionTabs tabList={ tabNames } ClickTabs={TabsFn} />
      <SectionShlef ListInfo={homeDataInfo.dest_list?.[tabName]} layoutSize="33.33%" />
      <SectionFooter title={initiaName}  />
    </SectionWrapper>
  )
})

HomeSectionV2.propTypes = {
  homeDataInfo: PropTypes.object
}

export default HomeSectionV2