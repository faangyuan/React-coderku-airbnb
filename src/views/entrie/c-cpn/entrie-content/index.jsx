import React, { memo, useCallback } from 'react'
import { ContentWrapper } from './style'
import PropTypes from 'prop-types'
import HouseItem from '@/components/house-item'
import SectionHader from '@/components/section-header'
import { useNavigate } from 'react-router-dom';
import { changeDetailInfoAction } from "@/store/modules/detail"
import { useDispatch } from 'react-redux'

const EntrieContent = memo((porps) => {
  const { roomList = [], totalCount } = porps
  const navigate = useNavigate()

  const dispatch  = useDispatch()
  const itemCLick = useCallback((itemData) => {
    navigate('/detail')
    dispatch(changeDetailInfoAction(itemData))
  }, [navigate, dispatch])

  return (
    <ContentWrapper>
      <SectionHader title={`共有${totalCount}多处住所`} />
      <div className="entrie-list">
        {
          roomList.map(item => (
            <HouseItem key={item._id} itemData={item} layoutSize="20%" itemCLick={itemCLick} />
          )) 
      }
      </div>
    </ContentWrapper>
  )
})

EntrieContent.propTypes = {
  roomList: PropTypes.array,
  totalCount: PropTypes.number
}

export default EntrieContent

