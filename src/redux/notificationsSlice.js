// src/redux/notificationsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    message: null,
    type: null,
  },
  reducers: {
    setNotification(state, action) {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    clearNotification(state) {
      state.message = null;
      state.type = null;
    },
  },
});

export const { setNotification, clearNotification } = notificationsSlice.actions;

export default notificationsSlice.reducer;
