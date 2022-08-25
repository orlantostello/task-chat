import { useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { v4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../redux/messages/messagesSlice';
import { addLastChatMessage } from '../../redux/contactsSlice';
import { toast } from 'react-toastify';
import { fetchMessage } from '../../service/messageApi';
import s from './InputMessage.module.css';

const messageInputId = v4();

const InputMessage = () => {
  const [msg, setMsg] = useState('');

  const { chatid } = useParams();

  const dispatch = useDispatch();

  const getContacts = useSelector(state => state.contactsReduser.contacts);

  const handleChange = e => {
    setMsg(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const message = {
      chatid: +chatid,
      text: msg,
      id: v4(),
      own: true,
      creteDate: Date.now(),
    };

    const lastMessageOwn = { message: msg, date: Date.now() };

    if (msg !== '') {
      dispatch(addMessage(message));

      dispatch(addLastChatMessage(setLastContactMessage(lastMessageOwn)));

      fetchMessage().then(res => {
        setTimeout(() => {
          const message = {
            chatid: +chatid,
            text: res.data.value,
            id: v4(),
            own: false,
            creteDate: Date.now(),
          };
          dispatch(addMessage(message));

          const lastMessage = { message: res.data.value, date: Date.now() };

          dispatch(addLastChatMessage(setLastContactMessage(lastMessage)));

          toast.success(`You've got a message!`, {
            toastId: 'custom-id-yes',
          });
        }, 10000);
      });

      reset();
    }
  };

  function setLastContactMessage(message) {
    const idx = getContacts.findIndex(el => el.id === +chatid);
    const oldContact = getContacts[idx];

    const newContact = { ...oldContact, lastmessage: message };

    const contacts = [...getContacts.slice(0, idx), newContact, ...getContacts.slice(idx + 1)];

    return contacts;
  }

  const reset = () => {
    setMsg('');
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
