import { feachEntrieListAction } from '@/store/modules/entrie'
import { isEmptyObject } from '@/utils'
import { Spin } from 'antd'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EntrieContent from './c-cpn/entrie-content'
import EntrieFooter from './c-cpn/entrie-footer'
import EntrieHeader from './c-cpn/entrie-header'
import { EntrieWrapper } from './style'
import { changeAppHeaderConfig } from "@/store/modules/main";


const Entrie = memo(() => {
  const dispatch = useDispatch()
  const [newOffSet, setNewOffSet] = useState(0)

  const { offset, roomList, totalCount, isLoding } = useSelector((state) => ({
    offset: state.entrie?.offset,
    roomList: state.entrie?.roomList,
    totalCount: state.entrie?.totalCount,
    isLoding: state.entrie?.isLoding
  }))

  useEffect(() => {
    dispatch(feachEntrieListAction(newOffSet))
    dispatch(changeAppHeaderConfig({ isFixed: true}))
    window.scrollTo(0, 0)
  }, [dispatch, newOffSet])

  // 子组件向父组件传入数据 传入一个函数
  const onChnagePage = useCallback((offset) => {
    setNewOffSet(offset)
  }, [])

  return (
    <EntrieWrapper>
      <EntrieHeader />
      { isEmptyObject(roomList) && <EntrieContent roomList={ roomList } totalCount={totalCount} />}
      <EntrieFooter totalCount={totalCount} offset={offset} onChnagePage={onChnagePage} />
      <div className="cover" style={{ display: isLoding ? 'none' : 'block'}} >
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </div>
    </EntrieWrapper>
  )
})

export default Entrie