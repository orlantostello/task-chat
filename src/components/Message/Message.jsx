import React from 'react';
import moment from 'moment';
import s from './Message.module.css';

const Message = ({ message, avatar }) => {
  const { own, text, creteDate } = message;

  return (
    <>
      {own ? (
        <div className={s.messageOwn}>
          <div className={s.messageTop}>
            <p className={s.messageText}>{text}</p>
          </div>
          <div className={s.messageTimeOwn}>{moment(creteDate).format('MM/DD/YY LT')}</div>
        </div>
      ) : (
        <div className={s.message}>
          <div className={s.messageTop}>
            <img className={s.messageImg} src={avatar} alt="" />
            <div>
              <p className={s.messageText}>{text}</p>
              <p className={s.messageTime}>{moment(creteDate).format('MM/DD/YY LT')}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
