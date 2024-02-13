import { createSlice } from '@reduxjs/toolkit';

const initialState = { carBrand: '', price: 0, mileageFrom: 0, mileageTo: 0 };

const myFilterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setFilter(state, { payload }) {
      return payload;
    },
    clearFilter(_, action) {
      return initialState;
    },
  },
});

export const myFilterSliceReducer = myFilterSlice.reducer;

export const { setFilter, clearFilter } = myFilterSlice.actions;
