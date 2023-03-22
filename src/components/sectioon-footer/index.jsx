import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import FooterWrapper from './style'

const SectionFooter = memo((props) => {
  const { title } = props
  const navigate = useNavigate()
  function footerClickFn() {
    navigate('/entrie')
  }
  return (
    <FooterWrapper color={title?  "#00848a" : "#000" }>
      <div className="info" onClick={footerClickFn}>
        <span className='text'>{ title ? '显示更多' + title + "房源": '显示全部' }</span> 
        <IconMoreArrow style={{ fontSize: '20px'}} />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string
}

export default SectionFooter