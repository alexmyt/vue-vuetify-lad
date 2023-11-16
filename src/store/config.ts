import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useConfigStore = defineStore('config',
  () => {
    const currentTheme = ref<'dark' | 'light'>('light');
    const switchTheme = () => {
      currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
    }
    return { currentTheme, switchTheme }
  }
)
