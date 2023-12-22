import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggeIn: false,
        isRefreshing: false,
    },
    extraReducers: builder => {},
});

export const authReducer = authSlice.reducer;