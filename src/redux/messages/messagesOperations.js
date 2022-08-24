import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api.chucknorris.io';

export const getMessage = createAsyncThunk('message', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/jokes/random');
    const data = { message: response.data.value, date: Date.now() };
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Failed to load message');
  }
});

const operations = {
  getMessage,
};

export default operations;
