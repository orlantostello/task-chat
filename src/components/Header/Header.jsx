import React from 'react';
import { IoLogoFreebsdDevil } from 'react-icons/io';
import ContactSearch from '../ContactSearch/ContactSearch';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.container}>
      <IoLogoFreebsdDevil className={s.icon} />
      <ContactSearch className={s.input} />
    </div>
  );
};

export default Header;
