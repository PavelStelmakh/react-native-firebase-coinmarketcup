import { createSelector } from '@reduxjs/toolkit';

export const selectUserStore = ({ user }) => user;

export const selectUser = createSelector(
  selectUserStore,
  ({ userData }) => userData,
);

export const selectIsLogin = createSelector(selectUser, Boolean);
