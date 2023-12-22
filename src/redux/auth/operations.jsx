import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post("/users/signup", credentials)
            return res.data;
        } catch (error) {
            
        }
    }
);

export const LogIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => { }
);

export const LogOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => { }
);

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => { }
);