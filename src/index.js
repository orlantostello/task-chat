import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyB-khBcFxElNr1UUqrEepxLJc36ullXyOg',
  authDomain: 'task-chat-react.firebaseapp.com',
  projectId: 'task-chat-react',
  storageBucket: 'task-chat-react.appspot.com',
  messagingSenderId: '727497250225',
  appId: '1:727497250225:web:bea05a0b701f55cd351990',
  measurementId: 'G-RCH3D1NE1N',
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Context.Provider
          value={{
            firebase,
            auth,
            firestore,
          }}
        >
          <App />
        </Context.Provider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
