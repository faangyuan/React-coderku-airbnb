import { createSlice } from "@reduxjs/toolkit"

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    appheaderConfig: {
      isFixed: true
    }
  },
  reducers: {
    changeAppHeaderConfig(state, { payload }) {
      state.appheaderConfig = payload
    }
  }
})

export const { changeAppHeaderConfig } = mainSlice.actions

export default mainSlice.reducer

