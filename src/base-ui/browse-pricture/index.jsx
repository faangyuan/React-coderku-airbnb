import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/incon-close'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { PrictureWrapper } from './style'
import { CSSTransition, SwitchTransition } from "react-transition-group"
import Indicator from '../indicator'
import classNames from 'classnames'

const BrowseProcture = memo((props) => {
  const { prictureUrls = [], closeClickFn } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // 组件销毁时 执行该钩子
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [])

  const iconClickFn = (isNext) => {
    let newIndex = 0
    isNext ? newIndex = currentIndex + 1  : newIndex = currentIndex - 1
    if (currentIndex < 0) newIndex = prictureUrls.length - 1
    if (currentIndex > prictureUrls.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
  }

  const closeFn = () => {
    if(closeClickFn) closeClickFn()
  }

  return (
    <PrictureWrapper>
      <div className="header">
        <div className="close" onClick={closeFn}>
          <IconClose width='28' height='28'/>
        </div>
      </div>
      <div className="content">
        <div className="left btn" onClick={e => iconClickFn(false)}>
          <div className="icon">
             <IconArrowLeft width='76.8' height='76.8' color='#fff' />
         </div>
        </div>
        <div className="right btn" onClick={e => iconClickFn(true) }>
          <div className="icon">
             <IconArrowRight width='76.8' height='76.8' color='#fff' />
         </div>
        </div>
        <div className="pricture">
          <SwitchTransition mode='out-in'>
            <CSSTransition key={prictureUrls[currentIndex]} timeout={200} className="pic">
              <img src={prictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="footer">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>15/30</span>
              <span>room apartmen图片15</span>
            </div>
            <div className="toggle">
              <span>隐藏照片的列表</span>
              <span className="icon"></span>
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {
                prictureUrls?.map((item, index) => (
                  <div className='item' key={item}>
                    <img src={item} alt="" />
                    <div className={classNames('cover', {active: index === currentIndex})}></div>
                  </div>
                ))
              }
            </Indicator>
          </div>
        </div>
      </div>
    </PrictureWrapper>
  )
})

BrowseProcture.propTypes = {
  prictureUrls: PropTypes.array
}

export default BrowseProcture