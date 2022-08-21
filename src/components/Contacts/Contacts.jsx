import React from 'react';
import { Link } from 'react-router-dom';
import s from './Contacts.module.css';
import contacts from '../../utils/dataContacts';

const linkStyle = {
  textDecoration: 'none',
  color: '#000',
};

const Contacts = () => {
  return (
    <div className={s.container}>
      <h2 className={s.header}>Chats</h2>

      <ul className={s.contacts}>
        {contacts.map(({ name, id, avatar, date, lastmessage }) => {
          return (
            <Link key={id} to={`/chat/${id}`} style={linkStyle}>
              <li className={s.contact}>
                <div className={s.block}>
                  <div className={s.avatarBlock}>
                    <img className={s.avatar} src={avatar} alt={name} />
                  </div>

                  <div className={s.textBlock}>
                    <h3 className={s.username}>{name}</h3>
                    <p className={s.message}>{lastmessage.message}</p>
                  </div>
                </div>
                <p className={s.date}>{lastmessage.date}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;
