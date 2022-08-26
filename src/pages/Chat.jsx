import React from 'react';
import ChatContainer from '../components/ChatContainer/ChatContainer';
import Layout from '../components/Layout/Layout';
import useMediaQuery from '../hooks/useMediaQuery';

import s from './Chat.module.css';

const Chat = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      {isMobile ? (
        <ChatContainer />
      ) : (
        <>
          <div className={s.containerHome}>
            <Layout />
            <ChatContainer />
          </div>
        </>
      )}
    </>
  );
};

export default Chat;
