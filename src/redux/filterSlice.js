import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  make: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.make = action.payload;
    },
    clearFilters: state => {
      state.make = '';
    },
  },
});

export const { setFilter, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
