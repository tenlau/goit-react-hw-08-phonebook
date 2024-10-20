// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser } from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null, // Store the JWT token here
    isLoggedIn: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      // After registration, save token and user data
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token; // Save token
        state.isLoggedIn = true;
      })
      // After login, save token and user data
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token; // Save token
        state.isLoggedIn = true;
      })
      // After logout, clear token and user data
      .addCase(logoutUser.fulfilled, state => {
        state.user = null;
        state.token = null; // Clear token
        state.isLoggedIn = false;
      });
  },
});

export default authSlice.reducer;
