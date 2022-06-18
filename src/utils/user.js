import { pick } from 'ramda';

export const getUserData = user =>
  pick(
    [
      'createdAt',
      'uid',
      'email',
      'emailVerified',
      'lastLoginAt',
      'phoneNumber',
      'photoURL',
    ],
    user,
  );
