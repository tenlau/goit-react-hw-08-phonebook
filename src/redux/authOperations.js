// src/redux/authOperations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      return data;  // Return data as payload
    } catch (error) {
      return thunkAPI.rejectWithValue('Registration failed');
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      return data;  // Return data as payload
    } catch (error) {
      return thunkAPI.rejectWithValue('Login failed');
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      return;  // No data to return
    } catch (error) {
      return thunkAPI.rejectWithValue('Logout failed');
    }
  }
);
