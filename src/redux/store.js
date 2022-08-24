import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsReduser from './contactsSlice';
import messagesReduser from './messages/messagesSlice';

const rootReducer = combineReducers({
  contactsReduser,
  messagesReduser,
});

export const store = configureStore({
  reducer: rootReducer,
});
