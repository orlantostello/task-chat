import React from 'react';

import s from './Chat.module.css';

const Home = () => {
  return (
    <div className={s.container}>
      <div className={s.chatContainer}>
        <p className={s.text}>Welcome! Choose your interlocutor.</p>
      </div>
    </div>
  );
};

export default Home;
