// Utilities
import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    settings: false,
    theme: 'light',
    cities: [],
  }),
});
