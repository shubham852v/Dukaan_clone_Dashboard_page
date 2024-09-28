// src/atoms.js
import { atom } from 'recoil';

export const activeSectionState = atom({
  key: 'activeSectionState',
  default: 'Home',
});

export const isDashboardVisibleState = atom({
  key: 'isDashboardVisibleState',
  default: false, // Dashboard is hidden by default on small screens
});
