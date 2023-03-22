import { getentireListAPI } from "@/API"
import * as ActionTypes from "./index"

export const changeOffsetAction = (currentOffset) => ({
  type: ActionTypes.CHANGOFFSET,
  currentOffset
})

export const changeRoomListActin = (roomList) => ({
  type: ActionTypes.CHANGROOMLIST,
  roomList
})

export const changeTotalCountAction = (totalCount) => ({
  type: ActionTypes.CHANGTOTALCOUNT,
  totalCount
})

export const changeIsLodingAction = (isLoding) => ({
  type: ActionTypes.CHANGLODING,
  isLoding
})

export const feachEntrieListAction = (offset) => {
  
  return async (dispatch) => {
    // 发送网络请求前
    dispatch(changeIsLodingAction(false))
    const res = await getentireListAPI(offset)
    dispatch(changeTotalCountAction(res.totalCount))
    dispatch(changeRoomListActin(res.list))
    dispatch(changeOffsetAction(offset))
    // 网络请求完成后
    dispatch(changeIsLodingAction(true))
  }
}