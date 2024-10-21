// src/components/ContactForm/ContactForm.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, updateContact } from '../../redux/contactsOperations';

const ContactForm = ({ contactToUpdate }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (contactToUpdate) {
      setName(contactToUpdate.name);
      setNumber(contactToUpdate.number);
    } else {
      setName('');
      setNumber('');
    }
  }, [contactToUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || number === '') {
      return alert('Please fill in both fields.');
    }

    if (contactToUpdate) {
      dispatch(updateContact({ id: contactToUpdate.id, name, number }));
    } else {
      dispatch(addContact({ name, number }));
    }

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <button type="submit">{contactToUpdate ? 'Update Contact' : 'Add Contact'}</button>
    </form>
  );
};

export default ContactForm;
