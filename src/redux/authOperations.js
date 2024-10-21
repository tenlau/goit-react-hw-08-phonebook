// src/redux/authOperations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://connections-api.goit.global'; // Base API URL

// Define setAuthHeader to set the token in headers
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Register user
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post(`${API_URL}/users/signup`, userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Registration failed');
    }
  }
);

// Login user
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`${API_URL}/users/login`, credentials);
      setAuthHeader(data.token); // Set token in headers after login
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Login failed');
    }
  }
);

// Logout user
export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue('No token found, cannot logout');
  }

  try {
    setAuthHeader(token); // Set the token in headers
    await axios.post(`${API_URL}/users/logout`);
    axios.defaults.headers.common.Authorization = ''; // Clear token
  } catch (error) {
    return thunkAPI.rejectWithValue('Logout failed');
  }
});
