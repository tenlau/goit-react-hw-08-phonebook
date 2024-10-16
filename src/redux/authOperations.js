// src/redux/authOperations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser as registerApi } from '../api/api';
import { setAuthHeader } from '../api/api';
import { loginUser as loginApi } from '../api/api';  // Assuming you have a login API function
import { setNotification } from './notificationsSlice'; // Adjust path as necessary. Same folder, use './'

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch('https://connections-api.goit.global/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to log in');
      }

      const data = await response.json();
      setAuthHeader(data.token); // Function to set the token in local storage or headers
      
      // Dispatch success notification
      dispatch(setNotification({ message: 'Login successful!', type: 'success' }));
      
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Logout function remains unchanged
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

// Registration function remains unchanged
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch('https://connections-api.goit.global/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message); // Handle error response
      }

      return data; // Return the data on success
    } catch (error) {
      return rejectWithValue(error.message); // Handle fetch error
    }
  }
);

