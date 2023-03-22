import * as ActionTypes from "./index"

const initiaState = {
  offset: 0,
  roomList: [],
  totalCount: 0,

  isLoding: false
}

const reducer = (state = initiaState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGOFFSET: 
      return { ...state, offset: action.currentOffset }
    case ActionTypes.CHANGROOMLIST: 
      return { ...state, roomList: action.roomList }
    case ActionTypes.CHANGTOTALCOUNT: 
      return { ...state, totalCount: action.totalCount }
    case ActionTypes.CHANGLODING:
      return {...state, isLoding: action.isLoding}
    default: 
      return state
  }
}

export default reducer