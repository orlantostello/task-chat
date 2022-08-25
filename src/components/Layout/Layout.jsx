import React from 'react';
import { Outlet } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';
import Contacts from '../Contacts/Contacts';
import Header from '../Header/Header';
import s from './Layout.module.css';

const Layout = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      {isMobile ? (
        <div className={s.container}>
          <div>
            <Header />
          </div>

          <Outlet />
        </div>
      ) : (
        <div className={s.container}>
          <div>
            <Header />
            <Contacts />
          </div>

          <Outlet />
        </div>
      )}
    </>
  );
};

export default Layout;
