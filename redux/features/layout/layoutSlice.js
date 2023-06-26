import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  authFormVisible: false,
  authFormType: "register" // register || login
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    showRegistierForm: (state) => {
      return {
        authFormVisible: true,
        authFormType: "register"
      }
    },
    showLoginForm: (state) => {
      return {
        authFormVisible: true,
        authFormType: "login"
      }
    },
    hideAuthForm: (state) => {
      return {
        ...state,
        authFormVisible: false
      }
    },
  },
})

export const { showRegistierForm, showLoginForm, hideAuthForm } = layoutSlice.actions

export default layoutSlice.reducer