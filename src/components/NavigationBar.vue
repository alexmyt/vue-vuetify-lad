<template>
  <div>
    <v-navigation-drawer location="right" v-model="app.settings"></v-navigation-drawer>
    <v-app-bar scroll-behavior="elevate">
      <v-app-bar-title>{{ title }}</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-theme-light-dark" variant="flat" @click="changeTheme" />
      <v-btn icon="mdi-cog-outline" variant="flat" @click="onAppSettings"></v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app';

const app = useAppStore();

defineProps({
  title: {
    type: String,
    default: 'Vue Vuetify App',
  },
});

function onAppSettings() {
  app.settings = !app.settings;
}

function changeTheme() {
  app.theme = app.theme === 'dark' ? 'light' : 'dark';
}
</script>

<style scoped></style>
