import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
    initialState: {
        isAuthenticated: false,
        error: null,
        loading: false,
        token: null,
        userEmail: null,
    },
    reducers: {
        loginRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.token = action.payload.token;
        }, 
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
            state.isAuthenticated = false;
            state.token = null;
        }, 
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
        },

    }
});

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    logout
} = authSlice.actions;

export default authSlice.reducer;