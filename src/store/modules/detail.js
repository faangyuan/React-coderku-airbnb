import { createSlice } from '@reduxjs/toolkit'

const datailSlice = createSlice({
  name: 'datail',
  initialState: {
    detailInfo: {}
  },
  reducers: {
    changeDetailInfoAction(state, { payload }) {
      state.detailInfo = payload
    }
  }
})

export const { changeDetailInfoAction } = datailSlice.actions

export default datailSlice.reducer
