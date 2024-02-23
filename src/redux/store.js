import { configureStore } from '@reduxjs/toolkit';
import favoriteCarsReducer from './carSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    favoriteCars: favoriteCarsReducer,
    filter: filterReducer,
  },
});
