import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  authFormVisible: false,
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    makeAuthFormVisible: (state) => {
      state.authFormVisible = true;
    },
    hideAuthForm: (state) => {
      state.authFormVisible = false;
    },
  },
})

export const { makeAuthFormVisible, hideAuthForm } = layoutSlice.actions

export default layoutSlice.reducer