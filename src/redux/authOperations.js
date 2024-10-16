// src/redux/authOperations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser as registerApi} from '../api/api';
import { setAuthHeader } from '../api/api';
import { loginUser as loginApi } from '../api/api';  // Assuming you have a login API function

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await loginApi(credentials);  // Make sure loginApi sends the login request to the backend
      setAuthHeader(response.data.token);  // Set the auth token in headers
      return response.data;  // Return the user data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      // Clear the auth token (you may want to clear it from the header or perform a logout API call)
      setAuthHeader(null);
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const response = await registerApi(userData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      // Check if it's a duplicate error (code 11000)
      if (error.response?.data?.code === 11000) {
        return thunkAPI.rejectWithValue('Email already exists.');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
