import { configureStore } from '@reduxjs/toolkit';
import layoutSlice from "./features/layout/layoutSlice";
import authSlice from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
    auth: authSlice,
  },
})