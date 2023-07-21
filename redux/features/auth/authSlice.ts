import { createSlice } from '@reduxjs/toolkit'

interface state {
    isLoggedIn: boolean;
}

const initialState: state = {
    isLoggedIn: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateLoginStatus: (state, action) => {
            return { isLoggedIn: action.payload };
        },
    },
})

export const { updateLoginStatus } = authSlice.actions;

export default authSlice.reducer;