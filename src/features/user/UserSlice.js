import { createSlice } from '@reduxjs/toolkit';

const initial = {
  token: 'eyJh',
  data: {
    id: '67586353173068783409bfba',
    fullName: 'John Doe',
    address: '123 Main St',
    phone: '1234567890',
    email: 'john14131q.doe@example.com',
    postalAddress: '123 Main St',
    type: 'apartment',
    area: 50,
    PDL_PCE: 'ABC1234567',
    meterReading: 100,
    RIB: '12345678901234567890123',
    role: 'user',
    createdAt: '2024-12-10T15:50:43.745Z',
    updatedAt: '2024-12-10T15:50:43.745Z',
    __v: 0,
  },
};

const getUserFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem('user')) || initial;
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
      const user = { data: action.payload.data, token: action.payload.token };
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
    updatePlans: (state, action) => {
      if (!state.user.plans) {
        state.user.plans = [];
      }
      state.user.plans.push(action.payload);
      localStorage.setItem('user', JSON.stringify(state.user));
    },
  },
});

export const { loginUser, logoutUser, updatePlans } = userSlice.actions;
export default userSlice.reducer;
