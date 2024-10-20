// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/authOperations';
import styles from './AuthForm.module.css'; // Create a common styles file for login/register forms

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitError, setSubmitError] = useState(''); // State to handle form errors
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);

  // Validate form before submitting
  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !email || !password) {
      setSubmitError('All fields are required'); // Handle empty field error
      return;
    }

    // Clear submit error before dispatch
    setSubmitError('');

    // Dispatch the register action
    dispatch(registerUser({ name, email, password }))
      .unwrap() // Unwraps the result to catch errors in .catch
      .catch(() => {
        setSubmitError('Registration failed. Please check your input and try again.');
      });
  };

  return (
    <div>
      <h2>Register</h2>

      {/* Show server error or form error */}
      {submitError && <p className={styles.error}>{submitError}</p>}
      {error && <p className={styles.error}>{error}</p>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" className={styles.button}>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
