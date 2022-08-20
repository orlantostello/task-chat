import React from 'react';
import s from './Contacts.module.css';
import contacts from '../../utils/dataContacts';

const Contacts = () => {
  return (
    <div className={s.container}>
      <h2 className={s.header}>Chats</h2>

      <ul className={s.contacts}>
        {contacts.map(({ name, id, avatar, date, message }) => {
          return (
            <li className={s.contact} key={id}>
              <div className={s.block}>
                <div className={s.avatarBlock}>
                  <img className={s.avatar} src={avatar} alt={name} />
                </div>

                <div className={s.textBlock}>
                  <h3 className={s.username}>{name}</h3>
                  <p className={s.message}>{message}</p>
                </div>
              </div>
              <p className={s.date}>{date}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;
