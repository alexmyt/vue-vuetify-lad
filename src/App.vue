<template>
  <v-app :theme="configStore.currentTheme">
    <NavigationBar></NavigationBar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app elevation="3"><span class="mr-5">2023 &copy;</span></v-footer>
  </v-app>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue';
import { useConfigStore } from '@/store'

const configStore = useConfigStore()

</script>
