import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from './operations';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggeIn: false,
        isRefreshing: false,
    },
    extraReducers: builder => 
        builder
            .addCase(register.pending, (state, action) => state)
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggeIn = true;
            })
            .addCase(register.rejected, (state, action) => state)
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggeIn = true;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = {name: null, email: null };
                state.token = null;
                state.isLoggeIn = false;
    })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggeIn = true;
    })
    });

export const authReducer = authSlice.reducer;