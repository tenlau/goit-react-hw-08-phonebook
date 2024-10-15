import axios from 'axios';

const API_URL = 'https://connections-api.goit.global';

// Set up axios default settings
const api = axios.create({
  baseURL: API_URL,
});

export const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  delete api.defaults.headers.common.Authorization;
};

export const registerUser = userData => api.post('/users/signup', userData);
export const loginUser = credentials => api.post('/users/login', credentials);
export const fetchContacts = () => api.get('/contacts');
export const addContact = contactData => api.post('/contacts', contactData);
export const deleteContact = contactId => api.delete(`/contacts/${contactId}`);
