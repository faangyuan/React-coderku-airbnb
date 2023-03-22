import IconLanguage from '@/assets/svg/icon-language'
import IconMeno from '@/assets/svg/icon-meno'
import IconUser from '@/assets/svg/icon-user'
import React, { memo, useEffect, useState } from 'react'
import Wrpper from './style'

const HeaderRight = memo(() => {
  const [isShow, setIsShow] = useState(false)

  function changPrifile() {
    setIsShow(true)
  }

  useEffect(() => {
    const windowClickFn = () => {
      setIsShow(false)
    }
    window.addEventListener('click', windowClickFn, true)

    return () => {
      window.removeEventListener('click', windowClickFn, true)
    }
  },[])
  return (
    <Wrpper>
      <div className="btns">
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconLanguage />
        </span>
      </div>
      <div className="prifile" onClick={changPrifile}>
        <IconMeno />
        <div className='iconUser'>
          <IconUser />
        </div>
        {
          isShow &&  <div className="framework">
            <div className="top">
            <div className="item register">注册</div>
            <div className="item login">登录</div>
          </div>
          <div className="bottom">
            <div className="item">来爱彼迎发布房源</div>
            <div className="item">开展体验</div>
            <div className="item">帮助</div>
          </div>
          </div>
       }
      </div>
      
      
    </Wrpper>
  )
})

export default HeaderRight