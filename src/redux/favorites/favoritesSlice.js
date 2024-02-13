import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const myFavoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorite(state, { payload }) {
      state.favorites.push(payload);
    },
    deleteFavorite(state, { payload }) {
      state.favorites = state.favorites.filter(
        value => value.id !== payload.id
      );
    },
  },
});

export const { setFavorite, deleteFavorite } = myFavoritesSlice.actions;

export const myFavoritesReducer = myFavoritesSlice.reducer;
