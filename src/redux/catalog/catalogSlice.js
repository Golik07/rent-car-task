import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars } from './catalogOperations';

const initialState = {
  catalog: [],
  isLoading: false,
  error: null,
  button: false,
};

const myCatalogSlice = createSlice({
  name: 'catalog',
  initialState: initialState,
  reducers: {
    clearCatalog(state, _) {
      state.catalog = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAllCars.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllCars.fulfilled, (state, { payload }) => {
      state.catalog = [...state.catalog, ...payload];
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchAllCars.rejected, (state, _) => {
      state.isLoading = false;
      state.error = null;
    });
  },
});

export const { clearCatalog } = myCatalogSlice.actions;

export const myCatalogReducer = myCatalogSlice.reducer;
