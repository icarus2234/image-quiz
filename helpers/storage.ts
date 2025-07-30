import { FileStorage } from './types';

export const localFileStorage: FileStorage = {
  save: (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error('LocalStorage save error:', error);
    }
  },

  get: key => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error('LocalStorage get error:', error);
      return null;
    }
  },

  remove: key => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('LocalStorage remove error:', error);
    }
  },

  clear: () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('LocalStorage clear error:', error);
    }
  },
};
