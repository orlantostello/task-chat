import { createSlice } from '@reduxjs/toolkit';
import dataMessages from '../../utils/dataMessage';
import { getMessage } from './messagesOperations';

const initialState = {
  messages: dataMessages,
  lastMessage: '',
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,

  reducers: {
    addMessage(state, action) {
      state.messages.push(action.payload);
    },
    addLastMessage(state, action) {
      state.lastMessage = action.payload;
    },
  },
  extraReducers: {
    [getMessage.fulfilled]: (state, action) => {
      state.lastMessage = action.payload;
    },
  },
});

export default messagesSlice.reducer;
export const { addMessage, addLastMessage } = messagesSlice.actions;
