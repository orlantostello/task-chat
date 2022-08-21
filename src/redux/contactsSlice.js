import { createSlice } from '@reduxjs/toolkit';
import dataContacts from '../utils/dataContacts';
import { getMessage } from './messages/messagesOperations';

const initialState = {
  contacts: dataContacts,
  test: {},
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // reducers: {
  //   getContacts(state, action) {
  //     state.contacts = action.payload;
  //   },
  // },
  extraReducers: {
    // [getMessage.fulfilled](state, action) {
    //   state.contacts.message = action.payload;
    // },
    [getMessage.fulfilled](state, action) {
      state.test = action.payload;
    },
  },
});

export default contactsSlice.reducer;
// export const { getContacts } = contactsSlice.actions;
