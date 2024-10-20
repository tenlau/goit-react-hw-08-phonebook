// src/components/PrivateRoute/PrivateRoute.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return isLoggedIn ? <Component {...routeProps} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
