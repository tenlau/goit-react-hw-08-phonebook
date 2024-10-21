// src/pages/ContactsPage.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactsOperations';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { items, filter, isLoading, error } = useSelector(state => state.contacts); // Added filter state
  const [contactToUpdate, setContactToUpdate] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleEdit = (contact) => {
    setContactToUpdate(contact);
  };

  // Apply filter logic here
  const filteredContacts = items.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Your Contacts</h1>
      <ContactForm contactToUpdate={contactToUpdate} />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList contacts={filteredContacts} onEdit={handleEdit} />
    </div>
  );
};

export default ContactsPage;
