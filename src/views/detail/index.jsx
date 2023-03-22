import { useDispatch, useSelector } from 'react-redux'
import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import DetailPicture from './c-cpn/detail-picture'
import DetailInfos from './c-cpn/detail-infos'
import { changeAppHeaderConfig } from "@/store/modules/main";

const Detail = memo(() => {
  
  const { detailInfo } = useSelector((state) => ({
     detailInfo: state.detail?.detailInfo
  }))

  const dispacth = useDispatch()
  useEffect(() => {
    dispacth(changeAppHeaderConfig({ isFixed: false}))
  }, [dispacth])

  return (
    <DetailWrapper>
      <DetailPicture pictureUrls={detailInfo?.picture_urls} />
      <DetailInfos />
    </DetailWrapper>
  )
})

export default Detail