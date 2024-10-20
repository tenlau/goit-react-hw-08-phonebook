// src/pages/HomePage.jsx
import React from 'react';

const HomePage = () => (
  <div>
    <h1>Welcome to the Contact Book</h1>
    <nav>
      <NavLink to="/register">Register</NavLink> |{' '}
      <NavLink to="/login">Login</NavLink> |{' '}
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  </div>
);

export default HomePage;  // Ensure this is default export
