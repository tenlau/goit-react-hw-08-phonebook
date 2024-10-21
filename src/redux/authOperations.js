// src/redux/authOperations.js
/*import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Set the Authorization header
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Register user
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      console.log('Registering user with data:', userData); // Log the data
      const { data } = await axios.post('/users/signup', userData);
      return data;
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message); // Log any errors
      return thunkAPI.rejectWithValue('Registration failed');
    }
  }
);


// Login user
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`; // Set the token after login
      return data;  // The response should contain both token and user data
    } catch (error) {
      return thunkAPI.rejectWithValue('Login failed.');
    }
  }
);


// Logout user
export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;

  console.log('Token being sent for logout:', token);

  if (!token) {
    return thunkAPI.rejectWithValue('No token found, cannot logout.');
  }

  try {
    setAuthHeader(token);
    await axios.post('/users/logout');
    axios.defaults.headers.common.Authorization = '';
  } catch (error) {
    console.error('Logout error:', error.response?.data || error.message);
    return thunkAPI.rejectWithValue('Logout failed. Unauthorized.');
  }
});*/
//----------------------------
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://connections-api.goit.global'; // Add API base URL

// Set the Authorization header
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Register user
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post(`${API_URL}/users/signup`, userData); // Use full API URL
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
      const { data } = await axios.post(`${API_URL}/users/login`, credentials); // Use full API URL
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`; // Set the token after login
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Login failed.');
    }
  }
);

// Logout user
export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue('No token found, cannot logout.');
  }

  try {
    setAuthHeader(token);
    await axios.post(`${API_URL}/users/logout`); // Use full API URL
    axios.defaults.headers.common.Authorization = '';
  } catch (error) {
    return thunkAPI.rejectWithValue('Logout failed. Unauthorized.');
  }
});
