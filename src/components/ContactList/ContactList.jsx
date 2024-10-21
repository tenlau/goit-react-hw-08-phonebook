import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOperations';

const ContactList = ({ contacts, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
          <button onClick={() => onEdit(contact)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
