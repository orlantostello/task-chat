import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import s from './Contacts.module.css';

const linkStyle = {
  textDecoration: 'none',
  color: '#000',
};

const Contacts = () => {
  const [sortContacs, setSortContacs] = useState([]);

  const getContacts = useSelector(state => state.contactsReduser.contacts);
  const filter = useSelector(state => state.contactsReduser.filter);

  useEffect(() => {
    const sort = getContacts.slice().sort((a, b) => {
      return b?.lastmessage?.date - a?.lastmessage?.date;
    });

    setSortContacs(sort);
  }, [getContacts]);

  const getVisibleContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <div className={s.container}>
      <h2 className={s.header}>Chats</h2>

      <ul className={s.contacts}>
        {getVisibleContacts(sortContacs, filter)?.map(({ name, id, avatar, lastmessage }) => {
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
                <p className={s.date}>
                  {lastmessage.date ? moment(lastmessage?.date).format('MMM DD, YYYY') : ''}
                </p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;
