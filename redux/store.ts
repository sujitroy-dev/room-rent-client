import { configureStore } from '@reduxjs/toolkit'
import layoutSlice from "./features/layout/layoutSlice"

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
  },
})