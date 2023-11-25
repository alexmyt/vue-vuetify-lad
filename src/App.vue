<template>
  <v-app :theme="app.theme">
    <component :is="$route.meta.layout">
      <router-view />
    </component>
  </v-app>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';

const app = useAppStore();
</script>
