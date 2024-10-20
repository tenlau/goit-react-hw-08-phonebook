// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser } from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null, // Token is stored here
    isLoggedIn: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      // Handle registration
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token; // Save the token
        state.isLoggedIn = true;
      })
      // Handle login
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token; // Save the token
        state.isLoggedIn = true;
      })
      // Handle logout
      .addCase(logoutUser.fulfilled, state => {
        state.user = null;
        state.token = null; // Clear the token
        state.isLoggedIn = false;
      });
  },
});

export default authSlice.reducer;
