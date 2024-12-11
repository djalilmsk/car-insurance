import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/UserSlice';

export const insurance = configureStore({
  reducer: {
    userReducer: userReducer,
  },
});
