import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    trendPreferences: [],
  },
  reducers: {
    setUserData(state, { payload }) {
      state.userData = payload;
    },
    deleteUserData(state) {
      state.userData = null;
    },
    setTrendPreferences(state, { payload }) {
      state.trendPreferences = payload;
    },
    addTrendPreference(state, { payload }) {
      state.trendPreferences.push(payload);
    },
    deleteTrendPreference(state, { payload }) {
      state.trendPreferences = state.trendPreferences.filter(
        ({ id }) => id !== payload,
      );
    },
  },
});

export const {
  setUserData,
  deleteUserData,
  setTrendPreferences,
  addTrendPreference,
  deleteTrendPreference,
} = userSlice.actions;
