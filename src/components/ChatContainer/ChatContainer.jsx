import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InputMessage from '../InputMessage/InputMessage';
import Message from '../Message/Message';
import s from './ChatContainer.module.css';
import messages from '../../utils/dateMessage';
import { useSelector } from 'react-redux';

const ChatContainer = () => {
  const [currentMs, setCurrentMs] = useState([]);
  const [currentContact, setCurrentContact] = useState([]);
  const { chatid } = useParams();

  // const dispatch = useDispatch();
  const getContacts = useSelector(state => state.contactsReduser.contacts);

  useEffect(() => {
    function getCurrentMessage() {
      messages.forEach(el => {
        if (el.idcontact === +chatid) {
          setCurrentMs(el.messages);
          return;
        }
      });
    }
    getCurrentMessage();
  }, [chatid]);

  useEffect(() => {
    function getCurrentContact() {
      getContacts.forEach(el => {
        if (el.id === +chatid) {
          setCurrentContact(el);
          return;
        }
      });
    }
    getCurrentContact();
  }, [getContacts, chatid]);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <img className={s.contactImg} src={currentContact.avatar} alt={currentContact.name} />
        <p className={s.name}>{currentContact.name}</p>
      </div>

      <ul className={s.chatBox}>
        {currentMs.map(m => (
          <li key={m.id}>
            <Message message={m} />
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
