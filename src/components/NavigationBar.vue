<template>
  <div>
    <v-navigation-drawer location="right" v-model="app.settings"></v-navigation-drawer>
    <v-app-bar scroll-behavior="elevate">
      <v-app-bar-title>{{ title }}</v-app-bar-title>
      <v-spacer></v-spacer>
      <nav>
        <v-btn variant="text" to="/" :active="$route.path == '/'">Home</v-btn>
        <v-btn variant="text" to="/about">About</v-btn>
        <v-btn variant="text" append-icon="mdi-chevron-down">
          User
          <v-menu activator="parent" open-on-hover no-click-animation>
            <v-list>
              <v-list-item to="/user/profile">Profile</v-list-item>
              <v-list-item to="/user/login">Login</v-list-item>
              <v-list-item to="/user/register">Register</v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </nav>
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

<style scoped>
nav .router-link {
  text-decoration: none;
  padding: 0 16px;
}
</style>
