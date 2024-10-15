import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://connections-api.goit.global';
axios.defaults.baseURL = API_URL;

export const registerUser = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/signup', userData);
    axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to register');
  }
});

export const loginUser = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', userData);
    axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to login');
  }
});

export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    delete axios.defaults.headers.common.Authorization;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to logout');
  }
});
