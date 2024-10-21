// src/components/Filter/Filter.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const [searchQuery, setSearchQuery] = useState(filter);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload
    dispatch(setFilter(searchQuery));
  };

  return (
    <form onSubmit={handleSearch}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Find</button>
    </form>
  );
};

export default Filter;
