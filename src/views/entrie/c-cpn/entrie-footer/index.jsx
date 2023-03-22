import React, { memo } from 'react'
import { FooterWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import PropTypes from 'prop-types'

const EntrieFooter = memo((props) => {
  const { totalCount, offset, onChnagePage } = props

  const startCount = offset * 20 + 1 
  const endCount = (offset + 1) * 20
  const totalPage = Math.ceil(totalCount / 20)
  const ChangeCountFn = (event, page) => {
    const newOffset = page - 1
    onChnagePage(newOffset)
  }
  return (
    <FooterWrapper>
      <div className='Pagination'>
        <Pagination count={totalPage} color="secondary" onChange={ChangeCountFn} />
      </div>
      <p>第 {startCount} – {endCount} 个房源，共超过 { totalCount }个</p>
    </FooterWrapper>
  )
})

EntrieFooter.propTypes = {
  totalCount: PropTypes.number,
  offset: PropTypes.number
}

export default EntrieFooter