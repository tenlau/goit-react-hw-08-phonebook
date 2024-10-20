// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import UserMenu from './components/UserMenu/UserMenu';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const App = () => (
  <>
    <Navigation />
    <UserMenu />
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/contacts"
        element={<PrivateRoute component={ContactsPage} />}
      />
    </Routes>
  </>
);

export default App;
