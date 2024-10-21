// src/redux/contactsOperations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://connections-api.goit.global';

// Fetch contacts operation
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/contacts`); // Correct endpoint
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch contacts');
    }
  }
);

// Add contact operation
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/contacts`, newContact); // Correct endpoint
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to add contact');
    }
  }
);

// Delete contact operation
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`${API_URL}/contacts/${contactId}`); // Correct endpoint
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to delete contact');
    }
  }
);

// Update contact operation (change to PATCH method)
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const response = await axios.patch(`${API_URL}/contacts/${id}`, { name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to update contact');
    }
  }
);
