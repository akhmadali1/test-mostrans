// lib/recoil.js

import { atom } from 'recoil';

export const searchInputState = atom({
  key: 'searchInput',
  default: '1',
});
