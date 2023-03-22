import React, { memo } from 'react'
import BannerWapper from './styled'

const Banner = memo(() => {
  return (
    <BannerWapper>
      <div className="header">
        <div className="maskLazy" />
      </div>
    </BannerWapper>
  )
})

export default Banner