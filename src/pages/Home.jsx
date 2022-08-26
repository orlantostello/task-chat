import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import Layout from '../components/Layout/Layout';

import s from './Chat.module.css';

const Home = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      {isMobile ? (
        <div className={s.containerHome}>
          <Layout />
        </div>
      ) : (
        <>
          <div className={s.containerHome}>
            <Layout />
            <div className={s.container}>
              <p className={s.text}>Welcome! Choose your interlocutor.</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
