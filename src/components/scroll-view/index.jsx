import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, {  createRef, memo, useEffect, useRef, useState } from 'react'
import ScrollWrapper from './style'

const ScrollView = memo((props) => {
  const scroolCotentRef = createRef()
  let [showRight, setShowRight] = useState(false)
  let [showLeft, setShowLeft] = useState(false)
  let [posIndex, setPosIndex] = useState(0)
  let OffsetLeftRef = useRef(0)
  let totalWithRef = useRef(0)
  
  useEffect(() => {
    // scrollWidth 一共可滚动的宽度
    const scrollWidth = scroolCotentRef.current.scrollWidth
    // clienWidth 本身占据的宽度
    const clientWidth = scroolCotentRef.current.clientWidth
    // 可滚动的区域
    const totalWith = scrollWidth - clientWidth 
    totalWithRef.current = totalWith
    // 设置按钮显示隐藏
    setShowRight(totalWith > 0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.children])

  function controlClickFn(isRight) {
    const newIndex = isRight ?  posIndex + 1 : posIndex - 1
    const newElement = scroolCotentRef.current.children[newIndex]
    let newoffsetLeft = newElement.offsetLeft
    scroolCotentRef.current.style.transform = `translate(-${newoffsetLeft}px)`
    setPosIndex(newIndex)
    setShowRight(totalWithRef.current - newoffsetLeft > 0)
    setShowLeft(newoffsetLeft > 0)
  }

  return (
    <ScrollWrapper offsetLeft={OffsetLeftRef.current}>
      <div className="content">
        <div className="control"> 
            {showLeft && <div className='btn left' onClick={e => controlClickFn(false)}>
            <IconArrowLeft />
          </div>}
          {showRight && <div className='btn right' onClick={e => controlClickFn(true)}>
            <IconArrowRight />
          </div>}
          </div>
        <div className="scroll-cotent" ref={scroolCotentRef}>
          {
            props.children
          }
        </div>
      </div>
    </ScrollWrapper>
  )
})

export default ScrollView