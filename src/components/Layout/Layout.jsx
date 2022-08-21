import React from 'react';
import { Outlet } from 'react-router-dom';
import Contacts from '../Contacts/Contacts';
import Header from '../Header/Header';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <div className={s.container}>
      <div>
        <Header />
        <Contacts />
      </div>

      <Outlet />
    </div>
  );
};

export default Layout;
