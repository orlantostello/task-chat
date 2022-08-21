import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoFreebsdDevil } from 'react-icons/io';
import ContactSearch from '../ContactSearch/ContactSearch';
import s from './Header.module.css';

const linkStyle = {
  textDecoration: 'none',
  color: '#000',
};

const Header = () => {
  return (
    <div className={s.container}>
      <div>
        <Link to={'/'} style={linkStyle}>
          <IoLogoFreebsdDevil className={s.icon} />
        </Link>
      </div>

      <ContactSearch className={s.input} />
    </div>
  );
};

export default Header;
