import React, { memo } from 'react'
import HeaderWapper from './style'

const SectionHader = memo((props) => {
  const { title, subheard } = props
  return (
    <HeaderWapper>
      <h2 className="title">{ title }</h2>
      {subheard && <div className="subheard">{ subheard }</div>}
    </HeaderWapper>
  )
})

export default SectionHader