import React from 'react';
import InputMessage from '../InputMessage/InputMessage';
import Message from '../Message/Message';
import s from './ChatContainer.module.css';
import messages from '../../utils/dateMessage';

const ChatContainer = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <img
          className={s.contactImg}
          src="https://img.a.transfermarkt.technology/portrait/big/240306-1636537174.jpg?lm=1"
          alt=""
        />
        <p className={s.name}> Bruno Fernandes</p>
      </div>

      <div className={s.chatBox}>
        {messages.map(m => (
          <Message message={m} />
        ))}
      </div>

      <div className={s.inputContainer}>
        <InputMessage />
      </div>
    </div>
  );
};

export default ChatContainer;
