import { createSlice } from '@reduxjs/toolkit'

interface state {
    isLoggedin: boolean;
}

const initialState: state = {
    isLoggedin: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateLoginStatus: (state, action) => {
            return { isLoggedin: action.payload };
        },
    },
})

export const { updateLoginStatus } = authSlice.actions;

export default authSlice.reducer;