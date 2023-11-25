<template>
  <v-responsive max-width="300" class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field v-model="login" label="Login" hint="Your email address" :rules="[rules.required]"></v-text-field>
      <v-text-field v-model="password" label="Password" hint="Minimum 8 characters, at least 1 letter and 1 number"
        :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword" :rules="[rules.password]"> </v-text-field>
      <v-btn type=" submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-responsive>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const rules = {
  required: (value: string) => !!value || 'Field is required',
  password: (value: string) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value) || 'Minimum 8 characters, at least 1 letter and 1 number'
}

const login = ref('');
const password = ref('');
const showPassword = ref(false)
</script>

<style scoped></style>