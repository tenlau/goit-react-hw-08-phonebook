// src/components/UserMenu/UserMenu.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/authOperations';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user); // Get user from state

  // Check if user exists before trying to access email
  if (!user) {
    return null; // Optionally, return a placeholder or a link to login
  }

  const handleLogout = () => {
    dispatch(logoutUser()).then(() => {
      navigate('/'); // Redirect to home after logging out
    });
  };

  return (
    <div>
      <p>{user.email}</p> {/* Safely access user.email because we checked if user exists */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
