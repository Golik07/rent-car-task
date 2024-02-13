import { configureStore } from '@reduxjs/toolkit';
import { myCatalogReducer } from './catalog/catalogSlice';
import { myFavoritesReducer } from './favorites/favoritesSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { myFilterSliceReducer } from './filter/filterSlice';

const persistConfig = {
  key: 'favorites',
  storage,
};

const persistedReducer = persistReducer(persistConfig, myFavoritesReducer);

export const store = configureStore({
  reducer: {
    catalog: myCatalogReducer,
    favorites: persistedReducer,
    filter: myFilterSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
