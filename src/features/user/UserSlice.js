import { createSlice } from '@reduxjs/toolkit';

const getUserFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem('user')) || null;
  } catch (e) {
    console.error('Error parsing user data from localStorage:', e);
    return null;
  }
};

const initialState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
