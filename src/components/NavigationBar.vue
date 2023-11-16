<template>
  <div>
    <v-app-bar scroll-behavior="elevate">
      <v-app-bar-title>{{ title }}</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-account" variant="flat"></v-btn>
      <v-btn icon="mdi-theme-light-dark" variant="flat" @click="configStore.switchTheme"/>
    </v-app-bar>
  </div>
</template>

<script lang="ts" setup>
import { useConfigStore } from '@/store'

const configStore = useConfigStore()

const title = 'Vue Vuetify App';
</script>

<style scoped></style>
