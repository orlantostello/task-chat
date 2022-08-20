import React from 'react';
import ChatContainer from '../components/ChatContainer/ChatContainer';
import Layout from '../components/Layout/Layout';
import s from './Chat.module.css';

const Chat = () => {
  return (
    <div className={s.container}>
      <Layout />
      <ChatContainer />
    </div>
  );
};

export default Chat;
