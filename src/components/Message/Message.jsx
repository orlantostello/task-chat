import React from 'react';
import s from './Message.module.css';

const Message = ({ message }) => {
  const { own, text, creteDate, avatar } = message;
  return (
    <>
      {own ? (
        <div className={s.messageOwn}>
          <div className={s.messageTop}>
            <p className={s.messageText}>{text}</p>
          </div>
          <div className={s.messageTimeOwn}>{creteDate}</div>
        </div>
      ) : (
        <div className={s.message}>
          <div className={s.messageTop}>
            <img className={s.messageImg} src={avatar} alt="" />
            <div>
              <p className={s.messageText}>{text}</p>
              <p className={s.messageTime}>{creteDate}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
