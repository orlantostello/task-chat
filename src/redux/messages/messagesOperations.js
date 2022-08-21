// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://api.chucknorris.io';

// export const getMessage = createAsyncThunk('message', async () => {
//   const response = await axios.get('/jokes/random');
//   return response.data.value;
// });

// const operations = {
//   getMessage,
// };

// export default operations;

import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const getMessage = createAsyncThunk('message', async (_, thunkAPI) => {
  try {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    const data = { message: response.data.value, date: Date() };
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
  }
});
