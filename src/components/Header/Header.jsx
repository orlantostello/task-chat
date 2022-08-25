import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoLogoFreebsdDevil } from 'react-icons/io';
import { useAuthState } from 'react-firebase-hooks/auth';
import ContactSearch from '../ContactSearch/ContactSearch';
import { Context } from '../../index';
import s from './Header.module.css';

const linkStyle = {
  textDecoration: 'none',
  color: '#000',
};

const Header = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <div className={s.container}>
      <div className={s.userContainer}>
        <Link to={'/'} style={linkStyle}>
          {user ? (
            <div className={s.user}>
              <img src={user.photoURL} alt="" className={s.icon} />
              <p className={s.name}>{user.displayName}</p>
            </div>
          ) : (
            <IoLogoFreebsdDevil className={s.icon} />
          )}
        </Link>
      </div>

      <ContactSearch className={s.input} />
    </div>
  );
};

export default Header;
