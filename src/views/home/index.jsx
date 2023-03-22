import { fetchHomeDataInfo } from '@/store/modules/home'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeWarpper from './style'
import Banner from './c-cpn/home-banner'
import HomeSectionV1 from './c-cpn/home-section-v1'
import HomeSectionV2 from './c-cpn/home-section-v2'
import { isEmptyObject } from '@/utils'
import HomeLongfor from './c-cpn/home-longfor'
import HomeSectionV3 from './c-cpn/home-section-v3'
import { changeAppHeaderConfig } from "@/store/modules/main";

const Home = memo(() => {
  // 获取我们的dispatch
  const dispatch = useDispatch()

  // 获取redux中的数据
  const { goodPriceInfo, highscoreInfo, discountInfo, hotrecommenddestInfo, LongforInfo, pluseInfo }= useSelector((state) => ({
    goodPriceInfo: state.home?.goodPriceInfo,
    highscoreInfo: state.home?.highscoreInfo,
    discountInfo: state.home?.discountInfo,
    hotrecommenddestInfo: state.home?.hotrecommenddestInfo,
    LongforInfo: state.home?.LongforInfo,
    pluseInfo: state.home?.plusInfo
  }), shallowEqual)



  // 副作用代码
  useEffect(() => {
    dispatch(fetchHomeDataInfo())
    dispatch(changeAppHeaderConfig({ isFixed: true}))
  }, [dispatch])


  return (
    <HomeWarpper>
      <Banner />
      <div className="HomeContent">
        {/* 我们需要在 传入对象有值时 才进行组件的渲染 减少渲染次数*/}
        {/* 折扣房源 */}
        { isEmptyObject(discountInfo) && <HomeSectionV2 homeDataInfo={ discountInfo } />}
        {/* 高性价比房源 */}
        <HomeSectionV1 homeDataInfo={goodPriceInfo} />
        {isEmptyObject(hotrecommenddestInfo) && <HomeSectionV2 homeDataInfo={hotrecommenddestInfo} />}
         {/* 向往城市 */}
        { isEmptyObject(LongforInfo) && <HomeLongfor dataInfo={LongforInfo} />}
        {/* 高分房源 */}
        {isEmptyObject(highscoreInfo) && <HomeSectionV1 homeDataInfo={highscoreInfo} />}
        {/* plus房源 */}
        { isEmptyObject(pluseInfo) && <HomeSectionV3 dataInfo={pluseInfo} />}
      </div>
    </HomeWarpper>
  )
})

export default Home