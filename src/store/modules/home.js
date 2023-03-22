import { getDiscountAPI, getGoodpriceAPI, getHighscoreAPI, getHotrecommenddestAPI, getLongforAPI, getPlusAPI } from "@/API"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// @reduxjs/toolkit
const fetchHomeDataInfo = createAsyncThunk("fetchdata",(payload, {dispatch}) => {
  getGoodpriceAPI().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })

  getHighscoreAPI().then(res => {
    dispatch(changeHighscoreInfoAction(res))
  })

  getDiscountAPI().then(res => {
    dispatch(changediscountInfoAction(res))
  })

  getHotrecommenddestAPI().then(res => {
    dispatch(changeHotrecommenddestAction(res))
  })

  getLongforAPI().then(res => {
    dispatch(changeLongforInfoAction(res))
  })

  getPlusAPI().then(res => {
    dispatch(changePlusAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highscoreInfo: {},
    discountInfo: {},
    hotrecommenddestInfo: {},
    LongforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, {payload}) {
      state.goodPriceInfo = payload
    },
    changeHighscoreInfoAction(state, { payload }) {
      state.highscoreInfo = payload
    },
    changediscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeHotrecommenddestAction(state, { payload }) {
      state.hotrecommenddestInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.LongforInfo = payload
    },
    changePlusAction(state, { payload }) {
      state.plusInfo = payload
    }
  },
  extraReducers: {
    [fetchHomeDataInfo.fulfilled](state, {payload}) {
      state.goodPriceInfo = payload
    }
  }
})

export const {
    changeGoodPriceInfoAction, changeHighscoreInfoAction,
    changediscountInfoAction, changeHotrecommenddestAction,
    changeLongforInfoAction, changePlusAction
  } = homeSlice.actions

export {
  fetchHomeDataInfo
}

export default homeSlice.reducer