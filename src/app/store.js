import { configureStore } from '@reduxjs/toolkit';
import reduce from '../features/Car/carSlice';

export const store = configureStore({
  reducer: {
    car: reduce
  },
});
