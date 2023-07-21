import { createSlice } from '@reduxjs/toolkit'

interface state {
  authFormVisible: boolean;
  authFormType: string;
}

const initialState: state = {
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