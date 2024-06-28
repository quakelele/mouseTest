import { configureStore } from '@reduxjs/toolkit'
import clickReducer from './slices/clickSlice'
import doubleClickReducer from './slices/doubleClickSlice'
export const store = configureStore({
   reducer: { click: clickReducer, doubleClick: doubleClickReducer },
})
