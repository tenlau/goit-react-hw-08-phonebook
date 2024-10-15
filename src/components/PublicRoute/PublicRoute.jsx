import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, restricted = false }) => {
  const isAuthenticated = useSelector(state => state.auth.isLoggedIn);
  
  return isAuthenticated && restricted ? <Navigate to="/contacts" /> : children;
};

export default PublicRoute;
