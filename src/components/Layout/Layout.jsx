import React from 'react';
import Contacts from '../Contacts/Contacts';
import Header from '../Header/Header';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <div className={s.container}>
      <div className={s.layout}>
        <Header />
        <Contacts />
      </div>
    </div>
  );
};

export default Layout;
