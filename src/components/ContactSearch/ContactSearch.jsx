import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contactsSlice';
import { v4 } from 'uuid';
import s from './ContactSearch.module.css';

const searchInputId = v4();

const ContactSearch = () => {
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  const OnChangeFilter = e => {
    dispatch(filterContacts(e.target.value));
    setFilter(e.target.value);
  };
  return (
    <>
      <label className={s.label} htmlFor={searchInputId}>
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={OnChangeFilter}
          placeholder="Search or start now chat"
          id={searchInputId}
        />
        <BiSearch className={s.icon} />
      </label>
    </>
  );
};

export default ContactSearch;
