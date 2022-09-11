import { createSelector } from '@reduxjs/toolkit';

export const selectUserStore = ({ user }) => user;

export const selectUser = createSelector(
  selectUserStore,
  ({ userData }) => userData,
);

export const selectTrendPreferences = createSelector(
  selectUserStore,
  ({ trendPreferences }) => trendPreferences,
);

export const selectIsLogin = createSelector(selectUser, Boolean);

export const selectTrendPreferencesMap = createSelector(
  selectTrendPreferences,
  trendPreferences =>
    Object.fromEntries(trendPreferences.map(pref => [pref.coinId, pref])),
);
