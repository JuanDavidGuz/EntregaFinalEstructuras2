import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoading: false,
    },
    reducers: {
        startLoading: (state, action) => {
            state.isLoading = true;
        },
        setUser: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        },
    }
})

export const { startLoading, setUser } = AuthSlice.actions;