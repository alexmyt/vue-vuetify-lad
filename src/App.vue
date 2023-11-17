<template>
  <v-app :theme="configStore.currentTheme">
    <NavigationBar></NavigationBar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app elevation="3">
      <div class="text-center w-100"><span class="mr-5">{{ copyrightYear }} &copy;</span></div>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue';
import { useConfigStore } from '@/store'
import { ref } from 'vue';

const configStore = useConfigStore()
const copyrightYear = ref(new Date().getFullYear())
</script>
