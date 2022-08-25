import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReduser from './contactsSlice';
import messagesReduser from './messages/messagesSlice';
import userReduser from './userSlice';

const persistConfig = {
  key: 'users',
  storage,
};

const rootReducer = combineReducers({
  contactsReduser,
  messagesReduser,
  userReduser,
});

export const store = configureStore({
  // reducer: rootReducer,
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
