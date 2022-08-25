import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import InputMessage from '../InputMessage/InputMessage';
import Message from '../Message/Message';
import s from './ChatContainer.module.css';
import { useSelector } from 'react-redux';
import { ImArrowLeft } from 'react-icons/im';

const linkStyle = {
  textDecoration: 'none',
  color: '#000',
};

const ChatContainer = () => {
  const [currentMs, setCurrentMs] = useState([]);
  const [currentContact, setCurrentContact] = useState([]);
  const [contacts, setContacts] = useState(null);

  const { chatid } = useParams();
  const scrollRef = useRef();

  const getContacts = useSelector(state => state.contactsReduser.contacts);
  const getMessages = useSelector(state => state.messagesReduser.messages);

  useEffect(() => {
    setContacts(getContacts);
  }, [getContacts]);

  useEffect(() => {
    const message = getMessages.filter(el => el.chatid === +chatid);
    setCurrentMs(message);
  }, [chatid, getMessages]);

  useEffect(() => {
    function getCurrentContact() {
      contacts?.forEach(el => {
        if (el.id === +chatid) {
          setCurrentContact(el);

          return;
        }
      });
    }

    getCurrentContact();
  }, [contacts, chatid]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentMs]);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <Link to={'/'} style={linkStyle}>
          <ImArrowLeft className={s.back} />
        </Link>

        <div className={s.contact}>
          <img className={s.contactImg} src={currentContact.avatar} alt={currentContact.name} />
          <p className={s.name}>{currentContact.name}</p>
        </div>
      </div>

      <ul className={s.chatBox}>
        {currentMs.map(m => (
          <li key={m.id} ref={scrollRef}>
            <Message message={m} avatar={currentContact.avatar} />
          </li>
        ))}
      </ul>

      <div className={s.inputContainer}>
        <InputMessage />
      </div>
    </div>
  );
};

export default ChatContainer;
