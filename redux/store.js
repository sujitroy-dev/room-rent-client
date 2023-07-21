import { configureStore } from '@reduxjs/toolkit'
import layoutSlice from "./features/layout/layoutSlice.ts"

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
  },
})