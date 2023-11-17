<template>
  <div>
    <WeatherCard :forecast="forecast" />
  </div>
</template>

<script setup lang="ts">
import WeatherCard from '../WeatherCard/WeatherCard.vue';

const forecast = [
  { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: 11 },
  { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: 15 },
  { day: 'Thursday', icon: 'mdi-cloud', temp: 9 },
];
</script>

<style scoped></style>
