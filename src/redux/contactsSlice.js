import { createSlice } from '@reduxjs/toolkit';
import dataContacts from '../utils/dataContacts';

const initialState = {
  contacts: dataContacts,

  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addLastChatMessage(state, action) {
      state.contacts = action.payload;
    },

    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export default contactsSlice.reducer;
export const { addLastChatMessage, filterContacts } = contactsSlice.actions;
