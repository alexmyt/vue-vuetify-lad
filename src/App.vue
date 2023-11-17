<template>
  <v-app :theme="app.theme">
    <NavigationBar title="Training application for VUE intensive by Lad IT Academy"></NavigationBar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app elevation="3">
      <div class="text-center w-100">
        <span class="mr-5">{{ copyrightYear }} &copy;</span>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue';
import { useAppStore } from '@/store/app';
import { ref } from 'vue';

const app = useAppStore();
const copyrightYear = ref(new Date().getFullYear());
</script>
