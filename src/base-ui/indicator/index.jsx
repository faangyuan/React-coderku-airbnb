import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'
import PorpTypes from "prop-types"

const Indicator = memo((props) => {
  const { selectIndex } = props
  const ContentRef = useRef()

  useEffect(() => {
    const selectItemEl = ContentRef.current.children[selectIndex]
    let scrollDistance = selectItemEl?.offsetLeft + selectItemEl?.clientWidth * 0.5 - ContentRef.current.clientWidth * 0.5
    let totalDistance = ContentRef.current.scrollWidth - ContentRef.current.clientWidth
    if (scrollDistance < 0) scrollDistance = 0 // 左边的特殊情况处理
    if (scrollDistance > totalDistance) scrollDistance = totalDistance
    ContentRef.current.style.transform = `translate(${-scrollDistance}px)` // 右边的特殊情况处理
    
  }, [selectIndex])
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={ContentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PorpTypes.number
}

export default Indicator