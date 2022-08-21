import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsReduser from './contactsSlice';

const rootReducer = combineReducers({
  contactsReduser,
});

export const store = configureStore({
  reducer: rootReducer,
});
