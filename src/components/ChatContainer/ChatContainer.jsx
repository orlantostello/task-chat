import React from 'react';
import InputMessage from '../InputMessage/InputMessage';
import s from './ChatContainer.module.css';

const ChatContainer = () => {
  return (
    <div className={s.container}>
      <div className={s.header}></div>
      <div className={s.message}></div>
      <div className={s.inputContainer}>
        <InputMessage />
      </div>
    </div>
  );
};

export default ChatContainer;
