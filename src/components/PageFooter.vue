<template>
  <v-footer app elevation="3">
    <div class="text-center w-100">
      <span class="mr-5">{{ copyrightYear }} &copy;</span>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const copyrightYear = computed(() => new Date().getFullYear());
</script>

<style scoped></style>