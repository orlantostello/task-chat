import React, { useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { v4 } from 'uuid';
import s from './InputMessage.module.css';

const messageInputId = v4();

const InputMessage = () => {
  const [msg, setMsg] = useState('');

  const handleChange = event => {
    console.log(event.target);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg(e.target.value);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.inputContainer}>
        <label className={s.label} htmlFor={messageInputId}>
          <input
            className={s.input}
            type="text"
            placeholder="Type your message"
            onChange={handleChange}
            value={msg}
            id={messageInputId}
          />
        </label>
        <button className={s.btn} type="submit">
          <IoMdSend className={s.icon} />
        </button>
      </div>
    </form>
  );
};

export default InputMessage;
