import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/authOperations';

const Register = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);  // Make sure 'auth' exists in your Redux state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  // Check the structure of formData
  console.log(formData); // Add this line to see the structure of the data
  dispatch(registerUser(formData));
};

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      <button type="submit">Register</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display the error */}
    </form>
  );
};

export default Register;
