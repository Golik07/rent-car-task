import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65ba647ab4d53c066552ca4b.mockapi.io';

export const fetchAllCars = createAsyncThunk(
  'myCatalog',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/advert?`, {
        headers: { 'content-type': 'application/json' },
        params: {
          limit,
          page,
        },
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
