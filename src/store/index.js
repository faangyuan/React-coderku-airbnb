import { configureStore } from '@reduxjs/toolkit'
import mainReducer from "./modules/main"
import homeReducer from './modules/home'
import detailReducer from './modules/detail'
import entrieReducer from './modules/entrie'


const store = configureStore({
  // reducer 分发模块
  reducer: {
    home: homeReducer,
    detail: detailReducer,
    entrie: entrieReducer,
    main: mainReducer
  }
})

export default store