import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
  },
  reducers: {
    setUserData(state, { payload }) {
      state.userData = payload;
    },
    deleteUserData(state) {
      state.userData = null;
    },
  },
});

export const { setUserData, deleteUserData } = userSlice.actions;
