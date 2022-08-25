import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { Context } from '../../index';
import firebase from 'firebase/compat/app';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/userSlice';
import s from './Login.module.css';

const Login = () => {
  const [user, setUser] = useState(null);
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const { user } = await auth.signInWithPopup(provider);
    setUser(user);
  };

  const dispatch = useDispatch();
  dispatch(addUser(user));

  return user ? (
    <Navigate to="/" />
  ) : (
    <div className={s.login}>
      <button className={s.loginBtn} onClick={login}>
        <FcGoogle className={s.loginIcon} />
        <span className={s.loginText}>Sign in with google</span>
      </button>
    </div>
  );
};

export default Login;
