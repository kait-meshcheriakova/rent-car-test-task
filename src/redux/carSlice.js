import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteCars: JSON.parse(localStorage.getItem('favoriteCars')) || [],
};

const favoriteCarsSlice = createSlice({
  name: 'favoriteCars',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const existingCar = state.favoriteCars.find(
        car => car.id === action.payload.id
      );

      if (!existingCar) {
        state.favoriteCars.push(action.payload);
      } else {
        state.favoriteCars = state.favoriteCars.filter(
          car => car.id !== action.payload.id
        );
      }

      localStorage.setItem('favoriteCars', JSON.stringify(state.favoriteCars));
    },
    removeFromFavorites: (state, action) => {
      state.favoriteCars = state.favoriteCars.filter(
        car => car.id !== action.payload
      );
      localStorage.setItem('favoriteCars', JSON.stringify(state.favoriteCars));
    },
  },
});

export const { addToFavorites, removeFromFavorites } =
  favoriteCarsSlice.actions;
export default favoriteCarsSlice.reducer;
