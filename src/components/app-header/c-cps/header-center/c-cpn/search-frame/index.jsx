import React, { memo } from 'react'
import { FrameWrapper } from './style'
import IconSearch from '@/assets/svg/icon-search'

const Searchframe = memo(() => {
  return (
    <FrameWrapper>
      <div className="left">搜索房源和体验</div>
          <div className="right">
            <IconSearch />
          </div> 
    </FrameWrapper>
  )
})

export default Searchframe