import IconLogo from '@/assets/svg/icon.logo'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import Wrpper from './style'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  return (
    <Wrpper>
      <div className="logo" onClick={ e => navigate('/home')}>
        <IconLogo />
      </div>
      <img className='titleImage' src="https://z1.muscache.com/pictures/fcb7abde-a965-46d3-8de5-265693ce2ad1.jpg" alt="" />
    </Wrpper>
  )
})

export default HeaderLeft