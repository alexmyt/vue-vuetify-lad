<template>
  <v-responsive max-width="300" class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field v-model="login" label="Login"></v-text-field>
      <v-text-field 
        v-model="password"
        label="Password"
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-responsive>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const login = ref('');
const password = ref('');
const showPassword = ref(false)
</script>

<style scoped></style>